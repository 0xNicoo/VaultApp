import React from 'react';
import { shortenAddress } from '../util/shortenAddress';
import { ContractInfo } from './contractInfo';
import { Pay } from './pay';
import { Withdraw } from './withdraw';

const vaultAddress = "0xea58c257e32CD1a194659dEe1D167aA3a61D2298";

export const Connected = (props) => {



    return (
        <div>
            <header className="header">
                <button className="btn-header">{shortenAddress(props.accounts)}</button>
            </header>
            <main>
                <p>DIRECCION CONTRATO: {vaultAddress}</p>
                <ContractInfo vaultAddress={vaultAddress} />
                <p>CUENTA CONECTADA: {props.accounts}</p>
                <Pay vaultAddress={vaultAddress} />
                <Withdraw vaultAddress={vaultAddress} />
            </main>
        </div>

    );
}