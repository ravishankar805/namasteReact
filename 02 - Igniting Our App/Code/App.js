/* *
 * HMR - Hot Module reloading
 * File Watcher algorith m - C++
 * MINFY
 * Dev abd Production build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * compression
 * Compatble with older version of browser
 * HTTps on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero config
 */
import React from "react"; // this is core package
import ReactDOM from "react-dom/client"; // this is package you imported

const heading = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1 for parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Namaste React"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2] // children
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
