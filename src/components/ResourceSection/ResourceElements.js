import styled from "styled-components";

export const ResourceContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#020001")};
  position: relative;
  width: 100%;
  padding: 5rem 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const ResourcesWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* padding: 0 1.5rem; */
  justify-content: center;
  /* row info */
`;

export const ResourceRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 3rem;
  align-items: center;
  grid-template-areas: ${({ left }) => (left ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ left }) =>
      left ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    grid-gap: 1rem;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  /* margin-bottom: 1rem;
  padding: 0 1rem; */
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
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

export const Content = styled.p`
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
  /* margin: 0 0 10px 0; */
  padding-right: 0;
`;

export const Form = styled.form`
  color: #020001;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const FormSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;

  display: inline-block;
  margin: 2rem 0;
  padding: 10px 50px 10px 10px;
  background: url(/assets/images/select.png) no-repeat 95% center;
  background-color: #222;
  color: #fff;
  border-radius: 4px;
  border: 2px solid #fff;
  width: 280px;
`;

export const FormOption = styled.option`
  &:hover {
    background-color: #002350;
  }
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;

  /* background: red; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 1.5rem;
  }
`;

export const LinkWrapper = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  background: #fff;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    background: #f7f7f7;
  }
  &:hover,
  &:focus,
  &:active {
    font-weight: bold;
  }
`;

export const LinkIcon = styled.h1`
  text-align: center;
  background: ${(props) => props.bgColor || "#002350"};
  padding: 10px;
`;

export const LinkTitle = styled.p`
  cursor: pointer;
  width: 100%;
  font-size: 1.2rem;
  color: #020001;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const LoadMore = styled.button`
  background: #002350;
  width: 25%;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.9rem 1.5rem;
  border-radius: 25px;
  box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.6);
  transition: 0.3s all ease-in-out;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  &:hover {
    transform: translateY(-3px);
    background: #f7f7f7;
    color: #020001;
  }

  :disabled {
    background: #666666;
  }
`;
