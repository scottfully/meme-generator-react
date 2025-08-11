import { useState, useEffect } from "react"
import MemeForm from "./MemeForm"
import MemeDisplay from "./MemeDisplay"
import DownloadButton from "./DownloadButton"

export default function MemeGenerator() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getNewMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            topText: "",
            bottomText: "",
            imageUrl: newMemeUrl
        }))
    }
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <>
            <MemeForm 
                meme={meme}
                handleChange={handleChange}
                getNewMemeImage={getNewMemeImage}
            />
            
            <MemeDisplay meme={meme} />
            
            <DownloadButton />
        </>
    )
}