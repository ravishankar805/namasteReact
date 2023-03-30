import React from "react";
import { createElement as ce } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./img/react.svg";
import avatar from "./img/man.png";

//this Heading 1 heading2 heading 3 are  react element using createElement
const heading1 = ce(
  "h1",
  { id: "title1", key: "h1" },

  "heading1 from parcel"
);
const heading2 = ce("h2", { id: "title2", key: "h2" }, "heading2 from parcel");
const heading3 = ce("h3", { id: "title3", key: "h3" }, "heading3 from parcel");
const containerDiv = ce("div", { id: "conatiner", class: "title" }, [
  heading1,
  heading2,
  heading3,
]);
console.log(containerDiv);
//this heading are react element (object) using JSX Expression
const Headings = (
  <div className="title">
    <h1 id="title1" key="h1">
      Heading1 React Element
    </h1>
    <h2 id="title2" key="h2">
      Heading2 React Element
    </h2>
    <h3 id="title3" key="h3">
      Heading3 React Element
    </h3>
  </div>
);
console.log(Headings);

// functional component named Title return JSX
const Title = () => {
  return (
    <div className="title">
      <h1 id="title1" key="h1">
        Heading1 React Element
      </h1>
      <h2 id="title2" key="h2">
        Heading2 React Element
      </h2>
      <h3 id="title3" key="h3">
        Heading3 React Element
      </h3>
    </div>
  );
};

// Composition of component (pass Title component inside another component named NestedHeader)

const HeaderComponent = () => {
  return (
    <div className="header">
      <header>
        <div className="header_content">
          <a href="#">
            <img src={logo} alt="react logo" height={30} />
          </a>
          <nav>
            <form action="">
              {" "}
              <input type="search" placeholder="search" autoFocus />
            </form>
          </nav>
          <a href="#" className="round-image">
            <img src={avatar} alt="avatar" className="avatar" />
          </a>
        </div>
      </header>
    </div>
  );
};

const NestedHeader = () => {
  return (
    <div>
      <HeaderComponent />
      <strong>Composition of components</strong>
      {/* {Title()} */}
      <Title />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeader />);
