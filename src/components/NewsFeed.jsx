import React, { useContext } from 'react';
import { ArticleContext } from '../context/ArticlesContext';
import ArticleCard from './ArticleCard';

const NewsFeed = () => {
    const articles = useContext(ArticleContext);

    return (
        <div>
            <section id="news-feed">
                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col my-3">
                            <h1 className="fw-medium">News Feed</h1>
                        </div>
                    </div>
                    <div className="row">
                        {articles.map(article => (
                            <div key={article.id} className="col-md-4 my-3">
                                <ArticleCard article={article} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsFeed;