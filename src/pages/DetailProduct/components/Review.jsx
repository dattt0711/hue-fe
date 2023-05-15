import { Divider } from '@mui/material'
import React from 'react'
import { useRef } from 'react';
import RatingStar from './RatingStar';
function Review() {
    return (
        <div class="review black-color pb-3">
            <p>Frances Guerrero</p>
            <div className="mb-2 d-flex justify-content-between">
                <span>A must-have product</span>
                <RatingStar isShowValue={true} maxRating={5} />
            </div>
            <p>"But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted. The wise man therefore always."</p>
        </div >
    )
}

export default Review;