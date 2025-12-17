import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  profile: ProfileData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 animate-fade-in-down">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-gray-900 tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-2 text-gray-600 text-sm md:text-base max-w-xs leading-relaxed">
        {profile.bio}
      </p>
    </div>
  );
};

export default ProfileHeader;