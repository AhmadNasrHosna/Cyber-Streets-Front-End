import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`;

export const FeaturesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturesCard = styled.div`
  background: transparent;
  display: flex;
  // margin-bottom: 2rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;

  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const FeaturesIcon = styled.img`
  height: 200px;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const FeaturesH1 = styled.h1`
  font-size: 2.5rem;
  color: #070707;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const FeaturesH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const FeaturesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
