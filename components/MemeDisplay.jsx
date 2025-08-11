import { useState, useEffect } from 'react'

export default function MemeDisplay({ meme, memeImageId }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    // Reset loading state when image URL changes
    useEffect(() => {
        setImageLoaded(false)
        
        // Fallback timeout to show spans if onLoad doesn't fire because of cache
        const fallbackTimer = setTimeout(() => {
            setImageLoaded(true)
        }, 200) 
        
        return () => clearTimeout(fallbackTimer)
    }, [meme.imageUrl])


    return (
        <div className="meme" id={memeImageId}>
            <img 
                src={meme.imageUrl} 
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
