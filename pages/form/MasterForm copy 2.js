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
      const { navn, username, password, frekvens, beløp } = this.state
      alert(`Your registration detail: \n 
              navn: ${navn} \n 
             Username: ${username} \n
             Password: ${password} \n
             frekvens: ${frekvens} \n
             beløp: ${beløp} \n
             `)
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
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <>
        <h1>Støtt oss</h1>
        <p>Step {this.state.currentStep} </p> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
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
          {this.previousButton()}
          {this.nextButton()}
  
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
        <i className="fas fa-hand-holding-usd"></i>
        <fieldset>
          <legend>Velg Frekvens</legend>
          <input onChange={props.handleChange} type="radio" id="enGang" name="frekvens" value={props.frekvens}/>
          <label htmlFor="enGang">en gang</label>
          <input onChange={props.handleChange} type="radio" id="månedlig" name="frekvens" value="månedlig" checked/>
          <label htmlFor="månedlig">månedlig</label>
        </fieldset>
        <fieldset>
          <legend>Velg beløp</legend>
          <input onChange={props.handleChange} type="radio" id="300" name="beløp" value={props.beløp} checked/>
          <label htmlFor="300">300</label>
          <input onChange={props.handleChange} type="radio" id="500" name="beløp" value="500"/>
          <label htmlFor="500">500</label>
          <input onChange={props.handleChange} type="radio" id="750" name="beløp" value="750"/>
          <label htmlFor="750">750</label>
          <input onChange={props.handleChange} type="radio" id="1000" name="beløp" value="1000"/>
          <label htmlFor="1000">1000</label>
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
      <button className="btn btn-success btn-block">Sign up</button>
      </>
    );
  }

  export default MasterForm