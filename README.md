<img title="Логотип проекта" src="https://avatars.githubusercontent.com/u/33829769?v=4" alt="Logo" width="100px" align="right" /> [rx1310.github.io](https://rx1310.github.io)
======
Репозиторий с исходным кодом персонального сайта Асхаба Кудзаева (rx1310).

![Последний коммит](https://img.shields.io/github/last-commit/rx1310/rx1310.github.io)
![Количество коммитов в год](https://img.shields.io/github/commit-activity/y/rx1310/rx1310.github.io)
![Количество ЯП](https://img.shields.io/github/languages/count/rx1310/rx1310.github.io?color=fff)
![Топ ЯП](https://img.shields.io/github/languages/top/rx1310/rx1310.github.io?color=C76494)
![Размер репозитория](https://img.shields.io/github/repo-size/rx1310/rx1310.github.io?color=ffb600)
![Размер кода](https://img.shields.io/github/languages/code-size/rx1310/rx1310.github.io)
[![Количество открытых issue](https://img.shields.io/github/issues-raw/rx1310/rx1310.github.io)
![Количество закрытых issues](https://img.shields.io/github/issues-closed-raw/rx1310/rx1310.github.io?color=354a6d)](https://github.com/rx1310/rx1310.github.io/issues)
[![Количество открытых PR](https://img.shields.io/github/issues-pr-raw/rx1310/rx1310.github.io?label=open%20PR%27s)
![Количество закрытых PR](https://img.shields.io/github/issues-pr-closed-raw/rx1310/rx1310.github.io?label=closed%20PR%27s)](https://github.com/rx1310/rx1310.github.io/pulls)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=rx1310.rx1310.github.io)
![Лицензия](https://img.shields.io/github/license/rx1310/rx1310.github.io?label=license)

## 📦 Сборка
> Для начала необходимо установить все зависимости командой `npm install` (иногда может потребоваться выполнить команду с `sudo`)!

Для генерации статики используется [11ty](https://github.com/11ty), а команды для генерации файлов в нужную папку _dist/_ с конфигом уже прописаны в [package.json](package.json).

```shell
npm run <команда>
```

Команда          | Описание
---------------: | :-----------------------------------------------------
`build`          | сборка файлов 11ty и sass
`11ty:build`     | сборка статики на 11ty
`11ty:serve`     | запуск сервера 11ty
`sass:compile`   | компиляция (сборка) стилей sass в _dist/css/_
`sass:watch`     | запуск вотчера sass (файлы компилятся в в _dist/css/_)