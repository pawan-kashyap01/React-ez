const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is a heading by using react."
);

const children = React.createElement("div", {id: "children"}, [heading, heading]);
const parent = React.createElement("div", {id: "parent"}, children);  

// created element -> 

console.log(heading) // Just a javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Converts the js object into the browser understandable format and replace(not append) on the root element.
