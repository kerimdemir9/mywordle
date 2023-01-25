import { RandomWord } from "./index"


const Row = () => {
    
    return (
        <div>
        <input>
        
        </input>

        <input>
        </input>

        <input>

        </input>
        <input>

        </input>
        <input>

        </input>
        </div>
    )
}


const Home = () => {
    const word = <RandomWord/>;

    return (
        <>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
        </>
    )
}

export default Home;