module.exports = function (applicantion) {
    applicantion.post('/chat', function (req, res) {
        applicantion.app.controllers.chat.init(applicantion, req, res);
    });

    applicantion.get('/chat', function (req, res) {
        applicantion.app.controllers.chat.chat(applicantion, req, res);
    });
};