import React from "react";  // it import react library and gernelly show in index.js componenet  genelly without this it give error that module not found
                                               // RENDER MEANS = DIKAHNA 
                                               // actully index.js me ek ender element hai uske under app.js ki file atty hai render  means deikhana and kha deikhana  doucment .getelemnt by id("root") ki  vaah dikhana jo ki publice file index.html me hai means html docuemnt show kr rahe ahi yeh snbh data ko   to render (app.js ki file me jo likha hai vo just like this file) element ek hi tag html use hota hai  another tag eroor dega
                                               
                                              //  render mthod multiple jsx tag use krne ke liye div tag enclosee kr do yeah React.fragment


import Clock from "./project/Clock";
import Tarun from "./Css/Tarun.js";
import Goodmorning from "./project/Goodmorning";
import Import from "./Import.js";

function App() {

   let name="tarun"  






  return (
    <>
      {/* IT IS TOTALY BASED ON JSX          MEANS PHELE JS AND INSIDE HTML   AND INSIDE CURLY BRACES JS  */}
      {/* 🤔  React js  
                    ans.  reactjs is not framework . react is a javascript library for building user interface

                    it is  also known as react js and react.js so dont get cosnfuesd  if you read differnt notation in diiffernt places

                    it create jorden walk a softwear of facebook 

                    open source the code is aviilabe in public by this we can edit code and acess

                    ❤️ COMPONENET BASED APPROACH
                     REACT KA JO HEART COMPONENT HAI  MEANS KOI BADI UI BANAI HAI TO USKO PIECCES OF CODE  DIVIDE KRTE HAI TAKI UI  DESIGN MUCH EASIER 
               HO JAYE MEANS COMPONENT IS A PICES OF CODE  BY THIS WE CAN BEST UI  BY COMBINING COMPONENT LIKE NAAV BAR, BODY ,FOOTER */
      }
      {/* ============================================================================================================================================================================================= */}
                                      {/* 👿 project ki jitni info vo pavkage .json store krta hai  and dependices hai vo version batabty hai kon konse package install kiye hai use kr rahe ahi imp package.json kabhi delete nahi kran hai SRC FOLDER ALSO TO RECOVER project 

                                      👿projct RECOVER krene ke after delelte main imp hai file  SRC FOLDER AND PUBLIC AND IMP PACKGE .JON BY THIS THREE IMP COMPONENET SE PROJECT RECOVER KR SKTE AHI  AFTER APPLY 
                                      {/* 'NPM I' */}

                                      {/* NODE MODULE
                          FOLDER  MODULE  IS THE REPOSITORY  OF MODULES /LIBRERY WHICH ARE YOU USING INSIDE PROJECT .WHAT EVER YOU ARE IMPORTING  IN YOUR
 project .whatever you are impoting  in your project that module  or library should present insid the node module folder 
 when you do npm install ( NOT RECOVER WALA MEANS NPM I REACT ROUTER DOM  SO JAB BHI APAN  NPM I  PHELE LIKHTE HAI VO DIRECT JO BHI INSATALL KARAYA  USKI PROPERTY NODE MODULE APNE APP CHALY JATI in the foem of  folder  HAI VO ) thet time that module or the library install inside the node module folder and one entry added in package .json ,
                                                       IN OHTER WORD 
  esa kyu nahi likte    react router dom  , esa  kyu likte hai npm i react router dom  esliye npm i  jo  bhi property install ki uski dependices (version)  package .json  me dikhta hai  and properties ,data uska node module  ata hai esliye node module ko delete  and copy  krne me bhut time lagta hai esliye morron  hoga ki nodule ko imp satha hai copy krta hai pura  nodde module recover krne ke liye npm i use krte hai bss packge,json file honi chahiye magur and project krne ketime package.son and src folder share krte hai  
   
                             🆕 TOPIC

 "scripts": {
    "start": "react-scripts start", 

    pakge.json me  ESA MILEGA INSIDE SCRITP  REACT LOGiC (JS PART INSIDE SCRIPT TAG ME MILLEGA AND IMP JABHI JS LIKHNI HAI INSIDE HTML TO APAN CURLY BRACES  ME LIKHTE HAI AND START KRANE ke liye jo  LOGIC PART INSDE SCRIPT WE USE NPM START  (means both packge manager and script ek sath start hote ahi))  */} 

{/* {/* ======================================================================================================================================================================== */}
       

 {/* <h1>hello earth progeme</h1> */}
 
{/* =============================================================================================================================================================
 */}

    {/* <div>  👿  JSX (JAVASCRIPT EXTENETION OR JS XML)</div>
    <h1> index.js ke under app.js hai  file hai render ke under jo bhi data show kerte  html tag ke under vo show krta html document me   example show like <h1>hellio taun kale vo show kerega to jitne bhi kaam hai kiya mene html tag ke under vo show kerga index.js componete ke throufgh</h1></h1> */}
{/* ======================================================================================================================================== */}
 
 {/* react.fragment multiple tag use kiya jatahai or <></> yeh bhi but why wecan not use  div actualyy console source show extra div that not we want that 
 */}

{/* ======================================================================================================================================================== */}
   {/* <h1>curly bracess</h1>
     {/* above name se aya */}
        {/* <h1> {name} curly braces ke under called expresion</h1> 
        <h1> {78+98} curly braces ke under called expresion(means expresion combination operand +operator
        )</h1> 
       <h1>do write statement inside curly braces  like if esle condition it write above same resilt curly braces laate hai</h1>  */}
{/* ======================================================================================================================================================= */}
                   {/* date and time react js project(project folder) */}

       {/* <Clock/> */}


       {/* ==================================================================================== */}

       {/* <h1>css part  make folder of css and file css ki  alag se </h1>
       <Tarun/> */}
    
    {/* //============================================================================================== */}
   {/* //  google font
 //serch */}
   {/* ========================================================================================================================================= */}
   {/* PROJECT bana goodmorning */}
   {/* <Goodmorning/> */}

{/* ============================================================================ */}
 {/* <h1>import and export</h1> */}
 <Import></Import>






</>
  );
}

export default App;
