import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    };

    const signup = () => {
        navigate("/signup");
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>Rahul pandit</h3>
                        <h3>7670943085</h3>
                        <h3>rahul@gmail.com</h3>
                    </div>
                    <div className="col-6">
                        <h5>add photo</h5>
                        <button className="btn btn-primary" type="button" onClick={login}>Login</button>
                        <button className="btn btn-success" type="button" onClick={signup}>Signup</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
