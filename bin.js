const spf = require('spf-check');
const argv = require('yargs').argv;
const validator = new spf.SPF(argv.domain);

validator.check(argv.ipAddress).then(result => {
    if ('Pass' === result.result){
        console.log('0:SPF check passes for host ' + argv.ipAddress);
    }else{
        console.log('2:SPF check fails for host ' + argv.ipAddress);
        process.exit(1);
    }
});