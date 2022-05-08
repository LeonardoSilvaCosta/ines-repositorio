import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function initialState() {
  return { name: "", password: "" };
}

export function Login() {
  const [errorMessages, setErrorMessages] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const user = { name: "Dora", password: "nosteamamos" };
  const errors = { name: "invalid username", password: "invalid password" };

  //   const renderErrorMessage = (name: string) => {
  //   name === errors.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  // };

  function onChange(event: any) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (values.name === user.name) {
      if (values.password !== user.password) {
        alert("Não é a mamãe!");
      } else {
        setIsSubmitted(true);
        navigate("/Home");
      }
    } else {
      alert("Seu nome está incorreto!");
    }

    // if (values.name) {
    //   if (values.password !== user.password) {
    //     setErrorMessages({ name: "password", message: errors.password });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   setErrorMessages({ name: "name", message: errors.name });
    // }
  }

  return (
    <div className="container">
      <img src="pag1.png" alt="imagem"></img>
      <form id="formulario" className="form-group" onSubmit={handleSubmit}>
        <>
          {isSubmitted ? <div>User is sucessfully logged in</div> : ""}
          <label>Nome:</label>
          <Input
            id="insert"
            name="name"
            type="text"
            placeholder="informe o seu nome"
            value={values.name}
            onChange={onChange}
          />

          <label>Senha:</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="informe a sua senha"
            value={values.password}
            onChange={onChange}
          />
          <div className="button-content">
            <Button name="Login" />
          </div>
        </>
      </form>
    </div>
  );
}
