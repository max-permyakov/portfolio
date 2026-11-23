# Портфолио — Максим Пермяков

Персональный сайт-визитка full-stack разработчика. Тёмная минималистичная тема, акцент на типографике и коде, без фреймворков и сборщиков.

**Live:** https://max-permyakov.github.io/portfolio/

## Стек

- HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript
- Google Fonts: Inter + JetBrains Mono
- GitHub Pages

## Структура

```
index.html      — разметка и контент
styles.css      — оформление, адаптив, анимации
app.js          — переключение RU/EN, фильтры проектов, reveal-анимации
robots.txt      — правила для поисковых роботов
sitemap.xml     — карта сайта
resurses/       — старые изображения, сайтом больше не используются
```

## Как менять контент

- **Тексты на двух языках** — объекты `ru` и `en` в начале `app.js`. Ключи совпадают с атрибутами `data-i18n` в `index.html`.
- **Проекты** — карточки в секции `#projects`. Категория задаётся в `data-category` (`web`, `ai`, `tools`, `algo`), она же используется фильтрами.
- **Мета-теги и JSON-LD** — в `<head>` и в конце `index.html`.
- **Цвета и типографика** — CSS-переменные в `:root` в `styles.css`.

## Локальный просмотр

Открыть `index.html` в браузере. Для корректной работы шрифтов и всех относительных путей можно запустить простой сервер:

```bash
python -m http.server 8080
```

Затем открыть `http://localhost:8080`.

## Деплой

Сайт рассчитан на GitHub Pages: ветка `main`, корень репозитория. После пуша изменения появляются на https://max-permyakov.github.io/portfolio/ автоматически.
