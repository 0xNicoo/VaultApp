import React, { useState } from "react";
import { ethers } from "ethers";

export const Pay = (props) => {

    const [payAmount, setPayAmount] = useState(0);

    async function handlePay() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const singer = provider.getSigner();

            try {
                const response = await singer.sendTransaction({ to: props.vaultAddress, value: ethers.utils.parseEther(String(payAmount)) });
                console.log("response: ", response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    return (
        <div>
            <input type="number" id={payAmount} onChange={e => setPayAmount(e.target.value)} />
            <button onClick={handlePay}>Pagar</button>
        </div>
    );
}