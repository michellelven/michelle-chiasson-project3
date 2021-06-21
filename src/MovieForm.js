const MovieForm = (props) => {
    return (
        <form action="submit">
            <label htmlFor="newMovie">Add a movie to your watch-list!</label>
            <input
                type="text"
                id="newMovie"
                onChange={props.handleChange}
                value={props.userInput}
            />            

            <button onClick={props.handleClick}>Add Movie</button>
        </form>
    );
}

export default MovieForm;