import { memo } from "react";
import {useSelector} from "react-redux";

const PopularList = memo(( {} ) => {
    const repos = useSelector((state) => state.popular.repos);
    const error = useSelector((state) => state.popular.error);

    if(error) {
        return <p>{error}</p>
    }

    return (
        <ul className='popular-list'>
            {repos ? repos.map((repo, index) => {
                return (
                    <li key={repo.id} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul>
                            <li><img className='avatar' src={repo.owner.avatar_url} alt="Avatar"/></li>
                            <li><a href={repo.html_url} target='_blank'>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count}</li>
                        </ul>
                    </li>
                )
            }) :  <p>Ooops...</p>}
        </ul>
        )
})

export default PopularList;