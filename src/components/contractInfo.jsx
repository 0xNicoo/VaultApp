import React, { useState } from 'react';
import { ethers } from "ethers";
import vault from "../Vault.json";
import { useEffect } from 'react';

export const ContractInfo = (props) => {
    const [balance, setBalance] = useState(0);

    async function handleViewBalance() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const singer = provider.getSigner();
            const contract = new ethers.Contract(props.vaultAddress, vault.abi, singer);
            try {
                const response = await contract.viewBalance();
                setBalance(Number(response.toBigInt()) / (10 ** 18))
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    useEffect(() => {
        handleViewBalance();
    }, [])


    return (
        <div>
            <p>BALANCE: {balance}</p>
            <button onClick={handleViewBalance}>Balance</button>
        </div>
    );
}