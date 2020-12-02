import styled, {css} from 'styled-components';

export default styled.button`
    font-family: 'roboto';
    font-size:1rem; 
    font-weight: bold;
    border:3px solid;
    border-radius:6px;
    border-color: white; 
    padding:10px 20px;
    margin:20px  10px;
    ${(props) =>
        props.background && 
        css`
            background:${(props)  =>props.background};
        `}
    color:white; 
    &:hover{
        background: white;
        color: #84B28E;
        font-weight: bold;
        cursor:pointer;
    };
    &:focus{
        
        background: white;
        color: #84B28E;
        font-weight: bold;
    }
`;
