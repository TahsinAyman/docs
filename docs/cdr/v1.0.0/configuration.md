# Configuration

Configuraiton in CDR is stored in `src/resources/configs/`. CDR Provides extensive Configurations which are environment based. like Development, Production, Testing, etc.
That way you can have different configurations for different environments. Inside the `configs` there are:

- `application.dev.ts` - Development Environment Configuration
- `application.prod.ts` - Production Environment Configuration
- `application.test.ts` - Testing Environment Configuration
- `application.ts` - This is the file which chooses what confis to pick based on the environment variable `VITE_APP_ENV` by default it is set to `dev` which means it will pick `application.dev.ts` file. You can change it to `prod` or `test` to pick the respective configuration file.
- `application.template.ts` - This is the template file for the configuration. You can add your own configuration here and use it in your application. mainly there is a interface called `Config` where the Data Structure of your configuration is defined. You can add your own properties to it and use it in your application.

## Template

```ts
export default interface Config {
  backend: string;
}
```

This is where you can add your own properties to the configuration. For example:

```ts
export default interface Config {
  backend: string;
  myCustomProperty: string;
}
```

## Main Configuration

The file which will be imported on other place for use is stored in `application.ts`. Which looks like the following:

```ts
import Config from "./application.template";

let env: string = import.meta.env.VITE_APP_ENV as string;

if (!env) env = "dev";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const configFile = await import(`./application.${env}.ts`);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const config: Config = configFile.default as Config;
export default config;
```

here we are importing the configuration file based on the environment variable `VITE_APP_ENV` which is set to `dev` by default. You can change it to `prod` or `test` to pick the respective configuration file.

## Development Configuration

The development configuration file is stored in `application.dev.ts`. Which looks like the following:

```ts
import Config from "./application.template";

const config: Config = {
  backend: "http://localahost:8000",
};

export default config;
```

## Production Configuration

The production configuration file is stored in `application.prod.ts`. Which looks like the following:

```ts
import Config from "./application.template";

const config: Config = {
  backend: import.meta.env.VITE_BACKEND_URL as string,
};
export default config;
```

it is not mandatory to use the `import.meta.env.VITE_BACKEND_URL` you can use any other environment variable or any other value you want.

## Testing Configuration

The testing configuration file is stored in `application.test.ts`. Which looks like the following:

```ts
import Config from "./application.template";

const config: Config = {
  backend: "http://localahost:3000",
};

export default config;
```

## How to use the configuration

You can use the configuration in your application by either creating `.env` file or exporting the environment variable in your terminal.

### Using `.env` file

You can create a `.env` file in the root of your project and add the following:

```env
VITE_APP_ENV=prod
VITE_BACKEND_URL=http://api.example.com
```

or

```env
VITE_APP_ENV=test
```

### Using Terminal

You can export the environment variable in your terminal like the following:

```bash
export VITE_APP_ENV=prod
export VITE_BACKEND_URL=http://api.example.com
```

and then run your application.

## Creating your own configuration

You can create your own configuration file in `src/resources/configs/` and use it. to create one create a file called `application.custom.ts` and add the following:

```ts
import Config from "./application.template";

const config: Config = {
  backend: "http://custom.com",
};
```

and then export environment variable `VITE_APP_ENV=custom` and run your application.
or rewrite your `.env` file like the following:

```env
VITE_APP_ENV=custom
```
