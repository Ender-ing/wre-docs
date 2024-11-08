---
sidebar_position: 7
---

# Subdomain Builds & Versioning

The [`roots.manifest.json` file](https://github.com/Ender-ing/render-activity/blob/main/roots.manifest.json)
is used to keep track of versioning information, and build-time source modification actions!

:::tip
You can always check out the
[`roots.manifest.base.jsonc` file](https://github.com/Ender-ing/render-activity/blob/main/roots.manifest.base.jsonc)
to see an example of the proper structure for the `roots.manifest.json` file!
:::

## Global Values

### `$global_ignore`

The *global ignore list* (`<Array>`) applies to all files and folders in all root directories! It is used to
exclude files and folders from directory hash updates.

Proper name selectors are as follows:

- `*VALUE`: Any file/folder name that ends with `"VALUE"`.
- `VALUE*`: Any file/folder name that starts with `"VALUE"`.
- `*VALUE*`: Any file/folder name that contains `"VALUE"`. (*also applies to `"VALUE"` by itself*)
- `VALUE`: Any file/folder name that matches `"VALUE"`.

### `$secrets` _(in-progress)_

The Git URL of the github repository that contains the secrets (*values not meant to be shown
publicly, like API keys*) that are meant to be added to the final codebase!

:::note
When you actually use the build command, you would actually need to have access to this *secrets*
repository in order to publish the codebase successfully!
:::

:::danger
If you fail to properly set up the values within the *secrets* repository, you will cause all the
online web projects/services to start failing!
:::

### `$default`

For each new folder in the source `ROOTS_PATH` directory, an entry is automatically created when the
folder is processed for the first time! And the value of the `$default` object is duplicated and
used for said folder!

## Subdomain Entry Values

### `hash`

The folder's recursive hash value is used to determine if the content of a subdomain has been
modified! By default, the change of the hash value will trigger a version increase!

:::info
The `hash` value is automatically updated on **every** build!
:::

### `ignore`

The subdomain's *ignore list* (`<Array>`) works exactly the same as the `$global_ignore` value,
except that it only affects the folder of the subdomain itself!

### `version`

This object contains the version information for the subdomain!

:::note
The generated `gen.version.txt` file is not actually respected by the build command! It's only used
to keep track of the final version string value!
:::

#### `major` (*unlimited range*)

- Updated when major/important updated are detected (*command-invoked*)
- Updated on minor-version overflow

#### `minor` (*0-99*)

- Updated when normal/minor updates are detected (*command-invoked*)
- Updated on patch-version overflow

#### `patch` (*0-99*)

- Updated when small patches are made
- Updated if the version increase was triggered automatically (*command-invoked*)

### `auto`

Enable or disable (`<Boolean>`) automatic version increments on source code changes!

### `github` _(in-progress)_

...

### `sourceActions` _(in-progress)_

...
