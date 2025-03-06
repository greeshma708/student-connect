import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onLike }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} onLike={onLike} />
      ))}
    </div>
  );
};

export default ProfileList;