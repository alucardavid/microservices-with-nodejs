var seneca = require('seneca')()

seneca.add({role: 'math', cmd: 'sum'}, function(msg, respond) {
    var sum = msg.left + msg.right;
    respond(null, {aswer: sum});
});

seneca.add({role: 'math', cmd: 'product'}, function(msg, respond) {
    var product = msg.left * msg.right;
    respond(null, {aswer: product});
});

seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, function(err, data) {
    if(err) return console.error(err);
    console.log(data.aswer);
});

// seneca.act({role: 'math', cmd: 'product', left: 3, right: 4}, console.log);