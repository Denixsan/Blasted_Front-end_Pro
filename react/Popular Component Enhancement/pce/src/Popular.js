import React from "react";
import { useState, useEffect } from "react";
import { fetchPopularRepos } from "./API";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const Popular = () => {

    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(selectedLanguage)
            .then(data => setRepos(data))
            .catch(error => setError(error))
            .finally(()=> setLoading(false))
},[selectedLanguage]);

if(loading)
{return <div className="loading-container">
    <ul className='languages'>
        {languages.map((language, index) => {
            return (
            <li
                key={index}
                style={{ color: selectedLanguage === language ? '#d0021b' :'#000000' }}
                onClick={() => setSelectedLanguage(language)} >
                {language}
            </li>
        )})}
    </ul>
    <div className="cube-pos">
            <div class="cube">
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
        </div>
    </div>
</div>}

if(error)
{return <p>error</p>}

    return (
        <div className="popular-list-container">
            <ul className='languages'>
                {languages.map((language, index) => {
                    return (
                    <li
                        key={index}
                        style={{ color: selectedLanguage === language ? '#d0021b' :'#000000' }}
                        onClick={() => setSelectedLanguage(language)} >
                        {language}
                    </li>
                )})}
                </ul>
            <ul className="popular-list">
                {repos.map((repo,index) =>{
                return(
                    <li key={repo.id} className="popular-item">
                        <div className="popular-rank">
                            #{index+1}
                        </div>
                        <ul className="space-list-item">
                            <li><img className="avatar" src={repo.owner.avatar_url} alt ="avatar" />
                            <li>
                                <a href={repo.html_url} target="_blank"> {repo.name} </a>
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li> {repo.stargazers_count}</li>
                            </li>
                            </ul>
                    </li>
                )}
             )}
            </ul>
        </div>
    )
}
export default Popular;