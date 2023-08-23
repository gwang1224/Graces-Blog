---
layout: post
title: Linux Shell and Bash
description:
---


| Linux Command | What it does |
|--|--|
| `ls` | Lists the files and directories in the current directory.|
| `cd`| Changes the current directory to the specified location.|
| `mkdir`| Creates a new directory with the specified name.|
| `cp`| Copies files or directories from one location to another.|
| `mv`| Moves (or renames) files or directories to a different location.|
| `rm`| Removes (deletes) files or directories. Use with caution.|
| `grep`| Searches for a specific text pattern in files or output.|
| `chmod`| Changes the permissions of files or directories, controlling who can read, write, or execute them.  |
| `chown`| Changes the ownership of files or directories to a different user or group.|
| `ps`| Displays information about running processes.|
| `top`| Displays a dynamic view of system processes, including CPU and memory usage.|
| `df`| Shows disk space usage for file systems.|
| `man`| Displays the manual or help page for a specified command.|
| `ssh`| Establishes a secure shell connection to a remote server.|
| `wget`| Downloads files from the internet using various protocols.|
| `tar`| Used to create, view, and extract files from tar archives.|
| `touch` | Used to create new empty files or update the access and modification timestamps of existing files. |

```bash

#creates new file
touch checktools.sh

#changes permissions, adds executable
chmod +x checktools.sh

#edits checktools files
nano checktools.sh 

#runs tool check
./checktools.sh

```

checking for tools:
1. homebrew
2. python
3. ruby
4. github
5. jupyter notebook
6. vscode
7. docker

```bash
echo "Checking installed tools:"

# Check for Homebrew
if command -v brew &>/dev/null; then
    echo "Homebrew is installed."
else
    echo "Homebrew is not installed."
fi

# Check for Python
if command -v python3 &>/dev/null; then
    echo "Python is installed."
else
    echo "Python is not installed."
fi

# Check for Ruby
if command -v ruby &>/dev/null; then
    echo "Ruby is installed."
else
    echo "Ruby is not installed."
fi

# Check for GitHub CLI
if command -v gh &>/dev/null; then
    echo "GitHub CLI is installed."
else
    echo "GitHub CLI is not installed."
fi

# Check for Jupyter Notebook
if command -v jupyter &>/dev/null; then
    echo "Jupyter Notebook is installed."
else
    echo "Jupyter Notebook is not installed."
fi

# Check for Visual Studio Code
if command -v code &>/dev/null; then
    echo "Visual Studio Code is installed."
else
    echo "Visual Studio Code is not installed."
fi

# Check for Docker
if command -v docker &>/dev/null; then
    echo "Docker is installed."
else
    echo "Docker is not installed."
fi

```