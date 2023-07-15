import React from 'react'
import { Card ,Button, Badge } from 'react-bootstrap'

import classes from "./JobCard.module.css"

/**
* @author
* @function JobCard
**/

export const JobCard = (props) => {
    return (
        <div className={classes.jobcard}>
            <Card style={{ width: 'auto' }}>
                <Card.Body style={{justifyContent:'flex-start'}}>
                <div className={classes.cardbody}>
                <div>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.company}</Card.Subtitle>
                    <Badge bg="secondary">{props.location}</Badge>
                    <Card.Text>
                    {props.jd.substring(0,400)}
                    </Card.Text>
                    <a href={props.link}  target='blank'><Button variant="primary" size="lg" >Apply</Button></a>
                </div>
                <img className='d-none d-md-block' src={props.logo} height="50"/>
                </div>
                </Card.Body>
            </Card>
        </div>
       
    )

}