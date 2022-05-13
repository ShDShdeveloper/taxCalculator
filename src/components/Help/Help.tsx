import chartOne from '../../Images/chart 1.svg'
import chatIcon from '../../Images/chat.svg'
import commentIcon from '../../Images/comment.svg'
import smartPhoneIcon from '../../Images/smartphone 1.svg'
import FileIcon from '../../Images/file-text.svg'
import helpIcon from '../../Images/help-circle.svg'
import infoIcon from '../../Images/info 5.svg'
import './Help.scss'
import {Link} from "react-router-dom";
import {useState} from "react";
function Help(){
    const [starOne, setStarOne] = useState(true)
    const [starTwo, setStarTwo] = useState(true)
    const [starThree, setStarThree] = useState(true)
    const [starFour, setStarFour] = useState(false)
    const [starFive, setStarFive] = useState(false)
    return <section className={"sectionThree"}>
        <div className={"nazad"}>
            <div className={"nazadbtn"}>
                <Link to={"/"}><button> {"<"} Назад</button></Link>
            </div>
            <div className={"servis"}>
                <div>
                    <p>Оценить услугу: </p>
                    <span>
                    <span onClick={()=>setStarOne(!starOne)} className={"star"}>{starOne ? <span>&#9733;</span> : <span>&#9734;</span>}</span>
                    <span onClick={()=>setStarTwo(!starTwo)} className={"star"}>{starTwo ? <span>&#9733;</span> : <span>&#9734;</span>}</span>
                    <span onClick={()=>setStarThree(!starThree)} className={"star"}>{starThree ? <span>&#9733;</span> : <span>&#9734;</span>}</span>
                    <span onClick={()=>setStarFour(!starFour)} className={"star"}>{starFour ? <span>&#9733;</span> : <span>&#9734;</span>}</span>
                    <span onClick={()=>setStarFive(!starFive)} className={"star"}>{starFive ? <span>&#9733;</span> : <span>&#9734;</span>}</span>
                </span>
                </div>
                <div>
                    <p>Написать отзыв</p>
                    <img src={commentIcon} alt="comment icon"/>
                </div>
                <div>
                    <p>Все отзывы</p>
                    <img src={chatIcon} alt="chat icon"/>
                </div>
                <div>
                    <p>60 825</p>
                    <img src={chartOne} alt="chart icon"/>
                </div>
            </div>
        </div>
        <div className="help">
            <div className="contact">
                <h3>Помощь специалистов</h3>
                <div className={"flex"}>
                    <div>
                        <button className={"ins"}>Инспекция</button> <br/>
                        <button className={"btn"}>Управление</button> <br/>
                        <button className={"btn"}>Комитет</button> <br/>
                        <button className={"btn"}>Колл-центр</button> <br/>
                    </div>
                    <div>
                        <span className={"employee"}>Юнусов Бахтиёр Мухтарович</span>
                        <p>Главный инспектор государственного налогового комитета Республики Узбекистан</p>
                        <img src={smartPhoneIcon} alt="smartphone icon"/>
                        <span>(0 371) 250-15-25</span>
                    </div>
                </div>
            </div>
            <div className="questions">
                <h3>Вам могут понадобиться</h3>
               <div>
                   <div className={"icons"}>
                       <img src={FileIcon} alt="help icon"/> <br/>
                       <img src={helpIcon} alt="help icon"/> <br/>
                       <img src={infoIcon} alt="info icon"/> <br/>
                   </div>
                   <div>
                       <p>Список телефонных номеров обслуживающих банков</p>
                       <p>Помощь, инструкции и онлайн-поддержка</p>
                       <p>Часто задаваемые вопросы</p>
                   </div>
               </div>
            </div>
        </div>
    </section>
}
export default Help