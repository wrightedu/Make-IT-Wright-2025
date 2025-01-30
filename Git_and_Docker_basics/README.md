# Hackathon Guide: Git and Docker Basics

## Overview

This project serves as a hands-on guide to understanding Git and Docker basics, aimed at beginner to intermediate users. It demonstrates how to create, containerize, and share a simple Node.js application while introducing Git for version control.

---

## Objectives

- Learn the fundamentals of Docker: containers, images, and Dockerfiles.
- Build and containerize a Node.js application.
- Share Docker images via tar files.
- Use Git to manage project versions and push the repository to GitLab.

---

## Prerequisites

- Docker installed on your system ([Download Docker](https://www.docker.com/products/docker-desktop/)).
- Node.js installed ([Download Node.js](https://nodejs.org/)).
- A GitLab account and Git CLI installed ([Git Installation Guide](https://git-scm.com/)).

---

## Instructions

### 1. Create the Node.js Application

1. Create a file named `index.js`:

   ```javascript
   const express = require("express");
   const app = express();
   const PORT = 3000;

   app.get("/", (req, res) => res.send("Hello Docker!"));

   app.listen(PORT, () => console.log(`App running on port ${PORT}`));
   ```

2. Initialize the project:
   ```bash
   npm init -y
   npm install express
   ```

---

### 2. Write the Dockerfile

Create a `Dockerfile` in the project root:

```Dockerfile
# Use the official Node.js 20 image
FROM node:20
# Set working directory
WORKDIR /app
# Copy package files
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the app files
COPY . ./
# Expose port 3000
EXPOSE 3000
# Command to run the app
CMD ["node", "index.js"]
```

---

### 3. Build and Run the Docker Image

1. Build the Docker image:
   ```bash
   docker build -t my-node-app .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 my-node-app
   ```
3. Test in your browser: [http://localhost:3000](http://localhost:3000).

---

### 4. Share Docker Image via Tar

1. Save the image to a tar file:
   ```bash
   docker save -o my-node-app.tar my-node-app
   ```
2. Transfer the tar file (via USB, email, etc.).
3. Load the image on another system:
   ```bash
   docker load -i my-node-app.tar
   ```

---

### 5. Use Git for Version Control

1. Stage your files:
   ```bash
   git add .
   ```
2. Commit your changes:
   ```bash
   git commit -m "Initial commit"
   ```
3. Add your GitLab repository:
   ```bash
   git remote add origin https://gitlab.com/<your-username>/<your-repo-name>.git
   ```
4. Push your project:
   ```bash
   git push -u origin main
   ```

---

## Hackathon Pro Tips

- Keep your project simple but functional.
- Use Docker for consistent development and deployment environments.
- Leverage Git for effective collaboration.
- Ask mentors for guidance when needed.

---

## Resources

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Docker Documentation](https://docs.docker.com)
- [Docker Hub](https://hub.docker.com)
- [Node.js Documentation](https://nodejs.org/)
- [GitLab Documentation](https://docs.gitlab.com/)
- [Git Moments](https://dangitgit.com/)

---

## Bonuses

### .gitignore

A `.gitignore` file is used to specify files and directories that Git should ignore. This is useful for preventing sensitive information, temporary files, or unnecessary data from being added to your repository.

**Example:**

```plaintext
node_modules/
.env
*.log
```

### .dockerignore
A `.dockerignore` file is used to specify files and directories that Docker should ignore when building an image. This helps to reduce the size of the Docker image and exclude unnecessary files that are not needed in the container.

**Example:**
```plaintext
node_modules/
.env
*.log
dist/
```

### Common Docker Image Tags and Their Advantages

#### 1. **Alpine**
- **Description:** A minimal Docker image based on Alpine Linux.
- **Advantages:**
  - Extremely lightweight (~5 MB).
  - Ideal for production environments where image size matters.
  - Faster startup times and reduced attack surface.

#### 2. **Ubuntu**
- **Description:** A popular full-featured Linux-based image.
- **Advantages:**
  - Familiar and widely supported.
  - Includes a broad range of pre-installed tools.
  - Great for development environments that require additional libraries.

#### 3. **Debian (Bullseye, Buster, etc.)**
- **Description:** Debian-based images like Bullseye or Buster.
- **Advantages:**
  - Stable and secure.
  - Used as a base for other Linux distributions.
  - Good compromise between size and functionality.

#### 4. **Node (Slim)**
- **Description:** Official Node.js images, often with "slim" variants.
- **Advantages:**
  - Pre-configured for Node.js applications.
  - Slim variants reduce unnecessary dependencies.
  - Ideal for JavaScript-based projects.

#### 5. **CentOS**
- **Description:** A community-driven Linux distribution derived from Red Hat.
- **Advantages:**
  - Suitable for enterprise environments.
  - Focus on stability and long-term support.
  - Great for applications requiring specific dependencies found in Red Hat ecosystems.

#### 6. **BusyBox**
- **Description:** A minimal image with essential Unix utilities.
- **Advantages:**
  - Smallest possible image (~1 MB).
  - Perfect for lightweight, single-purpose containers.
  - Reduced complexity and faster deployments.
