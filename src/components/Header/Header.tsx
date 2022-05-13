import taxLogo from '../../Images/taxLogo.svg'
import callIcon from '../../Images/callIcon.svg'
import searchIcon from '../../Images/Search icon.svg'
import menuIcon from '../../Images/Menu icon.svg'
import closeIcon from '../../Images/closeIcon.png'
import helpicon from '../../Images/helpicon.png'
import {Link} from "react-router-dom";
import './Header.scss'
import {useState} from "react";

function Header(){
    const [searchPlace, setSearchPlace] = useState(false)
    return <header>
        <div className={"headerUp"}>
            <div className="logo">
                <div>
                    <img src={taxLogo} alt="tax logo"/>
                    <h5>Электронные налоговые услуги</h5>
                </div>
            </div>
            <div className={"navLeft"}>
                <div className={"callCenter"}>
                    <div className={"flex"}>
                        <div>
                            <img src={callIcon} alt="call icon"/>
                            <span>1198</span>
                            <p>Колл–центр</p>
                        </div>
                        <select className={"mb-3"}>
                            <option value="uz">O'zbekcha</option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                    </div>
                    <div className={"menuIcon"}>
                        <img onClick={()=>setSearchPlace(true)} className={"mx-2"} src={searchIcon} alt="search icon"/>
                        <img className={"mx-2"} src={menuIcon} alt="menu icon"/>
                    </div>
                </div>
            </div>
            {
                searchPlace ? <div className={"searchPlace"}>
                    <input placeholder={"Search...."} type="text"/>
                    <img src={searchIcon} alt="search icon"/>
                    <img onClick={()=>setSearchPlace(false)} src={closeIcon} alt="close icon"/>
                </div>: ''
            }
        </div>
        <div className={"headerMiddle"}>
            <div className="hoverMenu">
                <Link className={"link"} to={"/"}>Главная</Link>
            </div>
            <div className="hoverMenu">
                <Link className={"link"} to={"/"}>Новое на портале</Link>
            </div>
            <div className="hoverMenu">
                <Link className={"link"} to={"/"}>Все услуги</Link>
            </div>
            <div className="hoverMenu">
                <Link className={"link"} to={"/"}>Сайт ГНК</Link>
            </div>
            <div className="hoverMenu">
                <Link style={{color: "grey"}} className={"link"} to={"/"}>Техническая поддержка</Link>
            </div>
        </div>
        <div className="headerDown">
            <h1>Солиқ калькуляторлари </h1>
            <span>Главная — Услуги и сервисы — </span> <span style={{color: "grey"}}>Солиқ калькуляторлари  </span> <br/>
            <Link to={"/taxCalculators"}><button>Солиқ калькуляторлари </button></Link>
            <Link to={"/help"}><button><img src={helpicon} alt="help icon"/> Помощь</button></Link>
        </div>
    </header>
}
export default Header