import { useState } from "react"

const User = () => {
    const [firstName, setFirstName] = useState('Chief')

    function updateUser(){
        setFirstName('KimJong')
    }

    return (
        <div>
            <h1>User details</h1>
            <p> {firstName}</p>
            <button onClick={updateUser}>updateButton</button>
        </div>
    )
}
export default User