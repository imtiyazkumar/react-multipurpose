import { useEffect, useState } from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import axios from 'axios';

function Home() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5a6f92769451461ebffa376cd16ca032')
            .then(res => setNews(res.data.articles))
            .catch(err => setError(err));
    }, []);

    return (
        <div className="row">
            {error && <div>{error.message}</div>}
            {news.map(article => (
                <Col xs={3} key={article.title} className="my-3">
                    <Card className="card">
                        <Image className="card-image" src={article.urlToImage} alt={article.title} fluid />
                        <Card.Body>
                            <Card.Title>{article.title.slice(0, 20)}...</Card.Title>
                            <Card.Text>{article.description.slice(0, 100)}...</Card.Text>
                            <Card.Link href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
}

export default Home;
