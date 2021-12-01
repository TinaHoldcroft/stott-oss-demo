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
                        <Link href='/'><i className="fas fa-envelope-open-text"></i></Link>
                        <Link href='/'><i className="fab fa-youtube"></i></Link>
                        <Link href='/'><i className="fab fa-twitter"></i></Link>
                        <Link href='/'><i className="fab fa-facebook"></i></Link>
                    </div>
                </div>
                <div>
                    <h6>Kontakt informasjon</h6>
                    <Link href='/'>info@blindeforbundet.no</Link>
                    <Link href='/'>+47 23 21 50 00</Link>
                    <Link href='/'>Sporveisgaten 10, 0354 OSLO</Link>
                    <Link href='/'>PB: 5900 Majorstuen, 0308 OSLO</Link>              
                </div>
                <div>
                    <h6>Giver informasjon</h6>
                    <p>Vipps til 05030</p>
                    <p>1644 08 26974</p>
                    <Link href='/'>+47 23 00 06 00</Link>
                    <Link href='/'>giver@blindeforbundet.no</Link>
                </div>
                <div>
                    <h6>Annet</h6>
                    <Link href='/'>Tilgjengelighetserklæring</Link>
                    <Link href='/'>Smitteveileder</Link>
                    <Link href='/'>Personvernerklæring</Link>
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