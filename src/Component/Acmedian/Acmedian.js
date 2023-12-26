import React, { useState } from 'react'
import data from './data'
import '../Acmedian/acmedian.css'
const Acmedian = () => {
    const [singleSelect, setSingleSelect] = useState(null)
    const handleSingleSelect = (getCurrentId) => {
        setSingleSelect(singleSelect === getCurrentId ? null : getCurrentId)
    }
    console.log(singleSelect);
    return (
        <div className='wapper'>
            <button >Enable multi select</button>
            <div className="title">
                {
                    data.map((ele) => {
                        return (
                            <div className="item">
                                <div onClick={() => handleSingleSelect(ele.id)} className='acodian' key={ele.id}>
                                    <h3>{ele.title}+</h3>
                                </div>
                                {
                                    singleSelect === ele.id ?
                                        <div className="content">
                                            {ele.description}
                                        </div>
                                        : null
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