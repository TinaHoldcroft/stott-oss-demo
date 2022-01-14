export default function Step2(props) {

    if (props.currentStep !== 2) { return null }

    return (
        <div className="form-group">
            <p>Jeg ønsker skattefradrag:</p>
            <div>
                <input onChange={props.handleChange} type="radio" id="ja" name="fradrag" value='ja' checked={props.fradrag === 'ja'} />
                <label id="jaLabel" className="checkBtn float-left" htmlFor="ja"><span className="sr-only">ønsker å rapportere gavebeløpet på mitt fødselsnummer</span>ja</label>
            </div>
            <div>
                <input onChange={props.handleChange} type="radio" id="nei" name="fradrag" value="nei" checked={props.fradrag === 'nei'} />
                <label className="checkBtn float-right" htmlFor="nei"><span className="sr-only">ønsker å rapportere gavebeløpet på mitt fødselsnummer</span>nei</label>
            </div>
        </div>
    );
}