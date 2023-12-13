import { useState } from "react"

export const useCounter=(num)=>{
    const [counter,setCounter]=useState(num)
    function addOne(){
        setCounter(count=>count+1);
    }
    function removeOne(){
        setCounter(count=>count-1);
    }
    function double(){
        setCounter(count=>count*2);
    }
    function divide(){
        setCounter(count=>count/2);
    }
     
    return [counter ,addOne,removeOne,double,divide]
}


