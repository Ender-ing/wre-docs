# Localisation (technical)

> Last update: May 25th, 2024

All the web clients, the ones hosted on the `ender.ing` domain, are available in English, Arabic, and Hebrew. The strings for these languages are saved in the directory of the `.display` index file inside JSON files with the extension `.locale`. (`/ar.locale`, `/en.locale`, and `/he.locale`)

> Note that `.locale` files are only used to generate files for web hosting, they are not accessible online!

## Language Expressions

Inside the `.display` file, you can use a *language expression* to include strings from these `.locale` files:

```xml
<text-button>{{string1}}</text-button>
<!-- Will show up as "<VALUE1>" -->
<text-button>{{my.string2}}</text-button>
<!-- Will show up as "<VALUE2>" -->
```

```json
{
    "string1": "<VALUE1>",
    "my": {
        "string2": "<VALUE2>"
    }
}
```

> Note that *language expressions* are recursive - meaning you can use a *language expression* inside a *language expression*'s value!
>
> In addition, *language expressions* CANNOT contain whitespace characters!

### Global Language Expressions

You may also access strings from the global `.locale` file (stored in the [global locale folder](https://github.com/Ender-ing/render-activity/tree/main/global/locale)) by adding the `$` prefix to the id of the *language expression*:

```xml
<text-button>{{$string1}}</text-button>
<text-button>{{$my.string2}}</text-button>
```

### Fallback Language Expressions

You may access strings from the global `.locale` file as a fallback to the page's `.locale` file contents by adding the `?` prefix to the id of the *language expression*:

```xml
<text-button>{{?string1}}</text-button>
<text-button>{{?my.string2}}</text-button>
<!-- If these json paths aren't defined in the page's `.locale` file, then the value of these json paths in the global `.locale` file will be provided as a fallback! -->
```

### Complex Language Expressions

In cases in which you may need to inject text into a *language expression*, you may make use of expression variables:

```xml
<text-button>{{mystring}['USERNAME']}</text-button>
<!-- Will show up as "Hello, USERNAME!" -->
<text-button>{{complex.base}[complex.word1, 'USERNAME']}</text-button>
<!-- Will show up as "Hello, USERNAME!" -->
<text-button>{{complex.base}[$word1, 'USERNAME']}</text-button>
<!-- Will show up as "Hello, USERNAME!" -->
<!-- Note that the "global locale" file includes the value "word1" in this example -->
```

```json
{
    "mystring": "Hello, $1!",
    "complex": {
        "base": "$1, $2!",
    }
}
```

### Language Expression Source

Each *language expression* inherits its value according to the path ID definition in the corresponding `.locale` file within the same directory.

You may also specify the value's language within the *language expression* itself:

```xml
<text-button>{{?ar:my.string}}</text-button>
<text-button>{{$en:my.string}}</text-button>
<text-button>{{he:my.string}}</text-button>
<!-- Notice that you can freely specifiy the source language in all expression types! -->
```

## Using Language Expressions outside of `.display` files

Only some files are checked for *language expression* outside of the contents of a `.display` file:

- main `index.php.html` file

> In order to use *language expressions* outside of `.display` files, you need to update the `BUILD` command first!

## Language detection

The source file of a language expression is determined by the value of the `locale` cookie. (`en`, `ar`, or `he`)

The value of the `locale` cookie is either set by the intended UI language selection section, or it is set automatically according to the value of the [`navigator.languages` object](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages)!

> Note that if a root directory with a valid `locale` value is present in the URL, it will be used instead of the `locale` cookie. This is done just to make it possible for search engines to discover pages in different languages!
