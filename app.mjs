import http from 'http';
import { BlobServiceClient, BlobServiceClient } from '@azure/storage-blob';
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const mongodbUri = process.env.MONGODB_URI;
const accountName = process.env.ACCOUNT_NAME;
const sasToken = process.env.SAS_TOKEN;
const containerName = process.env.CONTAINER_NAME;

const BlobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net${sasToken}`);