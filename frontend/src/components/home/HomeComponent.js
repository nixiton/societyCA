
import React, { useEffect, useState } from "react";

import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
  Table,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import QueryService from '../../service/QueryService';

import logo from '../../loading.gif';

function HomeComponent() {


const [data, setData] = useState(null);

const [error, setError] = useState(false);


  const search = async () => {
  	
    const response = await QueryService.getListSociety();
    //console.log(response);
    if(!response.error){
      if (response.result) {
      	setData(response.result);
      }
    }
    else{
    	setData(response.error);
    	setError(true);
    }
    
  };

  const initDb = async () => {
    
    await QueryService.initListSociety();
    
  };

  useEffect(() => {
    search();
  }, []);

  

  return (
    <div className="home">


            <Button
                      variant='primary'
                      id='button-addon2'
                      onClick={initDb}
                    >
                      Init the database 
                    </Button>

      		<Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Sector</th>
          <th>Siren</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
      	
        {!data && (
            <tr>
              <td></td>
              <td></td>
              <td><img width="100px" src={logo} /></td>
              <td></td>
              <td></td>
            </tr>
          )}

      	{!error && data && data.length > 0 &&
                    data.map((society) => (
        <tr >
          <td>{society.id}</td>
          <td>{society.name}</td>
          <td>{society.sector.name}</td>
          <td>{society.siren}</td>
          <td><Link
            to={{
              pathname: '/detail/' + society.id
            }}
            >
            Détail
            </Link>
          </td>
        </tr>
        ))}



      </tbody>
    </Table>
          
                    
      	</div>
  );
}

export default HomeComponent;
