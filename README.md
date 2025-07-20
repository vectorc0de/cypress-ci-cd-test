# 🚀 Project Title: Cypress Demo with Docker & GitHub Actions  

**A demo project designed to showcase React component and E2E testing with Cypress, containerized with Docker, and automated via GitHub Actions.**  

## 📖 About the Project  

This project serves as a practical demonstration and boilerplate for integrating a modern React application with robust testing, containerization, and continuous integration. It's specifically built to illustrate:  

  * **🧪 Cypress for both Component and End-to-End (E2E) testing**: How to write and run tests that cover individual UI components and full user flows.  
  * **🐳 Docker Containerization**: Packaging the application and its test environment into portable Docker images.  
  * **⚙️ GitHub Actions for CI/CD**: Automating the build, test, and potentially deployment process whenever changes are pushed to the repository.  

Whether you're looking to learn about these technologies or jumpstart a project with a solid testing and deployment foundation, this demo aims to be a helpful resource.  

-----  

## 🔑 Key Demos / Features  

  * **⚛️ React Application**: A basic React frontend built with Vite.  
  * **🧩 Cypress Component Testing**: Example tests demonstrating how to mount and test isolated React components.  
  * **🔍 Cypress E2E Testing**: Example tests for user journeys and application functionality.  
  * **🐳 Docker Integration**: `Dockerfile` for building the application image, and `docker-compose.yml` for local development setup.  
  * **🤖 GitHub Actions Workflows**:  
      * Automated execution of Cypress tests on push/pull requests.  
      * (Optional: Add if you have one) Docker image building and pushing to a registry.  

-----  

## 🛠️ Getting Started  

To get a local copy up and running, follow these simple steps.  

### 📋 Prerequisites  

Make sure you have Node.js, npm (or Yarn), and Docker installed on your machine.  

  * **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/) (Includes npm)  
  * **(Optional) Yarn**:  
    ```bash  
    npm install -g yarn  
    ```  
  * **Docker Desktop**: [Download & Install Docker Desktop](https://www.docker.com/products/docker-desktop/)  

### ⚡ Installation  

1.  **Clone the repository:**  

    ```bash  
    git clone https://github.com/vectorc0de/cypress-ci-cd-test.git  
    cd cypress-ci-cd-test  
    ```  

2.  **Install NPM dependencies:**  

    ```bash  
    npm install  
    # or  
    # yarn install  
    ```  

-----  

## 🏃 Running the Application  

To start the development server for your React application:  

```bash  
npm run dev  
# or  
# yarn dev  
```  

Your application should now be running at `http://localhost:5173`.  

-----  

## 🧪 Running Tests  

This project uses **Cypress** for both **Component** and **End-to-End (E2E)** testing.  

### 🧩 Component Tests  

To run your Cypress component tests, which isolate and test individual React components:  

```bash  
npx cypress open --component  
```  

This command will open the Cypress Test Runner, allowing you to select and run your component specs interactively.  

### 🔍 End-to-End (E2E) Tests  

E2E tests simulate user interactions across your entire application.  

#### **🖥️ Interactive Mode (Cypress Test Runner)**  

To open the Cypress Test Runner and interactively run your E2E tests:  

```bash  
npx cypress open --e2e  
```  

Make sure your application is running (e.g., via `npm run dev`) before launching E2E tests.  

#### **🤖 Headless Mode (Command Line)**  

To run your E2E tests in a headless browser directly from the terminal (ideal for CI/CD environments):  

```bash  
npx cypress run  
```  

This will execute all your E2E specs and provide results in your terminal.  

### 🐳 Running Tests via Docker  

You can also run your E2E tests within a Docker container, mimicking the CI/CD environment.  

1.  **Build the Docker image (if not already built):**  

    ```bash  
    docker build -t cypress-ci-cd-test:latest .  
    ```  

    *(Replace `your-app-name` with a suitable name for your application image)*  

2.  **Run Cypress tests within a temporary container:**  

    ```bash  
    docker run -it --rm -v $(pwd):/e2e -w /e2e --network host cypress/included:13.13.1 # Or your specific Cypress version  
    ```  

      * `--rm`: Automatically remove the container when it exits.  
      * `-v $(pwd):/e2e`: Mounts your current project directory into the container.  
      * `-w /e2e`: Sets the working directory inside the container.  
      * `--network host`: Allows the container to access `localhost:5173` if your app is running directly on the host. *Note: For more complex setups, you might use Docker Compose to manage both the app and Cypress containers.*  

-----  

## 🔄 CI/CD with GitHub Actions  

This project includes GitHub Actions workflows (`.github/workflows/`) to automate testing.  

  * **`main.yml` (or similar file)**: This workflow is configured to run Cypress E2E tests whenever code is pushed to the `main` branch or a pull request is opened. It demonstrates how to:  
      * Set up Node.js.  
      * Install dependencies.  
      * Run the application in the background.  
      * Execute Cypress tests in headless mode.  

Feel free to explore and modify these workflows to fit your specific CI/CD needs.  

-----  

## 🛠️ Technologies Used  

  * **[React](https://react.dev/)** - A JavaScript library for building user interfaces.  
  * **[Vite](https://vitejs.dev/)** - A build tool that aims to provide a faster and leaner development experience for modern web projects.  
  * **[Cypress](https://www.cypress.io/)** - Fast, easy, and reliable testing for anything that runs in a browser.  
  * **[Docker](https://www.docker.com/)** - Platform for developing, shipping, and running applications in containers.  
  * **[GitHub Actions](https://docs.github.com/en/actions)** - Automate, customize, and execute your software development workflows right in your repository.  
  * **[Node.js](https://nodejs.org/)** - JavaScript runtime environment.  
  * **[npm](https://www.npmjs.com/)** - Package manager for JavaScript.  

-----  

## 📬 Contact  

  * Your Name - [📧 Your Email](mailto:github@containerdevs.com)  

-----  

## 📜 License  

Distributed under the MIT License. See `LICENSE` for more information.  

---  

This version keeps all the technical details intact while making the document more engaging with emojis. Let me know if you'd like any adjustments! 🚀