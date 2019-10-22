import React, { Component } from "react";
import PropTypes from "prop-types";

export class NumberCheck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "",
      newnumber: this.props.value || "",
      inputErrors: {
        number: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    let inputErrors = this.state.inputErrors;
    inputErrors.number = "";

    // check whether value is a number
    if (isNaN(value)) {
      alert("Enter a valid number");
      this.setState({
        newnumber: ""
      });
    } 
    
    else {
      // check decimal exists or not
      if (!this.props.decimal && /[^0-9]/.test(value)) {
       return; 
      }
      // check whether value is minimum or maximum
      if (this.props.min !== undefined && value < this.props.min) {
        inputErrors.number = "Entered value must be greater than " + this.props.min;
      }
      else if (this.props.max !== undefined && value > this.props.max) {
        inputErrors.number = "Entered value must be less than " + this.props.max;
      }
      else{
        inputErrors.number = value;
      }
      // trim decimal value
      if (this.props.decimal) {
        inputErrors.number = parseFloat(value).toFixed(this.props.decimal);
      }
      
      this.setState(
        {
          inputErrors,
          newnumber: value
        },
        () => console.log(this.state)
      );

      this.props.changeHandle(inputErrors.number, this.props.name);
    }
  }

  

  render() {
    const { inputErrors } = this.state;
    return (
      <div className="form-wrapper">
        <div className="form-sub-wrapper">
          <label className="heading_label">{this.props.heading}</label>
          <input
            type="text"
            placeholder={this.props.placeholder}
            name={this.props.name}
            noValidate
            onChange={this.handleChange}
            value={this.state.newnumber}
          />
        </div>
        {/* <center>
          {inputErrors.number.length > 0 && (
            <span className="errorMessage">{inputErrors.number}</span>
          )}
        </center> */}
      </div>
    );
  }
}

export default NumberCheck;

// define propTypes

NumberCheck.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  changeHandle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  decimal: PropTypes.number,
  value: PropTypes.number
};

// define default propTypes
Number.defaultProps = {
  min: 0,
  max: 1000,
  trimVal: 3
};
