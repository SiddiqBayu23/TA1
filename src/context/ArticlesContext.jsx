import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://645130aee1f6f1bb22aaa3e5.mockapi.io/api/v1/articles');
                const data = response.data;
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    console.log(articles);

    return (
        <ArticleContext.Provider value={articles}>
            {children}
        </ArticleContext.Provider>
    );
};

ArticleProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ArticleProvider;