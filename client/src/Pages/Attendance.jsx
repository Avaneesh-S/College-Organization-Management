import React, { useEffect, useState } from "react";

function Attendance() {
  const [data, setData] = useState([]);
  let [attenStatus, setattenStatus] = useState([]);

  const get_attendance = async (e) => {
    const response = await fetch("/getStudentDetails", {
      method: "POST",
    });

    const json = await response.json();
    setData(json[0]);
  };

  useEffect(() => {
    get_attendance();
  }, []);



  const markAP = (status, index) => {
    setattenStatus(prevStatus => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = status;
      return updatedStatus;
    });
  };
  useEffect(() => {
    console.log(attenStatus);
  }, [attenStatus]);


  const submitAttendance = async () => {
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
            <td>{row}</td>
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
