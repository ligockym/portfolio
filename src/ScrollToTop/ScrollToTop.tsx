import './ScrollToTop.scss';
import {useEffect, useState} from "react";

function ScrollToTop() {
    const [isShown, setIsShown] = useState(false);

    function scrollTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        const onScroll = (event: Event) => {
            const isWindowScrolled = (window.scrollY > 0);
            setIsShown(isWindowScrolled);
        }

        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return(
        <div className={`scroll-to-top ${!isShown ? 'scroll-to-top--hidden' : ''}`} onClick={() => scrollTop()}>
            <img src="icons/arrow-up.svg" alt="Arrow up"/>
        </div>
    );
}

export default ScrollToTop;