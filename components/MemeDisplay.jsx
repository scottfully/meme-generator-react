export default function MemeDisplay({ meme }) {
    return (
        <div className="meme" id="memeToDownload">
            <img src={meme.imageUrl} />
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
    )
}
