import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Hello to this new world</h1>;

const HeadingTitle = () => {
  return (
    <>
      <Title />
      <h1>Vidhi Here</h1>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingTitle />);
