import React from 'react';

const ProfileCard = ({ icon, name, rating, link, bgColor, shadowColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className={`block p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${bgColor} ${shadowColor} hover:shadow-lg hover:scale-105`}
  >
    <div className="flex items-center space-x-4">
      <span className="text-4xl">{icon}</span>
      <div>
        <h4 className="font-bold text-lg text-black">{name}</h4>
        <p className="text-sm text-gray-600">{rating}</p>
      </div>
    </div>
  </a>
);

export default ProfileCard;
