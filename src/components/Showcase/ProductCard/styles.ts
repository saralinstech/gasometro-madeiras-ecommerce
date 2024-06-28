import styled from 'styled-components'

export const Container = styled.section`
  width: 16.563rem;
  height: 30.875rem;
  background-color: var(--gray-04);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  figure {
    position: relative;
  }

  .offer-flag {
    background-color: var(--red);
    color: var(--white);
    font-size: 0.875rem;
    border-radius: 4px;
    padding: 0.25rem 0.45rem;

    position: absolute;
    top: 8px;
    left: 8px;
  }

  img {
    border-radius: 10px 10px 0 0;
  }

  button {
    width: 100%;
    border: none;
    background-color: var(--red);
    color: var(--white);
    border-radius: 8px;
    padding: 1rem 0;
    margin-top: 0.75rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #ba3e0b;
  }
`

export const ContainerProductData = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  .container-flags {
    font-size: 0.75rem;

    display: flex;
    gap: 1rem;
  }

  .container-datas {
    height: 10rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h5 {
      font-size: 1rem;
    }
  }

  .previous-price {
    color: var(--gray-08);
    font-size: 0.75rem;
    text-decoration: line-through;
    text-decoration-style: solid;
  }

  .current-price {
    color: var(--red);
    font-size: 1rem;
  }

  .current-price > strong {
    color: var(--black);
    font-weight: bold;
    font-size: 0.75rem;
  }

  .installments {
    color: var(--black);
    font-size: 0.875rem;
  }
`

export const Flag = styled.span`
  background-color: var(--red);
  color: var(--white);
  font-size: 0.875rem;
  border-radius: 4px;
  padding: 0.25rem 0.45rem;
`
