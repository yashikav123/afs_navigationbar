import React from 'react';
import dogImage from './dog.jpg';
import './Home.css';

function Home() {
    return (
        <>
            <div className="full-screen-container">
                <img src={dogImage} alt="Poodle" className="full-screen-image" />
                <div className="glass-card">
                    <h1>Poodle Breed</h1>
                    <p>
                        Poodles are highly intelligent and elegant dogs, known for their curly coats and graceful demeanor. 
                        Originally bred as water retrievers, they are skilled swimmers and excel in various dog sports. 
                        Poodles come in three sizes: Standard, Miniature, and Toy. They are loyal, friendly, and make great family pets.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
