import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#001f3f', // Replace with your desired color code
        color: 'white',
        padding: '10px',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const plankStyle = {
        marginRight: '10px',
        marginLeft: '80px',
        fontWeight: 'bold',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '24px',
        marginTop: '30px',
        marginBottom: '35px',
    };

    const earnMoreStyle = {
        fontWeight: 'bold',
        fontSize: '24px',
        fontFamily: 'Montserrat, sans-serif',
        marginLeft: '500px',
        marginTop:'-15px',
        flexGrow: 1, // Ensure the element grows to take available space
    };

    const paragraphStyle = {
        marginLeft: '80px',
        marginTop: '5px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'lighter',
    };

    const followUsStyle = {
        fontWeight: 'bold',
        fontFamily: 'Montserrat, sans-serif',
        marginLeft: '80px',
        marginBottom:'100px',
        fontSize: '24px',
    };

    return (
        <div style={footerStyle}>
            <h2 style={plankStyle}>Plank by Capital One</h2>
            <span style={earnMoreStyle}>Earn More!</span> {/* Add this line */}
            <div>
                <p style={paragraphStyle}>This is the footer paragraph</p>
                <p style={followUsStyle}>Follow Us</p>
                <img src="path/to/your/image.jpg" alt="Your Image" />
            </div>
        </div>
    );
}

export default Footer;

