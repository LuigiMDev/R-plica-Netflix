import React from "react";
import "./Selection.css";

const Selection = ({setPerfil}) => {

    const perfil1 = "https://loodibee.com/wp-content/uploads/Netflix-avatar-3.png";
    const perfil2 = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
    const perfil3 = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.jpg";
    const perfil4 = "https://loodibee.com/wp-content/uploads/Netflix-avatar-11.png";

    const handlePerfil = (perfil) => {
        setPerfil(perfil);
    }

  return (
    <div className="selection__div">
      <header className="selection__header">
        <div className="header__div">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
            />
          </a>
        </div>
      </header>
      <section className="selection__section">
        <h1>Quem está assistindo?</h1>
        <div className="perfis">
          <div className="perfil__div1" onClick={() => handlePerfil(perfil1)} >
            <img src={perfil1} alt="perfil 1" />
          </div>
          <div className="perfil__div2" onClick={() => handlePerfil(perfil2)} >
            <img src={perfil2} alt="perfil 2" />
          </div>
          <div className="perfil__div3" onClick={() => handlePerfil(perfil3)} >
            <img src={perfil3} alt="perfil 3" />
          </div>
          <div className="perfil__div4" onClick={() => handlePerfil(perfil4)} >
            <img src={perfil4} alt="perfil 4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Selection;
