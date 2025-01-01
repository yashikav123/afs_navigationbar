import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-glass-card">
                <h1>About Poodles</h1>
                <section>
                    <h2>Breed Information</h2>
                    <p>
                        Poodles are one of the most intelligent and versatile dog breeds. Known for their curly, hypoallergenic coats and lively personalities, they come in three sizes: standard, miniature, and toy. Originally bred as water retrievers, they excel in agility, obedience, and companionship.
                    </p>
                </section>

                <section>
                    <h2>Health Care</h2>
                    <p>
                        Poodles are generally healthy dogs but can be prone to certain conditions like hip dysplasia, eye disorders, and skin allergies. Regular veterinary check-ups, a balanced diet, and ample exercise are essential to keep them in top health. Their curly coat also requires regular grooming to avoid matting and skin issues.
                    </p>
                </section>

                <section>
                    <h2>Security</h2>
                    <p>
                        Despite their elegant appearance, Poodles are vigilant and make excellent watchdogs. They are highly alert and can sense potential dangers, making them a reliable companion for personal and home security.
                    </p>
                </section>

                <section>
                    <h2>More About Poodles</h2>
                    <p>
                        Poodles thrive on mental stimulation and physical activity. They are great for families, singles, and seniors alike due to their adaptable nature. Additionally, they get along well with other pets and are wonderful with children when properly socialized.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;
