import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 35.875em;
  max-width: var(--max-width);
  margin: var(--margin-global);
  padding: 0 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }

  .container-products {
    display: flex;
    justify-content: space-between;
  }
`
