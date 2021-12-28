import React, { useState, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import Link from 'next/link';
import useScrollListener from "./ScrollListener";
import SearchBtn from './SearchBtn';
import Logo from './logo';

const Nav = () => {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState("false");
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push("--hide");
        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    const closeDrop = () => { //close dropdown when link is chosen
        if (isActive === false) { setActive(!isActive); }
    }

    //use esc to close menu
    global.onkeydown = function (close) {
        if (close.keyCode == '27') {
            if (isActive === false) {
                setActive(!isActive);
            }
        }
    }

    return (
        <nav className={isActive ? navClassList.join(" ") : "--fixed"} id="navbar">
            <Logo />
            <div onClick={closeDrop} className="nav-highlights">
                <Link href='https://www.blindeforbundet.no/medlemskap'>Bli medlem</Link>
                <Link href='https://www.blindeforbundet.no/om-blindeforbundet'>Om oss</Link>
                <Link href='https://www.blindeforbundet.no/hjelpemidler-og-produkter'>Hjelpemidler</Link>
                <Link href='https://www.blindeforbundet.no/rad-tips-og-rettigheter'>Råd og tips</Link>
            </div>

            <FocusLock className="focus" disabled={isActive ? true : false}>
                <div className="nav-btn-wrapper">
                    <SearchBtn />
                    <button className={isActive ? "btn-dropdown" : "btn-dropdown is-menu-open"} accessKey="m" title={isActive ? "Open menu" : "Close menu"} type="button" value={isActive ? "Open menu" : "Close menu"} onClick={handleToggle}>
                        <p className="bars">
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="other-bar"></i>
                        </p>
                    </button>
                </div>
                <div className={isActive ? "--close" : "nav--overlay"}>
                    <ol className={isActive ? "--close" : "--open"} role="menu">
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                        <li className="menuitem" role="none" onClick={handleToggle}>
                            <Link role="menuitem" href='/'>
                                <a>
                                    Link
                                </a>
                            </Link>
                        </li>
                    </ol>
                </div>
            </FocusLock>
        </nav>
    )
}

export default Nav;