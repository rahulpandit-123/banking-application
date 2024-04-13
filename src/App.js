// App.js
import React from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/Header';
import Login from './components/login';
import signup from './components/signup';
import {Route,Routes} from 'react-router';
import BankAccountInfo from './components/BankAccountInfo';
import BankAccountList from './components/BankAccountList';
import AddBankAccount from './components/AddBankAccount';

function App() {
    return (
        <div> 
            <div className='container-fluid'>
                <div className='row bg-info'>
                    <Header />
                </div>
            </div>
            <div className='row'>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<signup/>}></Route>
                <Route path='/list' element={<BankAccountList />}></Route> 
                <Route path='/update' element={<AddBankAccount />}></Route>
                <Route path='/info' element={<BankAccountInfo />}></Route>
                <Route path='/add' element={<AddBankAccount/>}></Route>
              </Routes>
                </div>
        </div>
    );
}

export default App;

  