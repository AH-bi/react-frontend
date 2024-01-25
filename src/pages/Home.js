import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const { user } = useAuthContext();
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        console.log("User:", user);
    
        if (user) {
            if ('user' in user && 'login' in user.user) {
                // Case where user is sent from signup
                setGreeting(`Hello, ${user.user.login}!`);
            } else if ('login' in user) {
                // Case where user is sent from login
                setGreeting(`Hello, ${user.login}!`);
            } else {
                // Handle other cases or provide a default greeting
                setGreeting('Welcome!');
            }
        } else {
            // Handle the case where user is not available
            setGreeting('Welcome!');
        }
    }, [user]);
    return (
        <div className="home">
            <div className="greeting">
                <p>{greeting}</p>
            </div>
        </div>
    );
};

export default Home;
