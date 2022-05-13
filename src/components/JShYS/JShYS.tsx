import iconButton from '../../Images/Icon button.svg'
import downloadIcon from '../../Images/download.svg'
import './JShYS.scss';
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";

function JShYS(){
    const {handleSubmit, register, formState: {errors}} = useForm()
    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    const [info, setInfo] = useState({
        district: "",
        farming: "",
        illegalLandArea: "",
        legalLandArea: "",
        neighborhood: "",
        price: "",
        privileges: false,
        rate: "",
        region: "",
        street: "",
        totalLandArea: "",
        typeLand: "",
        year: ""
    })
    const [result, setResult] = useState(false)
    const [tax, setTax] = useState(0)
    const regions = ["Aндижон вилояти", "Бухоро вилояти", "Фарғона вилояти", "Жиззах вилояти", "Наманган вилояти", "Навоий вилояти", "Қашқадарё вилояти", "Қорақалпоғистон Республикаси", "Самарқанд вилояти", "Сирдарё вилояти", "Сурхандарё вилояти", "Тошкент шаҳри", "Тошкент вилояти", "Хоразм вилояти"]
    const privileges = [
        "«Ўзбекистон Қаҳрамони», Совет Иттифоқи Қаҳрамони, Меҳнат Қаҳрамони унвонларига сазовор бўлган, учала даражадаги Шуҳрат ордени билан тақдирланган фуқаролар. ",
        "Боқувчисини йўқотган кўп болали оилалар. Ота ва онадан бири ёхуд ота-она вафот этган кўп болали оилалар солиқ солиш мақсадида боқувчисини йўқотган кўп болали оилалардир. ",
        "Уруш ногиронлари ва қатнашчилари, шунингдек доираси қонунчилик билан белгиланадиган уларга тенглаштирилган шахслар. ",
        "Чернобиль АЭСдаги авария оқибатларини тугатишда иштирок этганлик учун имтиёзлар оладиган фуқаролар (шу жумладан вақтинча юборилган ёки хизмат сафарига юборилган) фуқаролар. ",
        "I ва II гуруҳ ногиронлиги бўлган шахслар. ",
        "Энергия ресурсларининг амалдаги тармоқларидан тўлиқ узиб қўйилган турар жойларда қайта тикланадиган энергия манбаларидан фойдаланувчи шахслар — қайта тикланадиган энергия манбалари ўрнатилган ойдан эътиборан уч йил муддатга.",
        "Ёлғиз пенсионерлар. Ёлғиз ёки вояга етмаган болалари билан ёхуд ногирон боласи билан бирга алоҳида уйда яшовчи пенсионерлар ёлғиз пенсионерлар деб тушунилади. "
                        ]

    function onSubmit(data : any){
        setResult(true)
        setInfo({...data})
        const {privileges, farming, price, illegalLandArea, legalLandArea, rate} = data
        if(data.privileges.length>0){
            setTax(0)
        } else {
            if(data.farming === "yes"){
                setTax(0.95*price/100)
            } else{
                if(data.illegalLandArea){
                    setTax(legalLandArea*rate + 3*illegalLandArea*rate)
                } else{
                    setTax(legalLandArea*rate)
                }
            }
        }
    }
    return <section className={"sectionTwo"}>
        <h3>Жисмоний шахслардан олинадиган ер солиғи калькулятори</h3>
        <button className={"importantInfo"}><img src={iconButton} alt="info icon"/> <a href={"#"}>Муҳим маълумот</a></button>
        <form id={"calculate"} action="#" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="year">Йил</label> <br/>
                <select {...register("year", {required: true})} id={"year"}>
                    <option> </option>
                    {
                        years.map((item, index)=> <option value={item} key={index}>{item}</option>)
                    }
                </select>
            </div>
            <div className={"fieldset"}>
                <label htmlFor="address">Ер участканинг жойлаш ҳудуди </label>
                    <fieldset>
                        <legend>Область</legend>
                        <select {...register("region", {required: true})}>
                            <option value={''}> </option>
                            {
                                regions.map((item, index)=> <option key={index} value={item}>{item}</option>)
                            }
                        </select>
                    </fieldset>
            </div>
            <div className={"fieldset"}>
                <fieldset>
                <legend>Район</legend>
                <input type="text" {...register("district", {required: true})}/>
                </fieldset>
            </div>
            <div className={"fieldset"}>
                <fieldset>
                    <legend>Махалля</legend>
                    <input type="text" {...register("neighborhood", {required: true})}/>
                </fieldset>
            </div>
            <div className={"fieldset"}>
                <fieldset>
                    <legend>Улица</legend>
                    <input type="text" {...register("street", {required: true})}/>
                </fieldset>
            </div>
            <div className={"widthInput"}>
                <label htmlFor="typeLand">Ер участканинг тури</label> <br/>
                <select {...register("typeLand", {required: true})} id="">
                    <option> </option>
                    <option value="turar joy">Турар жой</option>
                    <option value="noturar joy">Нотурар жой</option>
                </select>
            </div>
            <div className={"widthInput"}>
                <label htmlFor="farming">Ер участкаси деҳқон хўжалигини юритиш учун берилганми?</label> <br/>
                <select id={"farming"} {...register("farming", {required: true})}>
                    <option> </option>
                    <option value="yes">Ха</option>
                    <option value="no">Йўқ</option>
                </select>
            </div>
            <div className={"widthInput"}>
                <label htmlFor="price">Ер участканинг норматив қиймати, сўм </label> <br/>
                <input id={"price"} placeholder={"12345,34"} type="number" {...register("price", {required: true})}/>
            </div>
            <div className={"widthInput"}>
                <label htmlFor="rate">Солиқ ставкаси</label> <br/>
                <input id={"rate"} style={{background: "#F6F6F7"}} {...register("rate", {required: true})} placeholder={"12345,34"} type="number"/>
            </div>
            <span> </span>
            <div className={"widthInput2"}>
                <label htmlFor="total land area">Жами ер участканинг майдони, м2</label> <br/>
                <input id={"total land area"} type="number" {...register("totalLandArea", {required: true})}/>
            </div>
            <div className={"widthInput2"}>
                <label htmlFor="legal land area">Хужжат бўйича ер майдони, м2 </label> <br/>
                <input id={"legal land area"} type="number" {...register("legalLandArea", {required: true})}/>
            </div>
            <div className={"widthInput2"}>
                <label htmlFor="illegal land area" >Ноқонуний эгалланган ер майдони, м2</label> <br/>
                <input id={"illegal land area"} {...register("illegalLandArea")} type="number"/>
            </div>
            <span> </span>
            <h4>Ер эгаси ер солиғи бўйича солиқ имтиёзга эга бўлган фуқароларнинг қўйидаги тоифаларига кирадими? </h4>
            {
                privileges.map((item, index)=><div key={index} className="privilege">
                    <input {...register("privileges")} type="checkbox"/>
                    <label>{item}</label>
                </div>)
            }
        </form>
        <p className={"Errors"}>{(errors.illegalLandArea || errors.legalLandArea || errors.totalLandArea || errors.rate || errors.price ||
            errors.farming || errors.typeLand || errors.street || errors.neighborhood || errors.district || errors.region || errors.year) &&
            "Маълумотлар тўлиқ емас. Илтимос формани тўлиқ тўлдиринг!!!!"}</p>
        <div className={"calculateTax"}>
            <Link to={"/taxCalculators"}>
                <button>{`< Олдинги`}</button>
            </Link>
            <h3>2-дан 2-чи қадам</h3>
            <button type={"submit"} form={"calculate"}>Ҳисоблаш</button>
        </div>
        {
            result && <div className={"resultList"}>
                    <h1>Натижа</h1>
                <a href="#">Натижа қайдай ҳисобланган?</a>
            <div className="result">
                <p>
                    Размер земельного налога за {info.year} год для жилого земельного участка, {info.farming==="no" && "не"} предназначенного для ведения дехканского хозяйства,
                    расположенного: {info.region}, {info.district} район, махалля {info.neighborhood}, имеющего общую площадь {info.totalLandArea}
                    {info.illegalLandArea && info.illegalLandArea!="0" && `(в том числе незаконно занято ${info.illegalLandArea})`}, при отсутствии льготы по налогу на землю, уплачивается <b>по ставке {info.rate}</b> и составляет:
                </p>
                <h1>{tax}</h1>
                <div>
                    <p>
                        За земельные участки, отведенные в течение года, налог уплачивается физическими лицами начиная с месяца, следующего за месяцем, в котором предоставлен земельный участок. <br/> <br/>
                        В случае уменьшения площади земельного участка уплата налога прекращается (уменьшается) с месяца, в котором произошло уменьшение.
                    </p>
                    <p>
                        При установлении льгот по налогу этот налог не уплачивается с того месяца, в котором возникло право на льготу. В случае прекращения права на льготы по налогу этот налог начинает уплачиваться с месяца, следующего за месяцем, в котором прекращено это право. <br/> <br/>
                        Уплата налога физическими лицами за налоговый период производится равными долями до 15 апреля и 15 октября.
                    </p>
                </div>
            </div>
            <div className="download">
                <img src={downloadIcon} alt="download icon"/>
                <span>Выгрузить в:</span>
                <select>
                    <option selected={false}>Выберите формат...</option>
                    <option value="img">Image</option>
                    <option value="pdf">Word</option>
                </select>
                <button>Скачать</button>
            </div>
            </div>
        }
    </section>
}
export default JShYS