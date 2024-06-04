import styled from "styled-components";

const Input = styled.input`
    width: 400px;
    padding: 12px 18px;
    font-size: 16px;
    font-family: inherit;
    box-shadow: 0 0 0 1px #f8bfbf;
    border: none;
    border-radius: 25px;
    background-color: #fff5f5;
    transition: all .3s;


    &::placeholder {
        color: #ce9797;
        font-size: 14px;
    }

    &::focus {
        outline: none;
        box-shadow: 0 0 10px 1px #ee8c8c;
        border: none;
        transition: all .3s;
    }

`

export default Input