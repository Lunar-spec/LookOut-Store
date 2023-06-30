import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
    //console.log(data)
    localStorage.setItem(
        "user",
        JSON.stringify({
            name: data.user.name,
            username: data.user.username,
            jwt: data.jwt,
        })
    );
};

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || '""';
    //console.log(stringifiedUser);
    
    const userData = JSON.parse(stringifiedUser);
    return userData || {};
    // return {username: 'Mobie'}
};
