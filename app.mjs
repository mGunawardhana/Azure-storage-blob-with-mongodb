import http from 'http';
import { BlobServiceClient, BlobServiceClient } from '@azure/storage-blob';
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const mongodbUri = process.env.MONGODB_URI;
const accountName = process.env.ACCOUNT_NAME;
const sasToken = process.env.SAS_TOKEN;
const containerName = process.env.CONTAINER_NAME;

const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net${sasToken}`);

const containerClient = blobServiceClient.getContainerClass(containerName);

const client = new MongoClient(mongodbUri);
client.connect();

const server = http.createServer(handleImageUpload);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


async function handleImageUpload(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
}