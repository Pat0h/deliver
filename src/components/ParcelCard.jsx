import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const ParcelCard = ({ parcelName }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{parcelName}</Card.Title>
        <Button variant="primary">View Parcel</Button>
        <Form.Control as="select">
          <option>preparing</option>
          <option>on transit</option>
          <option>delivered</option>
        </Form.Control>
      </Card.Body>
    </Card>
  );
};

export default ParcelCard;
