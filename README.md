# Инструкция по запуску

Запуск через Docker. Из корневой папки проекта вызвать команду:

```shell
docker-compose up -d --build
```

Приложение запустится на http://localhost:4173/

Storybook запустится на http://localhost:6006

# Примечания

1. Для мобильной верстки используются следующие настройки в CSS:

```css
@media screen and (max-width: 320px) {
    //...
}
```
