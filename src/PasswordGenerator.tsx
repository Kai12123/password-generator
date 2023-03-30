import { ChangeEvent, useState } from "react";
import { clampNumber } from "./utils/clampNumber";
import { getRandomChar } from "./utils/getRandomChar";

export function PasswordGenerator() {
  const [passWord, setPassWord] = useState<string>("");
  const [numOfChars, setNumOfChars] = useState<number>(10);
  // generate a new password
  const onClick = () => {
    const newPassword = generateNewPassword({ numOfChars });
    console.log(
      "🚀 ~ file: PasswordGenerator.tsx:9 ~ onClick ~ newPassword:",
      newPassword
    );
    setPassWord(newPassword);
  };
  // handle the input's on-user-typed callback
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputtedValue = Number(event.target.value);
    console.log(inputtedValue);
    // clamp the value at max of 100 min of 1
    const clampedValue = clampNumber({
      number: inputtedValue,
      min: 1,
      max: 100,
    });
    setNumOfChars(clampedValue);
  };
  return (
    <>
      <div>{passWord}</div>
      <input
        type="number"
        name=""
        id=""
        max={100}
        min={1}
        value={numOfChars}
        onChange={onChange}
      />
      <button onClick={onClick}>Generate password</button>
    </>
  );
}

function generateNewPassword({ numOfChars }: { numOfChars: number }) {
  // - random letters & numbers & symbols
  // - user-inputted length
  let password = "";

  // build the password by adding a bunch of new random chars to the password
  for (let index = 0; index < numOfChars; index++) {
    const randomChar = getRandomChar();
    password = password + randomChar;
  }

  // give it back to the function's user
  return password;
}
