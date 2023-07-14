import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

import classes from './SearchArea.module.css';

/**
* @author
* @function SearchArea
**/

const SearchArea = (props) => {

  const [jobTitle,setJobTitle] = useState('')
  const [location ,setLocation] = useState('')

  const titleHandler = (event)=>{
    setJobTitle(event.target.value)
  }

  const locationHandler = (event)=>{
    setLocation(event.target.value)
  }

  const searchButtonHandler = ()=>{
    let params = {keywords:jobTitle,location:location}
    props.searchParams(params)
  }

  return (
  <>
    <Form >
    <Row>
        <Form.Group as = {Col}>
          <Form.Label>Job-title</Form.Label>
          <Form.Control type="text" value={jobTitle} onChange={titleHandler} />
        </Form.Group>
        <Form.Group as ={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value = {location} onChange={locationHandler} />
        </Form.Group>
      </Row>
    </Form>
    <div className={classes.buttonArea}>
    <Button variant='primary' onClick={searchButtonHandler}>Search </Button>
    </div>
  </>
  )

}

export default SearchArea