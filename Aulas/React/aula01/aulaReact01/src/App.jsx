import React from "react";
import Present from "./componets/Present";
import List from "./componets/List";
import "./css/styles.css";


function App() {
  const msg = React.createElement("h1", null, "Hello World!");
  const dev = [1, 2, 3, 4, 5];

  
  return (
    <div>
      {msg}
      <List listContent={dev} />    
      <Present title={"Apresentação"} content={"Lorem"}/>
    </div>
  );
}

export default App;
