import styled from "styled-components";

export const SplitContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#020001")};
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export const SplitWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* padding: 0 1.5rem; */
  justify-content: center;
  /* row info */
`;

export const SplitRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 3rem;
  align-items: center;
  grid-template-areas: ${({ left }) => (left ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ left }) =>
      left ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#070707")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Content = styled.div`
  max-width: 500px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#070707" : "#f7f8f8")};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: auto;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
