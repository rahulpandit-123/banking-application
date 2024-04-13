import React, { useState } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import { deleteBankAccount, getAllAccounts, updateBankAccount } from "./Services/BankAccountService";

const BankAccountList = () => {
    const [accounts, setAccounts] = useState([
        { accountNum: "12345678", accountHolderName: "Rahul Pandit", bankName: "HDFC" }
        
    ]);
    const navigate = useNavigate();

    const deleteAccount = (id) => {
        deleteBankAccount(id)
        .then((res)=>{alert("account deleted")
        getAllAccounts()})
        .catch((error)=>console.log(error))
    }

    const updateAccount=(id,account)=>{
        navigate('/update/$id')
    }

    const accountInfo=(id,account)=>{
        navigate('/info/$id')
    }


    const addBankAccount = () => {
        navigate("/add");
    };

    return (
        <div className="container">
            <button onClick={addBankAccount} className="btn btn-success">Add Bank Account</button>
            <table border={3}>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Account Holder Name</th>
                        <th>Bank Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={index}>
                            <td>{account.accountNum}</td>
                            <td>{account.accountHolderName}</td>
                            <td>{account.bankName}</td>
                            <td>
                                <Link to={`/update/${index}`} className="btn btn-primary" onClick={()=>updateBankAccount(account.accountNum)}>Update</Link>
                                <button className="btn btn-danger" onClick={()=>deleteAccount(account.accountNum)}>Delete</button>
                                <Link to={`/info/${index}`} className="btn btn-info"onClick={()=>accountInfo(account.accountNum)}>Info</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BankAccountList;
