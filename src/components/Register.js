import React, {Component, useState} from 'react'
import * as Styled from './RegisterStyled';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import Register1 from '../img/Register.jpg';

const Register = () => {
    const [userRegistration , setUserRegistration] = useState({
      name: '',
      email: '',
      number: '',
      password: '',
    });
  
    const [records , setRecord] = useState([]);
        const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
  
        setUserRegistration({...userRegistration, [name] : value });
      }
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newRecord = {...userRegistration, id:new Date().getTime().toString() }
    console.log(records);
    setRecord([...records, newRecord]);
    console.log(records);
  
    setUserRegistration ({name:'', email:'', number:'', password:'',});
  }
  
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
  
      const [allEntry, setAllEntry] = useState([]);
  
      const submitForm = (e) => {
        e.preventDefault();
  
        const newEntry = { email: email, password: password };
  
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
      }
    return (
      <div>
        <Styled.row style={{background: `url(${Register1})`,backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
          <div className='container'>
          <Styled.row>
            <Styled.Tab1>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        
          <Nav variant="pills" className="flex-column">
            <Styled.NavTab>
            <Styled.NavItem>
              <Nav.Link eventKey="first">Login</Nav.Link>
            </Styled.NavItem>
            <Styled.NavItem>
              <Nav.Link eventKey="second">Register</Nav.Link>
            </Styled.NavItem>
            </Styled.NavTab>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Styled.login>
              <form  onSubmit={submitForm}>
              <h3>Login</h3>
                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Email</label>
                  <input type='Email' name='email' placeholder='Your Email' 
                  className='form-control' id='email' autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                <label>Your Password</label>
                  <input type='Password' name='password' placeholder='Your Password' 
                  className='form-control' id='password' autoComplete='off'
                  onChange={(e) => setPassword(e.target.value)} value={password}/>
                </Form.Group>
                <input type='submit' className='btn btn-primary submit' value='Submit'/>
              </form>
              
              <div>
             {
                  allEntry.map((curElem) => {
                    const {id, email, password} = curElem;
                    return(
                      <Styled.showDateStayle  key={id}>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                      </Styled.showDateStayle>
                    )
                  })
                }
              </div>
              </Styled.login>
            </Tab.Pane>


            <Tab.Pane eventKey="second">
            <Styled.login>
              <Form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Name</label>
                  <input type='text' name='name' placeholder='Your Name' className='form-control'
                   id='name' autoComplete='off' onChange={handleInput} value={userRegistration.name}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Email</label>
                  <input type='Email' name='email' placeholder='Your Email' 
                  className='form-control' id='email' autoComplete='off'
                   onChange={handleInput} value={userRegistration.email}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Number</label>
                  <input type='Number' name='number' placeholder='Your Phone Number'
                  autoComplete='off' className='form-control' id='number' 
                  onChange={handleInput} value={userRegistration.number}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Password</label>
                  <input type='Password' name='password' placeholder='Your Password' 
                  className='form-control' id='password' autoComplete='off' 
                  onChange={handleInput}  value={userRegistration.password}/>
                </Form.Group>
                <input type='submit' className='btn btn-primary submit' value='Submit'/>
              </Form>

              <div>
             {
                  records.map((curElem) => {
                    const {id, name, email, number, password} = curElem;
                    return(
                      <Styled.showDateStayle key={id}>
                        <p>{curElem.name}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.number}</p>
                        <p>{curElem.password}</p>
                      </Styled.showDateStayle>
                    )
                  })
                }
              </div>
            </Styled.login>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
    </Styled.Tab1>

    </Styled.row>
          </div>                
        </Styled.row>
      </div>
    )
}
export default Register;
