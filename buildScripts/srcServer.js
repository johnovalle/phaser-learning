import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(express.static(path.join(__dirname + '/../src/spaceGame')));
app.use(express.static(path.join(__dirname + '/../src/first')));
app.use(express.static(path.join(__dirname + '/../src/turnRpg')));
// console.log(path.join(__dirname + '/../src/spaceGame'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
