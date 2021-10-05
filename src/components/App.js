import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark,setIsDark] = useState(false)
  const [isLight,setIsLight] = useState(true)
  const appClass = false ? "App dark" : "App light"
function handleOnClick(){
  setIsDark((!isDark))
}
  return (
    
    <div className={appClass}>
      <div className="App dark">
{/* for dark mode */}
</div>

<div className="App light">
{/* for light mode */}
</div>
      <header>
        <h2>Shopster</h2>
        <button onClick={}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
