/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app, router) {
    app.use('/api', require('./home.js')(router));
    var inputhandler = require('../controllers/controller');
    app.route('/api/users')
        .get(inputhandler.list_users)
        .post(inputhandler.create_a_user);
    app.route('/api/users/:id')
        .get(inputhandler.find_a_user)
        .put(inputhandler.replace_a_user)
        .delete(inputhandler.delete_a_user);
    app.route('/api/tasks')
        .get(inputhandler.return_the_list)
        .post(inputhandler.create_new_task);
    app.route('/api/tasks/:id')
        .get(inputhandler.find_a_task)
        .put(inputhandler.replace_a_task)
        .delete(inputhandler.delete_a_task);
};
