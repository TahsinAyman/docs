# Models

The Model is the core of the CDR. It is the representation of the data that is being stored. It is a interface that contains the data structure of the data. The Model is used in `controller`, `views`, `service`, `api`, `data` layers. This is a common practice in the CDR. The Model is stored in the `model` directory of the module or app. Let's create a model called `Count.ts` in the `model` directory.

```ts
export default interface Count {
  value: number;
}
```

Now we can use it in the `controller` and `views` layer.

in `controller`:

```ts
import { useState } from "react";
import RootView from "../views/RootView";
import Count from "../model/Count";

export default function Root() {
  const [count, setCount] = useState<Count>({
    value: 0,
  });

  const data = {
    count,
  };
  const events = {
    increment: () => setCount((prevCount) => ({ value: prevCount.value + 1 })),
  };

  return <RootView data={data} events={events} />;
}
```

in `views`:

```tsx
import Count from "../model/Count";
import "./css/style.css";

interface Props {
  data: {
    count: Count;
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
          count is {props.data.count.value}
        </button>

        <p className="mt-10">
          Edit <code>src/app/views/RootView.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
```

## Things to remember

- The Model is used in `controller`, `views`, `service`, `api`, `data` layers.
- The Model is stored in the `model` directory of the module or app.
- The Model is a interface that contains the data structure of the data.
- The Model is a common practice in the CDR.
