import styled from 'styled-components';

export default styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
  }))`
    border: 2px solid #84B28E;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;