import React from 'react';

function Banner() {
    const bannerStyle = {
        backgroundColor: 'white',
        color: 'navy',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
    };

    const plankStyle = {
        marginLeft: '10px',
        fontStyle: 'italic',
        color: 'rgb(5,60,115)', // Adjust the color value to make the text lighter
    };

    const additionalTextStyle = {
        padding: '5px 10px', // Adjust horizontal padding as needed
        marginTop: '5px', // Add more padding to the top
        marginRight: '10px', //ßß Adjust the left margin to move the text more to the left
        color: 'rgb(5,60,115)', // Adjust the color value to make the text lighter
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'normal',
    };

    const menuItemsStyle = {
        marginLeft: 'auto', // Add marginLeft: 'auto'
        marginTop:'5px',
        marginRight:'30px',
        display: 'flex',
        gap: '15px', // Add space between the items
        fontWeight: 'normal',
        color: 'rgb(5,60,115)', // Adjust the color value to make the text lighter
    };


    return (
        <div style={bannerStyle}>
            <h2 style={plankStyle}>Plank</h2>
            <div style={additionalTextStyle}>
                <span>by Capital One</span>
            </div>
            <div style={menuItemsStyle}>
                <span>Home</span>
                <span>Rewards</span>
                <span>Trusted Applications</span>
                <span>Information</span>
            </div>
        </div>
    );
}

export default Banner;
