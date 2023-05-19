import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";
import {usePlaidLink} from "react-plaid-link";
import Banner from './Banner';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

axios.defaults.baseURL = "http://localhost:8000"

function PlaidAuth({publicToken}){
    const[account, setAccount]= useState();
    useEffect(() =>{
        async function fetchData(){
            let accessToken = await axios.post("/exchange_public_token",{public_token: publicToken});
            console.log("accessToken", accessToken.data);
            const auth = await axios.post("/auth",{access_token: accessToken.data.accessToken});
            console.log("auth data ", auth.data);
            setAccount(auth.data.numbers.ach[0]);

        }
        fetchData();
    }, []);
    return account && (
        <>
        <p>Account Number: {account.account}</p>
        <p>Routing Number: {account.routing}</p>
        </>
    );
}

function App() 
{
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
        <div style={{ position: 'relative' }}>
            <PlaidAuth publicToken={publicToken} /> {/* Render PlaidAuth component first */}
            <Router>
                <Banner/> {/* Render Banner component second */}
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Rewards" element={<h1>Rewards</h1>}/>
                        <Route path="/Info" element={<h1>Info</h1>}/>
                    </Routes>
                </Router>
        </div>
    );
}

export default App
