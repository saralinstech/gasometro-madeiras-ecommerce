import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 21.625rem;
  background-color: var(--red);

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.03rem;
    line-height: 2rem;
  }

  .container-product-hero {
    color: var(--white);
    height: 16rem;
    width: 40rem;

    display: flex;
    flex-direction: column;
  }

  .previous-product-price {
    font-size: 0.85rem;
    margin-top: 1rem;
    letter-spacing: 0.03rem;
  }

  .container-product-hero > span > strong {
    font-weight: bold;
    text-decoration: line-through;
    line-height: 2.2rem;
  }

  .container-product-price {
    display: flex;
    flex-direction: column;
  }

  .product-price {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .product-price-installments {
    font-size: 1rem;
    word-spacing: 0.1rem;
    line-height: 2.2rem;
  }

  .product-price-installments > strong {
    font-weight: bold;
  }

  .container-product-price:first-child {
    font-size: 50rem;
  }

  button {
    max-width: 8rem;
    color: var(--white);
    background-color: var(--red);
    border: 1px solid white;
    border-radius: 8px;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #fdede796;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .product-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }

  .container-image-background {
    width: 50%;
    min-width: 40rem;
    height: 21.625rem;
    background-image: url('/banners/hero/background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  height: 21.625rem;
  padding: 0 0 2rem 0;
`
