---
sidebar_position: 2
---

# Page Layout (display files)

Each `.display` file makes use of either an `<x-root>` element or an `<x-layout>` element to contain page content.
You may only use an `<x-layout>` element to contain page content for pages meant for normal user experience, as
the `<x-root>` element is used mainly for testing purposes.

## `<x-layout>` children

The `<x-layout>` element can have any kind of children, as long as they have a `slot`` attribute:

### `slot="group"`

*Group slots*, preferably `<div>` elements, are used to contain page content. (viewed in columns/rows)
Currently, these are the only allowed elements inside a *group slot*:

#### `<x-float>`

Contains content that is not meant to be contained in a visual box.

#### `<x-pane>`

Contains content meant to be placed within a visual box.

### `slot="nav-rail"`

*The navigation rail slot* is meant to mark the navigation element used to navigate on medium and big screens.

### `slot="nav-bar"`

*The navigation bar slot* is meant to mark the navigation element used to navigate on small screens.

:::warning
Both the `nav-bar` slot and the `nav-rail` slot's elements are filled into their proper positions.
Never define your own custom dimensions for said elements.
:::

## `view` attribute

The `view` attribute can be used on multiple element types. Here is a list of current different uses:"

### With `<x-layout>`

You can use the `view` attribute on `<x-layout>` elements to make them collapse their content on medium screens
(when you feel it necessary - *e.g. when the content feels too cramped to you*) as such:

```xml
<x-layout view="collapse">
    ...
</x-layout>
```

### With *group slots*

You can use the `view` attribute on elements assigned as a *group slot* to make their width static, or make them stick
to the top of the page on scroll:

```xml
<div slot="group" view="static">
    <!-- All elements inside this group will have a default static width -->
    <!-- You may use the style attribute to assign a custom width value!  -->
</div>
<div slot="group" view="sticky">
    <!-- This group will stick to the top of the page on scroll! -->
</div>
<div slot="group" view="disappear">
    <!-- This group will disappear when the user's screen is a medium or smaller! -->
</div>
<div slot="group" view="disappear-early">
    <!-- This group will disappear when the user's screen is not very large! -->
</div>
<div slot="group" view="static sticky" style="width: 200px;">
    <!-- You can use all these values at the same time! -->
</div>
```

:::note
The *sticky* group `view` attribute will be ignored if the screen *width* does not allow for a double-pane view.
:::

:::info
If the display is a medium, and `<x-layout>` has the attribute `[view=collapse]`, the screen will be considered a one-pane view!
The actual number of existing groups does not affect the status of a view as a double or single pane view!
:::

### With `<x-pane>`

You can use the `view` attribute to make an `<x-pane>` element take up the full height of the screen:

```xml
<x-pane view="full">
    <!-- Note that the pane element will only take enough space to not ruin the "space area margin",
        but it can also extend past its full hight -->
</x-pane>
```
