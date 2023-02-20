---
home: true
pageClass: custom-page-class
bgImage: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/image/blog-bg/bg3.jpg'
bgImageStyle: {
  height: '100vh'
}
isShowTitleInHome: true
---


<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
    let paperElement = document.querySelector('.home-blog .hero')
    let paperIndex = Math.floor(Math.random() * 10)
    // const paperUrl = `https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/image/blog-bg/bg${paperIndex}.jpg`
    // bgImage: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/image/blog-bg/bg0.jpg'
    // paperElement.style.backgroundImage = `url(${paperUrl}`
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    },

    mountMusic () {
      console.log(123)
      const ap = new APlayer({
        container: document.getElementById('aplayer'),
        mini: false,
        fixed: true,
        autoplay: true,
        theme: '#FADFA3',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 3,
        audio: [
          {
              name: 'name1',
              artist: 'artist1',
              url: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/secret.mp3',
              cover: 'https://cdn.jsdelivr.net/gh/htwm623/htwm-open-sesame@main/static/music/secret.jpg',
              theme: '#ebd0c2'
          },
        ]
      })
      // ap.play()
    }
  }
}
</script>