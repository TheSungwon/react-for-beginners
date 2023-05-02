
import Button from "./Button";

import styles from "./App.module.css"
import { useState, useEffect } from "react";



function App() {
  //////////////////////////////////6.3 Recap ...  [userEffect] ./start
  // const [counter, setCounter] = useState(0);
  // const [keyword, setKeyword] = useState("");

  // const onCounter = ()=> setCounter((e)=> e+1);
  // const onChnage = (e)=> setKeyword(e.target.value);

  // useEffect(()=>{
  //   console.log("call the api once....");
  // }, []);

  // useEffect(()=>{
 
  //       console.log("call keyword !!!");
 
  // },[keyword]);
  // useEffect(()=>{
 
  //       console.log("call counter !!!");
 
  // },[counter]);
  // useEffect(()=>{
 
  //       console.log("call keyword & counter !!!");
 
  // },[keyword, counter]);

  // return (
  //   <div>
  //     <input type="text" placeholder="search here ... " onChange={onChnage} value={keyword}></input>
  //     <h1 className={styles.title}>hello react</h1>
  //     <Button text={"hello"} click={onCounter}/>
      
  //     <h1>{counter}</h1>
  //   </div>
  // );
  ////////////////////////////////6.3 Recap ...  [userEffect] .end

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((e)=>!e);

  return (
    <div>
        {showing? <Hello /> : null}
        <button onClick={onClick}>{showing? "Hide":"Show"}</button>
    </div>
  )
}

function Hello(){

  function bye(){
    console.log("destroy");
  }

  function hi(){
    console.log("hi");
    return bye;
  }

  useEffect(hi,[]);
  return <h1>Hello world</h1>;
}

export default App;