import ArrowLink from '../../components/ArrowLink';

export default function Txt2(props) {
    
    if (props.currentStep !== 2) { return null }

    return (
        <>
            <h1>Slik får du fradraget</h1>
            <p>Din gave skal stå ferdig påført i skattemeldingen din. Hvis forhåndsutfylling mangler, skal du ikke føre beløpet selv, men ta kontakt og be oss rapportere gavebeløpet på ditt fødselsnummer.</p>
            <ArrowLink target='_blank' txt='Lær mer her' link='https://www.blindeforbundet.no/stott-blindeforbundet/skattefradrag' />
        </>
    );
}