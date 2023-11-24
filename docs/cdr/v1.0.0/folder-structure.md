# Folder Structure

The folder structure of the CDR is as follows:

```bash
<project-name>
├── README.md
├── index.html
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── api.ts
│   ├── app
│   │   ├── api
│   │   │   └── index.ts
│   │   ├── controller
│   │   │   ├── Root.tsx
│   │   │   └── index.ts
│   │   ├── data
│   │   ├── index.ts
│   │   ├── model
│   │   ├── routes
│   │   │   └── Routing.tsx
│   │   ├── service
│   │   │   ├── actions.ts
│   │   │   └── index.ts
│   │   └── views
│   │       ├── RootView.tsx
│   │       ├── css
│   │       │   └── style.css
│   │       └── index.ts
│   ├── main.tsx
│   ├── middleware.ts
│   ├── resources
│   │   ├── assets
│   │   ├── configs
│   │   │   ├── application.dev.ts
│   │   │   ├── application.prod.ts
│   │   │   ├── application.template.ts
│   │   │   ├── application.test.ts
│   │   │   └── application.ts
│   │   └── css
│   │       └── index.css
│   ├── store.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

16 directories, 28 files
```

## Project Root

The project root contains the following files:

- `README.md`: The project's README file.
- `index.html`: The project's HTML entry point.
- `package.json`: The project's package.json file.
- `public`: The project's public folder.
- `src`: The project's source folder.
- `tsconfig.json`: The project's TypeScript configuration file.
- `tsconfig.node.json`: The project's TypeScript configuration file for Node.js.
- `vite.config.ts`: The project's Vite configuration file.

## Public Folder

The public folder contains the following files:

- `vite.svg`: The project's Vite logo.

## Source Folder

The source folder contains the following files:

- `api.ts`: This file contains the `Api` or Server or Firebase which is injected into the `store` to the middleware.
- `store.ts`: This file contains the `redux store`.
- `middleware.ts`: This file contains the `middleware` which is injected into the `store`.
- `main.tsx`: This file contains the `main` function which is the entry point of the application.
- `resources`: This folder contains the `resources` of the application.
- `app`: This folder contains the `app` of the application.

## Resources Folder

The resources folder contains the following files:

- `assets`: This folder contains the `assets` of the application.
- `configs`: This folder contains the `configs` of the application.
- `css`: This folder contains the `css` of the application.

## App Folder

The app folder contains the following files:

- `api`: This folder contains the `api` for the app or the module.
- `controller`: This folder contains the `controller` for the app or the module. A Controller is a React Component that is responsible for getting data from the store and passing it to the View.
- `views`: This folder contains the `views` for the app or the module. A View is a React Component that is responsible for rendering the UI.
- `model`: This folder contains the `model` for the app or the module. A Model is a TypeScript interface that is responsible for validating the Data Structure.
- `service`: This folder contains the `service` for the app or the module. A Service is The Middleware that is responsible for getting data from the API and exposing a `Data (Action)` to the Controller.
- `routes`: This folder contains the `routes` for the app or the module. A Route is a React Component that is responsible for rendering the UI based on route. The Route is rendered any where in the View.
- `data`: This folder contains the `data` for the app or the module. A Data is a Redux Slice that is responsible for storing the data in the store.
