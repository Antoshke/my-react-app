import React from 'react';
import styled from 'styled-components';

const Cell = props => (
    <div>
        <div image={props.image}></div>
        <div>{props.title}</div>
    </div>
)

export default Cell