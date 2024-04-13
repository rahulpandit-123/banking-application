import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBankAccountOfAccountNum, insertAccount } from "./Services/BankAccountService";

const AddBankAccount = () => {
    const [accountNum, setAccountNum] = useState("");
    const [accountHolderName, setAcccountHolderName] = useState("");
    const [bankName, setBankName] = useState("");
    const [iFSCNum, setIFSCNum] = useState("");
    const [location, setLocation] = useState("");
    const [accountHolderMobileNum, setAccountHolderMobileNum] = useState("");
    const [accountHolderEmail, setAccountHolderEmail] = useState("");
    const [paNNo, setPANNo] = useState("");
    const [aadharNum, setAadharNum] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const addAccount = (event) => {
        event.preventDefault();
        const account = {
            accountNum,
            accountHolderName,
            bankName,
            iFSCNum,
            location,
            accountHolderMobileNum,
            accountHolderEmail,
            paNNo,
            aadharNum
        };
        getBankAccountOfAccountNum(id)
            .then((res) => {
                setAccountNum(res.data.accountNum);
                setAcccountHolderName(res.data.accountHolderName);
                setBankName(res.data.bankName);
                setAccountHolderMobileNum(res.data.accountHolderMobileNum);
            })
            .then(() => {
                insertAccount(account)
                    .then((res) => {
                        console.log(res.data);
                        navigate("/list");
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container">
            {/* pageTitle variable is missing in the provided code */}
            <form className="form-group">
                <label className="form-label" htmlFor="accHolderName">Account Holder Name</label>
                <input className="form-control" type="text" name="accHolderName" id="accHolderName" placeholder="Enter account holder name" value={accountHolderName} onChange={(event) => setAcccountHolderName(event.target.value)}></input>
                <label className="form-label" htmlFor="accountNum">Account Number</label>
                <input className="form-control" type="text" name="accountNum" id="accountNum" placeholder="Enter account number" value={accountNum} onChange={(event) => setAccountNum(event.target.value)}></input>
                <label className="form-label" htmlFor="bankName">Bank Name</label>
                <input className="form-control" type="text" name="bankName" id="bankName" placeholder="Enter bank name" value={bankName} onChange={(event) => setBankName(event.target.value)}></input>
                <label className="form-label" htmlFor="iFSCNum">IFSC Number</label>
                <input className="form-control" type="text" name="iFSCNum" id="iFSCNum" placeholder="Enter IFSC number" value={iFSCNum} onChange={(event) => setIFSCNum(event.target.value)}></input>
                <label className="form-label" htmlFor="location">Location</label>
                <input className="form-control" type="text" name="location" id="location" placeholder="Enter location" value={location} onChange={(event) => setLocation(event.target.value)}></input>
                <label className="form-label" htmlFor="accountHolderMobileNum">Mobile Number</label>
                <input className="form-control" type="text" name="accountHolderMobileNum" id="accountHolderMobileNum" placeholder="Enter mobile number" value={accountHolderMobileNum} onChange={(event) => setAccountHolderMobileNum(event.target.value)}></input>
                <label className="form-label" htmlFor="accountHolderEmail">Email</label>
                <input className="form-control" type="text" name="accountHolderEmail" id="accountHolderEmail" placeholder="Enter email" value={accountHolderEmail} onChange={(event) => setAccountHolderEmail(event.target.value)}></input>
                <label className="form-label" htmlFor="paNNo">PAN Number</label>
                <input className="form-control" type="text" name="paNNo" id="paNNo" placeholder="Enter PAN number" value={paNNo} onChange={(event) => setPANNo(event.target.value)}></input>
                <label className="form-label" htmlFor="aadharNum">Aadhar Number</label>
                <input className="form-control" type="text" name="aadharNum" id="aadharNum" placeholder="Enter Aadhar number" value={aadharNum} onChange={(event) => setAadharNum(event.target.value)}></input>
                <button className="btn btn-primary" onClick={addAccount}>Add Account</button>
            </form>
        </div>
    );
};

export default AddBankAccount;
