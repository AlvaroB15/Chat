module.exports = function (applicantion) {
    applicantion.get('/', function (req, res) {
        applicantion.app.controllers.index.index(applicantion, req, res);
    });
};