import styled from 'styled-components'

export const Container = styled.nav`
  color: var(--gray-02);
  height: 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px;
  border-bottom: 1px solid var(--gray-06);

  display: flex;
  justify-content: center;
  align-items: center;

  strong {
    font-weight: bold;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.3rem;
  }
`
export const Page = styled.li`
  a {
    color: var(--black);
    outline-color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 400;

    &:hover {
      color: var(--red);
    }
  }
`
