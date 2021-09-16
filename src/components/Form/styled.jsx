import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const Image = styled.img`
    border: 1px solid #d9d9d9;
    background: #d9d9d9;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 575px;
    width: auto;

    
`;

export const Button = styled.button`

    background: linear-gradient(90deg, rgba(230,227,232,1) 0%, rgba(117,114,136,1) 35%, rgba(230,227,232,1) 50%, rgba(117,114,136,1) 100%);
    border-radius: 50%;
    height: 75px;
    width: 75px;
    border: 1px solid #613884;
    position: absolute;
    left: 63%;
    top: 38%;
    :hover{
        background-color:  #613884;
        background: #613884;
        box-shadow: 0px 10px 14px rgba(0, 0, 0, .5);
        color: white;
    }
`;
