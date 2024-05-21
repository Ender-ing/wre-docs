# Setup (technical)

> Last update: May 19th, 2024

All the web clients, the ones hosted on the `ender.ing` domain, use shared code to render content. To make sure a subdomain is fully setup, run the `update-c` command in the server terminal to make sure all needed files have been updated in each subdomain's directory.

In addition to these shared files, each subdomain needs its custom files for the rendering activity to work properly!

## Branding and versioning

Each subdomain root directory needs to have its very own folder in the [`ROOTS_PATH` directory](https://github.com/Ender-ing/render-activity/blob/main/BUILD.env). That folder must include a normal SVG logo, a maskable SVG logo, and a `gen.info.json` file.

```txt
subdomain-root
-- gen.logo.svg
-- gen.maskable.svg
-- gen.info.json
```

These files will be used to generate all the needed custom assets for said subdomain on the website!

> You may check the [`TEMPLATE` directory](https://github.com/Ender-ing/render-activity/tree/main/TEMPLATE) for an up-to-date example of a root generative directory

### `gen.info.json`

The manifest file needs to include the following values:

```json
{
    "name": {
        "long": "<LONG-NAME>",
        "short": "<SHORT-NAME>"
    },
    "web": {
        "host": "<HOST-URL>"
        // The host URL that will serve these files!
        // Example: sub.example.com
    }
}
```

In addition to these values, there are optional properties:

```json
{
    "web": {
        "sitemap": {
            "ignore": ["<FOLDER-1>", "<FOLDER-2>"]
            // List of folders to exclude from sitemap
        }
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
