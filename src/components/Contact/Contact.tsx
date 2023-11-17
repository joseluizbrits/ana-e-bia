import React from "react";
import { FormStyled } from "./ContactStyled";
import useForm from "../../hooks/useForm";
import Field from "../Field/Field";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

type ContactProps = {
  sweet: JSX.Element;
  theme?: string;
};

function Contact({ sweet, theme }: ContactProps) {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#contact",
            start: "-=100px 80%",
            end: "bottom center",
          },
        })
        .from("#contact svg", {
          x: -200,
          scale: 0,
          rotate: "360deg",
          duration: 0.5,
        })
        .from("#contact form", {
          opacity: 0,
          "--circleScale": 0,
          duration: 1,
        });
    });

    return () => ctx.revert();
  }, []);

  const [loading, setLoading] = React.useState<"" | "loading">("");
  const [success, setSuccess] = React.useState(false);
  const name = useForm(false);
  const email = useForm("email");
  const message = useForm("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading("loading");

    if (email.validate() && message.validate()) {
      const templateParams = {
        from_name: name.value,
        email: email.value,
        message: message.value,
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
            message.setValue("");
          },
          (err: Error) => {
            console.log("Erro ao enviar o menssagem");
            console.log(err);
            setLoading("");
            name.setValue("");
            email.setValue("");
            message.setValue("");
          }
        );
    } else {
      setLoading("");
    }
  }

  React.useEffect(() => {
    if (name.error || email.error || message.error) setSuccess(false);

    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }
  }, [success, name.error, email.error, message.error]);

  return (
    <FormStyled id="contact" className={theme}>
      <div className="wrapp">
        {sweet}
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h2>Entre em contato conosco e faça o seu pedido!</h2>
          </div>

          <div className="fields">
            <Field label="Nome" type="text" name="name" {...name} />
            <Field label="Email" type="email" name="email" {...email} />
            <Field
              label="Menssagem"
              type="textarea"
              name="message"
              {...message}
            />

            <button className={loading}>Enviar</button>
            {success && (
              <p className="success">Menssagem enviada com sucesso!</p>
            )}
          </div>
        </form>
      </div>
    </FormStyled>
  );
}

export default Contact;
