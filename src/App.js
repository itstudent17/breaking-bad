import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/ui/Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setItems(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
