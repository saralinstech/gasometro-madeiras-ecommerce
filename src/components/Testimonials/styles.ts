import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: var(--margin-global);
  padding: 1rem 0;

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
    gap: 1rem;

    padding: 2rem 0;
  }
`
export const Testimonial = styled.li`
  background-color: var(--gray-03);
  width: 200px;
  height: 200px;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--red);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .testimonial-date {
    color: var(--gray-08);
  }
`
