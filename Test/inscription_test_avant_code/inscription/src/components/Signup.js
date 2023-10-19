import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className='card'>
            <h1>Inscription</h1>
            <form>
                <div>
                    <label><p>Username :</p></label>
                    <input pattern='^[A-Za-z][a-z]{4,24}$' onChange={usernameValid} type='text' name='userName'/>
                    <div>
                        <p>Entre 4 et 24 caractères.
                        <br />Doit commencer par une lettre.
                        <br />Doit comporter au moins une lettre et aucun caractère spécial.
                        </p>
                    </div>
                </div>
                <div>
                    <label><p>Email :</p></label>
                    <input pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' type='email' name='email'/>
                </div>
                <div>
                    <label><p>Phone :</p></label>
                    <input type='tel' name='tel'/>
                </div>
                <div>
                    <label><p>Password :</p></label>
                    <input pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" type='password' name='password'/>
                </div>
                <div>
                    <label><p>Confirm Password :</p></label>
                    <input pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" type='password' name='confirmPassword'/>
                </div>
                <div>
                    <label className='invisible'></label>
                    <input type='submit' name='submit' value={"Envoyer"}/>
                </div>
                <Link to="/signin"><p>Déjà un compte ?</p></Link>
            </form>
        </div>
    );
};

function regx() {
    if (!el.match(RegExp)) {
        
    }
}

export default Signup;