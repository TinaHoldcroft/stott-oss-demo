import Head from 'next/head'
import MasterForm from './form/MasterForm'
import Card from '../components/card'
import Tile from '../components/tile'
import Campaign from '../components/campaign'

export default function Home() {

    return (
        <>
            <Head>
                <title>Støtt oss | Blindeforbundet</title>
            </Head>

            <div className='content-index'>
                <MasterForm />
                <div className='card-container'>
                    <Card
                        heading='Du kan stole på oss'
                        txt='Du og andre frivillige givere er gullet vårt! Dere gjør at vi kan gi den opplæringen og støtten som trengs etter et synstap. Her kan du lese mer om våre garantier til deg som giver.'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/du-kan-stole-pa-oss'
                        value='lær mer'
                    />
                    <Card
                        heading='Du kan endre avtalen din når du vil'
                        txt='Vil du bli fastgiver hos oss? Eller er du allerede fastgiver og ønsker å endre avtalen din? Vi hjelper deg med begge deler. '
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/endre-stotteavtalen-din'
                        value='lær mer'
                    />
                    <Card
                        heading='en gave i ditt testamente'
                        txt='Du kan gjøre en forskjell også etter at du er borte. En gave i ditt testament skaper håp og gir blinde og svaksynte en bedre fremtid.'
                        link='https://www.blindeforbundet.no/stott-blindeforbundet/testamentariske-gaver'
                        value='lær mer'
                    />
                </div>
                <div className='tile-container'>
                    <div className='sub'>
                        <Tile
                            heading='Skattefradrag'
                            link='skattefradrag'
                            txt='Vil du ha skattefradrag? Gir du mer enn 500 kroner i året har du rett på skattefradrag. Beløpet skal stå oppført i skattemeldingen, men hvis du ser at det mangler, setter vi pris på at du kontakter oss. Vi ordner det på et blunk.'
                        />
                        <Tile
                            heading='dør-til-dør ververe'
                            link='vare-ververe'
                            txt='Har du hatt besøk av oss på døren? Klikk her for å sjekke at det var en av våre ansatte. Våre ververe på seg sorte jakker med logoen til Norges Blindeforbund på og identitetskort med bilde, navn og ververnummer. '
                        />
                        <Tile
                            heading='Du bestemmer'
                            link='respekt'
                            txt='Vi vil ikke trenge oss på. Du bestemmer selv hvor mye og i hvilke kanaler du vil høre fra oss.'
                        />
                        <Tile
                            heading='minnegaver'
                            txt='Å gi en minnegave til Norges Blindeforbund er en fin og respektfull måte å hedre et kjært familiemedlem, en nær venn eller et medmenneske på. Det ligger også en trøst i å vite at gaven din vil utløse glede og omsorg i lang tid fremover.'
                            link='minnegaver'
                        />
                    </div>
                </div>
                <div id='calendar'>
                    <Campaign
                        img='/hund.jpg' alt='Labrador valp'
                        heading='Bestill valpekalender'
                        txt='Valpekalenderen til Norges Blindeforbund er en av Norges mest populære kalendere. Når du bestiller kalenderen er du med på å gi selvstendigheten tilbake til mange svaksynte og blinde.'
                        btnValue='bestill kalender'
                        ArrowValue='lær mer'
                        btnLink='https://www.blindeforbundet.no/kalender/#vil-du-bestille-kalenderen-for-2019'
                        ArrowLink='https://www.blindeforbundet.no/kalender'
                    />
                </div>
            </div>
        </>
    )
}