import {Home} from "./components/Home.js"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [secretWord, setSecretWord] = useState("");
  const [state, setState] = useState({
    guess1: "",
    guess2: "",
    guess3: "",
    guess4: "",
    guess5: "",
    guess6: "",
    count: 1,
    word: ""
  })
    
  const getWord = async () => {
    const response = await axios.get("https://random-word-api.herokuapp.com/word?length=5");
    const data = (response.data)[0];
    setSecretWord(data.toUpperCase());
  }

  useEffect(() => {
    getWord();
  }, []);

  useEffect(() => {
     setState({...state, "word": secretWord});
  }, [secretWord])

 console.log(state.word)


  return (
    <div>
      {state.count <=6 ?
        <Home state={state} setState={setState} />
        :
        <h1>Game is over!</h1>
      }
    </div>
  );
}

export default App;
