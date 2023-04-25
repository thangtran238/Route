import React, { useState } from "react";
import { Data } from "./data";
import Item from "./Item";

export default function Menu() {
  const [items, setItems] = useState(Data);
  const [state, setState] = useState({
    selectedItem: null,
    qtyItem: 1,
    moneyUser: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkOut = () => {
    if (state.moneyUser && state.moneyUser > totalPrice()) {
      alert(
        `Xin cam on quy khach, so tien du cua quy khach la: ${
          state.moneyUser - totalPrice()
        }`
      );
    } else {
      alert("Quy khach khong du tien de thuc hien giao dich nay");
    }
  };

  const priceValue = () => {
    const item =
      state.selectedItem &&
      items.find((item) => item.name === state.selectedItem);
    return item?.price || "";
  };

  const totalPrice = () =>
    priceValue() && state.qtyItem ? priceValue() * state.qtyItem : "";

  return (
    <div className="container">
      <h1>Menu</h1>
      {items.map((element) => (
        <Item key={element.name} name={element.name} price={element.price} />
      ))}

      <div className="mb-3">
        <label htmlFor="selectItem" className="form-label">
          Thức uống
        </label>
        <select
          id="selectItem"
          className="form-select form-select-lg"
          name="selectedItem"
          onChange={handleChange}
          value={state.selectedItem || ""}
        >
          <option>
            Select an item
          </option>
          {items.map((e) => (
            <option key={e.name} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="inputPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          id="inputPrice"
          className="form-control"
          name=""
          aria-describedby="helpId"
          placeholder=""
          readOnly
          value={priceValue()}
        />
        <small id="helpId" className="form-text text-muted">
          Help text
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="inputNumber" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          id="inputNumber"
          className="form-control"
          name="qtyItem"
          aria-describedby="helpId"
          placeholder=""
          min={1}
          onChange={handleChange}
        />
        <small id="helpId" className="form-text text-muted">
          Help text
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="inputNumber" className="form-label">
          Total Price
        </label>
        <input
          type="number"
          id="inputNumber"
          className="form-control"
          name=""
          aria-describedby="helpId"
          placeholder=""
          readOnly
          value={totalPrice()}
        />
        <small id="helpId" className="form-text text-muted">
          Help text
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="inputNumber" className="form-label">
          Input your money here:
        </label>
        <input
          type="number"
          id="inputNumber"
          className="form-control"
          name="moneyUser"
          aria-describedby="helpId"
          placeholder=""
          onChange={handleChange}
        />
        <small id="helpId" className="form-text text-muted">
          Help text
        </small>
      </div>

      <button className="btn btn-primary" onClick={checkOut}>
        OK
      </button>
    </div>
  );
}
