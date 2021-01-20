import React from "react";

function functionClick() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default functionClick;
