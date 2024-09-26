# Snippet Library

## Overview

This is a SvelteKit project designed for managing code snippets. This README
provides instructions on how to set up and run the project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/dikshantrajput/snippet-library.git
cd snippet-library
```

### Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### Environment Variables

Copy the contents of the `.env.example` file to create your own `.env` file:

```bash
cp .env.example .env
```

After copying, make sure to edit the `.env` file to configure your environment
variables according to your requirements.

### Running the Development Server

To start the development server, use the following command:

```bash
npm run dev
```

This command will start the SvelteKit application, and you can view it in your
browser at `http://localhost:5173`.

### Building for Production

To build the project for production, use:

```bash
npm run build
```

This will create an optimized build of your application in the `build`
directory.

### Previewing the Production Build

You can preview the production build locally by running:

```bash
npm run preview
```

This will serve your built application on a local server, allowing you to test
the production version.

## Troubleshooting

- If you encounter any issues, ensure that your Node.js and npm versions are up
  to date.
- Check the console for any errors during the build or run process.

### Steps to Contribute

1. **Fork the Repository**: Follow the steps mentioned above to fork the
   repository.

2. **Create a New Branch**: Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**: Implement the feature or bug fix. Make sure to test
   your changes thoroughly.

4. **Commit Your Changes**: After making your changes, commit them with a
   descriptive message:

   ```bash
   git add .
   git commit -m "Add feature: your feature description"
   ```

5. **Push to Your Fork**: Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**: Go to the original repository and click on the
   "New Pull Request" button. Select your branch and create a pull request,
   describing the changes you made.
