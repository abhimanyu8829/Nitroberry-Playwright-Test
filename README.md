# Playwright Login Automation

This project is a dedicated test suite for automating login processes using the **Playwright** framework. It provides a robust foundation for testing authentication flows, ensuring that login mechanisms work correctly and efficiently.

## 🚀 Getting Started

Follow these instructions to set up the project locally and run the tests.

### 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) (Version 14 or higher recommended).
- **npm**: Usually comes bundled with Node.js.

### 🛠️ Installation & Setup
   ```

2. **Install Dependencies**
   Install the required Node.js modules (including Playwright):
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**
   Playwright requires specific browser binaries (Chromium, Firefox, WebKit) to run tests. Install them using:
   ```bash
   npx playwright install
   ```

## 🧪 Running the Tests

You can execute the tests in different modes depending on your needs.

### Run tests in Headless Mode (Default)
Standard execution without opening a browser window:
```bash
npx playwright test
```

### Run tests in Headed Mode
Opens a browser window so you can see the automation in action:
```bash
npx playwright test --headed
```

### Run a Specific Test File
If you want to run only the login test:
```bash
npx playwright test tests/login.test.js
```

### Generate and View Test Report
After running the tests, you can view a detailed HTML report:
```bash
npx playwright show-report
```

## 📂 Project Structure

- **`tests/`**: Contains the test specifications (e.g., `login.test.js`).
- **`auth.json`**: (Optional) Stores authentication state like cookies and local storage to skip login steps in future tests.
- **`package.json`**: Defines project dependencies and scripts.
- **`test-results/`**: Automatically generated directory containing artifacts from test runs (screenshots, videos, etc. if enabled).

## 🛠️ Built With

* [Playwright](https://playwright.dev/) - Modern end-to-end testing framework.
* [Node.js](https://nodejs.org/) - JavaScript runtime.

---
*Developed for automated testing excellence.*
# playwright-sample-test
