import React from "react";
import {useParams} from "react-router-dom";
const BankAccountInfo=()=>{
    const{id}=useParams()
    return(
        <div>
            <h3>Bank account info</h3>
        </div>
    )
}
export default BankAccountInfo;