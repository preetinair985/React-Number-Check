import React, { Component } from "react";
import PropTypes from "prop-types";

export class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "",
      newnumber: "",
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

    // this.setState({
    //   newnumber: this.state.value
    // })

    if (isNaN(value)) {
      alert("Enter a valid number");
    } else {
      if (this.props.name === "age") {
        if(!/[^0-9]/.test(value) ) {
        if (this.props.min !== undefined && value < this.props.min) {
          inputErrors.number =
            "Entered value must be greater than" + this.props.min;
        } else if (this.props.max !== undefined && value > this.props.max) {
          inputErrors.number =
            "Entered value must be less than" + this.props.max;
        }
      }
      else{
        alert('Only numbers are allowed');
      }
      }
      else if (!this.props.name === "decimal" && !this.props.decimal) {
        inputErrors.number = "Please pass a decimal value";
      } else {
        inputErrors.number = parseFloat(value).toFixed(this.props.decimal);
      }

      this.setState(
        {
          inputErrors,
          newnumber: value
        },
        () => console.log(this.state)
      );
    }
  }

  render() {
    const { inputErrors } = this.state;
    return (
      <div className="form-wrapper" id="demo">
        <div className="form-sub-wrapper">
          <label>{this.props.heading}</label>
          <input
            type="text"
            name={this.props.name}
            placeholdeer={this.props.placeholder}
            onChange={this.handleChange}
            value={this.state.newnumber}
          />
        </div>
        <center>
          {inputErrors.number.length > 0 && (
            <span className="errorMessage">{inputErrors.number}</span>
            
          )}
           
        </center>
      </div>
    );
  }
}

export default Practice;

Practice.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  placeholdeer: PropTypes.string,
  name: PropTypes.string.isRequired,
  decimal: PropTypes.number
};

Practice.defaultProps = {
  min: 0,
  max: 1000,
  trimVal: 3
};
