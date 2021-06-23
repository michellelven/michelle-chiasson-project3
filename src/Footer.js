import tmdbLogo from "./assets/tmdb-logo.svg";
const Footer = () => {
    return (
        <footer>
            <p>
                Created by Michelle Chiasson @ Juno College<span></span><img src={tmdbLogo} alt="The Movie Database API logo."/>
            </p>
            <p className="disclaimer">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        </footer>
    );
};

export default Footer;
