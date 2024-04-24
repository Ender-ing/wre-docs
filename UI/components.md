# Components (technical)

> last update: 21st April, 2024

## Loading components

All the web clients, the ones hosted on the `ender.ing` domain, make use of one library to load *Material Design Web Components*. This library (`material-design-web-solidjs`) only checks what components are used in a `.display` file, and it starts loading files related to the used components.

## Naming

All components in a `.display` file will be treated as *Material Design Web Components* (they basically have the same name as *Material Design Web Components*, only without the `md-` prefix).

All custom components in a `.display` file start with the `x-` prefix.

> You may check the `window.componentsList` list for naming info!

## Augments

Elements can have *augments* that are added to them on injection. Augments are any arguments provided after the second argument in the `window.addComponentToList` function. Currently, the only augments are *class names* - any `<string>` - and *runtime functions* - any `<function>`.

## Defining Components (example)

```javascript
window.addComponentToList("OLD-NAME", "NEW-NAME", "MY-CLASS", MY_FUNCTION);
// This will define a component called "OLD-NAME" in `.display` files,
// and this component will be injected as "NEW-NAME" in the HTML page.
// Additionally, the class name "MY-CLASS" will be added to the injected
// element, and the function saved in the variable "MY_FUNCTION" will
// be run when the element is injected, and its input will be the injected
// element.
```
