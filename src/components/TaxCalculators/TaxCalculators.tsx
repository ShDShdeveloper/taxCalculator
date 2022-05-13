import './taxCalculators.scss'
import {Link} from "react-router-dom";
import {useState} from "react";

function TaxCalculators(){
    const [link, setLink] = useState('')
    const calculators = [
        {
            name: "Солиқ юки калькулятори ",
            value: "soliq-yuki"
        },
        {
            name: "Юридик шахслардан олинадиган ер солиғи ",
            value: "YShYS"
        },
        {
            name: "Жисмоний шахслардан олинадиган даромад солиғи ",
            value: "JShDS"
        },
        {
            name: "Жисмоний шахслардан олинадиган сув ресурсларидан фойдаланиш солиғи ",
            value: "JShSS"
        },
        {
            name: "Жисмоний шахслардан олинадиган мол-мулк солиғи ",
            value: "JShMMS"
        },
        {
            name: "Қўшимча қиймат солиғи  ",
            value: "QQS"
        },
        {
            name: "Юридик шахслардан олинадиган мол-мулк солиғи ",
            value: "YShMMS"
        },
        {
            name: "Якка тартибдаги тадбиркорлардан олинадиган қатъий белгиланган миқдордаги солиқ  ",
            value: "YaTTQBS"
        },
        {
            name: "Жисмоний шахслардан олинадиган ер солиғи  ",
            value: "JShYS"
        },

    ]
    return <section className={"sectionOne"}>
            <h3>Калькуляторни танланг</h3>
        <form>
            {
                calculators.map((item, index)=><div className={"calculator"} key={index}>
                    <input type="radio" id={item.value} value={item.value} onChange={(e)=>setLink(e.target.value)}/>
                    <label htmlFor={item.value}>{item.name}</label>
                </div>)
            }
        </form>
        <div className={"authorization"}>
        <p>Ўз корхонангизга тегишли солиқ юкини ҳисоблаш ва уни соҳа бўйича ўртача кўрсаткичлари билан солиштириш хоҳишингиз бўлган тақдирда, ЭРИ орқали авторизациядан ўтишингиз лозим.</p>
        <div>
            <a href="https://data.gov.uz/uz/user/register"> <button>Авторизациядан ўтиш</button> </a>
        </div>
        </div>
        <div className={"nextStep"}>
            <h3>2-дан 1 - қадам</h3>
            <Link className={"link"} to={link}> <button onClick={()=>  link ? '' : alert("Илтимос, Калкулятор танланг")}> Кейинги қадам  {` > `}  </button> </Link>
        </div>
    </section>
}
export default TaxCalculators