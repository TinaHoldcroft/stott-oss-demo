import React from 'react'

class MasterForm extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            navn:  '',
            username: '',
            password: '', 
            frekvens: 'månedlig', //default value
            beløp: '300', //default value
        }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 3? 4: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
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
        <button className="page1" type="button" onClick={this._GoToOne}>
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
  
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep === 4) { return null }
    if(currentStep !== 1) {
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Tilbake
        </button>
      )
    }
    return null
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep < 3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
          Neste
        </button>        
      )
    }
    return null;
  }
  submitButton(){
    let currentStep = this.state.currentStep;
    if(currentStep === 3){
      return (
        <button className="btn btn-success btn-block">Send inn</button>      
      )
    }
    return null;
  }
  complete() {
    let currentStep = this.state.currentStep;
    const { navn, username, password, frekvens, beløp } = this.state
    if(currentStep === 4){
      return (
        <>
          <p>Frekvens: {frekvens}</p>
          <p>Beløp: {beløp}</p>
          <p>Navn: {navn}</p>
          <p>Mail: </p>
          <p>Adresse: </p>

            
            {username}
            {password}            
        </>
      )
    }
    return null;
  }
  TextPanel() {
    let currentStep = this.state.currentStep;
    if(currentStep === 1){
        return (
            <>
              <h1>Heading for page 1</h1>
              <p>Here is some text for page 1</p>
              <button>Button</button>
            </>
        )
    }
    if(currentStep === 2){
        return (
            <>
              <h1>Heading for page 2</h1>
              <p>Here is some text for page 2</p>
            </>
        )
    }
    if(currentStep === 3){
      return (
          <>
            <h1>Heading for page 3</h1>
            <p>Here is some text for page 3</p>
          </>
      )
  }
  if(currentStep === 4){
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
            navn={this.state.navn}
            frekvens={this.state.frekvens}
            beløp={this.state.beløp}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step4
              currentStep={this.state.currentStep} 
          />

          <div className="btn-group">
              {this.previousButton()}
              {this.nextButton()}
              {this.submitButton()}
          </div>

          {this.complete()}
        </form>
        </>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    } 
    return(
      <div className="form-group">
          <fieldset className="fieldset-btn-group">
              <legend>Velg Frekvens</legend>
              <div>
                  <input onChange={props.handleChange} type="radio" id="enGang" name="frekvens" value={props.frekvens}/>
                  <label id="enGangLabel" className="checkBtn" htmlFor="enGang">en gang</label>
              </div>
              <div>
                  <input onChange={props.handleChange} type="radio" id="månedlig" name="frekvens" value="månedlig"/>
                  <label className="checkBtn" htmlFor="månedlig">månedlig</label>
              </div>
          </fieldset>

          <fieldset className="fieldset-btn-group">
            <legend>Velg beløp</legend>
              <div>
                  <input onChange={props.handleChange} type="radio" id="300" name="beløp" value="300"/>
                  <label className="checkBtn" htmlFor="300">300</label>
              </div>
              <div>
                  <input onChange={props.handleChange} type="radio" id="500" name="beløp" value="500"/>
                  <label  className="checkBtn" htmlFor="500">500</label>
              </div>
              <div>
                  <input onChange={props.handleChange} type="radio" id="750" name="beløp" value="750"/>
                  <label className="checkBtn" htmlFor="750">750</label>
              </div>
              <div>
                  <input onChange={props.handleChange} type="radio" id="1000" name="beløp" value="1000"/>
                  <label className="checkBtn" htmlFor="1000">1000</label>
              </div>
              <div>
                  <label htmlFor="custom">Eller skriv in ønsket beløp</label>
                  <input id="custom" name="beløp" type="number" placeholder={props.beløp} value={props.beløp} onChange={props.handleChange}/>
              </div>
        </fieldset>
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
          />
          
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
      </div>
      </>
    );
  }
 
  function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <>
        takk
      </>
    );
  }
  

  export default MasterForm