# Setup (technical)

> last update: 23rd April, 2024

All the web clients, the ones hosted on the `ender.ing` domain, use shared code to render content. To make sure a subdomain is fully setup, run the `update-c` command in the server terminal to make sure all needed files have been updated in each subdomain's directory.

In addition to these shared files, each subdomain needs its custom files for the rendering activity to work properly!

## Branding

Each subdomain root directory needs to include a `brand` folder that contains all needed visual elements used within the rendering activity:

```txt
brand
-- launch-logo.svg
-- favicon.ico
-- brand.manifest
```

### `brand.manifest`

The manifest file needs to include the following values:

```json
{
    "name": "<SERVICE_NAME>"
}
```

## Page Content

Each pathname that is supposed to serve content needs to have the following files:

```txt
index.display (content UI elements)
ar.locale (language strings for Arabic)
en.locale (language strings for English)
he.locale (language strings for Hebrew)
```
