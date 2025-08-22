import React from 'react';

const NotFound: React.FC = () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif'
    }}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <a href="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
            Go to Home
        </a>
    </div>
);

export default NotFound;