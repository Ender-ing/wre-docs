# Batch/Bash Style Guide Style Guide

> Last update: May 21st, 2024

## Tabs and spacing

The use of the normal tab (*also known as a hard tab*) character (`\t`) is not allowed! You may use **four** whitespace characters instead of tabs to space code!

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

## Data Safety

In order to make accidental data deletion harder, command files should include a safety check for imported variables and environment variables!

For example, the `BUILD` command makes use of the `SAFETY.bat` file to check the used values, and it terminates if the `SAFETY.bat` file fails to load or if the length of any used variable is shorter than 16 characters. In addition, to make import errors harder, all files that make use of the `SAFETY.bat` file are placed on the same level in the files system - meaning they are just one folder above the file:

```batch
:: Exit
goto local_bat_file
:local_bat_error
echo [91m An error occurred white attempting to load environment variables ^(errorlevel: %errorlevel%, errorTrigger: %errorTrigger%^) [0m
exit /B 1
:local_bat_file

:: Get environment variables
FOR /F "tokens=*" %%i in (../.secret.env) do SET %%i
call ../SAFETY.bat || ( set errorTrigger="call" && goto local_bat_error )
if %errorlevel% NEQ 0 ( set errorTrigger="level" && goto local_bat_error )

:: Note that all used batch files in the BUILD command use this exact code!
:: This makes it easier to update the code when changes need to be made.
```
