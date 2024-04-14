import React from "react";
import NewUser from "./NewUser";
import ReturningUser from "./ReturningUser";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isNewUser = tableData.length === 0;
  const { data: tableData, isLoading } = useSelector(
    (state) => state.tableData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return tableData.length === 0 ? <NewUser /> : <ReturningUser />;
};

export default Dashboard;
