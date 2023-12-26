import React, { useState } from 'react'
import data from './data'
import '../Acmedian/acmedian.css'
const Acmedian = () => {
    const [singleSelect, setSingleSelect] = useState(null)
    const [EnableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])
    const handleSingleSelect = (getCurrentId) => {
        setSingleSelect(singleSelect === getCurrentId ? null : getCurrentId)
    }
    // console.log(singleSelect);
    const enablemultiselection = () => {
        setEnableMultiSelect(!EnableMultiSelect)
        console.log('ok');
    }
    const handleMultiple = (id) => {
        let copyMultiple = [...multiple]
        const findIndex = copyMultiple.indexOf(id)
        if (findIndex === -1) {
            copyMultiple.push(id)
        } else {
            copyMultiple.splice(findIndex, 1)
        }
        setMultiple(copyMultiple)
        console.log(findIndex, EnableMultiSelect);
    }
    console.log(EnableMultiSelect, 'kkkkk');
    return (
        <div className='wapper'>
            <button onClick={enablemultiselection}>Enable multi select {EnableMultiSelect}</button>
            <div className="title">
                {
                    data.map((ele) => {
                        return (
                            <div className="item">
                                <div onClick={EnableMultiSelect ? () => handleMultiple(ele.id) : () => handleSingleSelect(ele.id)} className='acodian' key={ele.id}>
                                    <h3>{ele.title}+</h3>
                                </div>
                                {
                                    EnableMultiSelect ? multiple.indexOf(ele.id) !== -1 && <div className="content">
                                        {ele.description}
                                    </div>:
                                        singleSelect === ele.id && 
                                            <div className="content">
                                                {ele.description}
                                            </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Acmedian