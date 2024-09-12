import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from "react-dom/client";





// JSX -> jsx is html-like or XML-like syntax (jsx is not writing html in js)
//JSX (transpiled before it reaches to the JS engine for execution) - parcel 
// Transpilation is done by babel
// JSX is converted into React.createElement
const jsxHeading = (<h1 id="heading" className='head'>
    Heading using jsx
    </h1>);

const DescriptionComponent = ()=>{
    return <p>This is Description</p>
}

const HeadingComponent = () =>{
    return <div id="container">
        <h1>Heading</h1>
        {jsxHeading}
        {/* This is component composition having a component inside another component. */}
        <DescriptionComponent/>
    </div>
}

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);