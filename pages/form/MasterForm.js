import React from 'react'
//import Link from "next/link";
import ArrowLink from "../../components/ArrowLink";

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
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3 ? 4 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
  
  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <button className="flat-btn float-right">Send inn</button>
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
  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 1) {
      return (
        <button className="flat-btn float-right" type="button" onClick={this._next}>Neste</button>
      )
    }
    return null;
  }
  payButton() {
    let currentStep = this.state.currentStep;
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
    return null;
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 4) { return null }
    if (currentStep !== 1) {
      return (
        <button className="flat-btn float-left" type="button" onClick={this._prev}>Tilbake</button>
      )
    }
    return null
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
    const { navn, telefon, adresse, epost, frekvens, beløp, fradrag, fødselsnummer } = this.state
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
          <div>
            <p>{beløp} {frekvens}</p>
            <p>{navn} <span>&#60;{epost}&#62;</span></p>
            <p>{telefon}, {adresse} </p>
            <p>{fradrag}, {fødselsnummer}</p>
          </div>   
        </div>
      )
    }
    return null;
  }
  TextPanel() {
    let currentStep = this.state.currentStep;
    if (currentStep === 1) {
      return (
        <>
          <h1>Støtt Blindeforbundet</h1>
          <p>Gi et menneske som har mistet synet hjelp til å reise seg etter livskrisen og få opplæring i å leve et selvstendig liv igjen.</p>
          <p>300 kr fra deg vil hjelpe et menneske som mister synet i ditt nærmiljø</p>
          <ArrowLink target="_blank" txt="Lær mer her" link="/" />
        </>
      )
    }
    if (currentStep === 2) {
      return (
        <>
          <h1>Heading for page 2</h1>
          <p>Here is some text for page 2</p>
        </>
      )
    }
    if (currentStep === 3) {
      return (
        <>
          <h1>Heading for page 3</h1>
          <p>Here is some text for page 3</p>
        </>
      )
    }
    if (currentStep === 4) {
      return (
        <>
          <h1>Heading for page 4</h1>
          <p>Here is some text for page 4</p>
        </>
      )
    }
  }
  render() {
    return (
      <>
        <div className="formTxt">
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
            />
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
            />

            {this.payButton()}

            <div className="btn-group">
              {this.previousButton()}
              {this.nextButton()}
              {this.submitButton()}
            </div>

            {this.complete()}
          </form>
        </div>
      </>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) { return null }

  return (
    <div className="form-group">
      <fieldset className="fieldset-btn-group">
        <legend>Velg Frekvens</legend>
        <div>
          <input onChange={props.handleChange} type="radio" id="enGang" name="frekvens" value='en gang' checked={props.frekvens === 'enGang'} />
          <label className="checkBtn float-left" htmlFor="enGang">en gang</label>
        </div>
        <div>
          <input onChange={props.handleChange} type="radio" id="månedlig" name="frekvens" value="månedlig" checked={props.frekvens === 'månedlig'} />
          <label className="checkBtn  float-right" htmlFor="månedlig">månedlig</label>
        </div>
      </fieldset>

      <fieldset className="fieldset-btn-group">
        <legend>Velg beløp</legend>
        <div>
          <input onChange={props.handleChange} type="radio" id="300" name="beløp" value="300" checked={props.beløp === '300'} />
          <label className="checkBtn float-left" htmlFor="300">300</label>
        </div>
        <div>
          <input onChange={props.handleChange} type="radio" id="500" name="beløp" value="500" checked={props.beløp === '500'} />
          <label className="checkBtn float-right" htmlFor="500">500</label>
        </div>
        <div>
          <input onChange={props.handleChange} type="radio" id="750" name="beløp" value="750" checked={props.beløp === '750'} />
          <label className="checkBtn float-left" htmlFor="750">750</label>
        </div>
        <div>
          <input onChange={props.handleChange} type="radio" id="1000" name="beløp" value="1000" checked={props.beløp === '1000'} />
          <label className="checkBtn  float-right" htmlFor="1000">1000</label>
        </div>
        <div className="txt-input-wrapper">
          <label htmlFor="custom">Eller skriv inn ønsket beløp</label>
          <input id="custom" name="beløp" type="number" placeholder={props.beløp} onChange={props.handleChange} />
        </div>
      </fieldset>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) { return null }

  return (
    <div className="form-group">
        <p>Jeg ønsker å rapportere gavebeløpet på mitt fødselsnummer (gaven må være på minst 500kr)</p>
        <div>
          <input onChange={props.handleChange} type="radio" id="ja" name="fradrag" value='ja' checked={props.fradrag === 'ja'} />
          <label id="jaLabel" className="checkBtn float-left" htmlFor="ja">ja</label>
        </div>
        <div>
          <input onChange={props.handleChange} type="radio" id="nei" name="fradrag" value="nei" checked={props.fradrag === 'nei'} />
          <label className="checkBtn  float-right" htmlFor="nei">nei</label>
        </div>
        <div className="txt-input-wrapper">
          <label htmlFor="fødselsnummer">Fødselsnummer</label>
          <input id="fødselsnummer" name="fødselsnummer" type="number" placeholder={props.fødselsnummer} onChange={props.handleChange} />
        </div>
      </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) { return null }

  return (
    <div className="form-group">  
      <div className="txt-input-wrapper">
        <label htmlFor="telefon">telefon</label>
        <input className="form-control" id="telefon" name="telefon" type="tel" value={props.telefon} onChange={props.handleChange}/>
      </div>
      <div className="txt-input-wrapper">
        <label htmlFor="navn">navn</label>
        <input className="form-control" id="navn" name="navn" type="text" value={props.navn} onChange={props.handleChange}/>
      </div>
      <div className="txt-input-wrapper">
        <label htmlFor="adresse">adresse</label>
        <input className="form-control" id="adresse" name="adresse" type="text" value={props.adresse} onChange={props.handleChange}/>
      </div>
      <div className="txt-input-wrapper">
        <label htmlFor="epost">epost</label>
        <input className="form-control" id="epost" name="epost" type="email" value={props.epost} onChange={props.handleChange}/>
      </div>
    </div>
  );
}


export default MasterForm