import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function Home() {
  const getData = async () => {
    try {
      const response = await axios.post(
        "https://stayfit-fr11.onrender.com/api/user/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <Layout>Home</Layout>;
}

export default Home;
