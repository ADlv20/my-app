import React, { useState } from "react";

const Home = () => {
    
    const [name , setName ] = useState("Adwait");

    const handleClick = () => {
        console.log(name);
        setName('Gawade');
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <p> { name }</p>
            <button onClick={handleClick}>Click</button>
        </div>
     );
}
 
export default Home;