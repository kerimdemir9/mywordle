import  {useState, useEffect} from 'react'


export const Row = ({state, setState, number}) => {
    
    
    const currentWord = state["guess" + number];

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