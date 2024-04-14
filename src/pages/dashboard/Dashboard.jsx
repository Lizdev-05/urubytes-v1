import React from "react";
import NewUser from "./NewUser";
import ReturningUser from "./ReturningUser";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const tableData = useSelector((state) => state.tableData); // Get tableData from Redux
  const isNewUser = tableData.length === 0;
  // const sources = useSelector((state) => state.sources);
  // const isNewUser = sources.length === 0;

  return isNewUser ? <NewUser /> : <ReturningUser />;
};

export default Dashboard;
