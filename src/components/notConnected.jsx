import React, { useEffect } from 'react';
import './componentsStyles.css';



export const NotConnected = (props) => {

    let currentAccount = null;

    async function connectAccounts() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            handleAccountsChanged(accounts)
        }
    }


    async function connectedAccounts() {
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });
        handleAccountsChanged(accounts);
    }

    window.ethereum.on('accountsChanged', handleAccountsChanged);

    function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            console.log('Please connect to MetaMask.');
        } else if (accounts[0] !== currentAccount) {
            currentAccount = accounts[0];
            props.setAccounts(currentAccount);
        }
    }


    useEffect(() => {
        connectedAccounts();
    }, []);



    return (
        <div className="bodyStyle">
            <header className="header">
                <button className="btn-header" onClick={connectAccounts}>CONNECT</button>
            </header>
        </div>
    );
}





