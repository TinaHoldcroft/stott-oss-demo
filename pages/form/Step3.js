export default function Step3(props) {
    
    if (props.currentStep !== 3) { return null }

    if (props.paymentType === 'vipps') {
        return (
            <div className="vipps-page">
                <img id="vipps-orange" src={'/vipps-orange.svg'} alt='vipps logo' />
                <h2>Betal med Vipps</h2>
                <h3 htmlFor="telefon">{props.beløp} kr til Norges Blindeforbund</h3>
                <div className="input-group">
                    <label htmlFor="telefon">+47</label>
                    <input className="form-control" id="telefon" name="telefon" type="tel" value={props.telefon} onChange={props.handleChange} pattern="[0-9]{8,}" required />
                </div>
            </div>
        );
    }

    return (
        <div className="form-group">
            <div className="txt-input-wrapper">
                <label htmlFor="telefon">telefon</label>
                <input className="form-control" id="telefon" name="telefon" type="tel" value={props.telefon} onChange={props.handleChange} pattern="[0-9]{8,}" required />
                
            </div>
            <div className="txt-input-wrapper">
                <label htmlFor="navn">fullt navn</label>
                <input className="form-control" id="navn" name="navn" type="text" value={props.navn} onChange={props.handleChange} pattern="{4,}" required />
            </div>
            <div className="txt-input-wrapper">
                <label htmlFor="adresse">adresse</label>
                <input className="form-control" id="adresse" name="adresse" type="text" value={props.adresse} onChange={props.handleChange} required />
            </div>
            <div className="txt-input-wrapper">
                <label htmlFor="epost">e-post</label>
                <input className="form-control" id="epost" name="epost" type="email" value={props.epost} onChange={props.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            </div>
        </div>
    );
}