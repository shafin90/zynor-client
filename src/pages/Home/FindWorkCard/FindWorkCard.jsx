import React from 'react';
import { Button, Card } from 'react-bootstrap';

const FindWorkCard = ({title,article,img}) => {
    return (
        <Card className="me-4 bg-black" style={{ width: '33rem' }}>
            <Card.Img variant="top" className=' img-fluid rounded-4 mb-4' src={img} />
            <Card.Body className='ps-0'>
                <Card.Title style={{ color:"#A878D4", fontFamily:"battambang"}} className='fs-3 fw-bold'>{title}</Card.Title>
                <Card.Text className=' text-white fs-6 mb-5'>
                    {article}
                </Card.Text>
                <button style={{
                    border:"1px solid #7D26CD",
                    boxShadow: "0px 4px 20px 10px #7D26CD66", 
                    background:"#272727",
                    animationName:"lightingpink",
                    animationDuration:"2s",
                    animationIterationCount:"infinite",
                    }} className=' text-white fw-semibold rounded-4 px-4 py-3'>
                    View Project
                </button>
            </Card.Body>
        </Card>
    );
};

export default FindWorkCard;