"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigaton';

import Profile from '@components/Profile';

const MyProfile = () => {
  const { data: session } = useSession();
  const [allPosts, setAllPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch(`/api/users${session?.user.id}/posts`);
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    if(session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {

  };

  const handleDelete = async () => {

  };

  return (
    <Profile
      name="My Profile"
      desc="Welcome to your personalised profile page"
      data={allPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}

    />
  )
}

export default MyProfile