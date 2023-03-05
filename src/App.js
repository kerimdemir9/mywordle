import { Home } from "./components/Home.js"
import { useState, useEffect } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert"


function App() {

  // const secret = randomWords({min: 5, max:5});
  // console.log("secret: ", secret) 


  const [alert, setAlert] = useState(true)

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
    setState({ ...state, "word": secretWord });
  }, [secretWord])


  const won = (state) => {
    for (let i = 1; i < 7; i++) {
      if (state["guess" + i] === state.word && state["submit" + i] === true)
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


  const Finish = () => {

    return (
      <div style={{ textAlign: "center", marginTop: "15rem" }}>
        <h1>YOU WON!</h1>
        <button type="button" onClick={(e) => handleReset(e)} style={{ background: "pink" }}> Click to play again </button>
      </div>
    )
  }

  return (
    <div>
      {won(state) ?
        <Finish />
        :
        state.count <= 6 ?
        <>
        {alert ? 
        <>
        <Alert severity="info"  onClose={() => {setAlert(false)}}>You are trying to guess a word with 5 letters and have 6 chances to find the correct word. Green backgorund means letter is in correct place, yellow means the word contains the letter but in a different place and gray means its not in the word. Good Luck :)</Alert>
        <Home state={state} setState={setState} />
        </>
        :
        <Home state={state} setState={setState} />
        }
        </>
          :
          <div style={{ textAlign: "center", marginTop: "15rem" }}>
          <h1>Game is over!</h1>
          <h2> Secret word was {secretWord}</h2>
          <button type="button" onClick={(e) => handleReset(e)} style={{ background: "pink" }}> Click to play again </button>
          </div>
      }
    </div>
  );
}

export default App;
