import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArticleContext } from '../context/ArticlesContext';
import { FaArrowLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const ArticleDetail = () => {
    const { id } = useParams();
    const articles = useContext(ArticleContext);
    const article = articles.find((article) => article.id === id);

    if (!article) {
        return null;
    }

    return (
        <div className="container overflow-auto my-4 ">
            <Helmet><title>Artikel Detail | TRACLE</title></Helmet>
            <h1>{article.title}</h1>
            <div className="text-center">
                <img src={article.image} alt={article.title} className="img-fluid my-4 rounded mx-auto" />
            </div>
            {article.content.split('\n').map((paragraph, index) => (
                <p className="mb-3" key={index}>{paragraph}</p>
            ))}
            <Link to="/articles" className="btn btn-success">
                <FaArrowLeft className="me-2" />
                Baca Artikel Lain
            </Link>
        </div>
    );
};

export default ArticleDetail; 