---
title: server-sent-events示例代码
urlname: ocdxxr
date: '2021-05-25 21:44:41 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## server.js

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api", function (req, res, next) {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });

  res.write("retry: 1000\n");

  res.write("data: Test default event name\n\n");
  // default event: message
  res.write("event: init\n");
  res.write("data: this is a init event \n\n");
  res.flushHeaders();

  const timer = setInterval(function () {
    res.write("event: update\n");
    res.write("data: this is a update evnet\n\n");
    res.flushHeaders();
  }, 1000);

  res.connection.on("close", function () {
    console.log("Connection was closed.");
    clearInterval(timer);
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
```

## index.html

```javascript
<!doctype html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    hello world
    <button id="close"> close connection</button>
    <script type="text/javascript">
        const sse = new EventSource('/api')
        sse.addEventListener('init', message => console.log(message.data))
        sse.addEventListener('update', message => console.log(message.data))
        sse.addEventListener('open', e => console.log('sse open'))
        document.getElementById('close').addEventListener('click', () => {
          sse.close()
          console.log('sse close')
        })
    </script>
</body>
</html>
```
