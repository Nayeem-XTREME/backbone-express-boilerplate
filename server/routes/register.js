var express = require('express');
var router = express.Router();

var fs = require('fs');

router.post('/', (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        mobile: req.body.mobile,

        book: req.body.book,
        author: req.body.author,
        borrowDate: req.body.borrowDate,
        returnDate: req.body.returnDate
    }

    console.log(data);

    try {

        var values = fs.readFileSync('./server/models/info.json').toString();
        var users = JSON.parse(values);
        users.push(data);
        fs.writeFileSync('./server/models/info.json', JSON.stringify(users));

        res.send("Data added!");

    } catch (error) {
        console.log(error);
    }

})

module.exports = router;