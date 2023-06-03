import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Read from './Create'
function Body() {

  const array = [1,2,3,4,5];
  array.splice(0,1)

  const[newUser, setNewUser]=  useState({name: '',age: '',email:'',status:''})

  var [edit1, setEdit1] = useState(true)

  const saveData = (e) =>{
    if(edit1==1){
    data.push(newUser)
    setData([...data])
    }
    else{
    console.log(e)
    data[e] = newUser
    setData([...data])
    edit1 = 0;
    }
  }
  
  const [data, setData] = useState([{name: "Auriel James Fernandez", age: 22, email: "aurieljames11@gmail.com", status: "active"},
  {name: "Florencio De Vera", age: 23, email:"florenciovedera@gmail.com", status: "active"},
  {name: "Andronico Fernandez", age: 25, email: "andronico09@gmail.com", status: "inactive"},
  {name: "Rolando Pascual", age:23, email: "rolandopasscual@gmail.com", status: "inactive"},
  {name: "Jericho Valdez", age:23, email: "jerichorosales@gmail.com", status: "active"}])
   
  

  const deleteData = (index,name) =>{
    if(window.confirm(`Are you sure you want to delete data of ${name}? `)){
      data.splice(index, 1)
    setData([...data])

      alert(`${name}' data is deleted from database`)
    }
    else{
      setData([...data])
      alert(`GAGO KA BA ? `)
    }
  }

  const editData = (e) => {
    edit1 = 0;
    saveData(e)
  }
  return (
    <>
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
      <Row className='BodyRow'>
        <Col sm={2} className='firstC'></Col>
        <Col sm={7} className='secondC'>
            <div className='BodyContent'>
                <h1 className='ContentTitle'>Welcome User</h1>
                <div className='Desk'>
                <div className='SS'> </div>
                <h6 className='Description'><b>Create Read Update Delete project using React.js. Come on ! and let's play with datas.</b><br></br>
                The new Quick Start teaches modern React and includes live examples.</h6></div> 
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
             
            {data.map((info, index)=>{
return <tr key={index}><td>{info.name}</td><td>{info.age}</td><td>{info.email}</td><td>{info.status}</td><td><Button variant="success" onClick={()=>editData(index)}>Edit</Button> <Button variant="danger" onClick={()=>deleteData(index,info.name)}>delete</Button></td></tr>
})}
             
              
            </MDBTableBody>
          </MDBTable>

               
            </div>
        </Col>
        <Col sm={3} className='thirdC'>
            
            <h3 className='Contact'>Create User</h3>
            <div className='createUserForm'> 
              <label>Fullname</label> <br/>
              <input type="text" value={newUser.name} placeholder="Enter your name..." onChange={e=>setNewUser({...newUser,name: e.target.value})}/><br/>
              <label>Age</label><br></br>
              <input type="text" value={newUser.age} placeholder="Enter your age..." onChange={e=>setNewUser({...newUser,age: e.target.value})}/><br></br>
              <label>Email</label> <br/>
              <input type="text" value={newUser.email} placeholder="Enter your email..." onChange={e=>setNewUser({...newUser,email: e.target.value})} /><br/>
              <label>Status</label> <br/>
              <input type="text" value={newUser.status} placeholder="Enter your status..." onChange={e=>setNewUser({...newUser,status: e.target.value})} /><br/>
              <Button variant="primary" onClick={saveData}>Save Data</Button>
            </div>
        </Col>
      </Row>
      </>
  );
}

export default Body;