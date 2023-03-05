import { useState } from "react";
import axios from "axios"


export const HiddenInput = ({state, setState}) => {

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setState({...state, ["guess" + state.count]: e.target.value.toUpperCase()})
    }



    const handleSubmit= (e) => {
        e.preventDefault();  
        if(state["guess" + state.count].length !== 5)
            setError("Not enough letters!")
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