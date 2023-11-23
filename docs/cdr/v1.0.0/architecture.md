# Architecture

`CDR` Framework is a set of tools and libraries that allow you to create a component driven application using `Redux` and `React`. `CDR` Follows some Design Principles that are listed below:
- `Single Source of Truth`: The state of your whole application is stored in an object tree within a single `Redux` store.
- `State is Read-Only`: The only way to change the state is to emit an `action`, an object describing what happened.
- `Dependecy Injection`: The only way to get data from `server` or `backend` or `firebase` is to inject it into the `store` using `middleware`.
- `Pure Functions`: To specify how the state tree is transformed by actions, you write pure `reducers`.
- `Single Responsibility`: Each component should have a single responsibility and should be independent of other components.
- `Separation of Concerns`: Separate the `state` from the `view` and `actions` from `reducers`.
- `Component Driven`: Each component should be independent of other components and should be able to be used in other projects.
- `Reusable`: Each component should be reusable and should be able to be used in other projects.
- `Testable`: Each component should be testable and should be able to be tested in other projects.
- `Scalable`: Each component should be scalable and should be able to be scaled in other projects.
- `Maintainable`: Each component should be maintainable and should be able to be maintained in other projects.
- `Extensible`: Each component should be extensible and should be able to be extended in other projects.