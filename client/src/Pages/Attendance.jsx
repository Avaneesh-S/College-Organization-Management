import React, { useEffect, useState } from "react";
import AttendanceCard from "../Attendance/AttendanceCard";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/Navbar";

function Attendance() {
  const [data, setData] = useState([]);
  let [attenStatus, setattenStatus] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };
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
    setattenStatus((prevStatus) => {
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
        body: JSON.stringify({ attendance: attenStatus }),
      });
      const data = await response.json();
      if (data.status === 400) {
        alert("Data is submited");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
        <nav className="z-10 backdrop-filter overflow-x-hidden backdrop-blur-md bg-slate-900/60 absolute top-0 w-full py-3 sm:px-8 px-3 h-fit flex justify-between">
      <div className="flex items-center">
        <img
          className="h-8 w-auto mr-2"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <h1 className="text-white text-xl font-bold">
          Organization Management System
        </h1>
      </div>
      <div className="sm:flex hidden">
        <ul className="flex justify-between items-center gap-6 px-4">
          <li className="text-slate-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            About
          </li>
          <li className="text-slate-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
    <div className="w-full h-full flex flex-col gap-8 p-2 sm:pt-[10%] sm:px-[20%] justify-start">
      <table className="border-collapse bg-slate-800 text-slate-200 border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Present</th>
            <th className="border border-gray-400 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="border border-gray-400 px-4 py-2" key={index}>
              <td className="border text-center border-gray-400 px-4 py-2">
                {index + 1}
              </td>
              <td className="border border-gray-400 px-4 py-2">{row}</td>
              <td className="border text-center border-gray-400 px-4 py-2">
                {attenStatus[index]}
              </td>
              <td className="border border-gray-400 px-4 py-2 flex gap-3">
                {/* <AttendanceCard
                  key={index}
                  title="Present"
                  icon={"check"}
                  onSelect={() => {
                    handleCardSelect(index);
                  }}
                  isSelected={selectedCard === index}
                  color={"bg-green-600 text-green-800"}
                /> */}
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded"
                  onClick={() => markAP(1, index)}
                >
                  Present
                </button>
                <button
                  type="submit"
                  className="bg-red-600 text-white p-2 rounded"
                  onClick={() => markAP(0, index)}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tbody></tbody>
      </table>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
          onClick={() => submitAttendance()}
        >
          Submit
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Attendance;
