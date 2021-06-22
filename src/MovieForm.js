const MovieForm = (props) => {
    return (
        <div className="instructionsForm">
            <h2>Create your movie "watch-list"!</h2>
            <p>Use this handy app to track movies that have been recommended to you. You can also use it to decide what you should watch first!<span></span>Simply enter in a movie title below and click "Add Movie!".</p>
            <form action="submit">
                <label className="sr-only" htmlFor="newMovie">Enter a movie title to be added to your watch-list!</label>
                <input
                    type="text"
                    id="newMovie"
                    onChange={props.handleChange}
                    value={props.value}
                />

                <button onClick={props.handleClick}>Add Movie!</button>
            </form>
        </div>
    );
}

export default MovieForm;