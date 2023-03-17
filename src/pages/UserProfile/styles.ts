import styled from "styled-components";

export const UserWrapper = styled.div`
  border: 1px solid #ccc;
`;

export const UserHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  img {
    height: 200px;
  }

  .left-info {
    margin-left: 20px;
    width: 100%;
  }

  span {
    text-decoration: underline;
  }
`;

export const UserBody = styled.div`
  h2 {
    margin-left: 10px;
  }
`;

export const Space = styled.div`
  padding: 20px;
`;

export const Friends = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
