let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let bears = [
    { 'id': 0, 'name': 'Cat', 'weight': 007, 'img': 'https://i.pinimg.com/736x/60/d9/26/60d9269a5ada1ee5e2f5161d036209e5.jpg' },
    { 'id': 1, 'name': 'Catcat', 'weight': 111, 'img': 'https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg' },
    { 'id': 2, 'name': 'Cat3', 'weight': 213, 'img': 'https://i.imgur.com/gdWIxn2.jpg' },
    { 'id': 3, 'name': 'Cat4', 'weight': 652, 'img': 'https://lh3.googleusercontent.com/ObdbSatQvNUymufVs3vL5YmhGdvs3w5vvTciaGLFQOZoREVAEIIueioFOrWk9je_fqxR' },
    { 'id': 4, 'name': 'Cat5', 'weight': 43, 'img': 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&w=1000&q=80' },
    { 'id': 5, 'name': 'Cat6', 'weight': 34, 'img': 'https://fsb.zobj.net/crop.php?r=DIRnAiiiyJkFkfpMsvWknlEIXkuYLfYvI-s3DG3Afrdgn54EWiIqaNqyjomP1mJo8-iAIaZo8J6kdNhqsDwLm8b90xiYYxYOirvHOlW-SCHgqgsNsidIfDxCmtJjgK5LfIQkKEU3uxI1Yv1H' }
];

router.route('/bears')
    // get all bears
    .get((req, res) => res.json(bears))
    // insert a new bear
    .post((req, res) => {
        var bear = {};
        bear.id = bears.length > 0 ? bears[bears.length - 1].id + 1 : 0;
        bear.name = req.body.name
        bear.weight = req.body.weight
        bear.img = req.body.img
        bears.push(bear);
        res.json({ message: 'Bear created!' })
    })

router.route('/bears/:bear_id')
    .get((req, res) => {
        let id = req.params.bear_id
        let index = bears.findIndex(bear => (bear.id === +id))
        res.json(bears[index])                   // get a bear
    })
    .put((req, res) => {                               // Update a bear
        let id = req.params.bear_id
        let index = bears.findIndex(bear => (bear.id === +id))
        bears[index].name = req.body.name;
        bears[index].weight = req.body.weight;
        bears[index].img = req.body.img;
        res.json({ message: 'Bear updated!' + req.params.bear_id });
    })
    .delete((req, res) => {                   // Delete a bear
        // delete     bears[req.params.bear_id]
        let id = req.params.bear_id
        let index = bears.findIndex(bear => bear.id === +id)
        bears.splice(index, 1)
        res.json({ message: 'Bear deleted: ' + req.params.bear_id });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log("Server is running"));