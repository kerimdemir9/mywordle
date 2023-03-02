import {useState, useEffect} from "react"
import {Row} from "./Row"
import {HiddenInput} from "./HiddenInput.js"   

export const Home = ({state, setState}) => {   

    return (
        <>
        <div style={{textAlign: "center", margin: "auto", padding: "auto", marginBottom: "50px", marginTop: "20px", fontSize: "30px", fontFamily: "fantasy"}}>
            Wordle
        </div>
        <div style={{display: "block", margin: "auto", padding: "auto", textAlign: "center", marginTop: "50px", paddingTop: "50px"}}>
             <Row state={state} setState={setState} number={1} />
             <Row state={state} setState={setState} number={2} />
             <Row state={state} setState={setState} number={3} />
             <Row state={state} setState={setState} number={4} />
             <Row state={state} setState={setState} number={5} />
             <Row state={state} setState={setState} number={6} />
            <HiddenInput state={state} setState={setState} />
        </div>
        </>
    )
};
