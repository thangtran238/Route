import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      guestName: "",
      course: "",
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      "Tham gia: " +
        this.state.isGoing +
        ", ho ten: " +
        this.state.guestName +
        ", khoa hoc: " +
        this.state.course +
        ", message: " +
        this.state.message
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={this.state.isGoing}
            name="isGoing"
            onChange={this.handleInputChange}
          />
          <label className="form-check-label">Tham gia:</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="guestName"
            value={this.state.guestName}
            onChange={this.handleInputChange}
          />
          <label>Ten</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Khoa hoc</label>
          <select
            className="form-select"
            name="course"
            value={this.state.course}
            onChange={this.handleInputChange}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">Javascript</option>
            <option value="reactjs">React Js</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Test;
