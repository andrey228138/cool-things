import React, { useState } from "react";
import "./Payment.css";
import OnePayment from "../../assets/icon/rect.svg";
import TwoPayment from "../../assets/icon/payPal.svg";
import ThreePayment from "../../assets/icon/apple.svg";
import ExpiresSelect from "./Expires";
import YearSelect from "./YearSelect";
import { useForm } from "react-hook-form";
const objects = [
  {
    name: "Card",
    icon: OnePayment,
  },
  {
    name: "PayPal",
    icon: TwoPayment,
  },
  {
    name: "Apple",
    icon: ThreePayment,
  },
];

export default function Payment() {
  const handleChangeActive = (index, name) => {
    setActiveBlock({ index: index, value: name });
    setData({ ...data, paymentMethod: name });
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });
  const [activeBlock, setActiveBlock] = useState({
    index: 0,
    value: objects[0].name,
  });
  const [yearSelectOpen, setYearSelectOpen] = useState(false);
  const [expiresSelectOpen, setExpiresSelectOpen] = useState(false);

  const onSubmit = (data) => {
    console.log( JSON.stringify(data) );
    reset();
  };

  return (
    <form className="wrapper-payment" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-payment">
        <h2 className="glv-text-payment">Payment Method</h2>
        <p className="description-payment">
          Add a new payment method to your account.
        </p>
      </div>

      <div className="method-payment-wrapper">
        {objects.map((object, index) => (
          <div
            className={`method-payment ${
              activeBlock.index === index ? "active" : ""
            }`}
            onClick={() => handleChangeActive(index, object.name)}
            key={object.name}
          >
            <img src={object.icon} alt="" />
            <h3>{object.name}</h3>
          </div>
        ))}
      </div>

      <div className="input-payment-wrapper">
        <h2 id="name">Name</h2>
        <input
          type="text"
          placeholder="First Last"
          className="input-payment"
          id="name"
          {...register("name", {
            required: true,
            minLength: 3,
          })}
          style={errors?.name ? { border: "1px solid red" } : null}
        />
      </div>
      <div className="input-payment-wrapper">
        <h2>City</h2>
        <input
          type="text"
          className="input-payment"
          id="city"
          {...register("city", {
            required: true,
            minLength: 3,
          })}
          style={errors?.city ? { border: "1px solid red" } : null}
        />
      </div>
      <div className="input-payment-wrapper">
        <h2>Card number</h2>

        <input
          type="text"
          className="input-payment"
          id="cardNumber"
          {...register("cardNumber", {
            required: true,
            minLength: 3,
          })}
          style={errors?.cardNumber ? { border: "1px solid red" } : null}
        />
      </div>

      <div className="select-wrapper-payment">
        <div className="element-select">
          <h2>Expires</h2>
          <ExpiresSelect
            openSelect={expiresSelectOpen}
            setOpenSelect={setExpiresSelectOpen}
          />
        </div>
        <div className="element-select">
          <h2>Year</h2>
          <YearSelect
            openSelect={yearSelectOpen}
            setOpenSelect={setYearSelectOpen}
          />
        </div>
        <div className="element-select">
          <h2>CVC</h2>
          <input
            type="text"
            placeholder="CVC"
            className="input-cvc"
            id="cvc"
            {...register("cvc", {
              required: true,
              minLength: 3,
              maxLength: 3,
            })}
            style={errors?.cvc ? { border: "1px solid red" } : null}
          />
        </div>
      </div>

      <button className="btn-payment ">Continue</button>
    </form>
  );
}
