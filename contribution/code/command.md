# Batch/Bash Style Guide Style Guide

> Last update: May 21st, 2024

## Tabs and spacing

The use of the normal tab (*also known as a hard tab*) character (`\t`) is not allowed! You may **four** whitespace characters instead of tabs to space code!

Batch:

```batch
	:: This is not allowed! (used \t)
  :: This is not allowed!
    :: This is correct! (used 4 whitespace characters)
```

Bash:

```bash
	# This is not allowed! (used \t)
  # This is not allowed!
    # This is correct! (used 4 whitespace characters)
```

## File start

All files that fall under this guideline should contain a comment that specifies its use within the first few lines:

Batch:

```batch
@echo off
:: This file is used to...
...
```

Bash

```bash
#!/bin/bash
# This file is used to...
...
```
