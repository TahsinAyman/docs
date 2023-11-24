# Data

## Overview

The Data Layer contains the `actions` and `reducer` of the redux store. The `actions` are the functions that are called to update the state of the store. The `reducer` is the function that takes the current state and the action that was called and returns the new state. in simple terms the data layer consist of the slice of redux. to create a data go into `data` folder and create a file e.g: `count.ts`. example given below:

```ts
import { createSlice } from "@reduxjs/toolkit";
import Count from "../model/Count";

interface Data {
  list: Count[];
  loading: boolean;
}

const initialState: Data = {
  list: [],
  loading: false,
};

export const { actions, reducer } = createSlice({
  initialState,
  name: "count",
  reducers: {
    rewriteCounts: (state: Data, action: { payload: Count[] }) => {
      state.list = action.payload;
    },
    addCount: (state: Data, action: { payload: Count }) => {
      state.list.push(action.payload);
    },
    deleteCount: (state: Data, action: { payload: number }) => {
      state.list = state.list.filter((count) => count.id !== action.payload);
    },
    updateCount: (state: Data, action: { payload: Count }) => {
      state.list = state.list.map((count) =>
        count.id === action.payload.id ? action.payload : count
      );
    },
    startLoading: (state: Data) => {
      state.loading = true;
    },
    endLoading: (state: Data) => {
      state.loading = false;
    },
  },
});
```

## Exporting Data Layer

To export the data layer go into `module/index.ts` and add the following code:

```ts
export { default as View } from "./views";
export { default as Controller } from "./controller";
export { default as middleware, apiActions } from "./service";

export { actions as countActions, reducer as counteducer } from "./data/count";

export { default as api } from "./api";
```

That way now you can import the data layer from the module folder.

## Registering Reducer into Store

The next step is to register the reducer into the store to use it in the application. To do that go into `src/store.ts` and add the following code:

```ts
import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";
import { Api } from "./api";
import { countReducer } from "./module-path"; // app or count or ...

const configureAppStore = (api: Api) =>
  configureStore({
    reducer: {
      counts: countReducer,
    },
    middleware: middleware.map((m) => m(api)),
  });
export default configureAppStore;
```

## Things to remember

- The data layer is the slice of redux.
- The data layer is the only place where you can update the state of the store.
