---
sidebar_position: 6
---

# Search Engine Optimisation

Each of the hosted pages on the `ender.ing` domain has the following SEO optimisations:

## Content Language

```html
<html lang="<LANG>" ...>
    <head>
        ...
        <meta http-equiv="content-language" content="<LANG>">
    </head>
    ...
</html>
```

## Content Language Discoverability

```html
<head>
    ...
    <link rel="alternate" hreflang="en" href="<URL>#en">
    <link rel="alternate" hreflang="he" href="<URL>#he">
    <link rel="alternate" hreflang="ar" href="<URL>#ar">
    <!-- the alternate link is used to inform crawlers of the existence of a duplicate of
        the current page in other languages -->
</head>
```

## Page Title

Each page has a title in all supported languages. If the page does not have a `_meta` field in its `.locale` files,
the value of the *page title* will default to the value of the `_meta` field in the global `.locale` file!

```json
{
    "_meta": {
        "title": "<TITLE>"
    }
}
```

In addition, the value of the *page title* in the final output will be modified. If it's not the same as the global
value, the global value will be appended to it as follows:

```javascript
`${localTitle} | <SERVICE-TITLE>`
```

Final output:

```html
<head>
    ...
    <meta name="title" content="<TITLE>">
    <!-- or (if the value of <TITLE> doesn't equal the value of the global title) -->
    <meta name="title" content="<TITLE> | <GLOBAL-TITLE">
</head>
```

## Page Description

Each page has a description in all supported languages. If the page does not have a `_meta` field in its `.locale`
files, the value of the *page description* will default to the value of the `_meta` field in the global `.locale` file!

```json
{
    "_meta": {
        "description": "<DESCRIPTION>"
    }
}
```

Final output:

```html
<head>
    ...
    <meta name="description" content="<DESCRIPTION>">
</head>
```
