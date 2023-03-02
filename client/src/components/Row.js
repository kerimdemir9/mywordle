import  {useState, useEffect} from 'react'


export const Row = ({state, setState, number}) => {
    
    
    const currentWord = state["guess" + number];

    return (
        <div>
            <h1 className='box' >{currentWord[0]}</h1>
            <h1 className='box' >{currentWord[1]}</h1>
            <h1 className='box' >{currentWord[2]}</h1>
            <h1 className='box' >{currentWord[3]}</h1>
            <h1 className='box' >{currentWord[4]}</h1>
            {/* <input value={currentWord[0]} maxLength={1} className="letter-block"/>
            <input value={currentWord[1]} maxLength={1} className="letter-block"/>
            <input value={currentWord[2]} maxLength={1} className="letter-block"/>
            <input value={currentWord[3]} maxLength={1} className="letter-block"/>
            <input value={currentWord[4]} maxLength={1} className="letter-block"/> */}
        </div>
    )
};