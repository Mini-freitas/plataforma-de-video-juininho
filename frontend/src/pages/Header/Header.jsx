import  "./style.css";
import logo from "../../assets/logo/logo_j11.png";
function Header() {
 
  return (
    <div className="header">
        <a href="" className="logo"><img src={logo} alt="Logo" /></a>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
            <svg xmlns="http://www.w3.org/2000/svg" id="open-menu" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>      
            <svg xmlns="http://www.w3.org/2000/svg" id="close-menu" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>  
        </label>

        <nav className="navbar">
            <a href="" style={{ "--i": 0 }}>Mentores</a>
            <a href="" style={{ "--i": 1 }}>Conteudos</a>
            <a href="" style={{ "--i": 2 }}>App</a>
            <a href="" style={{ "--i": 3 }}>Depoimentos</a>
            <a href="" style={{ "--i": 4 }}>Blog</a>
        </nav>
        <a href="" id="btEntrar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <h3>
            Entrar  
            </h3>
        </a>
    </div>
  );
}

export default Header;