import './Footer.scss'
import penIcon from '../Images/pen.svg'
import locationIcon from '../Images/location.svg'
import help from '../Images/help-circle-one.svg'
import fon from '../Images/fon.svg'
import searchIcon from "../Images/Search icon.svg";
import btn from '../Images/Shape 30.svg'
import googlePlay from '../Images/Shape 29.svg'
import appStore from '../Images/Shape 28.svg'
import {Link} from "react-router-dom";
import phone from '../Images/smartphone 1.svg'

function Footer(){
    return <footer>
        <div className="upFooter">
            <div>
                <img src={penIcon} alt="pen icon"/>
                <p>
                    <p>Как получить ЭЦП?</p>
                    <span>Подробная инструкция</span>
                </p>
            </div>
            <div>
                <img src={locationIcon} alt="location icon"/>
                <p>
                    <p>Как получить ЭЦП?</p>
                    <span>Подробная инструкция</span>
                </p>
            </div>
            <div>
                <span className={'icon'}>
                    <img src={fon} alt=""/>
                    <img className={"helpIcon"} src={help} alt="help icon"/>
                </span>
                <p>Техническая поддержка</p>
            </div>
        </div>
        <div className={"middleFooter"}>
            <div className={"menu"}>
                <div>
                    <Link to={"/"}><p>О портале</p></Link>
                    <Link to={"/"}><p>Сайт ГНК</p></Link>
                    <Link to={"/"}><p>Для разработчиков</p></Link>
                    <Link to={"/"}><p>Обратная связь</p></Link>
                    <Link to={"/"}><p>Статистика</p></Link>
                </div>
                <div>
                    <Link to={"/"}><p>Опросы</p></Link>
                    <Link to={"/"}><p>Документы, направляемые через персональный кабинет</p></Link>
                    <Link to={"/"}><p> Проверить подлинность документа</p></Link>
                </div>
            </div>
            <div className={"searchPart"}>
                <div className={"searchPlace"}>
                    <input placeholder={"Search...."} type="text"/>
                    <img src={searchIcon} alt="search icon"/>
                </div>
                <div className={"downloadApp"}>
                    <img src={btn} alt="546"/>
                    <div>
                        <img src={googlePlay} alt="google play icon"/>
                        <img src={appStore} alt="app store icon"/>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="downFooter">
            <p> © 2021 Государственный налоговый комитет.  Полное или частичное использование материалов  возможно только с активной гиперссылкой.</p>
            <p>Электронные налоговые услуги: портал электронных государственных услуг налоговых органов.</p>
            <div>
                <img src={phone} alt="phone icon"/>
                <span>Колл-центр:</span>
                <span className={"number"}>1198</span>
            </div>
        </div>
    </footer>
}
export default Footer