import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

function RechercherVerbes() {
  // CREATE A CONTROLLED INPUT FOR  SEARCHING FUNCTIONALITY
  return (
    <Wrapper>
      <section className="section">
        <form className="search">
          <BiSearch className="search-icon" />
          <input type="text" />
        </form>
      </section>
    </Wrapper>
  );
}

export { RechercherVerbes };

const Wrapper = styled.section`
  .search {
    width: 100%;
    height: 2rem;
    padding: 0.2rem 1.5rem 0.5rem 1.5rem;
    border-radius: 1rem;
    box-shadow: var(--light-shadow);
    display: flex;
    align-items: flex-end;
  }
  .search-icon {
    margin-right: 0.4rem;
  }
  input {
    border: none;
    width: 90%;
  }
  input:focus {
    outline: none;
  }
`;
