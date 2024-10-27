---
sidebar_position: 4
---

# Components

## Loading components

All the web clients, the ones hosted on the `ender.ing` domain, make use of the same two
*Material Design Web Components* import files. One, `quick.js`, loads first-print components, and the other,
`general.js`, loads the rest of the components.

:::tip
You may consult with the [`render-activity-1` test page](https://test.ender.ing/render-activity-1/) to see the
supported Material elements in action!
:::

## Naming

All components in a `.display` file will be treated as *Material Design Web Components* (they basically have the same
name as *Material Design Web Components*, only without the `md-` prefix).

All custom components in a `.display` file start with the `x-` prefix.

:::tip
You may check the `window.componentsList` list for naming info!
:::

## Augments

Elements can have *augments* that are added to them on injection. Augments are any arguments provided after the second
argument in the `window.addComponentToList` function. Currently, the only augments are *class names* - any `<string>` -
and *runtime functions* - any `<function>`.

### Augments outside of `.display` files

In order to use *augments* on elements used outside of `.display` files, you may use the `augmentInject` function!

```javascript
// You may inport the "augmentInject" function from the "/src/requests/process.jsx" file
augmentInject(ELEMENT, "DISPLAY-TAG");
// "DISPLAY-TAG" would be the tag that would have been used to describe the element inside .display files
```

## Defining Components

You must make use of the `window.addComponentToList` function in order to enable the use of an element with a
custom name within `.display` files:

```javascript
window.addComponentToList("OLD-NAME", "NEW-NAME", "MY-CLASS", MY_FUNCTION);
```

The code above will define a component called `OLD-NAME` in `.display` files, and this component will be injected
as `NEW-NAME` (*tag name*) in the HTML page.
Additionally, the class name `MY-CLASS` will be added to the injected element, and the function saved in the
variable `MY_FUNCTION` will be executed when the element is injected, and its input will be the injected element.

A proper example of the function added to components would be as follows:

```javascript
function MY_FUNCTION (element) {
    element; // You can do whatever you want with the injected element!
};
```

## Available Custom Components

Custom components - *components with the `x-` prefix* - are used to supplement the missing elements that you may
need to use, or to represent frequently-used element patterns.

### `<x-layout>` and its relative components

You may refer to the [Page Layout Documentation](./page-layout.md) for more info!

### `<x-effect>` (***work in progress***, ***not used***, ***broken***)

:::danger
Do NOT use this element! It's broken!
:::

This element is used to contain Material effects within your element's boundaries:

```md
<x-effect list="focus elevation ripple" style="--md-elevation-level: 3;">
    <ELEMENT slot="child" />
</x-effect>
```

The element you wish to apply the effects to must be marked with the `[slot="child"]` attribute!

:::info
The `<x-effect>` element's default CSS display value is `block`!
:::

:::caution
Changing the `<x-effect>` element's CSS *display* value could result in your effects being incorrectly
displayed, or them being leaked outside of the original child's boundaries!
:::

You can specify the needed effects within the `list` attribute:

#### `focus`

Enables the Material focus border effect!

:::note
A `tabindex` attribute value of `0` is automatically added in the absence of the `tabindex` attribute!
:::

#### `elevation`

Enables the Material border elevation effect!

:::note
You must specify the `--md-elevation-level` CSS property when working with this effect!
(must be applied to the `<x-effect>` element, not its child!)
:::

#### `ripple`

Enables the Material ripple effect!
