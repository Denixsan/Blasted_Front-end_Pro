import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import { useDispatch, useSelector } from "react-redux";
import { getFinalData } from "../redux/result/result.thunk";
import { resetResultData } from "../redux/result/result.actions";
import { resetBattleData } from "../redux/battle/battle.actions";

const Results = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.result.loading);
  const winner = useSelector((state) => state.result.winner);
  const loser = useSelector((state) => state.result.loser);
  const error = useSelector((state) => state.result.error);

  const resetPlayersData = () => {
    dispatch(resetResultData());
    dispatch(resetBattleData());
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchFirstPlayer = searchParams.get("playerOneName");
    const searchSecondPlayer = searchParams.get("playerTwoName");

    dispatch(getFinalData(searchFirstPlayer, searchSecondPlayer));
  }, [location.search]);

  return (
    <div>
      {loading ? (
        <div className="cube-pos" style={{ margin: "25% 25%" }}>
          <div className="cube">
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
        </div>
      ) : error ? (
        <p>Ooops...</p>
      ) : winner && loser ? (
        <div className="row">
          <div className="winner-div">
            <h1>Winner:</h1>
            <PlayerPreview
              avatar={winner.profile.avatar_url}
              userName={winner.profile.login}
            >
              <div className="list">
                <ul className="space-list-item">
                  <li>
                    Name:{" "}
                    {winner.profile.name ? (
                      winner.profile.name
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Location:{" "}
                    {winner.profile.location ? (
                      winner.profile.location
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Company:{" "}
                    {winner.profile.company ? (
                      winner.profile.company
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Followers:{" "}
                    {winner.profile.followers ? (
                      winner.profile.followers
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Following:{" "}
                    {winner.profile.following ? (
                      winner.profile.following
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Public Repositories:{" "}
                    {winner.profile.public_repos ? (
                      winner.profile.public_repos
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Blog:{" "}
                    {winner.profile.blog ? (
                      <a href={winner.profile.blog} target="_blank">
                        {winner.profile.blog}
                      </a>
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                </ul>
                <h2>Score: {winner.score}</h2>
              </div>
            </PlayerPreview>
          </div>

          <div className="loser-div">
            <h1>Loser:</h1>
            <PlayerPreview
              avatar={loser.profile.avatar_url}
              userName={loser.profile.login}
            >
              <div className="list">
                <ul className="space-list-item">
                  <li>
                    Name:{" "}
                    {loser.profile.name ? (
                      loser.profile.name
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Location:{" "}
                    {loser.profile.location ? (
                      loser.profile.location
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Company:{" "}
                    {loser.profile.company ? (
                      loser.profile.company
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Followers:{" "}
                    {loser.profile.followers ? (
                      loser.profile.followers
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Following:{" "}
                    {loser.profile.following ? (
                      loser.profile.following
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Public Repositories:{" "}
                    {loser.profile.public_repos ? (
                      loser.profile.public_repos
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                  <li>
                    Blog:{" "}
                    {loser.profile.blog ? (
                      <a href={loser.profile.blog} target="_blank">
                        {loser.profile.blog}
                      </a>
                    ) : (
                      <span>no information</span>
                    )}
                  </li>
                </ul>
                <h2>Score: {loser.score}</h2>
              </div>
            </PlayerPreview>
          </div>
        </div>
      ) : null}
      {loading ? null : (
        <Link
          className="button"
          to={{ pathname: "/battle" }}
          onClick={resetPlayersData}
        >
          Reset
        </Link>
      )}
    </div>
  );
};

export default Results;
