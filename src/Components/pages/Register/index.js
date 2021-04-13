import React, { useState }from 'react'


const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeUsername = (e) => {
        const value = e.target.value
        setUserName(value)
    }
const changeEmail = (e) =>{
    const value = e.target.value
    setEmail(value)
}

const changePassword = (e) =>{
    const value = e.target.value
    setPassword(value)
}

    return (
        <div className={{marginTop: "300px"}}>
        <div className="align-items">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body"> 
                                <div className="form-group">
                                    <label>UserName</label>
                                    <input type="text" placeholder="UserName" className="form-control" value={username} onChange={changeUsername}/>

                                    <div className="form-group">
                                        <label>Email</label>
                                       <input type ="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" className="form-control" value={password} onChange={changePassword}/>

                                    </div>
                                    <br/>

                                    <button className="btn btn-primary">Daftar</button>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}

export default Register
