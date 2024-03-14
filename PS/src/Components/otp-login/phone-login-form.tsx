import React, { useState } from "react";
import { OTPLoginForm } from "./otp-login-form";

const PhoneLoginForm: React.FC = () => {
  const initialState = {
    phoneNumber: "",
    showOTPForm: false,
  };
  const [state, setState] = useState(initialState);

  const { phoneNumber, showOTPForm } = state;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const regex = /^\d{2}$/;

    //Validations
    if (phoneNumber && !regex.test(phoneNumber)) {
      alert("Incorrect number");
      return;
    }
    setState({ ...state, showOTPForm: true });
  };

  const handleInputChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, phoneNumber: event.target.value });
  };

  const onOTPSubmit = (otp: string) => {
    console.log(`Entered OTP is ${otp}`);
  };

  return (
    <>
      <h1>Login with Phone</h1>
      {!showOTPForm ? (
        <>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleInputChnage}
                value={phoneNumber}
                placeholder="Enter phone number"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      ) : (
        <OTPLoginForm length={4} onOTPSubmit={onOTPSubmit} />
      )}
    </>
  );
};

export default PhoneLoginForm;
