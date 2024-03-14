import React, { useEffect, useRef, useState } from "react";
import "../../App.css";

type OTPLoginFromProps = {
  length: number;
  onOTPSubmit: (otp: string) => void;
};

export const OTPLoginForm = ({ length, onOTPSubmit }: OTPLoginFromProps) => {
  const [OTPArray, SetOTPArray] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const onInputChnage = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;
    //Allow only numbers
    if (isNaN(+value)) return;

    //creating a new array, if we update OTRArray satat that is Asynchronus and might take time to reflect.
    const newOTP = [...OTPArray];
    //Allo only one input (If we type more than on character, trim and to keep last entered value)
    newOTP[index] = value.substring(value.length - 1);
    SetOTPArray(newOTP);
    if (newOTP.length === length) {
      onOTPSubmit(newOTP.join(""));
    }

    //Move to next input if current field in filled.
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const onkeydown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      event.key === "Backspace" &&
      index > 0 &&
      !OTPArray[index] &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    } else if (
      event.key === "ArrowLeft" &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    } else if (
      event.key === "ArrowRight" &&
      index < length &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputClick = (index: number) => {
    //place the cursor at the end of the selected input field, if we are already having a text.
    inputRefs.current[index].setSelectionRange(1, 1);

    //if we click any input which is already having a value and try to focus to prvious input which is null
    if (index > 0 && !OTPArray[index - 1])
      inputRefs.current[OTPArray.indexOf("")].focus();
    if (index < length && !OTPArray[index + 1])
      inputRefs.current[OTPArray.indexOf("")].focus();
  };

  return (
    <div className="otpRoot">
      {OTPArray.map((_: string, index: number) => {
        return (
          <input
            key={index}
            ref={(input: HTMLInputElement) =>
              (inputRefs.current[index] = input)
            }
            type="text"
            onChange={(e) => onInputChnage(e, index)}
            onKeyDown={(e) => onkeydown(e, index)}
            onClick={() => handleInputClick(index)}
            className="otpInputStyles"
          />
        );
      })}
    </div>
  );
};
