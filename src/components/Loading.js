import React from "react";
import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;
const Loading = () => {
  return (
    <LoadingContainer>
      <FaSpinner color="#002350" />
    </LoadingContainer>
  );
};

export default Loading;
