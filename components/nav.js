import React, { useState, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import Link from 'next/link';
import useScrollListener from "./ScrollListener";
import BTN from './btn';

const Nav = () => {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState("false");
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0)_classList.push("--hide");
        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    const closeDrop = () => { //close dropdown when link is chosen
        if (isActive === false) { setActive(!isActive); }
    }
    
    //use esc to close menu
    global.onkeydown = function(close) { 
        if (close.keyCode == '27') {
            if (isActive === false) {
                setActive(!isActive);
            }
        }
    }
    
    return (
        <nav className={isActive ? navClassList.join(" ") : "--fixed"} id="navbar">
            <Link passHref href='/'>
            <div className="logo-wrapper">
                <img id="logo" src="/favicon.svg" alt=""/>
                <span className="logo-txt">
                    <span>Norges Blindeforbund</span>
                    <span>Synshemmedes organisasjon</span>
                </span>
            </div>
            </Link>
            <div onClick={closeDrop} className="nav-highlights">
                <Link href='/'>Bli medlem</Link>
                <Link href='/'>Om oss</Link>
                <Link href='/'>Hjelpemidler</Link>
                <Link href='/'>Råd og tips</Link>
            </div> 

            <BTN link='/' value="støtt oss"/>
            
            <FocusLock className="focus" disabled={isActive ? true : false}>
                <div className="nav-btn-wrapper">
                    <div className="search"></div>
                    <button className={isActive ? "btn-dropdown" : "btn-dropdown is-menu-open" } accessKey="m" title={isActive ? "Open menu" : "Close menu"} type="button" value={isActive ? "Open menu" : "Close menu"} onClick={handleToggle}>
                        <div className="bars">
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="other-bar"></div>
                        </div>
                    </button>
                </div>

                <ul className={isActive ? "--close" : "--open"} role="menu">
                    <div className="nav--overlay"></div>
                    <ul className="menu-group">
                        <li role="none" className="menu-heading" onClick={handleToggle}><Link role="menuitem" href='/'>Title</Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'>Link</Link></li>
                    </ul>
                    <ul className="menu-group">
                        <li role="none" className="menu-heading" onClick={handleToggle}><Link role="menuitem" href='/'>Title</Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'>Link</Link></li>
                    </ul>
                    <ul className="menu-group">
                        <li role="none" className="menu-heading" onClick={handleToggle}><Link role="menuitem" href='/'>Title</Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'><a>Link</a></Link></li>
                        <li role="none" onClick={handleToggle}><Link role="menuitem" href='/'>Link</Link></li>
                    </ul>
                </ul>
            </FocusLock>
        </nav>
    )
}

export default Nav;