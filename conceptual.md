### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a javascript Library (some people call it a framework) that breaks a user interface into components that can be reused. It would be used when you want to create a user interface that is dynamic and interactive. It is used to create single page applications.

- What is Babel?

Babel is a javascript compiler that allows you to use the latest javascript features in your code. It also allows you to use JSX. It basically translates your code into a version of javascript that is compatible with all browsers.

- What is JSX?

JSX is a syntax extension to javascript that allows you to write html directly in your javascript code.

- How is a Component created in React?

A component is created in React by creating a function (or a class in the past) that returns JSX.

- What are some difference between state and props?

State is data that is local to a component. It is used to keep track of data that changes over time. Props are data that is passed from a parent component to a child component. Props are immutable.

- What does "downward data flow" refer to in React?

Downward data flow refers to the idea that data is passed from parent components to child components. It is not passed from child components to parent components.

- What is a controlled component?

A controlled component is a component that is controlled by React. It is a component that does not have its own internal state. It is controlled by the state of a parent component.

- What is an uncontrolled component?

An uncontrolled component is a component that has its own internal state. It is not controlled by React.

- What is the purpose of the `key` prop when rendering a list of components?

They key prop is used by React to keep track of which items have changed, been added, or been removed from a list. It is used to help React render lists efficiently.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index is a poor choice for a key prop because it does not uniquely identify an item in a list. If an item is added or removed from the list, the index of the other items will change.

- Describe useEffect. What use cases is it used for in React components?

useEffect is a hook that allows you to perform side effects in a functional component. It is used to perform actions that are not directly related to rendering the component. It is used to perform actions such as fetching data from an API, subscribing to a websocket, or setting up a timer. It can be used to perform actions when a component mounts, when a component unmounts, or when a component updates depending on the dependencies passed to it.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

useRef returns a mutable ref object whose .current property is initialized to the passed argument. It can be used to keep track of a value that persists between renders. A change to a ref value does not cause a rerender of a component.

- When would you use a ref? When wouldn't you use one?

You would use a ref when you want to keep track of a value that persists between renders. You would not use a ref when you want to keep track of a value that is local to a component or to manipulate the DOM.

- What is a custom hook in React? When would you want to write one?

A custom hook is a function that uses one or more of the built in hooks. It is used to share logic between components. You would want to write one when you have logic that is used in multiple components.
