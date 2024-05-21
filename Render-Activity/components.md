# Components (technical)

> Last update: April 29th, 2024

## Loading components

All the web clients, the ones hosted on the `ender.ing` domain, make use of the same two *Material Design Web Components* import files. One, `quick.js`, loads first-print components, and the other, `general.js`, loads the rest of the components.

## Naming

All components in a `.display` file will be treated as *Material Design Web Components* (they basically have the same name as *Material Design Web Components*, only without the `md-` prefix).

All custom components in a `.display` file start with the `x-` prefix.

> You may check the `window.componentsList` list for naming info!

## Augments

Elements can have *augments* that are added to them on injection. Augments are any arguments provided after the second argument in the `window.addComponentToList` function. Currently, the only augments are *class names* - any `<string>` - and *runtime functions* - any `<function>`.

### Augments outside of `.display` files

In order to use *augments* on elements used outside of `.display` files, you may use the `augmentInject` function!

```javascript
// You may inport the "augmentInject" function from the "/src/requests/process.jsx" file
augmentInject(ELEMENT, "DISPLAY-TAG");
// "DISPLAY-TAG" would be the tag that would have been used to describe the element inside .display files
```

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
