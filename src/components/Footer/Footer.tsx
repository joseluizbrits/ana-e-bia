import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FooterStyled } from "./FooterStyled";
import Instagram from "../../assets/svg/Instagram";
import Facebook from "../../assets/svg/Facebook";
import WhatsApp from "../../assets/svg/WhatsApp";

import { navigation } from "../../utils/navigation";

function Footer({ theme }: { theme?: string }) {
  const URL = useLocation();

  const routes = navigation.filter(({ route }) => route !== URL.pathname);

  return (
    <FooterStyled className={theme}>
      <div className="card">
        <div className="wrapp">
          <div className="brand">
            <a href="/" className="logo">
              <span>Ana & Bia</span>
              <span>doces</span>
            </a>

            <p className="description">
              Confeitaria e Escola de Doces Ana & Bia Ltda.
            </p>

            <ul className="networks">
              <li className="instagram">
                <a href="#">
                  <Instagram />
                </a>
              </li>

              <li className="facebook">
                <a href="#">
                  <Facebook />
                </a>
              </li>

              <li className="whatsapp">
                <a href="#">
                  <WhatsApp />
                </a>
              </li>
            </ul>

            <nav>
              <ul>
                {routes.map(({ page, route }, index) => (
                  <li key={route}>
                    <Link to={route}>{page}</Link>
                    {index < 2 && <hr />}
                  </li>
                ))}
              </ul>
            </nav>

            <p className="copyright">
              © Copyright {new Date().getFullYear()} -{" "}
              {new Date().getFullYear() + 1} | Ana & Bia | Todos os Direitos
              Reservados | Criado por BRITS
            </p>
          </div>

          <div className="location">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6636085318605!2d-43.39518962697059!3d-22.999394295173477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb990e1fc13d%3A0xad7dbc00d175eedb!2sR.%20Isidoro%20Lopes%2C%20146%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-273!5e0!3m2!1spt-BR!2sbr!4v1693526535243!5m2!1spt-BR!2sbr"
                width="360"
                height="600"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <p className="address">Rua Ali Perto, 123 - Barra da Tijuca, RJ</p>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;
