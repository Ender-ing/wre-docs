# Components (technical)

> last update: 21st April, 2024

## Loading components

All the web clients, the ones hosted on the `ender.ing` domain, make use of one library to load *Material Design Web Components*. This library (`material-design-web-solidjs`) only checks what components are used in a `.display` file, and it starts loading files related to the used components.

## Naming

All components in a `.display` file will be treated as *Material Design Web Components* (they basically have the same name as *Material Design Web Components*, only without the `md-` prefix).

All custom components in a `.display` file start with the `x-` prefix.
