import styled from "styled-components"

const FixedIcon = styled.div`
  position: fixed;
  top: 7px;
  ${props => props.position}: 7px;
  z-index: ${props => props.zIndex};

  .svg-icon {
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    :hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
    path {
      fill: whitesmoke;
    }
  }
`

export default FixedIcon
