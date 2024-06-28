import styled from 'styled-components'

export const Container = styled.section`
  height: 10.688rem;
  width: 100%;
  max-width: var(--max-width);
  margin: var(--margin-global);
  padding: 2rem 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const Banner = styled.div`
  width: 70rem;
  height: 13.375rem;
  background-color: var(--red);
  color: var(--white);
  text-transform: uppercase;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .banner-infomations {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 0.75rem;
  }

  ul {
    list-style: inside;
  }

  li {
    font-size: 0.75rem;
    line-height: 1.3rem;
    letter-spacing: 0.031rem;
    padding-left: 0.75rem;
  }

  .banner-image {
    width: 34.438rem;
    height: 100%;

    position: relative;
  }

  .banner-image > img {
    border-radius: 0 10px 10px 0;
  }

  .banner-image > a {
    background-color: var(--red);
    color: var(--white);
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.031rem;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    padding: 1rem 1.8rem;
    cursor: pointer;

    position: relative;
    bottom: 110px;
    left: 182px;

    &:hover {
      background-color: #ba3e0b;
    }
  }
`
