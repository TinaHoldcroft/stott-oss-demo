import React from 'react';
import Link from 'next/link';
import Step1 from './Step1';
import Txt1 from './Txt1';
import Step2 from './Step2';
import Txt2 from './Txt2';
import Step3 from './Step3';
import Txt3 from './Txt3';
import BreadcrumBnt from './BreadcrumBtn';
import FormBnt from './FormBtn';

class MasterForm extends React.Component {

  constructor(props) {
      super(props)
      this.state = { currentStep: 1, frekvens: 'månedlig', beløp: '300', fradrag: 'nei', fødselsnummer: '', telefon: '', navn: '', adresse: '', epost: '' }
      console.log(this.state)
  }

  handleClick = event => { 
    let currentStep = this.state.currentStep
    const { value } = event.target
    currentStep = value
    this.setState({ currentStep: currentStep })
  };

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3 ? 4 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  Buttons() {
    let currentStep = this.state.currentStep;

    if (currentStep === 1) { return <FormBnt value='neste' direction='right' click={this._next}/> }

    if (currentStep === 2) {
      return (
        <div className="payment">
          <button className="vipps" type="button" onClick={this._next}>
            <span>fortsett med</span>
            <img id="" src="/vipps.svg" alt="vipps"/>
          </button>
          <button className="avtale" type="button" onClick={this._next}>
            <span>fortsett med</span>
            <img id="" src="/avtale-giro.svg" alt="avtale giro"/>
          </button>
        </div>
      )
    }

    if (currentStep === 3) {
      return (
        <>
          <FormBnt value='tilbake' direction='left' click={this._prev}/>
          <FormBnt value='send inn' direction='right'/>
        </>
      )
    }

    return null;
  }


  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
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

  complete() {
    let currentStep = this.state.currentStep;
    if (currentStep === 4) {
      return (
        <div className="complete">
          <h2>Takk</h2>
          <p>Din donasjon er registrert og du vil i løpet av kort tid motta kvitteringen via mail</p>
          <div className="checkmark-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="-263.5 236.5 26 26">
              <g className="checkmark">
                <circle cx="-250.5" cy="249.5" r="12"/>
                <path d="M-256.46 249.65l3.9 3.74 8.02-7.8"/>
              </g>
            </svg>
          </div>
        </div>
      )
    }
    return null;
  }
  
  TextPanel() {
    let currentStep = this.state.currentStep;

    if (currentStep === 4) {
      const { navn, telefon, adresse, epost, frekvens, beløp, fradrag } = this.state

      return (
        <div className="summary">
          <h1>Oppsummering</h1>
          <div>
            <p>{navn} <i>&#60;{epost}&#62;</i></p>
            <p>{beløp} {frekvens}</p>
            <p>{telefon}, {adresse} </p>
            <p>Fradrag: {fradrag}</p>
          </div>
          <h2>Lurer du på noe?</h2>
          <p>Kontakt giverservice på <Link href='/'>23 00 06 00</Link> eller send mail til <Link href='/'>giver@blindeforbundet.no</Link></p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="masterform-wrapper">
        <div className="formTxt">
          <Txt1 currentStep={this.state.currentStep}/>
          <Txt2 currentStep={this.state.currentStep}/>
          <Txt3 currentStep={this.state.currentStep}/>
          {this.TextPanel()}
        </div>

        <div className={'masterform active' + this.state.currentStep}>
          <div className={'breadcrum breadcrum' + this.state.currentStep}>
            <BreadcrumBnt nr="1" click={this._GoToOne} value="gå direkte til valg av frekvens og beløp" icon="fas fa-hand-holding-usd"/>
            <BreadcrumBnt nr="2" click={this._GoToTwo} value="gå direkte til betalingsvalg" icon="fas fa-credit-card"/>
            <BreadcrumBnt nr="3" click={this._GoToThree} value="gå direkte til personalia" icon="fas fa-user"/>
            <BreadcrumBnt nr="4" click={this._GoToFour} value="gå direkte til personalia" icon="fas fa-receipt"/>
          </div>

          <form onSubmit={this.handleSubmit}>
            <Step1 currentStep={this.state.currentStep} handleChange={this.handleChange} frekvens={this.state.frekvens} beløp={this.state.beløp}/>
            <Step2 currentStep={this.state.currentStep} handleChange={this.handleChange} fradrag={this.state.fradrag} fødselsnummer={this.state.fødselsnummer}/>
            <Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} navn={this.state.navn} telefon={this.state.telefon} adresse={this.state.adresse} epost={this.state.epost}/>
            {this.Buttons()}
            {this.complete()}
          </form>
        </div>
      </div>
    );
  }
}

export default MasterForm