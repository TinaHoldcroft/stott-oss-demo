import React, { useState } from 'react';
import ArrowLink from "../../components/ArrowLink";

export function Step2(props) {
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
                <input id="fødselsnummer" name="fødselsnummer" type="number" placeholder={props.fødselsnummer} onChange={props.handleChange} />
            </div>
        </div>
    );
}

export function Txt2(props) {
    if (props.currentStep !== 2) { return null }

    return (
        <>
            <h1>Slik får du fradraget</h1>
            <p>Din gave skal stå ferdig påført i skattemeldingen din. Hvis forhåndsutfylling mangler, skal du ikke føre beløpet selv, men ta kontakt og be oss rapportere gavebeløpet på ditt fødselsnummer.</p>
            <ArrowLink target="_blank" txt="Lær mer her" link="/" />
        </>
    );
}