import React, { useState } from "react";
import { ethers } from "ethers";
import vault from "../Vault.json";

export const Withdraw = (props) => {

    const [withdrawAmount, setWithDrawAmount] = useState(0);

    async function handleWithdraw() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const singer = provider.getSigner();
            const contract = new ethers.Contract(props.vaultAddress, vault.abi, singer);
            try {
                const response = await contract.withdraw(withdrawAmount);
                console.log("response: ", response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    return (
        <div>
            <input type="number" id={withdrawAmount} onChange={e => setWithDrawAmount(e.target.value)} />
            <button onClick={handleWithdraw}>Retirar</button>
        </div>
    );
}