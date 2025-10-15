// import React from 'react'
import heartPink from "../../assets/pinkheart.svg"
import heartPurple from "../../assets/purpleheart.svg"
import './Heart.css'

type HeartProps = {
    type: "language" | "tools";
};

export default function Heart({type}: HeartProps) {
    const languages: string[] = ["Python", "C++", "Java", "JS", "TS", "HTML", "CSS", "SQL"]
    const tools: string[] = ["React", "Angular", "Vue", "Git", "VS", "MySQL", "Figma", "Jira"]

    const items = type == "language" ? languages : tools;
    const heartImg = type == "language" ? heartPink : heartPurple

    return (
        
        <div className="heart-section">
            <div className="heart-container">
                    {items.map((item) => (
                        <div key={item} className="heart-wrapper">
                            <img src={heartImg} alt={item} className="heart-img"/>
                            <p className="heart-text"> {item}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}
