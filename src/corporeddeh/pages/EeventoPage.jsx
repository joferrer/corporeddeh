import React from "react";
import Layout from "./layout/Layout";

export const EeventoPage = () => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  return <Layout>hola + {id}</Layout>;
};
