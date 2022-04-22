import React, {useEffect, useState} from 'react';
import helpImg from './helpImg.png'
import './style.css'
import axios from "axios";

const Help = () => {
    const [help, setHelp] = useState({})
    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/zzeon`)
            .then(({data}) => {
                setHelp(data[0].help)
            })
    }, [])
    return (
        <div className='container'>
            <div className="help">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={help.img} alt="" className='help__img'/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3 className="help__title">
                            Помощь
                        </h3>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                        {help.title1}
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {help.desc}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                        {help.title2}
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {help.desc}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                        {help.title3}
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {help.desc}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                        {help.title4}

                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                     aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is
                                        {help.desc}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                        {help.title5}
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                     aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is
                                        {help.desc}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                            aria-expanded="false" aria-controls="flush-collapseThree">
                                        {help.title6}
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is
                                        {help.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;


// {
//     help.helpItem ? help.helpItem.map(item => (
//         <div className="accordion-item mb-2" key={item.id}>
//             <h2 className="accordion-header" id="headingOne">
//                 <button onClick={() => handleClick(show)} className="accordion-button"
//                         type="button" data-bs-toggle="collapse"
//                         data-bs-target="#collapseOne" aria-expanded="true"
//                         aria-controls="collapseOne">
//                     {item.title}
//                 </button>
//             </h2>
//             <div id="collapseOne" className="accordion-collapse collapse show"
//                  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                 <div className="accordion-body">
//                     {item.desc}
//                 </div>
//             </div>
//         </div>
//     )) : null
// }