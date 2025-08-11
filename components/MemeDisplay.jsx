import { useState, useEffect } from 'react'

export default function MemeDisplay({ meme, memeImageId }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    // this will trigger each time the image url is changed
    useEffect(() => {
        setImageLoaded(false)
        
        // Fallback timeout to show spans if onLoad doesn't fire because of cache
        const fallbackTimer = setTimeout(() => {
            setImageLoaded(true)
        }, 200) 
        
        return () => clearTimeout(fallbackTimer)
    }, [meme.data.url])


    return (
        <div className="meme" id={memeImageId}>
            <img 
                src={meme.data.url}
                width={meme.data.width}
                height={meme.data.height} 
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                alt="Meme template"
            />
            {imageLoaded && (
                <>
                    <span className="top">{meme.topText}</span>
                    <span className="bottom">{meme.bottomText}</span>
                </>
            )}
        </div>
    )
}
