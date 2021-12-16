import Link from 'next/link';
import Logo from './logo';

const Footer = () => {

    return (
        <footer>
            <div className="col-1">
                <div>
                    <Logo />
                    <p className="tagline">Norges Blindeforbund, synshemmedes organisasjon, er blinde og svaksyntes interesse- og serviceorganisasjon i Norge</p>
                    <div className="SoMe">
                        <Link passHref href='https://www.blindeforbundet.no/nyhetsbrev'><a><i className="fas fa-envelope-open-text"></i></a></Link>
                        <Link passHref href='https://www.youtube.com/user/NorgesBlindeforbund'><a><i className="fab fa-youtube"></i></a></Link>
                        <Link passHref href='https://twitter.com/Blindeforbundet'><a><i className="fab fa-twitter"></i></a></Link>
                        <Link passHref href='https://www.facebook.com/blindeforbundet'><a><i className="fab fa-facebook"></i></a></Link>
                    </div>
                </div>
                <section>
                    <h6>Kontakt informasjon</h6>
                    <Link passHref href='mailto:info@blindeforbundet.no'>info@blindeforbundet.no</Link>
                    <Link passHref href='tel:+4723215000'>+47 23 21 50 00</Link>
                    <p>Sporveisgaten 10, 0354 OSLO</p>
                    <p>PB: 5900 Majorstuen, 0308 OSLO</p>
                </section>
                <section>
                    <h6>Giver informasjon</h6>
                    <p>Vipps til 05030</p>
                    <p>1644 08 26974</p>
                    <Link passHref href='tel:+4723000600'>+47 23 00 06 00</Link>
                    <Link passHref href='mailto:giver@blindeforbundet.no'>giver@blindeforbundet.no</Link>
                </section>
                <section>
                    <h6>Annet</h6>
                    <Link passHref href='https://www.blindeforbundet.no/om-blindeforbundet/smitteveileder'>Smitteveileder</Link>
                    <Link passHref href='https://www.blindeforbundet.no/tilgjengelighetserklaering'>Tilgjengelighetserklæring</Link>
                    <Link passHref href='https://www.blindeforbundet.no/personvernerklaering'>Personvernerklæring</Link>
                </section>
            </div>
            <div className="col-2">
                <div>
                    <p>NO 971038179 MVA</p>
                </div>
                <div className="partners">
                    <img src="/innsamlingskontrollen.png" alt="innsamlingskontrollen" />
                    <img src="/specsavers.png" alt="specsavers" />
                    <img src="/anicura.png" alt="anicura" />
                    <img src="/royal-canin.png" alt="royal canin" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;