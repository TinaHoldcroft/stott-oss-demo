import Link from 'next/link';

const Footer = () => {

    return (
        <footer>
            <div className="col-1">
                <div>
                    <Link passHref href='/'>
                        <div className="logo-wrapper">
                            <img id="logo" src="/favicon.svg" alt=""/>
                            <span className="logo-txt">
                                <span>Norges Blindeforbund</span>
                                <span>Synshemmedes organisasjon</span>
                            </span>
                        </div>
                    </Link>
                    <p className="tagline">Norges Blindeforbund, synshemmedes organisasjon, er blinde og svaksyntes interesse- og serviceorganisasjon i Norge</p>
                    <div className="SoMe">
                        <Link passHref href='/'><i className="fas fa-envelope-open-text"></i></Link>
                        <Link passHref href='/'><i className="fab fa-youtube"></i></Link>
                        <Link passHref href='/'><i className="fab fa-twitter"></i></Link>
                        <Link passHref href='/'><i className="fab fa-facebook"></i></Link>
                    </div>
                </div>
                <div>
                    <h6>Kontakt informasjon</h6>
                    <Link passHref href='/'>info@blindeforbundet.no</Link>
                    <Link passHref href='/'>+47 23 21 50 00</Link>
                    <Link passHref href='/'>Sporveisgaten 10, 0354 OSLO</Link>
                    <Link passHref href='/'>PB: 5900 Majorstuen, 0308 OSLO</Link>              
                </div>
                <div>
                    <h6>Giver informasjon</h6>
                    <p>Vipps til 05030</p>
                    <p>1644 08 26974</p>
                    <Link passHref  href='/'>+47 23 00 06 00</Link>
                    <Link passHref href='/'>giver@blindeforbundet.no</Link>
                </div>
                <div>
                    <h6>Annet</h6>
                    <Link passHref href='/'>Tilgjengelighetserklæring</Link>
                    <Link passHref href='/'>Smitteveileder</Link>
                    <Link passHref href='/'>Personvernerklæring</Link>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="col-2">
                <div>
                    <p>NO 971038179 MVA</p>
                </div>
                <div className="partners">
                    <img src="/innsamlingskontrollen.png" alt="innsamlingskontrollen"/>
                    <img src="/specsavers.png" alt="specsavers"/>
                    <img src="/anicura.png" alt="anicura"/>
                    <img src="/royal-canin.png" alt="royal canin"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;