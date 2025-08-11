import { useState, useEffect } from "react"
import html2canvas from "html2canvas"

export default function Main() {
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
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     imageUrl: newMemeUrl
        // }))

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
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder=""
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder=""
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme" id="memeToDownload">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
            
            <button className="download-button" onClick={() => {
                const memeElement = document.getElementById("memeToDownload");
                html2canvas(memeElement, { useCORS: true }).then(canvas => {
                    // Create a temporary link to download the image
                    const link = document.createElement('a');
                    link.download = 'my-meme.jpg';
                    link.href = canvas.toDataURL('image/jpeg');
                    link.click();
                });
            }}>Download Meme</button>
        </main>
    )
}