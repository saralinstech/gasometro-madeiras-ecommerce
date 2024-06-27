import styled from 'styled-components'

export const Container = styled.div`
  width: 34.375rem;
  height: 12.5rem;
  background-color: var(--red);
  color: var(--white);
  text-transform: uppercase;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .container-infomations {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }

  .container-infomations > h4 {
    font-size: 2.241rem;
    font-weight: 600;
    line-height: 3rem;
  }

  .container-infomations > a {
    background-color: var(--red);
    color: var(--white);
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.031rem;
    text-decoration: none;
    text-align: center;
    border: 1px solid white;
    border-radius: 8px;
    padding: 0.75rem;
    width: 4.2rem;
    cursor: pointer;

    &:hover {
      background-color: #fdede796;
      border: 1px solid transparent;
    }
  }

  .container-image {
    height: 100%;
  }

  .container-image > img {
    border-radius: 0 10px 10px 0;
  }
`
