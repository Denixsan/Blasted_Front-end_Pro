import { FC, ReactElement } from "react";
import LanguageTabs from "./LanguageTabs";
import PopularList from "./PopularList";
import { useSelector } from "react-redux";

const Popular: FC = (): ReactElement => {
  const loading = useSelector((state: IPopularState) => state.popular.loading);

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

interface IPopularState {
  popular: {
    [key: string]: boolean;
  };
};

export default Popular;
