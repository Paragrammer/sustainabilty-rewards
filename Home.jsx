import React from 'react'
import logo from './assets/planklogo.png';
import './Home.css';
import {useEffect, useState} from 'react'
import {usePlaidLink} from "react-plaid-link";

const Home = () => 
{
    const blockTextStyle = {
        position: 'relative',
        zIndex: 1,
        padding: '5px 10px', // Adjust horizontal padding as needed
        marginTop: '110px', // Add more padding to the top
        marginRight: '10px', //ßß Adjust the left margin to move the text more to the left
        color: 'rgb(5,60,115)', // Adjust the color value to make the text lighter
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '35px',
        width: '500px',
        marginLeft: '590px',
    };

    const blockTextStyle2 = {
        position: 'relative',
        zIndex: 1,
        padding: '5px 10px', // Adjust horizontal padding as needed
        marginTop: '5px', // Add more padding to the top
        marginRight: '10px', //ßß Adjust the left margin to move the text more to the left
        color: 'rgb(5,60,115)', // Adjust the color value to make the text lighter
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'normal',
        width: '500px',
        fontSize: '25px',
        marginLeft: '590px',
    };

    const [linkToken, setLinkToken] = useState();
    const [publicToken,setPublicToken] = useState();

   useEffect( () => {
    async function fetch(){
      const response = await axios.post("/create_link_token");
      setLinkToken(response.data.link_token);
    }
    fetch()
    }, []);
    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            setPublicToken(public_token);
            console.log("success", public_token, metadata);
            // send public_token to server
        },
    });

  return (
    
    <> <div id="rectangle1" />
    <img id="logo" src={logo} alt = "Logo"/>
    <h2 style ={blockTextStyle}>Earn Rewards Without Wasting Paper on Receipts!</h2>
    <h3 style ={blockTextStyle2}> Check Out Our Partnered Apps</h3>
    <button
        onClick={() => open()}
        disabled={!ready}
        style={{ position: 'relative', zIndex: 1, color: 'white' }}
    >
        Start Earning Rewards!
    </button>
    </>
  );
}

export default Home;