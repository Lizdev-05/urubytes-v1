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
    return <Spinner />;
  }

  return !userQueries || userQueries.length === 0 ? (
    <NewUser />
  ) : (
    <ReturningUser userQueries={userQueries} data={data} />
  );
};

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
//   const [isLoading, setIsLoading] = useState(true);
//   const token = useSelector((state) => state.login.token);
//   const userQueries = useSelector((state) => state.dashboard.userQueries);

//   // useEffect(() => {
//   //   fetch(
//   //     "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/",
//   //     {
//   //       headers: {
//   //         Authorization: `Token ${token}`,
//   //       },
//   //     }
//   //   )
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       dispatch({
//   //         type: "SET_USER_QUERIES",
//   //         payload: data.aggregates.userQueries,
//   //       });
//   //       dispatch({ type: "SET_DATA", payload: data });
//   //       setIsLoading(false);
//   //     });
//   // }, [dispatch]);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auxi/dashboard/",
//           {
//             headers: {
//               Authorization: `Token ${token}`,
//             },
//             signal,
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         dispatch({
//           type: "SET_USER_QUERIES",
//           payload: data.aggregates.userQueries,
//         });
//         dispatch({ type: "SET_DATA", payload: data });
//         setIsLoading(false);
//       } catch (error) {
//         console.error("A problem occurred fetching data:", error);
//       }
//     };

//     fetchData();

//     const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

//     return () => clearTimeout(timeoutId);
//   }, [dispatch]);
//   if (isLoading) {
//     return <Spinner />;
//   }

//   return !userQueries || userQueries.length === 0 ? (
//     <NewUser />
//   ) : (
//     <ReturningUser />
//   );
// };

// export default Dashboard;
