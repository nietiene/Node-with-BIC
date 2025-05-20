import axios from "axios";
import passport from "passport";
import { useState, useEffect } from "react";

const Insert = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const handleInsert  = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/add', {id, passport})
        .then((res) => {
            set
        })
    }
}