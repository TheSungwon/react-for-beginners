
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


  ////////////////////////////////  6.4 CleanUp .start
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((e)=>!e);

//   return (
//     <div>
//         {showing? <Hello /> : null}
//         <button onClick={onClick}>{showing? "Hide":"Show"}</button>
//     </div>
//   )
// }

// function Hello(){

//   function bye(){
//     console.log("destroy");
//   }

//   function hi(){
//     console.log("hi");
//     return bye;
//   }

//   useEffect(hi,[]);
//   return <h1>Hello world</h1>;
////////////////////////////////  6.4 CleanUp .end


///////////////////////////////////////todo List .start
// const [toDo, setTodo] = useState("");
// const [toDos, setTodos] = useState([]);

// const onChnage = (e)=> setTodo(e.target.value);
// const onSubmit = (e)=> {
//   e.preventDefault();
  
//   if(toDo === ""){
//     return;
//   }
//   setTodos((getTodos) => [toDo, ...getTodos]);
//   setTodo("");
// }
// console.log(toDos);

//   return (

//     <div>
//       <h1>todos Count ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input type="text" value={toDo} onChange={onChnage} value={toDo}></input>
//         <button>add to do</button>
//       </form>

//       <hr/>
//       <ul>
//         {toDos.map((value, index)=> <li key={index}>{value}</li>)}
//       </ul>

//     </div>
//   )
///////////////////////////////////////todo List .end  

const [loading, setLoading] = useState(true);
const [coin, setCoin] = useState([]);


useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers").then((res)=> res.json())
  .then((json)=> {
    setCoin(json);
    setLoading(false);
  });
}, []);

console.log(coin);

return (
  <div>
    <h1>The Coins !!! ({coin.length})</h1>
    {loading? <strong>loading...</strong>:null}

    <ul>
      {coin.map((coin, index)=>
      <li key={index}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
      )}
    </ul>

    <select>
    
      {coin.map((coin, index)=>
      <option key={index}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
      )}
    
    </select>
  </div>
)

}

export default App;