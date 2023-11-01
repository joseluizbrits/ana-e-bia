import React from "react";
import { RegisterStyled } from "./RegisterStyled";
import img from "../../assets/img-register.jpg";
import Field from "../Field/Field";
import useForm from "../../hooks/useForm";
import emailjs from "@emailjs/browser";

function Register() {
  const [loading, setLoading] = React.useState<"" | "loading">("");
  const [success, setSuccess] = React.useState(false);
  const name = useForm("");
  const email = useForm("email");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading("loading");

    if (email.validate()) {
      const templateParams = {
        from_name: name.value,
        email: email.value,
      };

      emailjs
        .send(
          "service_ovc51pi",
          "template_ra9q7ua",
          templateParams,
          "s_YA3z6mo4qOe0thA"
        )
        .then(
          () => {
            setLoading("");
            setSuccess(true);
            name.setValue("");
            email.setValue("");
          },
          (err: Error) => {
            console.log("Erro ao enviar o menssagem");
            console.log(err);
            setLoading("");
            name.setValue("");
            email.setValue("");
          }
        );
    } else {
      setLoading("");
    }
  }

  React.useEffect(() => {
    if (name.error || email.error) setSuccess(false);

    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }
  }, [success, name.error, email.error]);

  return (
    <RegisterStyled>
      <div className="content">
        <h2>
          <span>Isabela Manfrini</span>
          <span>nossa diretora de arte te convida a se inscrever</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="wrapp">
            <Field label="Nome" type="text" name="name" {...name} />
            <Field label="Email" type="email" name="email" {...email} />

            <button className={loading}>Enviar</button>
            {success && (
              <p className="success">Menssagem enviada com sucesso!</p>
            )}
          </div>
        </form>
      </div>

      <img
        src={img}
        alt="Mulher com garfo e faca na mão de frente para um doce"
      />
    </RegisterStyled>
  );
}

export default Register;
