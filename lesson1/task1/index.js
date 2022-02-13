const rootElement = document.querySelector("#root");

const greatingElem = React.createElement(
  "div",
  {
    className: "greeting",
  },
  "Hello, React"
);

ReactDOM.render(greatingElem, rootElement);
