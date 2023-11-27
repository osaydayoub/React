import React from 'react'
const data = ["hello", "world"];
// the output should be: “Hello World” notice the spacing!
const number1 = 5;
const number2 =6;
// The output should be: 5 + 6 = 11
const string = "I love React!"
// The string’s length is <display the length of the string>
function getFirstUpperCase(str){
return str.charAt(0).toUpperCase()+str.slice(1);
}
export default function Hello() {
  return (
    <div>
      <h1>{getFirstUpperCase(data[0])+' '+getFirstUpperCase(data[1])}</h1>
      <h1>{`5 + 6 = `}{5+6}</h1>
      <h1>The string’s length is {string.length}</h1>
    </div>
  )
}