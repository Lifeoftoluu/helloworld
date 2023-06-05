import React from "react";
import axios from "axios";


export const fetchTrainings = async()=> {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch(err) {
        return [];
    }

    
}