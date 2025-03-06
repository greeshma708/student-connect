import React from 'react';

const ProfileCard = ({ profile, onLike, onEdit, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">Likes: {profile.likes}</p>
        <button className="btn btn-primary mr-2" onClick={() => onLike(profile.id)}>
          Like
        </button>
        <button className="btn btn-warning mr-2" onClick={() => onEdit(profile.id)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(profile.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;