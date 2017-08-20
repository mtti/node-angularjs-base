import express from 'express';
import morgan from 'morgan';
import config from './config';
import models from './models';
import api from './api';

config.sequelize.sync();

const app = express();

app.use(morgan('combined'));
app.use(express.static(__dirname + '/../client'));
app.use('/api', api);

app.listen(config.port);
