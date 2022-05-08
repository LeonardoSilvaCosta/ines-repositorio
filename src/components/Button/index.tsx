import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string,
}

export function Button({name, onClick, ...props}: ButtonProps) {
  return (
    <button {...props}>{name}</button>
  )
}