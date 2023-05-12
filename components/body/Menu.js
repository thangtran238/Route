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

  const checkOut = () => state.moneyUser && state.moneyUser > totalPrice() ? 
  alert("Cam on ban da thanh toan, so tien du cua ban la:" + (state.moneyUser - totalPrice())) :
  alert("Ban khong du tien de thuc hien thanh toan");

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
      <div className="my-3">
        <h1>Menu</h1>
        {items.map((element) => (
          <Item key={element.name} name={element.name} price={element.price} />
        ))}
      </div>

      <div className="mb-3">
        <label htmlFor="selectItem" className="form-label mr-3">
          Thức uống
        </label>
        <select
          id="selectItem"
          className="form-select form-select-lg rounded-0 p-2 border-0 shadow-sm w-100 h-25 outline-none"
          name="selectedItem"
          onChange={handleChange}
          value={state.selectedItem || ""}
        >
          <option value="" disabled className="text-muted" >
            Select an item
          </option>
          {items.map((e) => (
            <option value={e.name} className="text-dark">
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="inputPrice" className="form-label">
          Giá
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
          Số lượng
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
          value={state.qtyItem}
        />
        <small id="helpId" className="form-text text-muted">
          Help text
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="inputNumber" className="form-label">
          Tổng tiền
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
          Nhập số tiền của quý khách
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
        Thanh Toán
      </button>
    </div>
  );
}
