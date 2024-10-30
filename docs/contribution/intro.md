---
sidebar_position: 1
---

# Contribution Guidelines

In order to contribute to any project, you may make a pull request to its related repositories. Regardless of the
contributor's status (member or not), a pull request must fulfill the following conditions in order to be accepted:

- Absolute compliance with the project's guidelines (*if applicable*)
- Absolute compliance with the [Content Guide](#content-guide)
- Absolute compliance with the [Style Guides](#style-guides)
- Absolute compliance with [legal requirements](#legal)
- Adherence to the [Contributor Covenant Code of Conduct](./conduct.md)

## Projects

:::info
GitHub projects have a naming scheme that follows these rules:

- If the repository contains the root directory of a subdomain, it's prefixed with the string:
  `"wrr-"`! (*web root repository*)
- If the repository contains extra website(s) build files, it's prefixed with the string:
  `"wre-"`! (*web root extras*)
- Otherwise, the repository will not include a prefix!

:::

Here is a list of all projects, including their status and relevant resources:

### Omniarium

- Status: **In progress**
- Website(s): [omni.ender.ing](https://omni.ender.ing)
- Description: A programming language designed for a specialised transpiler
- GitHub Projects: -
- GitHub Repositories: -
  - [/omni](https://github.com/Ender-ing/omni): Contains all planning files for Omniarium

### Website

- Status: **In progress**
- Website(s): [ender.ing](https://ender.ing), [docs.ender.ing](https://docs.ender.ing),
  [resources.ender.ing](https://resources.ender.ing), [test.ender.ing](https://test.ender.ing),
  [terminal.ender.ing](https://terminal.ender.ing)
- Description: Most of the website's resources are under this project, except for project-specific pages!
- GitHub Projects:
  - [General Web UI](https://github.com/orgs/Ender-ing/projects/2): Tracking web client and UI progress
- GitHub Repositories:
  - [/render-activity](https://github.com/Ender-ing/render-activity): Contains all files and commands used to generate
    final web files (*`BUILD` command and such*)
  - [/wre-docs](https://github.com/Ender-ing/wre-docs): Holds all documentation
    (*development and user documentation*), in addition to [docusaurus](https://docusaurus.io/)
    files!
  - [/wrr-docs](https://github.com/Ender-ing/wrr-docs): Holds all basic root files
    (_**docs** subdomain_)
  - [/wrr-resources](https://github.com/Ender-ing/wrr-resources): Holds shared web resources
    (_**resources** subdomain_)
  - [/wrr-mta-sts](https://github.com/Ender-ing/wrr-mta-sts): Holds files related to the mailing setup
    (_**mta-sts** subdomain_)
  - [/wrr-web-tests](https://github.com/Ender-ing/wrr-web-tests): Holds example/test files related
    to the *render-activity* repository, in addition to helpful utilities!
    (_**test** subdomain_)
  - [/wrr-terminal](https://github.com/Ender-ing/wrr-terminal): Holds resources related to the
    server's (exposed) web terminal, which is used to maintain the website!
    (_**terminal** subdomain_)
  - [/web-host-root](https://github.com/Ender-ing/web-host-root) (**private**): Contains all
    generative web files that have yet to be made public
    (the naming is a bit confusing - using an old name)
  - [/host](https://github.com/Ender-ing/host) (**private**): Used to keep track of web server file updates

### Accounts System

- Status: **Pending**
- Website(s): [account.ender.ing](https://account.ender.ing), [authority.ender.ing](https://authority.ender.ing)
- Description: A PKI-based accounts system meant for use across all projects/services
- GitHub Projects:
  - [Accounts System](https://github.com/orgs/Ender-ing/projects/1): Tracking PKI and accounts system progress
- GitHub Repositories: -

### Links Manager

- Status: **Pending**
- Website(s): [links.ender.ing](https://links.ender.ing)
- Description: A links management system used for link redirects, and external redirect security checks!
- GitHub Projects: -
- GitHub Repositories: -

### Sites Manager

- Status: **Pending**
- Website(s): [sites.ender.ing](https://sites.ender.ing)
- Description: A MOFH sites manager
- GitHub Projects:
  - [Sites Hosting](https://github.com/orgs/Ender-ing/projects/7): Features and progress tracking
- GitHub Repositories: -

<!--
### ?

- Status: **Pending**
- Website(s): [?.ender.ing](https://?.ender.ing)
- Description: -
- GitHub Projects:
  - [Name](?): Purpose
- GitHub Repositories:
  - [/Name](?): Purpose
-->

## Style Guides

A style guide covers a set of instructions as to how to write code, comments, and other unique requirements. These
instructions are meant to make collaboration between a wide range of different developers more uniform and easy.

Each project may use its own set of programming languages. Generally, each used language has its own style guide:

- [Markdown (.md) Style Guide](./code/markdown.md)
- [HTML/CSS Style Guide](./code/web.md)
- [JavaScript/PHP/C++ Style Guide](./code/programming-language.md)
- [Batch/Bash Style Guide](./code/command.md)
- [General Style Guide](./code/general.md) (*if none of the previous guides apply*)

## Content Guide

A content guide defines what is to be considered valid content, depending on the type of said content.

:::danger
You **must** make sure to follow these strict Unicode Character
(*for [*Private Use Area (PUA) characters*](https://en.wikipedia.org/wiki/Private_Use_Areas) - `\uE000` to `\uF8FF`*) limitations in all of the organisation's projects:

- The characters `\uE0DE` (for the **start**) and `\uE1DE` (for the **end**) are used to mark the
start and end of a PUA use!
- All characters within the range `\uE0DE` to `\uE1DE` - *excluding the head and tail* - all
**forbidden** characters! You can never use them!
- All characters within the range `\uE200` to `\uE2FF` are reserved for web-based usage!
  (be it tools that build the raw web files, or the web files themselves)
- All characters within the range `\uE300` to `\uE6FF` are reserved for the *Omniarium transpiler*!
  (These characters are allowed within *Omniarium source files*, but **only if** you do not surround
  them with the special PUA markers used by this organisation!)

**If you wish to use *PUA* characters that are not included within any range in the previous rules,
you must first add a rule to specify the reserved range for the project that belongs to this
organisation!**
:::

### Client Content

All content meant to be served in user-friendly settings (e.g. website UI) falls under the following guidelines:

- Content must be served in English, Arabic, and Hebrew. The contribution will not be accepted until served content is
available in all languages! (*you may ask maintainers to fill in the missing languages for you when you open a pull
request*)
- Content language translations should be done by hand! **You are not allowed to use non-proofread machine-generated
translations!**
- Illustrations and UI design should follow the [Material Design Guidelines](https://m3.material.io/)!

:::note
Documentation is not required to follow language-related content guidelines. It can be written only in English!
:::

### Developer Content

All content meant to be seen only by developers (an API response, commands, etc.) falls under the following guidelines:

- Content must served only in English!

## Legal

It is important to make sure that your contributions are not breaking any existing copyright agreements or licensing!

Contributions - code or assets - that are covered by licensing/copyright should be covered by a license/agreement that
explicitly allows freedom of use, and does not impose any charges/costs.

By default, you retain your rights to self-made contributions. By contributing code or assets, it is assumed that you
are allowing unconditional free use of your contribution, free of charge.

### Code

You may express your wishes or insert any legal text regarding contributed code using comments, according to the
applicable [style guidelines](#style-guides)!

### Assets

You may express your wishes or insert any legal text regarding contributed assets by adding them to a ***LEGAL file***
in the directory that holds your contribution.

The contents of a `LEGAL` file (*just `LEGAL`, in capital letters, without any extension*) should be as follows:

```txt
-RESOURCE-NAME: <item>
-RESOURCE-NAME: <item>
...
-RESOURCE-LEGAL-TEXT
<legal-text>
```

- `<item>`: The file name (including the extension) within the directory. You may use an asterisk (`*`) to cover all
files within the current directory under a license/copyright/note.
- `<legal-text>`: The contents of the license/copyright/note

A clear example:

```txt
-RESOURCE-NAME: image.png
-RESOURCE-LEGAL-TEXT
Copyright (c) 2024 Your Name
This software is licensed under the MIT License


-RESOURCE-NAME: file1.png
-RESOURCE-NAME: file2.png
-RESOURCE-NAME: file3.png
-RESOURCE-LEGAL-TEXT
Copyright (c) 2024 Some Company
This software is licensed under the MIT License
```
