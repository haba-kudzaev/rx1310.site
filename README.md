<img title="Логотип проекта" src="https://avatars.githubusercontent.com/u/33829769?v=4" alt="Logo" width="100px" align="right" /> [rx1310.github.io](https://rx1310.github.io)
======
Репозиторий с исходным кодом персонального сайта Асхаба Кудзаева (rx1310).

[![Netlify Status](https://api.netlify.com/api/v1/badges/f17d8dc6-b0b7-4e77-a46d-2e4c4c3b4488/deploy-status)](https://app.netlify.com/sites/rx1310/deploys)

![Последний коммит](https://img.shields.io/github/last-commit/rx1310/rx1310.github.io)
![Количество коммитов в год](https://img.shields.io/github/commit-activity/y/rx1310/rx1310.github.io)
![Количество ЯП](https://img.shields.io/github/languages/count/rx1310/rx1310.github.io?color=fff)
![Топ ЯП](https://img.shields.io/github/languages/top/rx1310/rx1310.github.io?color=C76494)
![Размер репозитория](https://img.shields.io/github/repo-size/rx1310/rx1310.github.io?color=ffb600)
![Размер кода](https://img.shields.io/github/languages/code-size/rx1310/rx1310.github.io)
<!-- [![Количество открытых issue](https://img.shields.io/github/issues-raw/rx1310/rx1310.github.io)
![Количество закрытых issues](https://img.shields.io/github/issues-closed-raw/rx1310/rx1310.github.io?color=354a6d)](https://github.com/rx1310/rx1310.github.io/issues) -->
[![Количество открытых PR](https://img.shields.io/github/issues-pr-raw/rx1310/rx1310.github.io?label=open%20PR%27s)
![Количество закрытых PR](https://img.shields.io/github/issues-pr-closed-raw/rx1310/rx1310.github.io?label=closed%20PR%27s)](https://github.com/rx1310/rx1310.github.io/pulls)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=rx1310.rx1310.github.io)
![Лицензия](https://img.shields.io/github/license/rx1310/rx1310.github.io?label=license)

## 📥 Клонирование репозитория
Для клонирования репозитория необходимо иметь установленный [Git](https://git-scm.com/downloads).

1. Клонирование репозитория выполняется командой в терминале:
	```bash
	git clone https://github.com/rx1310/rx1310.github.io.git
	```

	> Если используется SSH, то:
	> ```bash
	> git clone git@github.com:rx1310/rx1310.github.io.git
	> ```

	> Если используется [GitHub CLI](https://cli.github.com/)
	> ```bash
	> gh repo clone rx1310/rx1310.github.io
	> ```

2. Переходим в основную ветку для разработки ([develop](https://github.com/rx1310/rx1310.github.io/tree/develop))
	```bash
	git checkout develop
	```

3. Готово!

## 📁 О ветках в репозитории
В репо есть три основных ветки:

| Ветка        | Краткое описание |
| ------------ | ---------------- |
| [develop](https://github.com/rx1310/rx1310.github.io/tree/develop)   | используется для разработки |
| [main](https://github.com/rx1310/rx1310.github.io/tree/main)         | ветка для окончательной версии |
| [redirect](https://github.com/rx1310/rx1310.github.io/tree/redirect) | не используется в разработке и предназначен только для [редиректа](https://github.com/rx1310/rx1310.github.io/blob/redirect/index.html) с GH Pages на основной [домен](https://rx1310.site).

## 📦 Сборка проекта
Сборкой проекта занимается генератор статики [Eleventy](https://github.com/11ty). Скрипты для сборки и разработки прописаны в файле [package.json](package.json).

Команды npm прописываются в терминале:
```bash
npm run <команда>
```

Вот список доступных команд для разработки:

| Команда      | Что делает?                         |
| ------------:|:----------------------------------- |
| `start`			 | запускает сервер 11ty и вотчер SASS |
| `build` 		 | запускает сборку 11ty и SASS 			 |
| `11ty:serve` | запускает сервер 11ty (BrowserSync) |
| `11ty:build` | собирает 11ty (шаблоны и тп.)			 |
| `sass:watch` | запускает вотчер SASS							 |
| `sass:build` | собирает SASS в CSS								 |

## 🔧 Инструментарий
В этом пункте расписаны те инструменты, которые используются непосредственно для разработки.

### Среда разработки
Разработка проекта ведется в редакторе кода [Visual Studio Code](https://code.visualstudio.com/), для которого уже прописаны все необходимые для проекта конфиги в папке [.vscode](.vscode/).

```
.vscode/
├── extensions.json     (рекомендуемые расширения для VSCode)
├── other.code-snippets (прочие сниппеты)
├── sass.code-snippets  (сниппеты для SASS)
└── settings.json 	  	(настройки проекта для редактора)
```

По умолчанию в редакторе скрыты некоторые маловажные папки и файлы. Настроить их отображение можно в файле [.vscode/settings.json](.vscode/settings.json):

```json
"files.exclude": {
	"dist/"          : false,
	".github/"       : true,
	"node_modules"   : true,
	".ecrc"          : true,
	".editorconfig"  : true,
	".eleventyignore": true,
	"package-lock.*" : true,
	".gitignore"     : true,
	"LICENSE"        : true
},
```

> Если значение `true` - скрыто, если `false` - не скрыто, что логично.

### NodeJS и npm
Необходимо также иметь установленный [NodeJS](https://nodejs.org/en/download/) на компьютере для полноценной работы Eleventy, SASS и других плагинов.

> Менеджер пакетов npm должен сам установиться вместе с NodeJS.

### Eleventy
> [Eleventy](https://www.11ty.dev/) (11ty) — это статический генератор сайтов, который сейчас набирает популярность. Его используют Google, Khan Academy, Netlify и другие.

Конфиги для 11ty находятся в файле [.11ty.js](.11ty.js).

- основная папка (input): [app/](app/)
- папка, в которую собирается проект (output): [dist/](dist/)
- папка с данными (data): [app/data/](app/data/)

```js
dir: {
	input: 'app',
	output: 'dist',
	includes: 'includes/',
	layouts: 'layouts/',
	data: "data"
},
```

## 📃 Лицензия проекта
Проект [rx1310.github.io](https://github.com/rx1310/rx1310.github.io) распространяется совершенно бесплатно и находится под защитой лицензии [Apache-2.0](LICENSE).

Инструментарий, используемый в разработке, распространяется по указанной автором / компанией / разработчиком лицензии, не зависящей от этого проекта.

```
Apache License, Version 2.0
Copyright 2022 Haba Kudzaev (rx1310) <rx1310@inbox.ru>
```

> Если Вы нашли нарушение чьей-либо лицензии в моем проекте, то просьба написать мне → [Telegram](https://t.me/rx1310), [эл. почта](mailto:rx1310@inbox.ru) или [VK](https://vk.com/rx1310).