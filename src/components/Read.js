import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState } from 'react';

function Read(){

    const [data, setData] = useState([{name: "Auriel James Fernandez", age: 22, email: "aurieljames11@gmail.com", status: "active"},
  {name: "Florencio De Vera", age: 23, email:"florenciovedera@gmail.com", status: "active"},
  {name: "Andronico Fernandez", age: 25, email: "andronico09@gmail.com", status: "inactive"},
  {name: "Rolando Pascual", age:23, email: "rolandopasscual@gmail.com", status: "inactive"},
  {name: "Jericho Valdez", age:23, email: "jerichorosales@gmail.com", status: "active"}])
  

  const deleteData = () =>{
    data.pop()
    setData([...data])
  }

  

    return(
        <MDBTable className='Taable'>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>Fullname</th>
            <th scope='col'>Age</th>
            <th scope='col'>Email</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
          </tr>
            </MDBTableHead>
            <MDBTableBody>
             
            {data.map((info)=>{
return <tr><td>{info.name}</td><td>{info.age}</td><td>{info.email}</td><td>{info.status}</td><td><button class="btn btn-primary" onClick={deleteData}>delete</button></td></tr>
})}
             
              
            </MDBTableBody>
          </MDBTable>

    )
}

export default Read