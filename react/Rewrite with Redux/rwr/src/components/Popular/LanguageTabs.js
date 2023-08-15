import { useNavigate, useLocation } from 'react-router-dom';
import {memo, useEffect} from 'react';
import {setSelectedLanguage} from "../redux/popular/popular.actions";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../redux/popular/popular.thunk";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const LanguageTabs = memo(({loading}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const selectedLanguage = useSelector((state) => state.popular.selectedLanguage);

    const handleLanguageClick = (language) => {
        if (!loading) {
            dispatch(setSelectedLanguage(language));

            const queryParams = new URLSearchParams(location.search);
            queryParams.set('language', language)
            navigate({search: queryParams.toString()})

            sessionStorage.setItem('selectedLanguage', language);
        }
    }

    useEffect(() => {
        dispatch(getRepos(selectedLanguage));
    }, [selectedLanguage]);

    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li
                    key={index}
                    style={{
                        color: selectedLanguage === language ? '#d0021b' : '#000000',
                        cursor: !loading ? 'pointer' : 'default',
                        userSelect: !loading ? 'auto' : 'none',
                }}
                    onClick={() => handleLanguageClick(language)}
                >
                    {language}
                </li>
            ))}
        </ul>
    )
})

export default LanguageTabs;