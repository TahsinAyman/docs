# Views

## Overview

Views are the primary way to interact with the user. They are the UI of the application. Views are the only place where the UI / UX Code should be written. User Interaction and data is Passed down to view via props. so the view should contain an interfcae called `Props` to define the props that it will receive. that way without the controller the view can be tested.

## Root View

Every Module or App Contains a Root View where the Module Starts. typically the Root View is stored in the module or apps `views` directory. and the file name is `RootView.tsx`. An Example of The Root View Component is shown below:

```tsx
import { useState } from "react";
import "./css/style.css";

interface Props {
  data: {
    count: number;
  };
  events: {
    increment: () => void;
  };
}

export default function Root(props: Props) {
  return (
    <>
      <h1>Component Driven Redux</h1>
      <div className="card">
        <button onClick={props.events.increment}>
          count is {props.data.count}
        </button>

        <p className="mt-10">
          Edit <code>src/app/views/RootView.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
```

here as you can see that the Root View has a `props` interface called `Props` which defines the props that it will receive. and it renders the data and handles the events.

## View Initialization

In Order to Initalize The View to be accessible from other modules or apps. you need to add it to the `views` directorie's `index.ts` file. for example:

```ts
import RootView from "./RootView";
import CustomView from "./CustomView";

export default {
  RootView,
  CustomView,
};
```

## Things to Remember

- Views are the only place where the UI / UX Code should be written.
- Views should not contain any business logic.
- Views should only render the data and handle the events.
- Views should only be used via the `index.ts` file of the module or app.
- Views cannot access the `store` directly.
- Views should only receive data and events via props.
- Views should not contain any state.
- Views should not contain any side effects.
- Views should not contain any logic.
- Views should not contain any business logic.
- Views should not contain any API calls.
