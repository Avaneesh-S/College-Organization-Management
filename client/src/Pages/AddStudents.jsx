import React, { useState } from 'react';

function AddStudents() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    setStudents([...students, { name, email }]);
    setName('');
    setEmail('');
  };

  const handleRemoveStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('/submitStudents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ students }),
      });
      const data = await response.json();
      if (data.status === 400) {
        alert('Data is submitted');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={handleAddStudent}>
          Add
        </button>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(({ name, email }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <button type="button" onClick={() => handleRemoveStudent(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AddStudents;
