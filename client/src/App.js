import {Home} from "./components/Home.js"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  // const secret = randomWords({min: 5, max:5});
  // console.log("secret: ", secret) 


  const [secretWord, setSecretWord] = useState("");
  const [state, setState] = useState({
    guess1: "",
    submit1: false,
    guess2: "",
    submit2: false,
    guess3: "",
    submit3: false,
    guess4: "",
    submit4: false,
    guess5: "",
    submit5: false,
    guess6: "",
    submit6: false,
    count: 1,
    end: false,
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

    console.log(secretWord)

    const won = (state) => {
      for(let i = 1; i < 7; i++)
      {
        if(state["guess" + i] === state.word && state["submit" + i] === true)
          return true;
      }
      return false;
    }
    

    const handleReset = (e) => {
      e.preventDefault();
      setState({
        guess1: "",
        submit1: false,
        guess2: "",
        submit2: false,
        guess3: "",
        submit3: false,
        guess4: "",
        submit4: false,
        guess5: "",
        submit5: false,
        guess6: "",
        submit6: false,
        count: 1,
        end: false,
        word: ""
      })
      getWord();
    }

  return (
    <div>
      { won(state) ? 
      <div>
        <h1>YOU WON!</h1>
        <button type="button" onClick={(e) => handleReset(e)}> Click to play again </button> 
      </div>
      :
        state.count <=6 ?
        <Home state={state} setState={setState} />
        :
        <h1>Game is over!</h1>
      }
    </div>
  );
}

export default App;
