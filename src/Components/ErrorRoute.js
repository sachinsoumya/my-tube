import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorRoute = () => {
  const err = useRouteError();
  return (
    <div className="font-bold text-xl text-center">
      <div>Errror - {err.status}</div>
      <div>{err.statusText}</div>
    </div>
  );
};

export default ErrorRoute;
