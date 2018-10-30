var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');

const auth = require('./middlewares/auth');
const role = require('./middlewares/role');

const User = require('../models/user');

/* GET users listing. */

router.post('/signup', async (req, res) => {
    let user = new User(req.body);
    try {
        user.role = 'user';
        let doc = await user.save();

        res.json({ message: doc });
    } catch(ex) {
        res.status(405).json({error: ex.message });
        console.log(ex.message);
    }
});

router.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).json({ message:" message.users.login.fail" });

    let password = await bcrypt.compare(req.body.password, user.password);
    if(!password) return res.status(400).json({ message:  "message.users.login.fail"});

    let token = user.genToken();

    res.header('X-Auth', token).json({ user: user, token: token });
});

router.get('/me', auth, async (req, res) => {
    try {
        let user = await User.findById(req.user._id);
        res.json(user);
    } catch(ex) {
        return res.status(400).json({ message: ex.message });
    }
});

router.put('/edit/:id', auth, async (req, res) => {

    try {
        let doc = await User.findByIdAndUpdate(req.params.id);

        if(!doc) return res.status(400).json({ message: '' });

        for(val in req.body) {
            doc[val] = req.body[val];
        }

        let user = await doc.save();

        res.json(user);

    } catch(ex) {
        res.status(400).json({ error: ex.message });
    }
});

router.use(auth, role('admin'));

router.get('/', async (req, res) => {
    try {
        let docs = await User.find();
        res.json(docs);
    } catch(ex) {
        res.status(500).json(ex);
    }
});

router.post('/create/user', async (req, res) => {
    let user = new User(req.body);
    try {
        //user.role = req.params.role;
        let doc = await user.save();

        res.json({ message: doc });
    } catch(ex) {
        res.status(405).json({error: ex.message });
        console.log(ex.message);
    }
})

router.delete('/:id', async (req, res) => {

    try {
        let doc = await User.findByIdAndRemove(req.params.id);

        if(!doc) return res.status(400).json({ message: "message.users.delete.fail" });

        console.log({deleted: doc});

        res.json(doc);

    } catch(ex) {
        res.status(400).json({ error: ex.message });
    }
});


module.exports = router;
