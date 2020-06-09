const spf = require('spf-check');
const argv = require('yargs').argv;
const validator = new spf.SPF(argv.domain);

if (argv.checkType === 'ip'){
    validator.check(argv.ipAddress).then(result => {
        if ('Pass' === result.result){
            console.log('0:SPF check passes for host ' + argv.ipAddress);
            process.exit(0);
        }else{
            console.log('2:SPF check fails for host ' + argv.ipAddress);
            process.exit(2);
        }
    });
}else if (argv.checkType === 'keyword'){
    validator.resolveDNS(argv.domain, 'TXT').then((response) => {
        if (response[0].indexOf(argv.keyword) > -1 ){
            console.log('0:SPF check passes for domain ' + argv.domain);
            process.exit(0);
        }else{
            console.log('2:SPF check fails for domain ' + argv.domain);
            process.exit(2);
        }
    });
} else{
    console.log('2:Incorrect arguments passed to sensor');
    process.exit(2);
}