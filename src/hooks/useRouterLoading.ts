import Router from "next/router";
import React, { useState, useEffect } from "react";

const useRouterLoading = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    let unmounted = false;
    Router.events.on("routeChangeStart", url => {
      !unmounted && setLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      !unmounted && setLoading(false);
    });
    Router.events.on("routeChangeError", () => !unmounted && setLoading(false));
    return () => {
      unmounted = true;
    };
  }, []);

  return loading;
};

export default useRouterLoading;
