import React, { useCallback, useState } from "react";
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
  LinkContainer,
  LinkWrapper,
  LinkIcon,
  LinkTitle,
  LoadMore,
  ButtonWrapper,
} from "./ResourceElements";
import { useQuery, gql } from "@apollo/client";
import Loading from "../Loading";
import { FaVideo, FaBook, FaGlobe } from "react-icons/fa";

const RESOURCE_FRAGMENT = gql`
  fragment resourceCollectionFrag on ResourceCollection {
    total
    items {
      type
      category
      title
      link
      bgColor
      color
    }
  }
`;

const MASS_COLLECTION = gql`
  query($limit: Int) {
    resourceCollection(limit: $limit) {
      ...resourceCollectionFrag
    }
  }
  ${RESOURCE_FRAGMENT}
`;
const MASS_COLLECTION_WITH_CAT = gql`
  query($limit: Int, $category: String) {
    resourceCollection(limit: $limit, where: { category: $category }) {
      ...resourceCollectionFrag
    }
  }
  ${RESOURCE_FRAGMENT}
`;

const Resource = ({ category, poorMansFetchMore, setLimit }) => {
  const { loading, error, data } = useQuery(
    category ? MASS_COLLECTION_WITH_CAT : MASS_COLLECTION,
    {
      variables: {
        limit: poorMansFetchMore,
        category,
      },
    }
  );

  const handleClick = useCallback(() => {
    setLimit(poorMansFetchMore + 10);
  }, [poorMansFetchMore, setLimit]);

  if (error) return <p>Error</p>;
  if (loading) return <Loading />;
  return (
    <>
      <LinkContainer>
        {data.resourceCollection.items.map((resource) => (
          <LinkWrapper
            href={resource.link}
            target="_blank"
            key={resource.title}
          >
            <LinkIcon bgColor={resource.bgColor} color={resource.color}>
              {resource.type === "video" ? (
                <FaVideo color={resource.color} />
              ) : resource.type === "article" ? (
                <FaBook color={resource.color} />
              ) : (
                <FaGlobe color={resource.color} />
              )}
            </LinkIcon>
            <LinkTitle>{resource.title}</LinkTitle>
          </LinkWrapper>
        ))}
      </LinkContainer>
      <ButtonWrapper>
        <LoadMore
          className="button"
          onClick={handleClick}
          disabled={
            data.resourceCollection.total ===
            data.resourceCollection.items.length
          }
        >
          Load more
        </LoadMore>
      </ButtonWrapper>
    </>
  );
};

const ResourceSection = () => {
  const [category, setCategory] = useState(null);
  const [poorMansFetchMore, setLimit] = useState(10);

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
                everything from computer programming to entrepreneurship.
                <br />
                <br /> "Be knowledgeable in your niche, provide some information
                free of charge, and share other trustworthy people's free
                resources whenever possible..." - Heather Hart
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
      </ResourcesWrapper>
      <Form action="">
        <FormSelect
          onChange={(e) => {
            setCategory(e.target.value);
            setLimit(10);
          }}
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
            Cyber &amp; IT operations
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
      <div className="min-height-500">
        <Resource
          category={category}
          poorMansFetchMore={poorMansFetchMore}
          setLimit={setLimit}
        />
      </div>
    </ResourceContainer>
  );
};

export default ResourceSection;
