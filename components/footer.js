import BTN from "./btn";

const Footer = () => {

    return (
        <footer>
            <div className="col-1">
                <div>
                    <h6>Om oss</h6>
                    <p>Norges Blindeforbund, synshemmedes organisasjon, er blinde og svaksyntes interesse- og serviceorganisasjon i Norge. Vårt overordnede mål er samfunnsmessig likestilling for blinde og svaksynte og andre grupper med funksjonsnedsettelser</p>
                    <BTN link="/" value="les mer om oss"/>
                </div>
                <div>
                    <h6>Nyttige lenker</h6>
                    Tilgjengelighetserklæring
                    Smitteveileder
                    Personvernerklæring
                </div>
                <div>
                    <h6>Kontakt informasjon</h6>
                    info@blindeforbundet.no
                    NO971038179MVA
                    <i className="fas fa-envelope-open-text"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                </div>
                <div>
                    <h6>Giver informasjon</h6>
                    Vipps til 05030
                    1644 08 26974
                    +47 23 00 06 00
                    giver@blindeforbundet.no
                </div>
            </div>
            <div className="col-2">
                <img src="https://www.blindeforbundet.no/Plone/++theme++nbf.tema.react_components/static/media/innsamlingskontrollen.8ba14228.png" alt="innsamlingskontrollen"/>
                <img src="https://www.blindeforbundet.no/Plone/++theme++nbf.tema.react_components/static/media/specsavers.cfd3d9d6.png" alt="specsavers"/>
                <img src="https://www.blindeforbundet.no/Plone/++theme++nbf.tema.react_components/static/media/anicura.f464da53.png" alt="anicura"/>
                <img src="https://www.blindeforbundet.no/Plone/++theme++nbf.tema.react_components/static/media/royal-canin.93778b5d.png" alt="royal canin"/>
            </div>
        </footer>
    )
}

export default Footer;