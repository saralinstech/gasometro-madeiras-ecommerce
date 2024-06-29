import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: var(--margin-global);
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    width: fit-content;
  }
`
