import React, { useState, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import Link from 'next/link';
import useScrollListener from './ScrollListener';
import SearchBtn from './SearchBtn';
import Logo from './logo';

const Nav = () => {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState('false');
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push('--hide');
        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    const closeDrop = () => { //close dropdown when link is chosen
        if (isActive === false) { setActive(!isActive); }
    }

    //use esc to close menu
    global.onkeydown = function (close) {
        if (close.keyCode == '27') {
            if (isActive === false) {
                closeDrop();
            }
        }
    }

    return (
        <nav className={isActive ? navClassList.join(' ') : '--fixed'} id='navbar'>
            <Logo />
            <div onClick={closeDrop} className='nav-highlights'>
                <Link href='https://www.blindeforbundet.no/medlemskap'>Bli medlem</Link>
                <Link href='https://www.blindeforbundet.no/om-blindeforbundet'>Om oss</Link>
                <Link href='/giverInformasjon'>Giver informasjon</Link>
                <Link href='/#calendar'>Bestill valpekalender</Link>
            </div>

            <FocusLock className='focus' disabled={isActive ? true : false}>
                <div className='nav-btn-wrapper'>
                    <SearchBtn />
                    <button className={isActive ? 'btn-dropdown' : 'btn-dropdown is-menu-open'} accessKey='m' title={isActive ? 'Åpne meny' : 'Lukk meny'} type='button' value={isActive ? 'Åpne meny' : 'Lukk meny'} onClick={handleToggle}>
                        <p className='bars'>
                            <span /><span /><span />
                            <i className='other-bar' />
                        </p>
                    </button>
                </div>
                <div className={isActive ? '--close' : 'nav--overlay'}>
                    <ol className={isActive ? '--close' : '--open'} role='menu'>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/oyehelse-og-synshemninger'>
                                <a>
                                    <span>Øyehelse og synshemninger</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/rad-tips-og-rettigheter'>
                                <a>
                                    <span>Råd, tips og rettigheter</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/hjelpemidler-og-produkter'>
                                <a>
                                    <span>Hjelpemidler og produkter</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/tilbud-kurs-og-arrangementer'>
                                <a>
                                    <span>Tilbud, kurs og arrangementer</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/universell-utforming'>
                                <a>
                                    <span>Universell utforming</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/medlemskap'>
                                <a>
                                    <span>Medlemskap</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/om-blindeforbundet'>
                                <a>
                                    <span>Om Blindeforbundet</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/fylkeslag'>
                                <a>
                                    <span>Fylkeslag</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='/'>
                                <a>
                                    <span>Støtt Blindeforbundet</span>
                                    <i className='fas fa-arrow-right' />
                                </a>
                            </Link>
                        </li>
                        <li className='menuitem' role='none' onClick={handleToggle}>
                            <Link role='menuitem' href='https://www.blindeforbundet.no/for-bedrifter'>
                                <a>
                                    <span>For bedrifter</span>
                                    <i className='fas fa-arrow-right' />
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