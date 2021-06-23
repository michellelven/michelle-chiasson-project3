import filmReel from './assets/film-reel.png';
const Header = () => {
    return (
        <header>
            <h1>The Movie Tracker</h1>
            <img className="reelImage" src={filmReel} alt="A reel of film."/>
        </header>
    );
}

export default Header;