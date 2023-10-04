import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("https://64400c883dee5b763e2d6c25.mockapi.io/todo");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addData = async (newData) => {
    try {
      await axios.post("https://64400c883dee5b763e2d6c25.mockapi.io/todo", newData);
      alert("Data berhasil dikirim");
      setUpdateData(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [updateData]);

  return (
    <>
      <ComplaintContext.Provider value={{ data, addData }}>{children}</ComplaintContext.Provider>
    </>
  );
};
