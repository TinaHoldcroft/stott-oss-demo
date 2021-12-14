import BTN from '../../components/btn';
import Link from 'next/link';

export default function Txt3(props) {
    if (props.currentStep !== 3) { return null }

    if (props.paymentType === 'vipps') {
        return (
            <div className="vipps-txt">
                <h1>Vipps faste betalinger</h1>
                <p>Betaler du din faste avtale med Vipps trekkes det beløpet du har valgt en gang i måneden via Vipps faste betalinger.</p>
                <p>Det er ingen bindingstid, så du kan når som helst si opp avtalen din ved å kontakte Giverservice på telefon: <Link href='tel:+4723000600'>23 00 06 00</Link>, eller på e-post: <Link href='mailto:giver@blindeforbundet.no'>giver@blindeforbundet.no</Link>.</p>
            </div>
        );
    }
    return (
        <>
            <h1>Du kan stole på oss</h1>
            <p>Hver eneste person som støtter Blindeforbundet er like viktig for at blinde og svaksynte i Norge kan få livsnødvendig omsorg, praktisk hjelp og mestringskurs. Vi ønsker derfor å behandle deg og dine gavebidrag med ydmykhet og respekt.</p>
            <div className='action-group'>
                <BTN value='Personvernsærklæring' link='https://www.blindeforbundet.no/personvernerklaering' />
            </div>
        </>
    );
}