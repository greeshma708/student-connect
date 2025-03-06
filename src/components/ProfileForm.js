import React, { useState } from 'react';

const ProfileForm = ({ onAddProfile }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return; // Prevent empty names
    onAddProfile({ id: Date.now(), name, likes: 0 });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Add Profile
      </button>
    </form>
  );
};

export default ProfileForm;