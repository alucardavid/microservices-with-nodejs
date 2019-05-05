module.exports = function() {
    
    console.log('###### Adicionando regra ######');
    this.add('role:greets, cmd:greet', (args, cb) => cb(null, 'Hello David'))

    this.act('role: web', {
        use: {
            prefix: '/greets',
            pin: 'role: greets, cmd: *',
            map: {
                greet: { GET: true}
            }
        }
    })
}