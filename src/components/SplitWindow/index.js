import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import {
  SplitContainer,
  SplitWrapper,
  Column1,
  Column2,
  ImgWrap,
  Img,
  TextWrapper,
  Heading,
  Content,
  SplitRow,
} from "./SplitElements";

const Split = ({ item }) => {
  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        const UnTaggedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
          },
        });

        return <li>{UnTaggedChildren}</li>;
      },
      renderText: (text) => {
        return text.split("\n").reduce((children, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
      },
    },
  };

  return (
    <SplitContainer lightBg={item.lightBg} id={item.splitId}>
      <SplitWrapper>
        <SplitRow left={item.left}>
          <Column1>
            <TextWrapper>
              <Heading lightText={item.lightText}>{item.heading}</Heading>
              <Content darkText={item.darkText} className="split_cms">
                {documentToReactComponents(item.content.json, RICHTEXT_OPTIONS)}
              </Content>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={item.image.url} alt={item.alt} />
            </ImgWrap>
          </Column2>
        </SplitRow>
      </SplitWrapper>
    </SplitContainer>
  );
};

export default Split;
