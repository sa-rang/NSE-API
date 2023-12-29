import express from "express"
import { getBySymbol, searchShareData, getAllShareList } from "./index.js"
import apicache from 'apicache';
import path from "path"


const __dirname = path.resolve()
let cache = apicache.middleware;
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/symbol/:symbol', cache('24 hour'), async function (req, res) {
    const symbol = req.params.symbol;
    let result = await getBySymbol(String(symbol).toLowerCase())
    res.send(result);
});

router.get('/search/:term', cache('24 hour'), async function (req, res) {
    const term = req.params.term;
    let result = await searchShareData(String(term).toLowerCase())
    res.send(result);
});

router.get('/sharelist', cache('24 hour'), async function (req, res) {
    let result = await getAllShareList();
    res.send(result);
});

export default router;