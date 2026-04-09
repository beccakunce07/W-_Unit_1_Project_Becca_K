import slbBank from "./slbBank.jsx";
// import { MdPlayArrow, MdPause } from "react-icons/md"; // Material Design
// import React, { useState } from 'react';

function DisplayBank() {
  return (
    <table>
        <thead>
            <tr>
                <th>Love Bomb</th>
                <th>Relates to my</th>
                </tr>
            </thead>
            <tbody>
                {slbBank.map ((item) => (
                    <tr key ={item.key}>
                        <td>{item.message}</td>
                        <td>{item.key}</td>
                        </tr>
                    ))}
            </tbody>
    </table>
        );
    };

    export default DisplayBank;