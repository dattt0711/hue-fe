import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ProductImage from '../../../images/product.png';
import Button from 'react-bootstrap/Button';
export default function CardComponent(props) {
    const { dataItem, hello } = props;
    return (
        <div className="card">
            <div className="p-3">
                <FavoriteBorderIcon />
            </div>
            <div className="card-body d-flex align-items-center flex-column">
                <div className="card-image">
                    <img src={dataItem?.image} alt="" />
                </div>
                <h4 className="my-3">{dataItem?.productName}</h4>
                <p>${dataItem?.price}</p>
                <span>
                    <ControlPointIcon />
                </span>
            </div>
        </div>
    )
}
