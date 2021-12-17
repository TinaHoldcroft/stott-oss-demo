import React from 'react';
import Step1 from './Step1';
import Txt1 from './Txt1';
import Step2 from './Step2';
import Txt2 from './Txt2';
import Step3 from './Step3';
import Txt3 from './Txt3';
import Step4 from './Step4';
import Txt4 from './Txt4';
import BreadcrumBnt from './Breadcrum';
import FlatBtn from './FlatBtn';
import PaymentBtn from './PaymentBtn';

class MasterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            frekvens: 'månedlig',
            beløp: '300',
            fradrag: 'nei',
            fødselsnummer: '',
            paymentType: 'vipps',
            telefon: '',
            navn: '',
            adresse: '',
            epost: ''
        }
        console.log(this.state)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 3 ? 4 : currentStep + 1
        this.setState({  currentStep: currentStep })
    }

    Buttons() {
        let currentStep = this.state.currentStep;
        let frekvens = this.state.frekvens;
        let paymentType = this.state.paymentType;

        if (currentStep === 1) { return <FlatBtn type='button' value='neste' direction='right' click={this._next} /> }
        if (currentStep === 2) {
            if (frekvens === 'en gang') {
                return (
                    <>
                        <fieldset className="payment">
                            <legend className="sr-only">Velg Betalingsform</legend>
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value="vipps" />
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value="kort" />
                        </fieldset>
                        <FlatBtn type='button' value='tilbake' direction='left' click={this._prev} />
                        <FlatBtn type='submit' value='neste' direction='right' />
                    </>
                )
            }
            if (frekvens === 'månedlig') {
                return (
                    <>
                        <fieldset className="payment">
                            <legend className="sr-only">Velg Betalingsform</legend>
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value="vipps" />
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value="avtale-giro" />
                        </fieldset>
                        <FlatBtn type='button' value='tilbake' direction='left' click={this._prev} />
                        <FlatBtn type='submit' value='neste' direction='right' />
                    </>
                )
            }
        }

        if (currentStep === 3) {
            if (paymentType === 'vipps') {
                return <button form='masterform' className='vipps-approve' type='submit' value='Neste'>Neste</button>
            }
            return (
                <>
                    <FlatBtn type='button' value='tilbake' direction='left' click={this._prev} />
                    <button form='masterform' type='submit' className="flat-btn float-right">Send inn</button>
                </>
            )
        }
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({ currentStep: currentStep })
    }
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({ currentStep: currentStep })
    }
    _GoToOne = () => {
        let currentStep = this.state.currentStep
        currentStep = 1
        this.setState({ currentStep: currentStep })
    }
    _GoToTwo = () => {
        let currentStep = this.state.currentStep
        currentStep = 2
        this.setState({ currentStep: currentStep })
    }
    _GoToThree = () => {
        let currentStep = this.state.currentStep
        currentStep = 3
        this.setState({ currentStep: currentStep })
    }
    _GoToFour = () => {
        let currentStep = this.state.currentStep
        currentStep = 4
        this.setState({ currentStep: currentStep })
    }

    render() {
        return (
            <div className="masterform-wrapper">
                <div className="txt-panel">
                    <Txt1 currentStep={this.state.currentStep} />
                    <Txt2 currentStep={this.state.currentStep} />
                    <Txt3 currentStep={this.state.currentStep} paymentType={this.state.paymentType} />
                    <Txt4 currentStep={this.state.currentStep} navn={this.state.navn} adresse={this.state.adresse} telefon={this.state.telefon} epost={this.state.epost} frekvens={this.state.frekvens} beløp={this.state.beløp} fradrag={this.state.fradrag} fødselsnummer={this.state.fødselsnummer} />
                </div>

                <form id="masterform" className={'masterform active' + this.state.currentStep} onSubmit={this.handleSubmit}>
                    <div className={'breadcrum activePage__' + this.state.currentStep}>
                        <BreadcrumBnt currentStep={this.state.currentStep} nr="1" click={this._GoToOne} value="gå direkte til valg av frekvens og beløp" icon="fas fa-hand-holding-usd" />
                        <BreadcrumBnt currentStep={this.state.currentStep} nr="2" click={this._GoToTwo} value="gå direkte til betalingsvalg" icon="fas fa-credit-card" />
                        <BreadcrumBnt currentStep={this.state.currentStep} nr="3" click={this._GoToThree} value="gå direkte til personalia" icon="fas fa-user" />
                        <BreadcrumBnt currentStep={this.state.currentStep} nr="4" click={this._GoToFour} value="gå direkte til oppsummering" icon="fas fa-receipt" />
                    </div>
                    <Step1 currentStep={this.state.currentStep} handleChange={this.handleChange} frekvens={this.state.frekvens} beløp={this.state.beløp} />
                    <Step2 currentStep={this.state.currentStep} handleChange={this.handleChange} fradrag={this.state.fradrag} fødselsnummer={this.state.fødselsnummer} />
                    <Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} paymentType={this.state.paymentType} navn={this.state.navn} telefon={this.state.telefon} adresse={this.state.adresse} epost={this.state.epost} />
                    <Step4 currentStep={this.state.currentStep} />
                    {this.Buttons()}
                </form>
            </div>
        );
    }
}

export default MasterForm