import React from 'react'
import './Header.css'

const Header = ({headerBackground, perfil}) => {
  return (
    <header className={headerBackground && 'header__black'}>
        <div className="header__logo">
            <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
            </a>
        </div>
        <div className="header__user">
            <a href="#">
                <img src={perfil} alt="Usuário" />
            </a>
        </div>
    </header>
  )
}

export default Header