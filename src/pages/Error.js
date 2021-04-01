import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {

  return <Wrapper>

    <h2>error page</h2>
    <Link to="/">
    <button className="btn"> back home</button>
    </Link>
  </Wrapper>
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
