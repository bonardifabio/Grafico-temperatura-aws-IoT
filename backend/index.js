import { checkMasterCertificate } from "./iot/certManager.js";
import { initDevice } from "./iot/index.js";
import { initConnection } from "./mongo.js";
import express from "express";
import { datalogs } from "./mongo.js";
import cors from "cors"

await initConnection();

// downloading remote cert to connect
await checkMasterCertificate();

// connect to mqtt queue
await initDevice();

const app = express();
app.use(cors());
app.get("/data", async (request, response) => {
    const data = await datalogs.find({name:"Fabio Bonardi"});
    try {
      response.send(data);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.listen(9000, () => {
    console.log('Server listening on port 9000');
});