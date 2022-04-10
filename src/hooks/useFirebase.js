import { useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithgoogle = () => {
        console.log("Sign In");
    }

    return { signInWithgoogle }

}

export default useFirebase