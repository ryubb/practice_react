## ローカルでの立ち上げ方

yarn start

## Docker を使ったローカルでの立ち上げ方(5000)

docker-compose up -d

## heroku へのデプロイの仕方

git add .
git commit -m "commit 名"
git push heroku master

## eslint 起動の仕方

yarn lint
→ これで、全ファイルの構文チェックを行ってくれます

## prettier 起動の仕方

yarn fmt
→ これで全ファイルのコード整形を行ってくれます
