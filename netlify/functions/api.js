import express from "express";
import serverless from 'serverless-http';
import router from "../../routes.js"
const app = express();

//add the router from Routes.js
app.use('/api', router);

export const handler = serverless(app);