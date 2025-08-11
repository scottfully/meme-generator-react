import { useState, useEffect, useId } from "react"
import MemeForm from "./MemeForm"
import MemeDisplay from "./MemeDisplay"
import DownloadButton from "./DownloadButton"
import { DEFAULT_MEME, API_CONFIG } from "../config/memeConfig"

export default function MemeGenerator() {
    const [meme, setMeme] = useState(DEFAULT_MEME)
    const [allMemes, setAllMemes] = useState([])
    const [error, setError] = useState(null)

    const memeImageId = useId() + "-meme"
    
    useEffect(() => {
        setError(null)
        
        fetch(API_CONFIG.memeApiUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch memes: ${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .then(data => {
                if (!data.data || !data.data.memes || data.data.memes.length === 0) {
                    throw new Error('No memes found in the response')
                }
                setAllMemes(data.data.memes)
            })
            .catch(err => {
                console.error('Error fetching memes:', err)
                setError(err.message)
            })
    }, [])
    
    function getNewMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        // const randomMeme = allMemes[randomNumber].url
        const randomMeme = allMemes[randomNumber]

        setMeme({
            topText: "",
            bottomText: "",
            // imageUrl: randomMeme,
            meme: randomMeme
        })
    }
    
    function handleMemeChange(event) {
        const {value, name} = event.currentTarget

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <section 
            className="meme-generator"
            aria-label="Meme Generator"
            role="application"
        >
            {error && (
                <div className="error-message" role="alert">
                    <p>Error loading memes: {error}</p>
                </div>
            )}
            
            <MemeForm 
                meme={meme}
                handleMemeChange={handleMemeChange}
                getNewMemeImage={getNewMemeImage}
            />
            
            <MemeDisplay 
                meme={meme} 
                memeImageId={memeImageId}
            />
            
            <DownloadButton 
                memeImageId={memeImageId}
            />
        </section>
    )
}