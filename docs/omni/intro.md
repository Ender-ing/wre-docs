---
sidebar_position: 1
---

# Omniarium

Omniarium - or *Omni* - is an open-source multi-targeted metaprogramming language whose sole purpose is to enable
writing one flexible source-code instance meant to produce ready-for-use high-level code for multiple targets
(be it platforms, frameworks, or any of such)!

:::note
This language is still in its basic initial planning phase! Any and all suggestions could help shape and direct this
language to be a better aid for your needs, do not hesitate to provide any sort of criticism!
:::

The concept this language replys on is the fact that most programming languages share some core functionalities.
The `standard` library will only include the bare minimum functionality that can enable the source code to be compiled
to all the supported target lnaguages. Other than the standard library, there will be a collection of community-created
libraries for specific use cases!

:::tip
You may install the VSCode extension from
[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Endering.omniarium)
for code highlighting, formatting, and code suggestions!
:::

## Grammar

For more info on the current grammar for the language, check the
[ANTLR4 grammar file](https://github.com/Ender-ing/omni/blob/main/plan_1/OmniariumParser.g4)!

:::warning
Naturally, the grammar of the language could change as the language is being revised!
You may contribute to this file as you please!
:::

## Transpiler

Omni will need a transpiler, a *source-to-source translator/compiler*, to convert Omni code into a targeted
programming language.

:::warning
The transpiler is yet to be built. As of now, the transpiler is planned to be built using C++. No actual programming
will be done until the programing language is thoroughly planned out!
:::
