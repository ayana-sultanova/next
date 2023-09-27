import React from 'react';
import {teamData} from "@/data/data";

const Team = () => {
    return (
        <div >
            Meet the Stargazers:
            <ul>
            {teamData.map(item =>
                <li key={item.name}>
                    <p className='font-bold py-2 text-2xl'>{item.name}</p>
                    <p className='pb-4'>{item.description}</p>
                </li>
             )}
            </ul>
            <p>Together, our passionate team strives to make astronomy accessible, educational, and inspiring for everyone. We believe that the universe has endless wonders to offer, and our mission is to bring those wonders closer to you.

                Join us on this cosmic adventure as we explore the depths of space, unravel the mysteries of the cosmos, and share our unbridled enthusiasm for all things astronomical. Whether you're a seasoned stargazer or a curious newcomer, there's a place for you in our astronomy community.

                Thank you for joining us on this journey through the cosmos. Together, we'll reach for the stars!</p>
        </div>
    );
};

export default Team;