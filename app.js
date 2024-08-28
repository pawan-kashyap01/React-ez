const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is a heading by using react."
);

console.log(heading) // Just a javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // Converts the js object into the browser understandable format.
