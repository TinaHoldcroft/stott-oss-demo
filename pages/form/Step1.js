import React, { useState, useEffect } from 'react';

export default function Step1(props) {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState("false");

    const closeFeild = () => { //close custom field if open
        if (isActive === false) { setActive(!isActive); }
    }

    if (props.currentStep !== 1) { return null }

    return (
        <div className="form-group">
            <fieldset className="fieldset-btn-group">
                <legend>Velg Frekvens</legend>
                <div>
                    <input onChange={props.handleChange} type="radio" id="enGang" name="frekvens" value='en gang' checked={props.frekvens === 'en gang'} />
                    <label className="checkBtn float-left" htmlFor="enGang"><span className="sr-only">velg frekvens </span>en gang</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type="radio" id="månedlig" name="frekvens" value="månedlig" checked={props.frekvens === 'månedlig'} />
                    <label className="checkBtn  float-right" htmlFor="månedlig"><span className="sr-only">velg frekvens </span>månedlig</label>
                </div>
            </fieldset>

            <fieldset className="fieldset-btn-group">
                <legend>Velg beløp</legend>
                <div>
                    <input onClick={closeFeild} onChange={props.handleChange} type="radio" id="175" name="beløp" value="175" checked={props.beløp === '175'} />
                    <label className="checkBtn float-left" htmlFor="175"><span className="sr-only">velg beløp </span>175</label>
                </div>
                <div>
                    <input onClick={closeFeild} onChange={props.handleChange} type="radio" id="300" name="beløp" value="300" checked={props.beløp === '300'} />
                    <label className="checkBtn float-right" htmlFor="300"><span className="sr-only">velg beløp </span>300</label>
                </div>
                <div>
                    <input onClick={closeFeild} onChange={props.handleChange} type="radio" id="500" name="beløp" value="500" checked={props.beløp === '500'} />
                    <label className="checkBtn float-left" htmlFor="500"><span className="sr-only">velg beløp </span>500</label>
                </div>
                <div>
                    <input onChange={handleToggle} type="radio" id="annet" name="beløp" value="Annet"/>
                    <label className="checkBtn float-right" htmlFor="annet"><span className="sr-only">velg beløp </span>annet</label>
                </div>
                {isActive ? '' :
                <div className="txt-input-wrapper">
                    <label htmlFor="custom">Skriv inn ønsket beløp</label>
                    <input id="custom" name="beløp" type="number" placeholder={props.beløp} onChange={props.handleChange} />
                </div>
                }
            </fieldset>
        </div>
    );
}