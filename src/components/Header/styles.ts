import styled from 'styled-components'

export const Container = styled.header`
  height: 13rem;
`
export const HeaderCore = styled.div`
  width: 100%;
  height: 6.25rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const SearchForm = styled.form`
  background-color: var(--gray-04);
  border-radius: 8px;
  width: 37.313rem;
  height: 2.625rem;

  display: flex;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 34.313rem;
  font-style: italic;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  width: 3.8rem;
  cursor: pointer;
`
export const HeaderMenu = styled.div`
  width: 18rem;

  display: flex;
  justify-content: space-between;
`
export const UserButton = styled(SearchButton)`
  width: 11.5rem;

  display: flex;
  justify-content: space-between;

  div {
    width: 8.5rem;
  }

  p {
    width: 100%;
    text-align: start;
    font-weight: 800;
  }
`
export const FavoriteButton = styled(SearchButton)`
  width: 1.5rem;
`
export const CartButton = styled(SearchButton)`
  width: 1.5rem;
  position: relative;

  span {
    background-color: var(--red-dark);
    color: var(--white);
    padding: 0.313rem 0.563rem;
    border-radius: 50%;
    font-size: 0.6rem;

    position: absolute;
    bottom: 33px;
    left: 24px;
  }
`
