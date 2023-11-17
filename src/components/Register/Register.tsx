import React from "react";
import { RegisterStyled } from "./RegisterStyled";
import img from "../../assets/img/img-register.jpg";
import Field from "../Field/Field";
import useForm from "../../hooks/useForm";
import emailjs from "@emailjs/browser";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Register() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#register",
            start: "15% 80%",
            end: "bottom center",
          },
        })
        .fromTo(
          "#register img",
          {
            width: 0,
            ease: "power3.out",
            duration: 2,
          },
          {
            width: "100%",
          }
        )
        .fromTo(
          "#register img",
          {
            boxShadow: "0 0 0 0 var(--p5)",
          },
          {
            boxShadow: "-20px 20px 0 0 var(--p5)",
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#register .content h2",
            start: "top 80%",
            end: "bottom center",
            markers: true,
          },
        })
        .from("#register .content h2 > *", {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
          duration: 1,
        })
        .from(
          "#register form",
          {
            y: -100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.3"
        )
        .from(
          "#register form .wrapp > *",
          {
            y: -40,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out",
            duration: 1,
          },
          "<+0.2"
        );
    });

    return () => ctx.revert();
  }, []);

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
    <RegisterStyled id="register">
      <div className="content">
        <h2>
          <span>Isabela Manfrini</span>
          <span>nossa diretora de arte te convida a se inscrever</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="wrapp">
            <Field label="Nome" type="text" name="name" {...name} />
            <Field label="Email" type="email" name="email" {...email} />

            <div className="btn">
              <button className={loading}>Enviar</button>
            </div>
            {success && (
              <p className="success">
                Enviaremos por email as instruções para a realização da
                inscrição
              </p>
            )}
          </div>
        </form>
      </div>

      <div className="image">
        <img
          src={img}
          alt="Mulher com garfo e faca na mão de frente para um doce"
        />
      </div>
    </RegisterStyled>
  );
}

export default Register;
