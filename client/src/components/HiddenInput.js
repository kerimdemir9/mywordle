import { useState } from "react";

export const HiddenInput = ({state, setState}) => {

    const handleChange = (e) => {
        setState({...state, ["guess" + state.count]: e.target.value})
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        setState({...state, count: state.count+1});
    }

    return (
        <form  onSubmit={handleSubmit}>
            <input autoFocus maxLength={5} value={state["guess" + state.count]} onChange={handleChange}/>
        </form>
        )
    };