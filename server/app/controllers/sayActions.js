

const sayWelcome = (req, res) =>{
    console.info(req.query);
    res.send(`Welcome to wildSeries ! ${req.query.name}`);
};


module.exports = {sayWelcome};