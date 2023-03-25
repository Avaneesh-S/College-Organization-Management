import React, { useState, useEffect } from "react";
import "./style.css";
import { FiEdit } from "react-icons/fi";


function ProfilePage() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState([]);

  const get_details = async (c) => {
    const response = await fetch("/profile", {
      method: "GET",
    });

    const json = await response.json();

    console.log(json.value);
    setName(json.value.Name);
    setDesignation(json.value.Designation);
    setOrganisation(json.value.Organisation);
    setEmail(json.value.Email);
    setPhone(json.value.Phone);
    setAddress(json.value.Address);

    const temp_list = [];
    for (let i = 0; i < json.value.Education.length; i++) {
      temp_list.push(<ul>{json.value.Education[i]}</ul>);
    }
    setEducation(temp_list);
    //setEducation(json.value.Education)
  };

  useEffect(() => {
    get_details();
  }, []);

  return (
    <div className="profile-container">
      <div className="border-gray-300 border-b-[1px] relative flex items-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full h-40">
        {/* <img
          src="https://static.vecteezy.com/system/resources/previews/007/940/474/non_2x/gradient-fluid-background-with-purple-blue-orange-color-smooth-gradient-illustration-suitable-for-background-web-design-banner-illustration-and-others-vector.jpg"
          alt="Profile banner"
          className="w-full h-40 object-cover"
        /> */}
        <div className="absolute left-4">
          <img
            src="https://picsum.photos/100/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="absolute right-4">
          <FiEdit/>
          </div>
      </div>
      <div className="profile-info">
        <h2>
          <strong>Name:</strong>
          {name}
        </h2>
        <p>
          <strong>Designation:</strong>
          {designation}
        </p>
        <p>
          <strong>Organisation:</strong>
          {organisation}
        </p>
          <p>
            <strong>Email:</strong>
            {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Address:</strong>
            {address}
          </p>
          <h3><strong>Education</strong></h3>
          <ul>{education}</ul>
        </div>
      </div>
  );
}

export default ProfilePage;
