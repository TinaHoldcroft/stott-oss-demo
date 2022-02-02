import Head from 'next/head'
import Link from 'next/link'
import Table from './table'
import CampaignMini from '../../components/CampaignMini'
import { giverPhone, giverPhoneLink, giverEmail, giverEmailLink } from '../../components/ContactInformation'

export default function giverInformasjon() {

    return (
        <>
            <Head>
                <title>Giver informasjon | Blindeforbundet</title>
            </Head>

            <div className='giver-informasjon'>
                <section>
                    <h2>Informasjon om SMS fra Blindeforbundet</h2>
                    <p>Av og til vil du få en SMS fra Blindeforbundet der avsendernummeret vil se annerledes ut enn et vanlig telefonnummer. Dette fordi det er langt billigere å bruke, enn å kjøpe et unikt kortnummer. Nummeret vårt består av 14 siffer, som starter med 203020 og 8 siffer som er ulike ut ifra hvilken SMS du får fra oss.</p>
                </section>
                <section>
                    <h2>Vipps faste betalinger</h2>
                    <p>Betaler du din faste avtale med Vipps trekkes det beløpet du har valgt en gang i måneden via Vipps faste betalinger. Det er ingen bindingstid, så du kan når som helst si opp avtalen din ved å kontakte Giverservice på telefon: <Link passHref href={giverPhoneLink}>{giverPhone}</Link>, eller på e-post: <Link passHref href={giverEmailLink}>{giverEmail}</Link>.</p>
                </section>
                <Table />
                <CampaignMini
                    img='https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Labrador valp'
                    heading='Kontakt Giverservice'
                    txt={<>
                        <div className='contact-tile'>
                            <i className="fas fa-envelope" />
                            <div>
                                <p>E-post:</p>
                                <Link passHref href={giverEmailLink}>{giverEmail}</Link>
                            </div>
                        </div>
                        <div className='contact-tile'>
                            <i className="fas fa-phone" />
                            <div>
                                <p>Telefon:</p>
                                <Link passHref href={giverPhoneLink}>+47 23 00 06 00</Link>
                            </div>
                        </div>
                    </>}
                />
            </div>
        </>
    )
}