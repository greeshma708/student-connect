import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import ProfileTable from './components/ProfileTable'; // Import the table component

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', likes: 0 },
    { id: 2, name: 'Jane Smith', likes: 0 },
    { id: 3, name: 'Greeshma', likes: 0 },
    { id: 4, name: 'Preethi', likes: 0 },

    
  ]);

  const handleLike = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === id ? { ...profile, likes: profile.likes + 1 } : profile
      )
    );
  };

  const handleAddProfile = (newProfile) => {
    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
  };

  const handleEdit = (id) => {
    const newName = prompt('Enter the new name:');
    if (newName) {
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.id === id ? { ...profile, name: newName } : profile
        )
      );
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this profile?');
    if (confirmDelete) {
      setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <h1>Student Connect</h1>
      {/* Form to add new profiles */}
      <ProfileForm onAddProfile={handleAddProfile} />
      {/* Table view of profiles */}
      <h2>Table View</h2>
      <ProfileTable profiles={profiles} />
      {/* List view of profiles */}
      <h2>List View</h2>
      <ProfileList
        profiles={profiles}
        onLike={handleLike}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;