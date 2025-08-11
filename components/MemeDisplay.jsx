import { useState, useEffect } from 'react'

export default function MemeDisplay({ meme, memeImageId }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    // Reset loading state when image URL changes
    useEffect(() => {
        setImageLoaded(false)
    }, [meme.imageUrl])

    return (
        <div className="meme" id={memeImageId}>
            <img 
                src={meme.imageUrl} 
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
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
