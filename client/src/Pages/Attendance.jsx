import React from 'react'

function Attendance() {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, []);

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
      {/* {rows} */}
      {data.map((row, index) =>
      (<tr key={index}>
        <td>{row.id}</td>
        <td>{row.name}</td>
      </tr>))}
    </tbody>
  </table></>
  )
}
