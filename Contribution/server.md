# Contribution (server-wise)

> Note that this documentation is meant to instruct individuals with access to the server terminal and private repositories!

In order to contribute your local changes, you must first use the [`BUILT.bat` command](https://github.com/Ender-ing/render-activity/blob/main/BUILD/BUILD.bat) (on Windows) to build a ready-to-host version of the codebase.

After the output of this command is generated, you should navigate to the output directory, and commit your changes to the [`host` GitHub Repository](https://github.com/Ender-ing/host/).

> If you do not have access to that repository, but still wish to contribute, you may ask the maintainers to accept your contribution in the dedicated public repository related to your contribution, so they may build a new host codebase.

After the commit is accepted, you may use the server terminal to publish the changes.

## Server Terminal

After logging into the [server terminal](https://terminal.ender.ing/@secret/), you may use the most fitting command to publish changes:

![Server Terminal](./images/terminal.png)

### Server-side changes

If the changes within the codebase only relate to server-side code, you may use the `get` command to fetch changes.

### Client-side changes

If the changes within the codebase affect client-side code (JavaScript, CSS, Display files, etc.), you may use the `web` command to fetch changes and purge the global cache.

> If you believe that the client-side changes are not large, or are not important, you may just use the `get` command, without purging the global cache.

## Note

After the accounts system is completed, it is planned to provide staff with the ability to access the terminal and commit to GitHub using one account. For the time being, staff must use GitHub and htpasswd credentials!
