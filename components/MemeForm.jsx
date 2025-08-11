export default function MemeForm({ meme, handleChange, getNewMemeImage }) {
    return (
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
            <button onClick={getNewMemeImage}>Get a new meme image 🖼</button>
        </div>
    )
}
