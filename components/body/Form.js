import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hk1: 0,
      hk2: 0,
      avg: 0,
      result: "",
      xl: "",
    };
  }

  handleChange = async (event) => {
    let key = event.target.name;
    let value = event.target.value;

    await this.setState({ [key]: value });
    await this.setState((state) => ({
      avg: parseFloat((parseFloat(state.hk1) + parseFloat(state.hk2)) / 2),
    }));
    this.setResult();
    this.setXL();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Ban la hoc sinh " + this.state.xl);
  };

  setResult = () => {
    const result = this.state.avg > 4.5 ? "Len lop" : "Ko len lop";
    this.setState({
      result,
    });
  };

  setXL = () => {
    let xl = "";
    if (this.state.avg > 4.5 && this.state.avg <= 6.5) {
      xl = "Trung binh";
    } else if (this.state.avg > 6.5 && this.state.avg <= 8) {
      xl = "Kha";
    } else if (this.state.avg > 8 && this.state.avg <= 9) {
      xl = "Gioi";
    } else if (this.state.avg > 9) {
      xl = "Xuat sac";
    } else {
      xl = "Yeu";
    }

    this.setState({
      xl,
    });
  };

  render() {
    return (
      <div>
        <h3>Ket qua hoc tap</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Diem HK 1:</label>
          <input
            type="number"
            id="hk1"
            name="hk1"
            max={10}
            min={0}
            required
            onChange={this.handleChange}
          />
          <label>Diem HK 2:</label>
          <input
            type="number"
            id="hk2"
            name="hk2"
            max={10}
            min={0}
            required
            onChange={this.handleChange}
          />
          <label>Diem Trung binh:</label>
          <input type="text" readOnly value={this.state.avg} />
          <label>Ket qua:</label>
          <input type="text" readOnly value={this.state.result} />
          <label>Xep loai:</label>
          <input type="text" readOnly value={this.state.xl} />
          <button type="submit">Xem ket qua</button>
        </form>
      </div>
    );
  }
}

export default Form;
