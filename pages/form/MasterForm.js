import React from 'react';
import Link from 'next/link';

import Step1 from './Step1';
import Txt1 from './Txt1';
//import { Step2, Txt2 } from './Step2';
//import { Step3, Txt3 } from './Step3';

class MasterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            frekvens: 'månedlig',
            beløp: '300',
            fradrag: 'nei',
            fødselsnummer: '',
            telefon: '',
            navn: '',
            adresse: '',
            epost: '',
        }
    }

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

      if (currentStep === 1) {
          return (
              <button className="flat-btn float-right" type="button" onClick={this._next}>Neste</button>
          )
      }
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
            <button className="flat-btn float-left" type="button" onClick={this._prev}>Tilbake</button>
            <button type="submit" className="flat-btn float-right">Send inn</button>
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
    GoToOneButton() {
      return (
        <button className="page1" type="button" onClick={this._GoToOne} value="gå direkte til valg av frekvens og beløp">
          <i className="fas fa-hand-holding-usd"></i>
        </button>
      )
    }
    _GoToTwo = () => {
      let currentStep = this.state.currentStep
      currentStep = 2
      this.setState({ currentStep: currentStep })
    }
  GoToTwoButton() {
    return (
        <button className="page2" type="button" onClick={this._GoToTwo}>
            <i className="fas fa-credit-card"></i>
        </button>
    )
  }
  _GoToThree = () => {
    let currentStep = this.state.currentStep
    currentStep = 3
    this.setState({ currentStep: currentStep })
  }
  GoToThreeButton() {
    return (
      <button className="page3" type="button" onClick={this._GoToThree}>
        <i className="fas fa-user"></i>
      </button>
    )
  }
  _GoToFour = () => {
    let currentStep = this.state.currentStep
    currentStep = 4
    this.setState({ currentStep: currentStep })
  }
  GoToFourButton() {
    return (
      <button className="page4" type="button" onClick={this._GoToFour}>
        <i className="fas fa-receipt"></i>
      </button>
    )
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
                <circle cx="-250.5" cy="249.5" r="12" />
                <path d="M-256.46 249.65l3.9 3.74 8.02-7.8" />
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
          {/*<Txt2 currentStep={this.state.currentStep}/>
          <Txt3 currentStep={this.state.currentStep}/>*/}
          {this.TextPanel()}
        </div>

        <div className={'masterform active' + this.state.currentStep}>
          <div className={'breadcrum breadcrum' + this.state.currentStep}>
            {this.GoToOneButton()}
            <div className="line line1"></div>
            {this.GoToTwoButton()}
            <div className="line line2"></div>
            {this.GoToThreeButton()}
            <div className="line line3"></div>
            {this.GoToFourButton()}
          </div>

          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              frekvens={this.state.frekvens}
              beløp={this.state.beløp}
            />  {/*
            <Step2
            currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              fradrag={this.state.fradrag}
              fødselsnummer={this.state.fødselsnummer}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              navn={this.state.navn}
              telefon={this.state.telefon}
              adresse={this.state.adresse}
              epost={this.state.epost}
        />*/}
              {this.Buttons()}
              {this.complete()}
          </form>
        </div>
      </div>
    );
  }
}

export default MasterForm