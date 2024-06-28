import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  max-width: var(--max-width);
  margin: var(--margin-global);
  height: 7.5rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
    color: var(--white);
  }

  h5 {
    font-weight: 600;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`
export const Form = styled.form`
  width: fit-content;
  height: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  input {
    height: max-content;
    border: none;
    border-radius: 5px;
    font-style: italic;
    padding: 0.75rem 1rem;
    outline: none;

    &::placeholder {
      color: var(--gray-07);
    }

    &:last-child {
      background-color: var(--red);
      color: var(--white);
      font-style: normal;
      border: 1px solid white;
      cursor: pointer;
    }

    &:last-child:hover {
      background-color: #fdede796;
      border: 1px solid transparent;
    }
  }
`
export const Wrapper = styled.section`
  width: 100vw;
  background-color: var(--red);

  display: flex;
  justify-content: center;
`
