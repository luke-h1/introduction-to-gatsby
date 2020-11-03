import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import useInstagram from '../hooks/use-instagram';
const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];


  return (
    <>
      <h2>Instagrap posts from @{username}</h2>
      <div>{/* posts go here */}</div>
      <a href={`https://instagram.com/gatsbyjs`}>See more on GatsbyJS &rarr;</a>
    </>
  );
};
export default Insta;
