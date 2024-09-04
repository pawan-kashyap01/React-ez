import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from "react-dom/client";


// React.createElement  -> This is basically a js object.
const heading =  React.createElement("h1", {id: "heading"}, "This is a heading.")
console.log('heading: ', heading);


// JSX -> jsx is html-like or XML-like syntax (jsx is not writing html in js)
const jsxHeading = <h1 id="heading">Heading using jsx</h1>;
console.log('jsxHeading: ', jsxHeading);

const root = reactDom.createRoot(document.getElementById("root"));

root.render(heading);