const header1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Namaste React"
);

const header2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Namaste React"
);

const container = React.createElement(
  "container",
  {
    id: "container",
  },
  [header1, header2]
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(container);
