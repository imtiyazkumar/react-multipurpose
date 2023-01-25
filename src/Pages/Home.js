import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const API_KEY = '5a6f92769451461ebffa376cd16ca032';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
                );

                setArticles(result.data.articles);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div>
            {articles.map((article) => (
                <div key={article.url}>
                    <img src={article.urlToImage} alt={article.title} />
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
