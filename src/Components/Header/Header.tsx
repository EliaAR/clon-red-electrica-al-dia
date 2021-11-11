import { useState } from "react";
import "./Header.scss";
import logo from "../../Images/logo.png";

function Header() {
  const [burguer, setBurguer] = useState(false);
  const [magnifier, setMagnifier] = useState(false);

  return (
    <section className="header" id="RUTAalHEADER">
      <section className="header__imgContainer">
        <img
          src={logo}
          alt="logo Red Eléctrica España"
          title="logo Red Eléctrica España"
          className="header__img"
        />
      </section>
      <section className="header__search">
        {magnifier ? (
          <form className="header__searchForm">
            <div className="header__searchDiv">
              <label htmlFor="search">¿Qué buscas...?</label>
              <input
                type="text"
                name="search"
                id="search"
                className="header__searchInput"
              />
              <button className="header__searchButton">Buscar</button>
            </div>
            <button
              onClick={(evt) => setMagnifier(false)}
              className="header__searchButtonClose far fa-times-circle"
            ></button>
          </form>
        ) : (
          <button
            onClick={() => setMagnifier(true)}
            className="header__searchOpen  fas fa-search"
          ></button>
        )}
      </section>
      <section className="header__linkContainer">
        {burguer ? (
          <nav className="header__linkNav">
            <section className="header__linkOne">
              <a href="" className="header__linkOneA">
                Accionistas e inversores
              </a>
              <a href="" className="header__linkOneA">
                Sala de prensa
              </a>
              <a href="" className="header__linkOneA">
                Proveedores
              </a>
              <a href="" className="header__linkOneA">
                ExpoREE
              </a>
              <a href="" className="header__linkOneA">
                Carreras
              </a>
            </section>
            <section className="header__linkTwo">
              <a href="" className="header__linkTwoA">
                Conócenos
              </a>
              <a href="" className="header__linkTwoA">
                Actividades
              </a>
              <a href="" className="header__linkTwoA">
                Gobierno corporativo
              </a>
              <a href="" className="header__linkTwoA">
                Sostenibilidad
              </a>
              <a href="" className="header__linkTwoA">
                Red21
              </a>
              <a href="" className="header__linkTwoA">
                RedData
              </a>
              <a href="" className="header__linkTwoA">
                Clientes
              </a>
            </section>
            <section className="header__linkLanguages">
              <button className="header__linkSpanish">Español</button>
              <button className="header__linkEnglish">English</button>
            </section>
          </nav>
        ) : (
          <button
            onClick={() => setBurguer(true)}
            className="header__linkButton fas fa-bars"
          ></button>
        )}
      </section>
      {burguer ? (
        <section>
          <button
            onClick={() => setBurguer(false)}
            className="header__linkButton fas fa-times"
          ></button>
        </section>
      ) : null}
    </section>
  );
}

export { Header };
