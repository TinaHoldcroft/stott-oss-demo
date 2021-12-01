import Head from 'next/head'
import MasterForm from './form/MasterForm'
import Card from '../components/card'
import Tile from '../components/tile'
import BTN from '../components/btn'
import ArrowLink from '../components/ArrowLink'

export default function Home() {

    return (
        <>
            <Head>
                <title>NBf | Støtt oss</title>
            </Head>

            <div className="content-index">
                <MasterForm />
                <div className="two">
                    <Card
                        heading='minnegaver'
                        txt='Å gi en minnegave til Norges Blindeforbund er en fin og respektfull måte å hedre et kjært familiemedlem, en nær venn eller et medmenneske på. Det ligger også en trøst i å vite at gaven din vil utløse glede og omsorg i lang tid fremover.'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/minnegaver'
                        value='gi minnegave'
                    />
                    <Card
                        heading='Nettbutikk'
                        txt='32 millioner mennesker er unødvendig blinde i verden i dag. iCare er Norges Blindeforbunds initiativ for å gi synet tilbake til mennesker som er unødvendig blinde.'
                        link='/'
                        value='gå til nettbutikk'
                    />
                    <Card
                        heading='testamentariske gaver'
                        txt='Du kan gjøre en forskjell også etter at du er borte. En gave i ditt testament skaper håp og gir blinde og svaksynte en bedre fremtid.'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/testamentariske-gaver'
                        value='gi gave'
                    />

                </div>
                <div className="three">
                    <Tile
                        heading='endre støtteavtale'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/endre-stotteavtalen-din'
                        txt='Ønsker du å opprette en støtteavtale med Norges Blindeforbund? Eller ønsker du å endre den avtalen du allerede har? Her får du informasjon om hvordan dette gjøres.'
                    />
                    <Tile
                        heading='Skattefradrag'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/skattefradrag'
                        txt='Ved å støtte vårt arbeid kan du få skattefradrag. Skattefradrag oppnås hvis du gir minst 500 kroner til Norges Blindeforbund i løpet av et kalenderår.'
                    />
                    <Tile
                        heading='dør-til-dør ververe'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/vare-ververe'
                        txt='Norges Blindeforbunds ververe har på seg sorte jakker med logoen til Norges Blindeforbund. De har et identitetskort rundt halsen, der bilde, navn og vervenummer står på.'
                    />
                    <Tile
                        heading='Vipps faste betalinger'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/vipps-faste-betalinger'
                        txt='Betaler du din faste avtale med Vipps trekkes det beløpet du har valgt en gang i måneden via Vipps faste betalinger.'
                    />
                </div>
                <div className="three">
                    <Tile
                        heading='endre støtteavtale'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/endre-stotteavtalen-din'
                        txt='Ønsker du å opprette en støtteavtale med Norges Blindeforbund? Eller ønsker du å endre den avtalen du allerede har? Her får du informasjon om hvordan dette gjøres.'
                    />
                    <Tile
                        heading='Skattefradrag'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/skattefradrag'
                        txt='Ved å støtte vårt arbeid kan du få skattefradrag. Skattefradrag oppnås hvis du gir minst 500 kroner til Norges Blindeforbund i løpet av et kalenderår.'
                    />
                    <Tile
                        heading='dør-til-dør ververe'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/vare-ververe'
                        txt='Norges Blindeforbunds ververe har på seg sorte jakker med logoen til Norges Blindeforbund. De har et identitetskort rundt halsen, der bilde, navn og vervenummer står på.'
                    />
                    <Tile
                        heading='Vipps faste betalinger'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/vipps-faste-betalinger'
                        txt='Betaler du din faste avtale med Vipps trekkes det beløpet du har valgt en gang i måneden via Vipps faste betalinger.'
                    />
                </div>
                <div className="campaign">
                    <div>
                        <img src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80" alt="to hender som holder hver sin enda av et papir hjerte" />
                    </div>
                    <div className="txt">
                        <h5>Kjøp valpekalender</h5>
                        <p>Valpekalenderen til Norges Blindeforbund er en av Norges mest populære kalendere. Når du bestiller kalenderen er du med på å gi selvstendigheten tilbake til mange svaksynte og blinde.</p>
                        <div className="action-group">
                            <BTN value="kjøp kalender" link="/" />
                            <div>
                                <ArrowLink txt="lær mer" link="/" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}