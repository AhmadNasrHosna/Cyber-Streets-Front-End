import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import Split from "../components/SplitWindow";
import Loading from "../components/Loading";
import { useQuery, gql } from "@apollo/client";
import Resource from "../components/ResourceSection";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";

const SPLITSECTIONCOLLECTION = gql`
query{
splitSectionCollection(order: splitId_ASC) {
 items {
   splitId
   lightBg
   left
   lightText
   darkText
   image {
     url
   }
   alt
   heading
   content {
     json
   }
 }
} 

}
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { loading, error, data } = useQuery(SPLITSECTIONCOLLECTION, {
    variables: {
      skip: 0,
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <FeaturesSection />
      {data.splitSectionCollection.items.map((item) => {
        return <Split item={item} key={item.splitId} />;
      })}
      <Resource/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
