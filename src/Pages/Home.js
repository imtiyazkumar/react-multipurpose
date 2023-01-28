import { useEffect, useState } from 'react';
import { Col, Card } from 'react-bootstrap';
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
                    <Card style={{ width: '18rem', height: '26rem' }}>
                        <Card.Img variant="top" src={article.urlToImage} fluid />
                        <Card.Body>
                            <Card.Title>{article.title.slice(0, 40)}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>{article.description?.slice(0, 150)}</Card.Text>
                            <Card.Link href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
}

export default Home;
