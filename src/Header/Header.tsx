import React, {useEffect, useState} from 'react';
import './Header.scss';

type NavItem = {
    href: string,
    label: string
}

function Header() {
    // determines whether the navigation is open
    const [isNavOpen, setIsNavOpen] = useState(false);

    // when scrolling down, header is not visible, when scrolling up, it is visible
    const [isVisible, setIsVisible] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    const items: NavItem[] = [
        {href: 'home', label: 'Home'},
        {href: 'portfolio', label: 'Portfolio'},
        {href: 'skills', label: 'Skills'}
    ];

    useEffect(() => {
        const onScroll = (event: Event) => {
            const scrolledDown = window.scrollY > prevScrollY;
            if (!scrolledDown || window.scrollY === 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            setPrevScrollY(window.scrollY);
        }

        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [prevScrollY]);


    return (
        <header className={`header ${isNavOpen ? 'header--open' : ''} ${isVisible ? 'header--visible' : ''}`} id="header">
            <div className="header__container container">
                <div className="header__bar">
                    <a href="/" className="header__logo">
                        Logo
                    </a>
                    <div className="header__toggler" onClick={() => setIsNavOpen(!isNavOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <nav className="header__nav">
                    <ul>
                        {items.map(item =>
                            <li key={item.href}>
                                <a href={`#${item.href}`}
                                   className={`header__nav-item`}>
                                    {item.label}
                                </a>
                            </li>
                        )}
                    </ul>

                    <div className="header__search">
                        <a href={void (0)} onClick={() => setIsSearchOpen(true)}><img src="icons/search.svg"
                                                                                      alt="Search"
                                                                                      height="20"/></a>

                        {isSearchOpen &&
                            <div className="header__search-control">
                                <input className="input" type="text" name="search"/>
                                <button className="button" onClick={() => setIsSearchOpen(false)}>Search!</button>
                            </div>
                        }
                    </div>
                </nav>


            </div>
        </header>
    );
}

export default Header;
