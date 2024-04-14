// import React from "react";
// import NewUser from "./NewUser";
// import ReturningUser from "./ReturningUser";
// import { useSelector } from "react-redux";

// const Dashboard = () => {
//   const { data: tableData, isLoading } = useSelector(
//     (state) => state.tableData
//   );

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return tableData.length === 0 ? <NewUser /> : <ReturningUser />;
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import NewUser from "./NewUser";
import ReturningUser from "./ReturningUser";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [userQueries, setUserQueries] = useState([]);

  useEffect(() => {
    fetch(
      "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserQueries(data.userQueries);
      });
  }, [dispatch]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return userQueries.length === 0 ? (
    <NewUser />
  ) : (
    <ReturningUser userQueries={userQueries} />
  );
};

export default Dashboard;
