# Launch Activity (technical)

> Last update: April 29th, 2024

All the web clients, the ones hosted on the `ender.ing` domain, make use of one universal *launch activity*. The *launch activity* is meant to hide the page content while initial display files (like fonts, colour schemes, etc.) are being loaded on the first load of the page (and on reloads). The goal of the *launch activity* is to hide layout shifts and make the web clients more appealing.

## Visual Aspects

The *launch activity* consists of a few elements:

### Launch Logo

The logo of the service being used

### Loading bar

A loading bar that is meant to indicate an undetermined loading process.

## How it works

### Resource Tracking

The *launch activity* waits for resources to trigger the `document.documentElement.resourceLoaded` function. This function is meant to inform the *loading activity* that a resource (JavaScript or a StyleSheet) has been loaded successfully. When the number of loaded resources reaches or exceeds the value of `document.documentElement.initialResourceCount`, the `display` value of the content (`#content-activity`) will be set to `null`, the *launch activity*'s (`#launch-activity`) display value will be set to `none`, meaning it will be only hidden, and the content will be rendered in.

### Font tracking

The *launch activity* has three `h1` elements with the same colour value as the background colour of the *launch activity*. These three elements are added in order for the `document.fonts.ready` web event to be triggered when the used fonts (*Display Noto Sans*, *Noto Sans*, and *Material Symbols Rounded*) are fully loaded, since the `document.fonts.ready` web event only checks the status of visible text.

### Content tracking

The *launch activity* does not track the status of unique page content, it only tracks the bare minimum of resources needed for the page to function without the content.
