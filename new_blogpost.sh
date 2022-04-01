#!/bin/bash

# Оригинальный скрипт: https://github.com/doka-guide/content/blob/main/new.sh

read -r -p "$(echo "Название поста: ")" TITLE
read -r -p "$(echo "Описание поста: ")" SUBTITLE
read -r -p "$(echo "Введите название папки (используется для формирования ссылки): ")" FOLDER

git checkout develop
git pull

while [ -d $(echo "app/blog/posts/$FOLDER") -a ! -h $(echo "app/blog/posts/$FOLDER") ]; do
  echo "К сожалению, $FOLDER уже существует..."
  read -r -p "$(echo "Введите другое название папки: ")" FOLDER
done

git branch $(echo "blogpost/$FOLDER")
git checkout $(echo "blogpost/$FOLDER")

mkdir $(echo "app/blog/posts/$FOLDER")
touch $(echo "app/blog/posts/$FOLDER/index.md")
cat <<EOF > $(echo "app/blog/posts/$FOLDER/index.md")
---
header:
  title: "$TITLE"
  subtitle: "$SUBTITLE"
---

## Lorem ipsum
EOF

echo "Новый пост создан и находится в папке: app/blog/posts/$FOLDER"
cat $(echo "app/blog/posts/$FOLDER/index.md")