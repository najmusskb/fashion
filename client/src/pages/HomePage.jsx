import React, { useEffect, useState } from "react";

import { Col, Row } from "antd";
import DefaultLayout from "./../components/DefaultLayout";
import axios from "axios";
import ItemList from "../components/ItemList";
import { useDispatch } from "react-redux";
const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState("drinks");
  const categories = [
    {
      name: "Men_Collection",
      imageUrl: "http://cdn-icons-png.flaticon.com/512/430/430561.png",
    },
    {
      name: "Woman_Collection",
      imageUrl: "http://cdn-icons-png.flaticon.com/512/3174/3174880.png",
    },
    {
      name: "99_Product",
      imageUrl: "http://cdn-icons-png.flaticon.com/512/1471/1471262.png",
    },
  ];
  const dispatch = useDispatch();
  // useeffect
  useEffect(() => {
    const getAllItems = async () => {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const { data } = await axios.get(
          "http://localhost:8080/api/items/get-item"
        );
        setItemsData(data);
        dispatch({ type: "HIDE_LOADING" });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, [dispatch]);
  return (
    <DefaultLayout>
      <div className="d-flex">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`d-flex catagory ${
              selectedCatagory === category.name && "catagory-active "
            }`}
            onClick={() => setSelectedCatagory(category.name)}
          >
            <h4>{category.name}</h4>
            <img
              src={category.imageUrl}
              alt={category.name}
              height="40"
              width="60"
            />
          </div>
        ))}
      </div>
      <Row>
        {itemsData
          .filter((i) => i.category === selectedCatagory)
          .map((item) => (
            <Col xs={24} lg={6} md={12} sm={6}>
              <ItemList key={item.id} item={item}></ItemList>
            </Col>
          ))}
      </Row>
    </DefaultLayout>
  );
};
export default Homepage;
