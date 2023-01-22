import axios from "axios";
import React, {useState, useEffect} from "react"


const Word = () => {

    const [word, setWord] = useState("");
    
    const getWord = async () => {
        const response = await axios.get("https://random-word-api.herokuapp.com/word?length=5");
        const data = response.data;
        console.log("word", data)
        setWord(data);
    }

    useEffect(() => {
      getWord();
    }, []);
    

    return (
        <div>
            {word}
        </div>
    )
}

export default Word;