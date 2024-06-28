import styled from 'styled-components'

export const Container = styled.footer`
  height: 23.625rem;
  padding: 5rem;
  background-color: var(--gray-03);
  color: var(--gray-08);

  display: flex;
  justify-content: space-between;

  a {
    color: var(--gray-08);
    text-decoration: none;
  }

  a:hover {
    color: var(--red);
  }

  p {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .container-payment-methods-footer-informations {
    padding: 3rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container-payment-methods {
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem;

    div {
      display: flex;
      gap: 1rem;
    }
  }

  .container-links {
    width: 50rem;
    padding-right: 4rem;

    display: flex;
    justify-content: space-between;
  }

  .container-logo-social-medias {
    height: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container-social-medias {
    display: flex;
    align-items: start;
    gap: 0.75rem;
  }

  .container-pages-link {
    height: 8rem;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .container-footer-informations {
    padding: 1rem 0;

    p {
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: normal;
      margin-bottom: 0.4rem;
    }

    strong {
      font-weight: bold;
    }
  }

  .container-contacts {
    width: 18.5rem;
    padding-bottom: 3rem;

    display: flex;
    flex-direction: column;
    gap: 0.55rem;

    p {
      font-size: 0.85rem;
    }

    span {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    select {
      color: var(--red);
      border: none;
      border-radius: 8px;
      width: 15.938rem;
      height: 2.125rem;
    }
  }

  .container-security-seals {
    padding-bottom: 3rem;
  }

  .container-logos {
    width: 18.5rem;
    height: 4rem;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1rem;
  }
`
export const SocialMediaLink = styled.a`
  background-color: var(--red);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
  }
`
