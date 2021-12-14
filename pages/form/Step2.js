import React, { useState } from 'react';

export default function Step2(props) {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState("false");

    if (props.currentStep !== 2) { return null }

    return (
        <div className="form-group">
            <p>Jeg ønsker å rapportere gavebeløpet på mitt fødselsnummer (gaven må være på minst 500kr)</p>
            <div>
                <input onClick={handleToggle} onChange={props.handleChange} type="radio" id="ja" name="fradrag" value='ja' checked={props.fradrag === 'ja'} />
                <label id="jaLabel" className="checkBtn float-left" htmlFor="ja">ja</label>
            </div>
            <div>
                <input onClick={handleToggle} onChange={props.handleChange} type="radio" id="nei" name="fradrag" value="nei" checked={props.fradrag === 'nei'} />
                <label className="checkBtn  float-right" htmlFor="nei">nei</label>
            </div>
            <div className={isActive ? "--close" : "txt-input-wrapper"}>
                <label htmlFor="fødselsnummer">Fødselsnummer</label>
                <input id="fødselsnummer" name="fødselsnummer" type="number" placeholder={props.fødselsnummer} onChange={props.handleChange} pattern="[0-9]{11,}" required={isActive ? false : true }/>
            </div>
        </div>
    );
}