import { RandomWord } from "./index"
import {useState} from "react"


const Row = () => {
    const [letter1, setLetter1] = useState("");
    const [letter2, setLetter2] = useState("");
    const [letter3, setLetter3] = useState("");
    const [letter4, setLetter4] = useState("");
    const [letter5, setLetter5] = useState("");
    const [guess, setGuess] = useState("");

    const handleChange = (e,id) => {
        const newGuess = guess + e.target.value;
        setGuess(newGuess);
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
        <form className="row" onSubmit={handleSubmit}>
            <input id="1" name="guess" value={letter1} onChange={(e)=> handleChange(e,1)} maxLength={1} className="letter-block"/>
            <input id="2" name="guess" value={letter2} onChange={(e)=> handleChange(e,2)} maxLength={1} className="letter-block"/>
            <input id="3" name="guess" value={letter3} onChange={(e)=> handleChange(e,3)} maxLength={1} className="letter-block"/>
            <input id="4" name="guess" value={letter4} onChange={(e)=> handleChange(e,4)} maxLength={1} className="letter-block"/>
            <input id="5" name="guess" value={letter5} onChange={(e)=> handleChange(e,5)} maxLength={1} className="letter-block"/>
        </form>
    )
}


const Home = () => {
    const word = <RandomWord/>;

    return (
        <>
        <div style={{textAlign: "center", margin: "auto", padding: "auto"}}>
            Wordle
        </div>
        <div style={{display: "block", margin: "auto", padding: "auto", textAlign: "center"}}>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
        </div>
        </>
    )
}

export default Home;