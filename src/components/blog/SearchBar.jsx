import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  max-width: 90%;
  margin: 0 auto;

  label {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 1.125rem;
    .text {
      flex: 1 0 100%;
    }
  }
  input {
    flex: 1 1 90%;
    padding: 0.25em 0.5em;
    padding-right: 2rem;
    font-size: 1.25rem;
  }
  .close {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 2rem;
    margin: 0 0.5rem;
    cursor: pointer;
    color: initial;
  }
`

export default function SearchBar({
  search = "",
  handleChange = () => {},
  handleClose = () => {},
}) {
  return (
    <Wrapper>
      <label htmlFor="">
        <span className="text">搜索</span>
        <input type="text" value={search} onChange={handleChange} />
        {search && (
          <div className="close" onClick={handleClose}>
            &times;
          </div>
        )}
      </label>
    </Wrapper>
  )
}
