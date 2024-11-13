import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const connection = () => {
    // const [info, setinfo] = useState([])
    const [item, setitem] = useState('')
    // const [datatodo, setdatatodo] = useState([])
    // const endpoint = 'http://localhost:5000/home'
    const url = 'https://connecting-front-and-backend-9i7x.vercel.app/submit'
    // const endpoint = 'http://localhost:5000/getusername'
    // const fetchInfo = () => {
    //     axios.get(endpoint)
    //     .then((result) => {
    //         console.log(result)
    //         let data = result.data
    //         setinfo(data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }

//     const getData = () => {
//         axios.get(endpoint)
//         .then((result) => {
//             let datatodo = result.data
//             setdatatodo(datatodo)
//             console.log(result.data)        
//             console.log(datatodo)        
//         })
//         .catch((error) => {
//             console.log(error)
//         })
        
// }

    const submitInfo = () => {
        if(item === '') {
            alert("fill in values")
        } else {
            // console.log(name);
            let obj = {item}
            axios.post(url, obj)
            // .then(()=>console.log('sent'))
            // .catch(err=>console.log(err))
            // getData()
            
        }
    }
    // console.log("jdty"); 
    
    


        

    
    // useEffect(() => {
    //     getData()
    // }, [])
    
        
  return (
    <>
        <h1>Connection</h1>
        <input type="text" name='item' value={item} onChange={(e)=>{setitem(e.target.value)}}/>
        <button onClick={submitInfo}>Submit</button>

        {/* <table>
            <tbody>
                {datatodo.map((item,i)=>(
                    <tr key={i}>
                     <td className='text-white'>{item.item}</td>
                    </tr>
                ))}

               
            </tbody>
        </table> */}
       
    </>
  )
}

export default connection