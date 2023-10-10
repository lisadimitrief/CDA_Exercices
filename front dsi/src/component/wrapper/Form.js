import React from 'react'

function Form() {
  return (
    <form action="/submit-url" method="post">
        <label htmlFor="username">Nom </label>
        <input type="text" id="username" name="username" />
        {/* <br/>
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" /> */}

        <input type="submit" value="OK"/>
</form>
  )
}

export default Form