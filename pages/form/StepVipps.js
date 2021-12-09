export default function Step5(props) {
    if (props.currentStep !== 5) { return null }

    return (
        <div className="vipps-page">
            <img id="vipps-orange" src={'/vipps-orange.svg'} alt='vipps logo'/>
            <h2>Betal med Vipps</h2>
            <h3 htmlFor="telefon">{props.belop} kr til Norges Blindeforbund</h3>
            <div className="input-group">
            <label htmlFor="telefon">+47</label>
            <input className="form-control" id="telefon" name="telefon" type="tel" value={props.telefon} onChange={props.handleChange} pattern="[0-9]{8,}" required />
            </div>
        </div>
    );
}