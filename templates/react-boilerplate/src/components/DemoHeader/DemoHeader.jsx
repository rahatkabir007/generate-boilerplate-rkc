import React from 'react';
import { Link } from 'react-router-dom';

const DemoHeader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap'
        }}>
            <Link style={{ textDecoration: 'none', fontSize: '20px', color: 'black', marginRight: '10px' }} to="/bootstrap">Bootstrap</Link>
            <Link style={{ textDecoration: 'none', fontSize: '20px', color: 'black', marginRight: '10px' }} to="/tailwind">Tailwind</Link>
            <Link style={{ textDecoration: 'none', fontSize: '20px', color: 'black', marginRight: '10px' }} to="/materialui">Material UI</Link>
            <Link style={{ textDecoration: 'none', fontSize: '20px', color: 'black', marginRight: '10px' }} to="/redux">Redux</Link>
            <Link style={{ textDecoration: 'none', fontSize: '20px', color: 'black', marginRight: '10px' }} to="/overmind">Overmind</Link>
            <Link style={{ textDecoration: 'none', fontSize: '20px', color: 'black', marginRight: '10px' }} to="/contextapi">Context API</Link>
        </div>
    );
};

export default DemoHeader;