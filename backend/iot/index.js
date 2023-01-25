import { secretMasterName, host } from '../config.js';
import awsIot from 'aws-iot-device-sdk';
import AWS from 'aws-sdk';
import { collectData, findAllMyData ,pulisci} from '../mongo.js';
import * as os from 'os';

// setting aws region to connect
AWS.config.update({ region: 'eu-central-1' });

const iot = new AWS.Iot();

let device;

export function initDevice() {
    device = awsIot.device({
        keyPath: `${os.tmpdir()}/${secretMasterName}.private.pem.key`,
        certPath: `${os.tmpdir()}/${secretMasterName}.certificate.pem.crt`,
        caPath: `${os.tmpdir()}/AmazonRootCA1.pem`,
        host: host
    });


    device.on('connect',async function () {
        console.info('system connected to aws iot...');
        device.subscribe('machines');
        console.info('mqtt parser ready...');
        //console.log(await findAllMyData());
       // provadec(await findAllMyData());
    });

    device.on('error', function (e) {
        console.info({ e });
    });

    device.on('message', async function (topic, payload) {
        console.info('message received');
        parser(payload.toString());
        //await pulisci();
    });
}

async function parser(message) {
    let objectMessage;
    try {
        objectMessage = JSON.parse(message);
    } catch (err) {
        console.error(`error parsing message: ${message}`);
    }

    console.log(objectMessage);
    collectData(objectMessage);
//model.create
}
async function provadec(valori){
    console.log(valori[5].hum)
    if (valori[5].hum<10)
    console.log("funziona")
    else if (valori[5].hum>10)
    console.log("non funziona")
    else
    console.log("non è un numero")
}
