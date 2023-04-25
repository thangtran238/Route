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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = async (event) => {
    let key = event.target.name;
    let value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setAvg();
    await this.setResult();
    await this.setXL();
  };

  setAvg = () => {
    let hk1 = this.state.hk1;
    let hk2 = this.state.hk2;

    let avg = (parseFloat(hk1) + parseFloat(hk2)) / 2
    this.setState({
      avg: avg
    })
  }

  setResult = () => {
    const result = this.state.avg > 4.5 ? "Len lop" : "Ko len lop";
    return new Promise((resolve) => {
      this.setState({ result: result }, resolve);
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
    return new Promise((resolve) => {
      this.setState({ xl: xl }, resolve);
    });
  };

  render() {
    return (
      <div>
        <h3>Ket qua hoc tap</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="hk1">Diem HK 1:</label>
          <input
            type="number"
            id="hk1"
            name="hk1"
            max={10}
            min={0}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="hk2">Diem HK 2:</label>
          <input
            type="number"
            id="hk2"
            name="hk2"
            max={10}
            min={0}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="avg">Diem Trung binh:</label>
          <input id="avg" type="text" readOnly value={this.state.avg} />
          <label htmlFor="rs">Ket qua:</label>
          <input id="rs" type="text" readOnly value={this.state.result} />
          <label htmlFor="xl">Xep loai:</label>
          <input id="xl"  type="text" readOnly value={this.state.xl} />
          <button type="submit">Xem ket qua</button>
        </form>
      </div>
    );
  }
}

export default Form;
