import styled from 'styled-components'

export const Container = styled.section`
  height: 10.688rem;
  width: 100%;
  max-width: var(--max-width);
  margin: var(--margin-global);
  padding: 0 6rem;
  padding-bottom: 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CategoryOption = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  text-decoration: none;

  p {
    font-size: 0.75rem;
    color: var(--black);

    &:hover {
      color: var(--red);
    }
  }
`
export const CategoryTag = styled.span`
  padding: 1.8rem;
  border-radius: 50%;
  background-color: var(--red-light);
`
