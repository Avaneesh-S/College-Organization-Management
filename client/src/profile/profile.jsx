import React, { useState , useEffect } from "react";
import './style.css';

function ProfilePage() {
  const [name,setName ] = useState('');
  const [designation,setDesignation]=useState('')
  const [organisation,setOrganisation]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [address,setAddress]=useState('')
  const [education,setEducation]=useState([])

  const get_details=async(c)=>{
    const response=await fetch('/profile',{
      method:'GET'
    })

    const json=await response.json()

    console.log(json.value)
    setName(json.value.Name)
    setDesignation(json.value.Designation)
    setOrganisation(json.value.Organisation)
    setEmail(json.value.Email)
    setPhone(json.value.Phone)
    setAddress(json.value.Address)

    const temp_list=[]
    for(let i=0;i<json.value.Education.length;i++)
    {
      temp_list.push(<ul>{json.value.Education[i]}</ul>)

    }
    setEducation(temp_list)
    //setEducation(json.value.Education)
  }

  useEffect(()=>{
    get_details()
  },[])


  return (
    <div className="profile-container">
      <header>
        <h1>DETAILS</h1>
        <button>Edit Profile</button>
      </header>
      <div className="profile-content">
        <div className="profile-pic">
          <img src="https://i.imgur.com/9V7mTir.jpg" alt="Profile Picture" />
        </div>
        <div className="profile-info">
          <h2><strong>Name:</strong>{name}</h2>
          <p><strong>Designation:</strong>{designation}</p>
          <p><strong>Organisation:</strong>{organisation}</p>
          <div className="contact">
            <p><strong>Email:</strong>{email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Address:</strong>{address}</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              {education}
            </ul>
          </div>
          <div className="skills">
            {/* <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

