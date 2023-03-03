
export const Row = ({state, setState, number}) => {

    const isIn = (ch, idx, word) => {
        for(let i = 0; i < 5;i++)
        {
            if(word[i] === ch && i !== idx)
                return true;
        }
        return false;
    }
    
    
    const currentWord = state["guess" + number];

        if(state["submit" + number] === true)
        {
            return (
                <div>
                    {currentWord[0] === state.word[0] ? <h1 className='box-check-true'> {currentWord[0]} </h1>: isIn(currentWord[0], 0, state.word) ? <h1 className='box-check-exist'> {currentWord[0]} </h1> : <h1 className='box-check-false'> {currentWord[0]} </h1>}
                    {currentWord[1] === state.word[1] ? <h1 className='box-check-true'> {currentWord[1]} </h1>: isIn(currentWord[1], 1, state.word) ? <h1 className='box-check-exist'> {currentWord[1]} </h1> : <h1 className='box-check-false'> {currentWord[1]} </h1>}
                    {currentWord[2] === state.word[2] ? <h1 className='box-check-true'> {currentWord[2]} </h1>: isIn(currentWord[2], 2, state.word) ? <h1 className='box-check-exist'> {currentWord[2]} </h1> : <h1 className='box-check-false'> {currentWord[2]} </h1>}
                    {currentWord[3] === state.word[3] ? <h1 className='box-check-true'> {currentWord[3]} </h1>: isIn(currentWord[3], 3, state.word) ? <h1 className='box-check-exist'> {currentWord[3]} </h1> : <h1 className='box-check-false'> {currentWord[3]} </h1>}
                    {currentWord[4] === state.word[4] ? <h1 className='box-check-true'> {currentWord[4]} </h1>: isIn(currentWord[4], 4, state.word) ? <h1 className='box-check-exist'> {currentWord[4]} </h1> : <h1 className='box-check-false'> {currentWord[4]} </h1>}
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <h1 className='box' >{currentWord[0]}</h1>
                    <h1 className='box' >{currentWord[1]}</h1>
                    <h1 className='box' >{currentWord[2]}</h1>
                    <h1 className='box' >{currentWord[3]}</h1>
                    <h1 className='box' >{currentWord[4]}</h1>
                </div>
                )
        }
};