import React from 'react';
import NewsFeed from '../components/NewsFeed';
import HotNews from '../components/HotNews';
import HeroBannerSlider from '../components/HeroBannerSlider';
import { Helmet } from 'react-helmet';

const ArticlePage = () => {
    return (
        <div>
            <Helmet><title>Artikel | TRACLE</title></Helmet>
            <HeroBannerSlider />
            <NewsFeed />
            <HotNews />
        </div>
    );
};

export default ArticlePage;