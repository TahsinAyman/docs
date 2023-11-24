# API

An API is the only way to access other third party source for data or to access the database. The API is stored in the `api` directory of the module or app. The API is a function that returns a promise. Our API Uses the `Interface Segregation Pattern`. the Api is injected in the `service` layer via the `dependency injection` pattern. The API is used in the `service` layer. An example of an API is given below.

## Creating your own api

Let's create an api called `fetchAllCounts.ts` in the `api` directory.

```ts
import Count from "../model/Count";
import application from "src/resources/configs/application";

export default function fetchAllCounts(): Promise<Count[]> {
  return fetch(`https://${application.backend}/counts``)
    .then((response) => response.json())
    .then((json) => json as Count[]);
}
```

## Registering your own api

in the `api` folder there is a file called `index.ts` where the api is registered. Let's register the `fetchAllCounts` api in the `index.ts` file.

```ts
import Count from "../model/Count";
import fetchAllCounts from "./fetchAllCounts";

export interface CountApi {
  fetchAllCounts?: () => Promise<Count[]>;
}

const api: CountApi = {
  fetchAllCounts,
};

export default api;
```

**`Note:`** Here the `fetchAllCounts` function is an optional function because when testing we might not want to pass the `fetchAllCounts` function as a mock instead other one can be done. So, we make the function optional.

Now the api has been registered into your module. to register it to the app and to be able to use it on the `service` layer you have to register it in the `src/api.ts` file.

```ts
import countApi, { CountApi } from "./app/api";

export interface Api {
  count?: CountApi;
}

const api: Api = {
  count: countApi,
};
export default api;
```

now this will be automatically dependency injected into the `service` layer.
