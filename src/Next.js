// API assignment
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Next() {
    const [api,getapi] = useState([]);

    useEffect(()=>
    {
        const fetchData = async ()=>
        {
            await fetch("https://api.sampleapis.com/futurama/characters")
            .then(response=>response.json())
            .then((data)=>
            {
              console.log(data);
              const response1 = data.map((ele)=>
              ({
                 fName:ele.name?.first,
                 lName:ele.name?.last,
                 umar:ele?.age,
                 genderData:ele.gender,
                 planet: ele.homePlanet,
                 type:ele.species,
                 work:ele.occupation
              }));
              getapi(response1);
            })
        }
    fetchData();
    },[])
    return (
        <div>
      <h1>Futurama Characters</h1>      
       <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>First Name</th>  
      <th>Last Name</th>  
      <th>Age</th>
      <th>Gender</th>  
      <th>planet</th>
      <th>Species</th>
      <th>Occupation</th>
    </tr>
  </thead>
  <tbody>
  {api.map((resp) => (
        <tr>
          <td>{resp.fName}</td>
          <td>{resp.lName}</td>
          <td>{resp.umar}</td>
          <td>{resp.genderData}</td>
          <td>{resp.planet}</td>
          <td>
            <strong>{(resp.type)}</strong>
          </td>
          <td>
            <strong>{(resp.work)}</strong>
          </td>
        </tr>
      ))}
  </tbody>
</Table>
        </div>
    )
}

export default Next
