module.exports = function (applicantion) {
    applicantion.get('/', function (req, res) {
        applicantion.controllers.index.index(applicantion, req, res);
    });
};
