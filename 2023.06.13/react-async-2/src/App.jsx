import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // const [postToShow, setPostToShow] = useState({});
  // const [userToShow, setUserToShow] = useState({});

  useEffect(() => {
    async function getData () {
      let response = await fetch('https://dummyjson.com/posts');
      const {posts} = await response.json();
      setPosts(posts);

      response = await fetch('https://dummyjson.com/users');
      const {users} = await response.json();
      setUsers(users);
    }

    getData();
    // getUserById(9);
    // getPostByUserId(9);

    // console.log(userToShow);
    // console.log(postToShow);
  }, [])

  // const getUserById = (userId) => {

  //   const cloneUsers = structuredClone(users);

  //   const userToShow = cloneUsers.find(item => {
  //     return item.id === userId;
  //   })

  //   setUserToShow(userToShow);
  // }

  // const getPostByUserId = (userId) => {

  //   const clonePosts = structuredClone(posts);

  //   const postToShow = clonePosts.find(item => {
  //     return item.userId === userId;
  //   })

  //   setPostToShow(postToShow);
  // }

  return (
    <div>
      <h2>{postToShow && postToShow.title}</h2>
      <p>{postToShow && postToShow.body}</p>
      <p>Rédigé par <strong>{userToShow && userToShow.firstName} {userToShow && userToShow.lastName}</strong></p>
    </div>
  )
}

export default App