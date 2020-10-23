import React, { useCallback } from "react";
import {
  ResourceContainer,
  ResourcesWrapper,
  ResourceRow,
  TextWrapper,
  Column1,
  Heading,
  Content,
  Column2,
  ImgWrap,
  Img,
  Form,
  FormSelect,
  FormOption,
  // LinkContainer,
  // LinkWrapper,
  // LinkIcon,
  // LinkTitle,
  // LoadMore,
  // ButtonWrapper,
} from "./ResourceElements";

const ResourceSection = ({ data, fetchMore }) => {


  const handleClick = useCallback(() => {
    fetchMore({
      variables: {
        skip:
          data 
            ? data.length
            : 0,
      },
    });
  }, [fetchMore, data]);

  return (
    <ResourceContainer lightBg={true} id="resource">
      <ResourcesWrapper>
        <ResourceRow left={true}>
          <Column1>
            <TextWrapper>
              <Heading lightText={false}>Resources</Heading>
              <Content darkText={true} className="split_cms">
                Cyber Streets strives in sharing education resources to all.
                Below you can find an exhaustive list of resources covering
                everything from computer programming to enterneurship. "Be
                knowledgeable in your niche, provide some information free of
                charge, and share other trustworthy people's free resources
                whenever possible..." - Heather Hart
              </Content>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img
                src="/assets/images/Resource.svg"
                alt="Two looking at computer screen svg"
              />
            </ImgWrap>
          </Column2>
        </ResourceRow>
        <Form action="">
          <FormSelect
          // onChange={(e) => {
          //   setCategory(e.target.value);
          //   // setLimit(5);
          // }}
          >
            <FormOption value="">Filter by category</FormOption>
            <FormOption value="MEDIA">Media</FormOption>
            <FormOption value="TEDX">Ted Talks</FormOption>
            <FormOption value="INTERNET SAFETY/AWARENESS">
              Internet safety &amp; awareness
            </FormOption>
            <FormOption value="K-12/COMPUTER SCIENCE">
              k-12 &amp; computer science
            </FormOption>
            <FormOption value="CODING">Programming</FormOption>
            <FormOption value="CYBER/IT OPERATIONS">
              Cyber &and; IT operations
            </FormOption>
            <FormOption value="ROBOTICS">Robotics</FormOption>
            <FormOption value="CLOUD">Cloud</FormOption>
            <FormOption value="SCIENCE">Science</FormOption>
            <FormOption value="PROFESSIONAL DEVELOPMENT">
              Professional Development
            </FormOption>
            <FormOption value="3D PRINTING">3D Printing</FormOption>
            <FormOption value="ART">Art</FormOption>
            <FormOption value="MOOC">Massive Open Online Courses</FormOption>
            <FormOption value="GAMES">Games &amp; Challenges</FormOption>
            <FormOption value="OTHER">Other</FormOption>
          </FormSelect>
        </Form>
        <div className="list">
          {data.map((resource, i) => (
            <div key={resource.title} className="item">
              {resource.title}
            </div>
          ))}
        </div>

        <button className="button" onClick={handleClick}>
          Fetch!
        </button>
      </ResourcesWrapper>
    </ResourceContainer>
  );
};

export default ResourceSection;
