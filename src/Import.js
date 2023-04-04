import React from "react";
import Fname, { Lname, sum } from "./Export.js";
import  { add,div,mult,sub } from "./Export.js";


const Import = () => {
  return (
    <>
      <h1>{Fname}</h1>
      <h1>{Lname}</h1>
      <h1>{sum()}</h1>
      {/* aargument pass from here  */}
      <p> {add(45,65)}</p>    

      <p> {sub(45,65)}</p>
      <p> {mult(45,65)}</p>
      <p> {div(45,65)}</p>
      <p></p>
      <p></p>
    </>
  );
};

export default Import;
