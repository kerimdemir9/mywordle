import { RandomWord } from "./index"
import {useState, useEffect} from "react"


const Row = (props) => {
    const [state, setState] = useState(props);
    
    useEffect(() => {
      setState(props);
    }, [props])
    
    const [letter1, setLetter1] = useState("");
    const [letter2, setLetter2] = useState("");
    const [letter3, setLetter3] = useState("");
    const [letter4, setLetter4] = useState("");
    const [letter5, setLetter5] = useState("");

    const handleChange = (e,id) => {
        const newGuess = guess + e.target.value;
        // setGuess(newGuess);
        if(id===1)
            setLetter1(e.target.value.toUpperCase());
        else if(id===2)
            setLetter2(e.target.value.toUpperCase());
        else if(id===3)
            setLetter3(e.target.value.toUpperCase());
        else if(id===4)
            setLetter4(e.target.value.toUpperCase());
        else if(id===5)
            setLetter5(e.target.value.toUpperCase());

    }

    const handleSubmit = () => {

    }

    
    return (
        <div>
            <input id="1" name="guess" value={letter1} onChange={(e)=> handleChange(e,1)} maxLength={1} className="letter-block"/>
            <input id="2" name="guess" value={letter2} onChange={(e)=> handleChange(e,2)} maxLength={1} className="letter-block"/>
            <input id="3" name="guess" value={letter3} onChange={(e)=> handleChange(e,3)} maxLength={1} className="letter-block"/>
            <input id="4" name="guess" value={letter4} onChange={(e)=> handleChange(e,4)} maxLength={1} className="letter-block"/>
            <input id="5" name="guess" value={letter5} onChange={(e)=> handleChange(e,5)} maxLength={1} className="letter-block"/>
        </div>
    )
}

const HiddenInput = (guess) => {
    const [newGuess, setNewGuess] = useState(guess);

    const handleChange = (e) => {
        setNewGuess(e.target.value);
    }
    return (
        <input autoFocus maxLength={5} value={newGuess} onChange={handleChange}/>
        )
    }

const Finish = () => {
    //game is over word is not found
}

const Home = () => {
    const word = <RandomWord/>;
    
    const [state, setState] = {
        guess1: "",
        guess2: "",
        guess3: "",
        guess4: "",
        guess5: "",
        guess6: "",
        count: 1,
        word: word,
    }

    return (
        <>
        <div style={{textAlign: "center", margin: "auto", padding: "auto", marginBottom: "50px", marginTop: "20px", fontSize: "30px", fontFamily: "fantasy"}}>
            Wordle
        </div>
        <div style={{display: "block", margin: "auto", padding: "auto", textAlign: "center", marginTop: "50px", paddingTop: "50px"}}>
             <Row {...state}/>
             <Row {...state}/>
             <Row {...state}/>
             <Row {...state}/>
             <Row {...state}/>
             <Row {...state}/>
            <HiddenInput {...state}/>
        </div>
        </>
    )
}

export default Home;