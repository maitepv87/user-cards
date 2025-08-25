import { useContext, useEffect } from "react";
import { HeaderNav, CardList, FooterInfo } from ".";
import { AsyncContext } from "../context/AsyncContext";
import { fetchAsyncData } from "../context/fetchAsyncData";

export const AppLayout = () => {
  const { state, dispatch } = useContext(AsyncContext);

  useEffect(() => {
    fetchAsyncData(dispatch, "./api.json");
  }, [dispatch]);

  return (
    <div className="pageContainer">
      <HeaderNav />
      <CardList users={state.data} />
      <FooterInfo />
    </div>
  );
};
