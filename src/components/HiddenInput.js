import { useState } from "react";
import axios from "axios"


export const HiddenInput = ({state, setState}) => {

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setState({...state, ["guess" + state.count]: e.target.value.toUpperCase()})
    }


    // const isValid = async (word) => {
    //     const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word.toLowerCase())
    //     const data = response.data[0];
    //     console.log(data)
    //     console.log(data.hasOwnProperty('word'))
    //     if(data.hasOwnProperty('word'))
    //         return true;
    //     else
    //         return false;
    // }


    const handleSubmit= (e) => {
        e.preventDefault();  
        if(state["guess" + state.count].length !== 5)
            setError("Not enough letters!")
        // else if(!isValid(state["guess" + state.count]))
        //     setError("This word doesn't exist!")
        else
        {
            setError("");
            setState({...state, count: state.count+1, ["submit" + state.count]: true});
        }

    }

    return (
        <form  onSubmit={handleSubmit}>
            <input autoFocus maxLength={5} value={state["guess" + state.count]} onChange={handleChange} style={{background: "pink"}}/>
            <h1 style={{color: "red"}}>{error}</h1>
        </form>
        )
    };