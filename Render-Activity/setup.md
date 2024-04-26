# Setup (technical)

> last update: 27rd April, 2024

All the web clients, the ones hosted on the `ender.ing` domain, use shared code to render content. To make sure a subdomain is fully setup, run the `update-c` command in the server terminal to make sure all needed files have been updated in each subdomain's directory.

In addition to these shared files, each subdomain needs its custom files for the rendering activity to work properly!

## Branding

Each subdomain root directory needs to have its very own folder in the [`/brands/` directory](https://github.com/Ender-ing/render-activity/tree/main/brands). That folder must include a normal SVG logo, a maskable SVG logo, and a `brand.json` file.

```txt
subdomain-brand
-- logo.svg
-- maskable.svg
-- brand.json
```

These files will be used to generate all the needed branding assets on the website!

> You may check the [`TEMPLATE` directory](https://github.com/Ender-ing/render-activity/tree/main/brands/TEMPLATE) for an up-to-date example of a brand generative directory

### `brand.json`

The manifest file needs to include the following values:

```json
{
    "name": {
        "long": "<LONG-NAME>",
        "short": "<SHORT-NAME>"
    }
}
```

## Page Content

Each pathname that is supposed to serve content needs to have the following files:

```txt
pathname
-- index.display (content UI elements)
-- ar.locale (language strings for Arabic)
-- en.locale (language strings for English)
-- he.locale (language strings for Hebrew)
```
