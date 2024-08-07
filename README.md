# Azure Blob Storage with MongoDB Integration

![Azure Blob Storage](https://img.shields.io/badge/Azure-Blob%20Storage-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## Introduction

This project integrates Azure Blob Storage with MongoDB, providing seamless storage and retrieval of binary data within a NoSQL database environment. It is ideal for applications requiring efficient data storage, retrieval, and management.

## Features

- Store and retrieve files in Azure Blob Storage.
- Efficiently manage metadata with MongoDB.
- Secure and scalable integration.
- Simple and intuitive API for seamless operations.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/)
- [Azure Account](https://azure.microsoft.com/)
- [Azure Storage Account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/azure-blob-mongodb.git
    cd azure-blob-mongodb
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

1. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```env
    AZURE_STORAGE_ACCOUNT=<your-storage-account-name>
    AZURE_STORAGE_ACCESS_KEY=<your-storage-account-key>
    MONGO_URI=mongodb://localhost:27017/your-database
    ```

2. **Update configuration file:**

    Modify `config.js` to match your environment settings.

## Usage

1. **Start the application:**

    ```bash
    npm start
    ```

2. **API Endpoints:**

    - `POST /upload` - Upload a file to Azure Blob Storage.
    - `GET /download/:id` - Download a file from Azure Blob Storage.
    - `DELETE /delete/:id` - Delete a file from Azure Blob Storage.

## Testing

1. **Run tests:**

    ```bash
    npm test
    ```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact:

- Maneesha Gunawardhana
- [Email](mailto:mrgunawardhana27368@gmail.com)
- [GitHub](https://github.com/your-username)

---

Thank you for using Azure Blob Storage with MongoDB Integration!
