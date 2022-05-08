import { InputHTMLAttributes, useState } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  name: string;
  type: string;
  placeholder: string;
}

export function Input({ ...props }: InputProps) {
  return (
      <input
        className="campo" {...props} >
       </input>
  );
}
