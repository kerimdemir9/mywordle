import { RandomWord } from "./index"
import {useState, useEffect} from "react"


const Row = (props) => {
    const [state, setState] = useState(props.state);

    
    // const [letter1, setLetter1] = useState("");
    // const [letter2, setLetter2] = useState("");
    // const [letter3, setLetter3] = useState("");
    // const [letter4, setLetter4] = useState("");
    // const [letter5, setLetter5] = useState("");
    
    const currentWord = state["guess" + state.count];
    
    useEffect(() => {
      setState(props.state);
    }, [props.state])

    return (
        <div>
            <input value={currentWord[0]} maxLength={1} className="letter-block"/>
            <input value={currentWord[1]} maxLength={1} className="letter-block"/>
            <input value={currentWord[2]} maxLength={1} className="letter-block"/>
            <input value={currentWord[3]} maxLength={1} className="letter-block"/>
            <input value={currentWord[4]} maxLength={1} className="letter-block"/>
        </div>
    )
};

const HiddenInput = (props) => {
    const [state, setState] = useState(props.state);

    const handleChange = (e) => {
        setState({...state, ["guess" + state.count]: e.target.value})
    }

    const handleSubmit= () => {
        setState({...state, count: state.count+1});
    }

    return (
        <form  onSubmit={handleSubmit}>
            <input autoFocus maxLength={5} value={state["guess" + state.count]} onChange={handleChange}/>
        </form>
        )
    };

const Finish = () => {
    //game is over word is not found
};

const Home = () => {
    const word = <RandomWord/>;
    
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

    useEffect(() => {
        setState(state)
    }, [state])
    

    return (
        <>
        <div style={{textAlign: "center", margin: "auto", padding: "auto", marginBottom: "50px", marginTop: "20px", fontSize: "30px", fontFamily: "fantasy"}}>
            Wordle
        </div>
        <div style={{display: "block", margin: "auto", padding: "auto", textAlign: "center", marginTop: "50px", paddingTop: "50px"}}>
             <Row state={state}/>
             <Row state={state}/>
             <Row state={state}/>
             <Row state={state}/>
             <Row state={state}/>
             <Row state={state}/>
            <HiddenInput state={state}/>
        </div>
        </>
    )
};

export default Home;