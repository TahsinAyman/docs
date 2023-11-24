# Installation

## Requirements

- Node.js

## Install

```bash
npm install -g create-cdr-app
```

## Usage

```bash
Usage: cdr [options] [command]

Component Driven Redux Framework

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  new [options] <project-name>  Create a Project
  generate|g <module-name>     Create a Module For The Project
  help [command]                display help for command
```

## Create a Project

```bash
cdr new my-project
```

## Create a Project with TailwindCSS

```bash
cdr new my-project -t tailwindcss
```

## Create a Project with Bootstrap

```bash
cdr new my-project -t bootstrap
```

## Run the Project

```bash
cd my-project
npm install
npm run dev
```
