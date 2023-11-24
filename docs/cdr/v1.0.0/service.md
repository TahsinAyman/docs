# Service

## Overview

Service layer consist of two main components:

- `Service (Action)`: This is a `redux` action but this does not update the state of the store. This is used to trigger the `Service (Middleware)`.
- `Service (Middleware)`: This is a `redux` middleware which is responsible to call the `api` which is dependecy injected at the start of the application.

## Creating Service (Action)

First of all we need to create `Service (Action)` to make a endpoint for trigerring the `Service (Middleware)`. To create a `Service (Action)` go into `service` folder and open the `actions.ts`. An example of this is given below:

```ts
import { createAction } from "@reduxjs/toolkit";

const makeActions =
  (prfix: string) =>
  <T>(type: string) =>
    createAction<T>(`${prfix}/${type}`);

const creator = makeActions("api-count");
export const fetchAllCountApi = creator<void>("fetchAll");
```

## Creating Service (Middleware)

Now we need to create a `Service (Middleware)`. so, let's create names `fetchAllCount.ts` in the `service` folder. An example of this is given below:

```ts
import { Middleware } from "redux";
import { fetchAllCountApi } from "./actions";
import Count from "../model/Count";
import { actions } from "../data/count";

const fetchAllCount: ((api: Api) => Middleware)[] =>
  (api) =>
  (store) =>
  (next) =>
  async (action) => {
    if (action.type !== fetchAllCountApi.type) return next(action);
    const list: Count[] = await api.count!.fetchAllCounts!();
    store.dispatch(actions.rewriteCounts(list));
    return next(action);
  };

export default fetchAllCount;

```

Now we need to create `Service (Middleware)` to make a endpoint for trigerring the `api`. To create a `Service (Middleware)` go into `service` folder and open the `index.ts`. An example of this is given below:

```ts
import { Middleware } from "redux";

import fetchAllCount from "./fetchAllCount";
import { Api } from "src/api";

const middleware: ((api: Api) => Middleware)[] = [fetchAllCount];

export default middleware;
export * as apiActions from "./actions";
```

## Registering Service (Middleware)

Now we need to register the `Service (Middleware)` to the `src/middleware.ts` file. An example of this is given below:

```ts
import { Middleware } from "redux";
import { Api } from "./api";
import { middleware as countMiddleware } from "module-path";

const middleware: ((api: Api) => Middleware)[] = [...countMiddleware];

export default middleware;
```

## Using Service (Action)

Now the service action should be called in `controller` to trigger the `Service (Middleware)`. An example of this is given below:

```ts
import { apiActions } from "../service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { State } from "src/main";

export default function ListOfCount() {
  const dispatch = useDispatch();
  const counts = useSelector((state: State) => state.counts.list);

  useEffect(() => {
    dispatch(apiActions.fetchAllCountApi());
  }, [dispatch]);

  const data = {
    counts,
  };

  return <ListOfCountView data={data} />;
}
```

on the `ListOfCountView.tsx` we can use the `props.data` to get the list of count and render it to the user.

```tsx
interface Props {
  data: {
    counts: Count[];
  };
}

export default function ListOfCountView(props: Props) {
  const { counts } = props.data;

  return <div>{JSON.stringify(counts)}</div>;
}
```
