export default function MemeForm({ meme, handleMemeChange, getNewMemeImage }) {
    return (
        <div className="form">
            <button className="new-meme-button" onClick={getNewMemeImage}>Get a new meme image 🖼</button>
            <label>Top Text
                <input
                    type="text"
                    placeholder=""
                    name="topText"
                    onChange={handleMemeChange}
                    value={meme.topText}
                />
            </label>

            <label>Bottom Text
                <input
                    type="text"
                    placeholder=""
                    name="bottomText"
                    onChange={handleMemeChange}
                    value={meme.bottomText}
                />
            </label>
        </div>
    )
}
