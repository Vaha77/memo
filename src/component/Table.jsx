import React, { useState } from 'react'
import { data } from '../data/data'


 const Student = () => {
     
    const [search, setSeachTerm] = useState('')
  return (
    <div className=''>
        <input type="text" className='totoinsert'  placeholder='search' onChange={(event) => { 
            setSeachTerm(event.target.value)
        }}/>
<h1>name</h1>
{
    data.filter((item)=>{
        if(search == ""){
            return item
        }else if (item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        return item    
        }
       
    }).map((item, i)=>{
        return (
            <div className="item">
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.data}</p>
            </div>
            
        )
    })
}
    </div>
  )
}

export default Student