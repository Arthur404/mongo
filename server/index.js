import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import path from 'path';
import cors from 'cors';

import * as db from './utils/DataBaseUtils';
import serverRenderer from './middleware/renderer';
import index from './middleware/router';
import config from '../etc/config.json';

const app = express();

db.setUpConnection();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

app.get('/location', (req, res) => {
    db.listLocation().then(data => res.send(data));
});

app.post('/location', (req, res) => {
    db.createLocation(req.body).then(data => res.send(data));
});

app.delete('/location/:id', (req, res) => {
    db.deleteLocation(req.params.id).then(data => res.send(data));
});

app.use(compression());
app.use(bodyParser.json());

app.use('/', index);
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('/', serverRenderer);

app.listen(config.serverPort, (error) => {
    if (error) {
        return console.log('Something bad happened', error);
    }

    console.log(`listening on ${config.serverPort}...`);
});