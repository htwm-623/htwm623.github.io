# 进入生成的文件夹
cd build/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
time=$(date "+%Y-%m-%d %H:%M:%S")

echo $time

git init
git add -A
git commit -m "commit at $time"

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:htwm623/htwm623.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -