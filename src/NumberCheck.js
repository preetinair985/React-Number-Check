import React, { Component } from "react";

export class NumberCheck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: null,
      number_one: null,
      formErrors: {
        number: "",
        number_one: ""
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    formErrors.number = value.length < 4 ? "minimum 4 numbers required" : "";

    this.setState(
      {
        formErrors,
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  handleChange_one = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    formErrors.number_one =
      value.length > 4 ? "maximum 4 numbers required" : "";

    this.setState(
      {
        formErrors,
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>NUMBER CHECK</h1>
          <form noValidate>
            <div className="number">
              <input
                type="text"
                className= ""
                placeholder="Minimum"
                name="number"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.number.length > 0 && (
                <span className="errorMessage">{formErrors.number}</span>
              )}
            </div>

            <div className="number">
              <input
                type="text"
                className=""
                placeholder="Maximum"
                name="number_one"
                noValidate
                onChange={this.handleChange_one}
              />
              {formErrors.number_one.length > 0 && (
                <span className="errorMessage">{formErrors.number_one}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NumberCheck;
