const MovieForm = () => {
    return (
        <form action="submit">
        <label htmlFor="newMovie">Add a movie to your watch-list!</label>
        <input type="text" id="newMovie" />

        <button>Add Movie</button>
        </form>
    );
}

export default MovieForm;