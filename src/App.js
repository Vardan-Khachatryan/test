import React from "react";
import { MyTable } from "./components/myTable/MyTable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./redux/dataSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedData = localStorage.getItem("Data");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      dispatch(addData(parsedData));
    }
  }, [dispatch]);

  return (
    <div>
      <MyTable />
    </div>
  );
};
