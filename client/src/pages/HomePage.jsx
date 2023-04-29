import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/DefaultLayout.css";
const HomePage = () => {
  return (
    <div className="homepage">
      <DefaultLayout>
        <h1>This is Home Page</h1>
      </DefaultLayout>
    </div>
  );
};
export default HomePage;
