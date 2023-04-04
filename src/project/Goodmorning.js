import React from 'react';
import './Jk.css';

const Goodmorning = () => {
  let we_say = '';

  // 👿two way to give css first way is it is static css way doesnot change with time and second is dynamic css for that make empty object

//   const  tarun={
//     color:red,
//     textTransform:'capitalize',

//   }
//   or


  const tarun={}// emapty object taki staemne tke hisba se color chaange ho
 // let currtime = parseInt(new Date(2023,5,4,1).toLocaleTimeString());  // force fully time dena
  let currtime = parseInt(new Date().toLocaleTimeString());
  console.log(currtime)

  if (currtime > 6 && currtime <= 11) {
    tarun.color="green"           // here tiem ke accoding color cchange
    we_say = "good morning";
  }
  else if (currtime >= 12 && currtime <= 18) {
    we_say = "good evening";
    tarun.color="orange"
  }
  else {
    tarun.color="yellow"
    we_say = "good night";
  }

  return (
    <>
      <h1 style={tarun}>{we_say}</h1>
    </>
  );
};

export default Goodmorning;
