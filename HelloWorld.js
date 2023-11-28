import React from 'react'

function HelloWorld({numberprops, name}){ 

    const greeting = "Hello World";
    const introduction = "My name is sami"
    const link = "http://www.google.com"

    
  
    return (
    <div style={mystyle}>
    <div>{greeting} ! {name}</div>
    <div>{introduction}</div>
    <div>This number is from props, {numberprops}</div>
   <a href={link}>Go to Google</a>
   <div className='call-app-css'>Call App Css class</div>
    </div>
  )
  }
const mystyle = {backgroundColor: 'red', padding: '10px', fontSize: '20px', Color: 'blue'};
export default HelloWorld