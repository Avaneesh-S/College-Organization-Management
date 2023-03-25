import React, { useEffect,useState } from 'react'

function Attendance() {

    // {/* {rows} */}
    //   {/* {data.map((row, index) =>
    //   (<tr key={index}>
    //     <td>{row.id}</td>
    //     <td>{row.name}</td>
    //   </tr>))} */}

    const [data, setData] = useState([]);

    const get_attendance=async(e)=>{
        // e.preventDefault()
        const response=await fetch('/attendance',{
            method:'GET'
        })

        const json=await response.json()
        console.log(json.value)

        setData(json.value)
    }

    useEffect(()=>{
        get_attendance()
    },[])

    

  return (
    <>
    <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table></>
  )
}

export default Attendance;
