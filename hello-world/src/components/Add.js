import React, { useEffect, useState } from "react";

const Add = () => {
  const [num, setNum] = useState(0);

useEffect(()=>{
    alert("i am clicked")
})



  return (
    <button
      onClick={() => {
        setNum(num + 1);
      }}
    >
      click me {num}
    </button>
  );
};
export default Add;
