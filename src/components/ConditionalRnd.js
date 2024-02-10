import { useState } from "react"

const Conditional = () => {
    let msg

    const [isLoggedIn, setStatus] = useState(false)


    function setStatusButton() {
        setStatus(true)
    }

    if (isLoggedIn == true) {
        msg = "Welcome user!!"
    } else {
        msg = "please login!!"
    }


    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={setStatusButton}>Login</button>
        </div>
    )
}
export default Conditional