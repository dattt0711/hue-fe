import { Button, Divider } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Accordion from 'react-bootstrap/Accordion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function DetailInfo() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-detail">
      <h3 className="mb-3">OAT ESSENTIAL WATER</h3>
      <p>UPTOWN LIIZ presents the Oat Enough
        Essential Water. Experience a healthy glow with
        the Oat Enough routine that contains the rich
        moisture and nutrition of oats.</p>
      <div class="d-flex align-items-center mb-4">
        <span className="me-5 product-price">$49.98</span>
        <ButtonGroup className="me-5" aria-label="Basic example">
          <Button className="btn-qty" variant="secondary">
            <RemoveIcon />
          </Button>
          <Button className="btn-qty" variant="secondary">1</Button>
          <Button className="btn-qty" variant="secondary">
            <AddIcon />
          </Button>
        </ButtonGroup>
        <Button className="btn-qty" variant="secondary">Add to cart</Button>
      </div>
      <div class="favorites pb-2">
        <Button style={{ color: "black" }}>
          <FavoriteBorderIcon className="me-2" />
        </Button>
        Add to favorites
      </div>
      <div className="mt-3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>DETAILS</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default DetailInfo