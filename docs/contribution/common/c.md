# C/C++

In order to start with C/C++, you must first install the appropriate software for your operating system:

- Windows (for NodeJS and in-system builds): Install the
[Build Tools for Visual Studio 22](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022)
and follow the
[Visual Studio and C/C++ support guide](https://learn.microsoft.com/en-us/cpp/build/vscpp-step-0-installation)
- Windows (Linux on Windows): Install the [latest version of MSYS2](https://www.msys2.org/)

  Make sure to run these commands on your first run (in *MSYS2 MINGW64*):

  ```bash
  # Check for package updates
  pacman -Syu  # You might need to run this command twice.  If it asks to close some programs, say yes and rerun.
  # Install some basic GCC tools
  pacman -S mingw-w64-x86_64-gcc pacman mingw-w64-x86_64-make mingw-w64-x86_64-gdb
  ```

- Linux: [C/C++ installation guide](https://www.cyberciti.biz/faq/howto-compile-and-run-c-cplusplus-code-in-linux/)

  It is also recommended to install the following libraries:

  ```bash
  sudo apt install build-essential # Needed to install the g++ compiler command!
  sudo apt install libboost-all-dev # Boost C++ Libraries
  ```

## CMake

CMake is used to enable a uniform building experience across different platforms.
You can download ***CMake binaries/executables*** for your specific platform from the [official CMake website](https://cmake.org/download/).

:::note
If you are a Windows user, make sure to install cmake on Windows itself; not on your virtual machine!
:::

If you are using MSYS2, run the following commands to install CMake:

```bash
# Install "cmake"
pacman -S mingw-w64-x86_64-cmake
# Install "make"
pacman -S make
```

For each platform, the generated build files will be targeted towards different building tools:

- Windows (using VS): The generated files are for a Visual Studio project
- Windows (using MSYS2): The generated files are for the Ninja builder
- ~~Linux: (unsure?)~~

You might need to look up how to initate the building stage specificly for your platform's building tools!
But, in most cases, you can get away with running this command:

```bash
cmake --build . --config Release # Release/Beta
```
