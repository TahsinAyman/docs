# Routes

Routing in CDR is handled very effectively by the `react-router-dom` library. The `react-router-dom` library is a very popular library that is used in many React applications. The `react-router-dom` library is used to handle routing in the CDR. In Routing you have to remember to only render `Controller`. The `Route` is stored in the `routes/Routing.tsx` file of the module or app. an example of routing is given below.

```tsx
import { Route, Routes } from "react-router-dom";
import { Controller as TodoController } from "path-to-the-todo-module";

export default function Routing() {
  return (
    <Routes>
      <Route path="/todo/*" element={<TodoController.Root />} />
    </Routes>
  );
}
```

Here the route specifies to continue the route from `/todo/` and render the `TodoController.Root` component. The `Todo` is another module that is used in the CDR. The `TodoController.Root` is the root component of the `Todo` module.

You can also render your own component in the route. An example of this is given below.

```tsx
import { Route, Routes } from "react-router-dom";
import FetchAllTodos from "../controller/FetchAllTodos";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<FetchAllTodos />} />
    </Routes>
  );
}
```

CDR Routing follows nested route by calling other modules component a route is used in a view of a module or app. An example of this is given below.

```tsx
import HeaderController from "../controller/HeaderController";
import FooterController from "../controller/HeaderController";
import Routing from "../routes/Routing";

export default function HomeView() {
  return (
    <div>
      <HeaderController />
      <Routing />
      <FooterController />
    </div>
  );
}
```

## Things to remember

- The Route is used in `views` layer.
- The Route is stored in the `routes` directory of the module or app.
- The Route is a component that contains the routing of the module or app.
