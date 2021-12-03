import ArrowLink from "../../components/ArrowLink";

export function Step1(props) {
    if (props.currentStep !== 1) { return null }

    return (
        <div className="form-group">
            <fieldset className="fieldset-btn-group">
                <legend>Velg Frekvens</legend>
                <div>
                    <input onChange={props.handleChange} type="radio" id="enGang" name="frekvens" value='en gang' checked={props.frekvens === 'en gang'} />
                    <label className="checkBtn float-left" htmlFor="enGang">en gang</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type="radio" id="månedlig" name="frekvens" value="månedlig" checked={props.frekvens === 'månedlig'} />
                    <label className="checkBtn  float-right" htmlFor="månedlig">månedlig</label>
                </div>
            </fieldset>

            <fieldset className="fieldset-btn-group">
                <legend>Velg beløp</legend>
                <div>
                    <input onChange={props.handleChange} type="radio" id="300" name="beløp" value="300" checked={props.beløp === '300'} />
                    <label className="checkBtn float-left" htmlFor="300">300</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type="radio" id="500" name="beløp" value="500" checked={props.beløp === '500'} />
                    <label className="checkBtn float-right" htmlFor="500">500</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type="radio" id="750" name="beløp" value="750" checked={props.beløp === '750'} />
                    <label className="checkBtn float-left" htmlFor="750">750</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type="radio" id="1000" name="beløp" value="1000" checked={props.beløp === '1000'} />
                    <label className="checkBtn  float-right" htmlFor="1000">1000</label>
                </div>
                <div className="txt-input-wrapper">
                    <label htmlFor="custom">Eller skriv inn ønsket beløp</label>
                    <input id="custom" name="beløp" type="number" placeholder={props.beløp} onChange={props.handleChange} />
                </div>
            </fieldset>
        </div>
    );
}



export function Txt1(props) {
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
export default function StepOne(){ Step1, Txt1};