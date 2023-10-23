import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const [userName, setUserName] = useState("");
  console.log(userName);
  const callHomepage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserName(data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callHomepage();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <HeroSection myData={userName} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
