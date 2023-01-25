import axios from "axios";
import {useState, useEffect} from "react"


const Word = () => {

    const [word, setWord] = useState("");
    
    const getWord = async () => {
        const response = await axios.get("https://random-word-api.herokuapp.com/word?length=5");
        const data = response.data;
        setWord(data);
    }

    useEffect(() => {
      getWord();
    }, []);
    

    return (word);
}

export default Word;