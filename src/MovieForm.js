const MovieForm = ({value, handleChange, handleClick}) => {
    return (
        <div className="instructionsForm wrapper">
            <h2>Create your own movie "watch-list"!</h2>
            <p>Use this handy app to track movies that have been recommended to you. You can create your very own watch-list by adding and removing movie titles! Once you've added your movies to the list, you'll be able to see more information about each movie as you scroll down below.<span></span>Simply enter in a movie title below and click "Add Movie!" to begin.</p>
            <form action="submit">
                <label className="sr-only" htmlFor="newMovie">Enter a movie title to be added to your watch-list!</label>
                <input
                    type="text"
                    id="newMovie"
                    onChange={handleChange}
                    value={value}
                />

                <button onClick={handleClick}>Add Movie!</button>
            </form>
        </div>
    );
}

export default MovieForm;