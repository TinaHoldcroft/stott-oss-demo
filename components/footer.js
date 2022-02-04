import Link from 'next/link';
import Logo from './logo';
import {
    phone, phoneLink, email, emailLink, address, PObox,
    giverPhone, giverPhoneLink, giverEmail, giverEmailLink,
    newsletter, youtube, twitter, facebook
} from './ContactInformation'

const Footer = () => {

    return (
        <footer>
            <div className='col-1'>
                <div>
                    <Logo />
                    <p className='tagline'>Norges Blindeforbund, synshemmedes organisasjon, er blinde og svaksyntes interesse- og serviceorganisasjon i Norge</p>
                    <div className='SoMe'>
                        <a href={newsletter} className='fas fa-envelope-open-text' title='Meld deg på vårt nyhetsbrev' target='_blank' />
                        <a href={youtube} className='fab fa-youtube' title='Gå til Blindeforbundets YouTube kanal' target='_blank' />
                        <a href={twitter} className='fab fa-twitter' title='Besøk Blindeforbundet på Twitter' target='_blank' />
                        <a href={facebook} className='fab fa-facebook' title='Besøk Blindeforbundet på Facebook' target='_blank' />
                    </div>
                </div>
                <section>
                    <h6>Kontakt informasjon</h6>
                    <Link passHref href={emailLink}>{email}</Link>
                    <Link passHref href={phoneLink}>{phone}</Link>
                    <p>{address}</p>
                    <p>{PObox}</p>
                </section>
                <section>
                    <h6>Giver informasjon</h6>
                    <p>Vipps til 05030</p>
                    <p>1644 08 26974 <Link href='/giverInformasjon'>mer informasjon</Link></p>
                    <Link passHref href={giverPhoneLink}>{giverPhone}</Link>
                    <Link passHref href={giverEmailLink}>{giverEmail}</Link>
                </section>
                <section>
                    <h6>Annet</h6>
                    <Link passHref href='https://www.blindeforbundet.no/om-blindeforbundet/smitteveileder'>Smitteveileder</Link>
                    <Link passHref href='https://www.blindeforbundet.no/tilgjengelighetserklaering'>Tilgjengelighetserklæring</Link>
                    <Link passHref href='https://www.blindeforbundet.no/personvernerklaering'>Personvernerklæring</Link>
                </section>
            </div>
            <div className='col-2'>
                <div>
                    <p>NO 971038179 MVA</p>
                </div>
                <div className='partners'>
                    <a href='https://validation.cafamerica.org/'>
                        <img src='/CAF.svg' alt='CAF international' />
                    </a>
                    <a href='https://www.specsavers.no/?gclid=CjwKCAiAl-6PBhBCEiwAc2GOVGROTZt6gw7eKdzhtnegf86TviTkcDZfubO2rgOKcWLrbsHMSiOL7BoCGJQQAvD_BwE&gclsrc=aw.ds'>
                        <img src='/specsavers.png' alt='specsavers' />
                    </a>
                    <a href='https://www.anicura.no'>
                        <img src='/anicura.png' alt='anicura' />
                    </a>
                    <a href='www.royalcanin.no'>
                        <img src='/royal-canin.png' alt='royal canin' />
                    </a>
                    <a href='https://www.innsamlingskontrollen.no/'>
                        <img src='/innsamlingskontrollen.png' alt='godkjent av innsamlingskontrollen' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;