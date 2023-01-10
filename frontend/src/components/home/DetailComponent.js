
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

import QueryService from '../../service/QueryService';

import {useParams} from "react-router-dom"

function DetailComponent() {

const {id} = useParams()

const [data, setData] = useState(null);

const [error, setError] = useState(false);


  const getDetails = async () => {
  	
    const response = await QueryService.getDetailSociety(id);
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



  useEffect(() => {
    getDetails();
  }, []);
  

  return (
    <div className="home">

      <b>Society : </b> {data && data.society.name}
      <b> , Sector  : </b> {data && data.society.sector.name}
      <b>, Siren : </b> {data && data.society.siren}

    

      		<Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>CA</th>
          <th>Margin</th>
          <th>Ebitda</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        

        {!error && data &&
                    data.results.map((result) => (
        <tr >
          <td>{result.id}</td>
          <td>{result.ca}</td>
          <td>{result.margin}</td>
          <td>{result.ebitda}</td>
          <td>{result.year}</td>
        </tr>
        ))}



      </tbody>
    </Table>
                    
      	</div>
  );
}

export default DetailComponent;
