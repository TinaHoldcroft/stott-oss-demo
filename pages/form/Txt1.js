import ArrowLink from "../../components/ArrowLink";

export default function Txt1(props) {
    if (props.currentStep !== 1) { return null }

    return (
        <>
            <h1>Støtt Blindeforbundet</h1>
            <p>Gi et menneske som har mistet synet hjelp til å reise seg etter livskrisen og få opplæring i å leve et selvstendig liv igjen.</p>
            <p>300 kr fra deg vil hjelpe et menneske som mister synet i ditt nærmiljø</p>
            <ArrowLink target="_blank" txt="Lær mer her" link="/" />
        </>
    );
}