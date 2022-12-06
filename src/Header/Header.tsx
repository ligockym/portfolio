import React, {useEffect, useState} from 'react';
import './Header.scss';

type NavItem = {
    href: string,
    label: string
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    const [prevObserverRatio, setPrevObserverRatio] = useState(0);

    const items: NavItem[] = [
        {href: 'home', label: 'Home'},
        {href: 'portfolio', label: 'Portfolio'},
        {href: 'skills', label: 'Skills'}
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
                const maxIntersectionEl = entries.reduce(function (prev, current) {
                    return (prev.intersectionRatio > current.intersectionRatio) ? prev : current
                });

                // change the active item only if the entry that changed observation status has higher ratio than current
                if (maxIntersectionEl.intersectionRatio >= prevObserverRatio) {
                    const id = maxIntersectionEl.target.id;
                    setActiveItem(id);
                    setPrevObserverRatio(maxIntersectionEl.intersectionRatio);
                }

            },
            {
                root: null,
                rootMargin: "50px",
                threshold: 0.8
            }
        );
        items.forEach((i) => {
            const el = document.getElementById(i.href);
            if (el) {
                observer.observe(el);
            }
        });

        return () => {
            observer.disconnect();
        }
    }, []);


    return (
        <header className={`header ${isOpen ? 'header--open' : ''}`} id="header">
            <div className="header__container container">
                <div className="header__bar">
                    <a href="/" className="header__logo">
                        Logo
                    </a>
                    <div className="header__toggler" onClick={() => setIsOpen(!isOpen)}>
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
                                   className={`header__nav-item ${item.href === activeItem ? 'header__nav-item--active' : ''} `}>
                                    {item.label}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;
