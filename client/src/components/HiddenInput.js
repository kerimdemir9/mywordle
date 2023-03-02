import { useState } from "react";

export const HiddenInput = ({state, setState}) => {

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setState({...state, ["guess" + state.count]: e.target.value})
    }

    const handleSubmit= (e) => {
        e.preventDefault();  
        if(state["guess" + state.count].length !== 5)
            setError("Not enough letters!")
        else
        {
            setError("");    
            setState({...state, count: state.count+1});
        }

    }

    return (
        <form  onSubmit={handleSubmit}>
            <input autoFocus maxLength={5} value={state["guess" + state.count]} onChange={handleChange}/>
            <h1 style={{color: "red"}}>{error}</h1>
        </form>
        )
    };