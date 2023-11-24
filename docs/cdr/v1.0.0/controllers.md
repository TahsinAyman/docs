# Controllers

Controllers are the glue between the `store` and the `view`. They are responsible for handling user interactions and updating the `store` accordingly. They are also responsible for updating the `view` when the `store` changes. Controllers are the only part of the application that should handle user interactions. and they should not contain any business logic. They should only call the `store` and update the `view`.

## Why Controllers?

Controllers make it easier to test the application. They are the only part of the application that should handle user interactions. and they should not contain any business logic. They should only call the `store` and update the `view`. also when th requirements change, you can easily change the `view` or the `store` without changing the controller.

## Root Controller

Every Module or App Contains a Root Controller where the Module Starts. typically the Root Controller is stored in the module or apps `controller` directory. and the file name is `Root.tsx`. The Root Component has the following:

```tsx
import { useState } from "react";
import RootView from "../views/RootView";

export default function Root() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };
  const data = {
    count,
  };
  const events = {
    increment,
  };

  return <RootView data={data} events={events} />;
}
```

as you can see the Root Controller is just a wrapper around the Root View. and it does contain the state of the application. and it passes the state to the Root View. and it also passes the events to the Root View. the Root View is responsible for rendering the state and handling the events.

## Controller Initialization

In Order to Initalize The Controller to be accessible from other modules or apps. you need to add it to the `controllers` array in the `index.ts` file in the `controller` directory. for example:

```ts
import Root from "./Root";
import MyCustom from "./MyCustom";s

export default {
  Root,
  MyCustom,
};
```

## Things to Remember

- Controllers are the only part of the application that should handle user interactions.
- Controllers should not contain any business logic.
- Controllers should only call the `store` and update the `view`.
- Controllers wont have any view related code.
- Controllers should only be used via the `index.ts` file of the module or app.