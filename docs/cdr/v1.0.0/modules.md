# Modules

## Overview

Modules are like a feature or a plugin. They are a collection of endpoints, models, and other resources that are grouped together. Modules are the primary way to extend the functionality of the CDR.

## Why Modules?

Since Modules are a small block of the Application Containing The View, Business Logic, User Interaction, and Data. They are easy to test and maintain. They are also easy to extend and reuse.

## How To Create a Module?

To create a module Run This Command:

```bash
cdr generate <module-name>
```

or

```bash
cdr g <module-name>
```

You Can also specify on which directory you want to create the module:

```bash
cdr g pat/to/<module-name>
```

## Module Structure

A Module Contains the following files and directories:

```bash
.
├── api
│   └── index.ts
├── controller
│   ├── Root.tsx
│   └── index.ts
├── data
├── index.ts
├── model
├── routes
│   └── Routing.tsx
├── service
│   ├── actions.ts
│   └── index.ts
└── views
    ├── RootView.tsx
    ├── css
    │   └── style.css
    └── index.ts
```

Later we will discuss each file and directory in detail.

## How to Use a Module?

To use a module you have to import the index.ts file where you want to use the module. A `index.ts` of a module typically looks like this:

```ts
export { default as View } from "./views";
export { default as Controller } from "./controller";
export { default as middleware, apiActions } from "./service";

/*

export actions and reducer from data layer which can mutate the store
export { 
  actions as todoActions,
  reducer as todoReducer
} from "./data/todo";

*/

export { default as api } from "./api";
```
