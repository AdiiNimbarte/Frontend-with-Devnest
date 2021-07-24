import React from "react";
import "./style.css";
import Button1 from "./Button1";

export default function App(props) {
  return (
    <div className="body">
      <p>4 counter Components</p>
      <Button1 />
      <Button1/>
      <Button1/>
      <Button1/>
    </div>
  );
}
