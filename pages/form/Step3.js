import BTN from '../../components/btn';

export function Step3(props) {
    if (props.currentStep !== 3) { return null }

    return (
        <div className="form-group">
            <div className="txt-input-wrapper">
                <label htmlFor="telefon">telefon</label>
                <input className="form-control" id="telefon" name="telefon" type="tel" value={props.telefon} onChange={props.handleChange} />
            </div>
            <div className="txt-input-wrapper">
                <label htmlFor="navn">navn</label>
                <input className="form-control" id="navn" name="navn" type="text" value={props.navn} onChange={props.handleChange} />
            </div>
            <div className="txt-input-wrapper">
                <label htmlFor="adresse">adresse</label>
                <input className="form-control" id="adresse" name="adresse" type="text" value={props.adresse} onChange={props.handleChange} />
            </div>
            <div className="txt-input-wrapper">
                <label htmlFor="epost">e-post</label>
                <input className="form-control" id="epost" name="epost" type="email" value={props.epost} onChange={props.handleChange} />
            </div>
        </div>
    );
}


export function Txt3(props) {
    if (props.currentStep !== 3) { return null }

    return (
        <>
            <h1>Du kan stole på oss</h1>
            <p>Hver eneste person som støtter Blindeforbundet er like viktig for at blinde og svaksynte i Norge kan få livsnødvendig omsorg, praktisk hjelp og mestringskurs. Vi ønsker derfor å behandle deg og dine gavebidrag med ydmykhet og respekt.</p>
            <div className="action-group">
                <BTN value="Personvernsærklæring" link="/" />
            </div>
        </>
    );
}