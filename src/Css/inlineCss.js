import React from 'react'



const head={  // make object by the help of these make css
    color:"red",
    fontSize:"200px"
}
const inlineCss = () => {
                    // two way do css

  return (<> <h1 style={{color:"red"}}> inline css ke l;iye </h1>
  {/* //or   here we do inline css by the hlp of object make below*/}


<h1 style={head}>hello tarryun</h1>
</>
   


  )
}

export default inlineCss