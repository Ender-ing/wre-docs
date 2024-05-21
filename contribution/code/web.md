# HTML/CSS Style Guide

> Last update: May 21st, 2024

**((This style guide is incomplete!))**

## Tabs and spacing

The use of the normal tab (*also known as a hard tab*) character (`\t`) is not allowed! You may **four** whitespace characters instead of tabs to space code!

HTML:

```html
<body>
	<text>This is not allowed! (used \t)</text>
  <text>This is not allowed!</text>
    <text>This is correct! (used 4 whitespace characters)</text>
</body>
```

CSS:

```css
body {
	content: "This is not allowed! (used \t)";
  content: "This is not allowed!";
    content: "This is correct! (used 4 whitespace characters)";
}
```

## File start

All files that fall under this guideline should start with a multi-linear comment that specifies its use:

HTML:

```html
<!DOCTYPE html>
<!--
    This file is used to...
-->
...
```

CSS:

```css
/* This file is used to... */
...
```
