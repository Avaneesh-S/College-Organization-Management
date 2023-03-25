import React, { useEffect, useState } from "react";

function Attendance() {
  const [data, setData] = useState([]);
  let [attenStatus, setattenStatus] = useState([]);

  const get_attendance = async (e) => {
    const response = await fetch("/attendance", {
      method: "GET",
    });

    const json = await response.json();
    // console.log(json.value);

    setData(json.value);
  };

  useEffect(() => {
    get_attendance();
  }, []);

  const markAP = (status, index) => {
    if(attenStatus.length>index+1)
    {
      attenStatus[index]=status;
      return;
    }
    setattenStatus(prevStatus => [...prevStatus, status]);
  };
  useEffect(() => {
    console.log(attenStatus);
  }, [attenStatus]);


  const submitAttendance = async () => {
    console.log('Submitted');
    try {
      const response = await fetch("/submitAttendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  attendance: attenStatus }),
      });
      const data = await response.json();
      if(data.status===400)
      {
        alert('Data is submited');
      }
    } catch (err) {
      console.error(err);
    }
  };
  

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
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.RegNo}</td>
            <td>{row.Name}</td>
            <td>
              <button
                type="submit"
                style={{ backgroundColor: "green" }}
                onClick={()=>markAP(1, index)}
              >
                Present
              </button>
              <button
                type="submit"
                style={{ backgroundColor: "red" }}
                onClick={()=>markAP(0, index)}
              >
                Absent
              </button>
            </td>
          </tr>
        ))}
        </tbody>
        <tbody></tbody>
      </table>
      <button type='submit' onClick={()=>submitAttendance()}>Submit</button>
    </>
  );
}

export default Attendance;
