import React from "react";
import LanguageTabs from "./LanguageTabs";
import PopularList from "./PopularList";
import { useSelector } from "react-redux";

const Popular = () => {
  const loading = useSelector((state) => state.popular.loading);

  return (
    <div>
      <LanguageTabs loading={loading} />
      {!loading ? (
        <PopularList />
      ) : (
        <div className="cube-pos">
          <div className="cube">
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popular;
