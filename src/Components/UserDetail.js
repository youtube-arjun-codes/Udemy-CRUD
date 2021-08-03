import React, {useEffect, useState} from 'react';
import {Button, Paper} from "@material-ui/core";
import {useHistory, useParams} from 'react-router-dom'
import {getUsers} from "../Service/api";


const initialValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}
const UserDetail = () => {
    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone} = user
    const {id} = useParams()
    const history = useHistory();
    const paperStyle = {padding: '50px 20px', width: 600, margin: "20px auto"}

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
        const response = await getUsers(id)
        setUser(response.data)
        console.log(user.name)

    }
    const backToHome = () => {
        history.push("/all")
    }
    return (
        <div>

            <h3>

                <Paper elevation={3} style={paperStyle}>
                    <h2>Student Details</h2>
                    <Paper elevation={6} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={user.id}>
                        Id : {user.id}<br/>
                        Name : {user.name}<br/>
                        Email : {user.email}<br/>
                        Phone : {user.phone}<br/>
                        <br/>
                        <Button variant={"contained"} color={"primary"} onClick={() => backToHome()}>Back to
                            Home </Button>
                    </Paper>

                </Paper>
            </h3>

        </div>
    );
};

export default UserDetail;