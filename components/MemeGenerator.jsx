import { useState, useEffect } from "react"
import MemeForm from "./MemeForm"
import MemeDisplay from "./MemeDisplay"
import DownloadButton from "./DownloadButton"
import { DEFAULT_MEME, API_CONFIG, DOWNLOAD_CONFIG } from "../config/memeConfig"

export default function MemeGenerator() {
    const [meme, setMeme] = useState(DEFAULT_MEME)
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch(API_CONFIG.memeApiUrl)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getNewMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url

        setMeme({
            topText: "",
            bottomText: "",
            imageUrl: newMemeUrl
        })
    }
    
    function handleMemeChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    console.log("Rendering")

    return (
        <section 
            className="meme-generator"
            aria-label="Meme Generator"
            role="application"
        >
            <MemeForm 
                meme={meme}
                handleMemeChange={handleMemeChange}
                getNewMemeImage={getNewMemeImage}
            />
            
            <MemeDisplay 
                meme={meme} 
                memeImageId={DOWNLOAD_CONFIG.memeImageId}
            />
            
            <DownloadButton 
                memeImageId={DOWNLOAD_CONFIG.memeImageId}
            />
        </section>
    )
}