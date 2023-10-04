import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';

const ArticleCard = ({ article }) => {
    const MAX_TITLE_LENGTH = 50;
    const MAX_DESCRIPTION_LENGTH = 130;

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    const truncatedTitle = truncateText(article.title, MAX_TITLE_LENGTH);
    const truncatedDescription = truncateText(article.content, MAX_DESCRIPTION_LENGTH);

    return (
        <div className="card">
            <img src={article.image} className="card-img-top" alt={article.title} />
            <div className="card-body">
                <h5 className="card-title">{truncatedTitle}</h5>
                <p className="card-text small">{truncatedDescription}</p>
                <Link to={`/articles/${article.id}`} className="btn btn-success">
                    Read More <RiArrowRightSLine className="ms-1" />
                </Link>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};

export default ArticleCard;