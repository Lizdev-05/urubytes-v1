import React, { useEffect, useState } from "react";
import NewUser from "./NewUser";
import ReturningUser from "./ReturningUser";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [userQueries, setUserQueries] = useState([]);
  const [data, setData] = useState(null);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    fetch(
      "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/",
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUserQueries(data.aggregates.userQueries);
        setData(data);
        console.log("User queries:", data.aggregates.userQueries);
      });
  }, [dispatch]);

  return !userQueries || userQueries.length === 0 ? (
    <NewUser />
  ) : (
    <ReturningUser userQueries={userQueries} data={data} />
  );
};

export default Dashboard;
