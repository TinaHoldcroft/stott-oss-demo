import ArrowLink from '../../components/ArrowLink';

export default function Txt2(props) {
    
    if (props.currentStep !== 2) { return null }

    return (
        <>
            <h1>Gaver på minst 500 kroner gir skattefradrag</h1>
            <p>Gir du minst 500 kroner i året har du rett på skattefradrag. Beløpet vil stå oppført i skattemeldingen din, men hvis det mangler, setter vi pris på at du kontakter oss. Vi ordner det på et blunk.</p>
            <ArrowLink target='_blank' txt='Lær mer her' link='https://www.blindeforbundet.no/stott-blindeforbundet/skattefradrag' />
        </>
    );
}