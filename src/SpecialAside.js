import oneRing from "./assets/the-one-ring.png";
import eyeOfSauron from "./assets/eye-of-sauron.png";

const SpecialAside = () => {
    return(
        <aside className="specialAside wrapper">
            <div className="asideHover">
                <img className="oneRing" src={oneRing} alt="Click on this golden ring for some extra special information." />
                <img className="eye" src={eyeOfSauron} alt="Click on the Eye of Sauron for some extra special information" />
            </div>
        </aside>
    );
}

export default SpecialAside;
