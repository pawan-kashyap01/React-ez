import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from "react-dom/client";


// React.createElement  -> This is basically a js object.
const heading =  React.createElement("h1", {id: "heading"}, "This is a heading.")
console.log('heading: ', heading);


// JSX -> jsx is html-like or XML-like syntax (jsx is not writing html in js)
//JSX (transpiled before it reaches to the JS engine for execution) - parcel 
// Transpilation is done by babel
// JSX is converted into React.createElement
const jsxHeading = (<h1 id="heading" className='head'>
    Heading using jsx
    </h1>);
console.log('jsxHeading: ', jsxHeading);

const root = reactDom.createRoot(document.getElementById("root"));

root.render(heading);