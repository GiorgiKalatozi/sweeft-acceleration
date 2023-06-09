import styled from "styled-components";

export const CardContainer = styled.div`
  width: 25%;

  @media only screen and (max-width: 990px) {
    width: 50%;
  }
`;

export const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const UserBold = styled.div`
  padding: 2px 10px;
`;
