import { useState } from "react";

export function PasswordGenerator() {
  const [passWord, setPassWord] = useState("");
  const onClick = () => setPassWord("a");
  return (
    <>
      <div>{passWord}</div>
      <button onClick={onClick}>Generate password</button>
    </>
  );
}
