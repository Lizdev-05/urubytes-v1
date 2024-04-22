// import React, { useEffect, useState } from "react";
// import NewUser from "./NewUser";
// import ReturningUser from "./ReturningUser";
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../../components/Spinner";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const [userQueries, setUserQueries] = useState([]);
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const token = useSelector((state) => state.login.token);

//   useEffect(() => {
//     fetch(
//       "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/",
//       {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setUserQueries(data.aggregates.userQueries);
//         setData(data);
//         setIsLoading(false);
//         console.log("User queries:", data.aggregates.userQueries);
//       });
//   }, [dispatch]);

//   if (isLoading) {
//     <Spinner />;
//   }

//   return !userQueries || userQueries.length === 0 ? (
//     <NewUser />
//   ) : (
//     <ReturningUser userQueries={userQueries} data={data} />
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import NewUser from "./NewUser";
// import ReturningUser from "./ReturningUser";
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../../components/Spinner";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const [userQueries, setUserQueries] = useState([]);
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const token = useSelector((state) => state.login.token);

//   useEffect(() => {
//     fetch(
//       "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/",
//       {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setUserQueries(data.aggregates.userQueries);
//         setData(data);
//         setIsLoading(false);
//         console.log("User queries:", data.aggregates.userQueries);
//       });
//   }, [dispatch]);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return !userQueries || userQueries.length === 0 ? (
//     <NewUser />
//   ) : (
//     <ReturningUser userQueries={userQueries} data={data} />
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import NewUser from "./NewUser";
// import ReturningUser from "./ReturningUser";
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../../components/Spinner";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const [userQueries, setUserQueries] = useState([]);
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const token = useSelector((state) => state.login.token);

//   useEffect(() => {
//     fetch(
//       "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/",
//       {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setUserQueries(data.aggregates.userQueries);
//         setData(data);
//         setIsLoading(false);
//         console.log("User queries:", data.aggregates.userQueries);
//       });
//   }, [dispatch]);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return !userQueries || userQueries.length === 0 ? (
//     <NewUser />
//   ) : (
//     <ReturningUser userQueries={userQueries} data={data} />
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import NewUser from "./NewUser";
import ReturningUser from "./ReturningUser";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [userQueries, setUserQueries] = useState([]);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
        console.log("User queries:", data.aggregates.userQueries);
      });
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  return !userQueries || userQueries.length === 0 ? (
    <NewUser />
  ) : (
    <ReturningUser userQueries={userQueries} data={data} />
  );
};

export default Dashboard;

// import React, { useEffect, useState, useMemo } from "react";
// import NewUser from "./NewUser";
// import ReturningUser from "./ReturningUser";
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../../components/Spinner";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const [userQueries, setUserQueries] = useState([]);
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const token = useSelector((state) => state.login.token);

//   useEffect(() => {
//     fetch(
//       "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/",
//       {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setUserQueries(data.aggregates.userQueries);
//         setData(data);
//         setIsLoading(false);
//         console.log("User queries:", data.aggregates.userQueries);
//       });
//   }, [dispatch]);

//   const ReturningUserMemo = useMemo(
//     () => <ReturningUser userQueries={userQueries} data={data} />,
//     [userQueries, data]
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return !userQueries || userQueries.length === 0 ? (
//     <NewUser />
//   ) : (
//     <ReturningUser userQueries={userQueries} data={data} />
//   );
// };

// export default Dashboard;
