export default function Step4(props) {
    if (props.currentStep !== 4) { return null }

    return (
        <div className="complete">
            <h2>Takk</h2>
            <p>Din donasjon er registrert og du vil i løpet av kort tid motta kvitteringen via mail</p>
            <div className="checkmark-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="-263.5 236.5 26 26">
                    <g className="checkmark">
                        <circle cx="-250.5" cy="249.5" r="12" />
                        <path d="M-256.46 249.65l3.9 3.74 8.02-7.8" />
                    </g>
                </svg>
            </div>
        </div>
    );
}