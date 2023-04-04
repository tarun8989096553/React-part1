import React from "react";

const Clock = () => {
  let currentTime = new Date().toLocaleTimeString();
  let currentDate = new Date().toLocaleDateString();
  
let im="https://img.freepik.com/free-vector/wall-office-clock-with-black-red-hands-white-dial_1284-8992.jpg?size=626&ext=jpg"
  return (
    <>
      <h1>{currentTime}</h1>
      <h1>{currentDate}</h1>
      <button id="fun"> click</button>

      <img src="https://img.freepik.com/free-vector/wall-office-clock-with-black-red-hands-white-dial_1284-8992.jpg?size=626&ext=jpg" alt="" />

        <h1> 😄  another way to show</h1>

      <img src={im} alt="" />
       <h1>img me link krna add jese phele </h1>

       <a href="https://blog.hubspot.com/marketing/google-logo-history"><img src={im} alt="" /></a>

      
      
    </>
  );
};

export default Clock;
