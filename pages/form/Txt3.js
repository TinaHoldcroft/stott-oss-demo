import BTN from '../../components/btn';

export default function Txt3(props) {

    if (props.currentStep !== 3) { return null }

    if (props.paymentType === 'vipps') {
        return (
            <div className="vipps-txt">
                <h1>Faste betalinger med Vipps</h1>
                <p>Nå kan du betale dine faste avtaler med Vipps. Da får du god oversikt over betalingene dine og hvert trekk blir varslet.</p>
                <p>Det er ingen bindingstid</p>
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