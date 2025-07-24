"use client";
import React, { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/Postcard";

export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());
    setData(response.slice(0, 10));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data", data);
  if (loading) {
    return <div className="loadingStyle">Loading....</div>;
  }

  return (
    <div className="wrapperContainer">
      <div className="header">Welcome to Adeola's page</div>
      <div className="wrapper">
        {data &&
          data.length > 0 &&
          data.map((data, i) => (
            <PostCard
              key={i}
              title={data.title.slice(0, 20)}
              description={data.body.slice(0, 100)}
            />
          ))}
      </div>
    </div>
  );
}
