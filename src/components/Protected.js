import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const navigate = useNavigate();
    const { Component } = props;
    let login = JSON.parse(localStorage.getItem('register_user'))|| "{}";
    useEffect(() => {
        const isLogged =  login.find((text)=> text.isLogin == true);
        if (!isLogged) {
            navigate('/login');
        }
        else {
            navigate('/cart');
            return;
        }
    },[]);

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected;
