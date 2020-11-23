import express from 'express';
import { Nanbread } from './nanbread.class';
import { nanContainer } from './container.config'

const nanbread : Nanbread = nanContainer.resolve<Nanbread>(Nanbread);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send();
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

