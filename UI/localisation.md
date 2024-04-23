# Localisation (technical)

> last update: 23st April, 2024

All the web clients, the ones hosted on the `ender.ing` domain, are available in English, Arabic, and Hebrew. The strings for these languages are saved in the directory of the `.display` index file inside JSON files with the extension `.locale`. (`/ar.locale`, `/en.locale`, and `/he.locale`)

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

### Global Language Expressions

You may also access strings from the global `.locale` file (served at `resources` -> `/web/client/global-locale/..`) by adding the `$` prefix to the id of the *language expression*:

```xml
<text-button>{{$string1}}</text-button>
<text-button>{{$my.string2}}</text-button>
```

### Complex Language Expressions

In cases in which you may need to inject text into a language expression, you may make use of expression variables:

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
