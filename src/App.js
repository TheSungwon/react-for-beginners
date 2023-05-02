import Button from "./Button";

import styles from "./App.module.css"



function App() {
  return (
    <div>
      <h1 className={styles.title}>hello react</h1>
      <Button text={"hello"} />
    </div>
  );
}

export default App;