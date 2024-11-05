class Command {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    execute() {
        throw new Error('Command.execute() must be overridden.');
    }
}

module.exports = Command;
