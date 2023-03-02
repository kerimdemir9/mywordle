import {Home} from "./components/Home.js"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [word, setWord] = useState("");
    
  const getWord = async () => {
    const response = await axios.get("https://random-word-api.herokuapp.com/word?length=5");
    const data = response.data;
    setWord(data);
  }

  useEffect(() => {
    getWord();
  }, []);

  const [state, setState] = useState({
    guess1: "",
    guess2: "",
    guess3: "",
    guess4: "",
    guess5: "",
    guess6: "",
    count: 1,
    word: word
  })
  
  return (
    <div>
      <Home state={state} setState={setState} />
    </div>
  );
}

export default App;
