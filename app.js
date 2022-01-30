const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.render('index', { title: 'Home', year: new Date().getFullYear() }));
app.get('/job-experience', (req, res) => res.render('job-experience', { title: 'Job Experience', year: new Date().getFullYear() }));
app.get('/education', (req, res) => res.render('education', { title: 'Education', year: new Date().getFullYear() }));

app.listen(PORT, _ => console.log(`Server running on port ${PORT}`));