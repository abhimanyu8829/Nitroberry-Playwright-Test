# Nitroberry Login Automation

This project is a dedicated test suite for automating and validating the login processes for **Nitroberry** using the **Playwright** framework. It ensures that authentication flows are secure, reliable, and provide correct feedback to users.

## 🚀 Getting Started

Follow these instructions to set up the project locally and run the tests.

### 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) (Version 14 or higher recommended).
- **npm**: Usually comes bundled with Node.js.

### 🛠️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd "playwright-login"
   ```

2. **Install Dependencies**
   Install the required Node.js modules:
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**
   Playwright requires specific browser binaries (Chromium, Firefox, WebKit):
   ```bash
   npx playwright install
   ```

## 🧪 Running the Tests

You can execute the entire suite or specific tests using the following commands.

### Run All Tests (Headless)
Runs all tests in the background (no browser window):
```bash
npx playwright test
```

### Run All Tests (Headed)
Opens the browser so you can watch the automation:
```bash
npx playwright test --headed
```

### Run a Specific Test File
Example: Run only the positive login test:
```bash
npx playwright test tests/login-positive.spec.js
```

### Generate and View Test Report
After running tests, view a detailed interactive report:
```bash
npx playwright show-report
```

## 📂 Test Suite Structure

The test suite is organized into logical files covering different login scenarios:

- **`tests/login-positive.spec.js`**: Validates successful login with correct credentials and verifies dashboard access.
- **`tests/login-negative.spec.js`**: Ensures the system correctly handles invalid credentials and prevents unauthorized access.
- **`tests/login-validation.spec.js`**: Tests form input validations, such as empty fields and missing passwords.

## 🛠️ Built With

* [Playwright](https://playwright.dev/) - Reliable end-to-end testing for modern web apps.
* [Node.js](https://nodejs.org/) - JavaScript runtime.

---
*Developed for automated testing excellence.*
