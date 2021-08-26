import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Card,
  CardActions,
  Grid,
  TextField,
} from '@material-ui/core';

const Articles = () => {
  const [search_text, setSearch_text] = useState('');
  const [articles, setArticles] = useState([
    { title: 'title', content: 'content' },
  ]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    axios
      .get(`http://localhost:5000/articles`)
      .then((res) => {
        console.log(res);
        setArticles(res.data);
      })
      .catch((err) => {
        alert('Failed!');
      });
  };
  return (
    <div>
      <Container maxWidth='md'>
        <Card style={{ padding: '20px' }}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                placeholder='Search Title or Content'
                value={search_text}
                onChange={(e) => setSearch_text(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={fetchArticles}
                color='primary'
                variant='contained'
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
      {articles &&
        articles.map((article) => (
          <Card style={{ padding: '16px' }} key={article.id}>
            <h3>{article.title}</h3>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

export default Articles;
