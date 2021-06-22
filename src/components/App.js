// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setImage(data.message)
                setIsLoading(true);
            })
    }, []);

    if (!isLoading) return <p>Picture is loading...</p>;

    return (
        <div>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}

export default App;