
import React from 'react';
import "./card.css";
import dayjs from 'dayjs';
import data from './data';

function Card() {
    function calculateDaysAgo(postedDate) {
        const today = dayjs();
        const diffInDays = today.diff(postedDate, 'day');
        return diffInDays;
    }
    return (
        <div>
            {data.map(job => (
                <div key={job.id} className="card-container">
                    <div className="card">
                        <div>
                            <h3>{job.title}</h3>
                            <p>{job.type} : {job.experience} : {job.location}</p>
                            <div></div>
                            <div className="skills-container">
                                {job.skills.map((skill, index) => (
                                    <p key={index}>{skill}</p>
                                ))}
                            </div>
                        </div>

                        <div className="button">
                            <p>Posted {calculateDaysAgo(job.postedDate)} days ago</p>
                            <a href="">
                                <button>Apply</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}



export default Card;
