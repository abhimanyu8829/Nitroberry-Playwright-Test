# Nitroberry Platform Automation

This project is a comprehensive test suite for automating and validating core business processes in the **Nitroberry** platform using the **Playwright** framework. It covers authentication, user management, and system setup configurations to ensure platform stability and reliability.

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
   cd "Nitroberry-Playwright-Test"
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
Example: Run the user creation test:
```bash
npx playwright test tests/user/user-create-positive.spec.js
```

### Generate and View Test Report
After running tests, view a detailed interactive report:
```bash
npx playwright show-report
```

## 📂 Test Suite Structure

The test suite is organized into logical directories covering different areas of the application:

### 🔐 Auth Tests
- **`tests/auth/login-positive.spec.js`**: Validates successful login with correct credentials and verifies dashboard access.
- **`tests/auth/login-negative.spec.js`**: Ensures the system correctly handles invalid credentials and prevents unauthorized access.
- **`tests/auth/login-validation.spec.js`**: Tests form input validations, such as empty fields and missing passwords.
- **`tests/auth/logout.spec.js`**: Validates the full logout flow, including confirmation modals and redirection to the login page.

### 👤 User Tests
- **`tests/user/user-create-positive.spec.js`**: Validates the successful creation of new users with role and location assignments.
- **`tests/user/user-create-negative.spec.js`**: Ensures the system correctly handles errors and mandatory field validations during user creation.
- **`tests/user/user-validation.spec.js`**: Tests form-level validations for user management.

### ⚙️ Setup Tests
- **`tests/setup/company-settings.spec.js`**: Validates updating company profile details and website settings.
- **`tests/setup/company-location.spec.js`**: Tests the addition of new company physical locations/offices.
- **`tests/setup/department-create.spec.js`**: Ensures new departments can be added and correctly displayed in the system.
- **`tests/setup/job-title-create.spec.js`**: Validates the creation and verification of new job titles using API response monitoring.
- **`tests/setup/holiday-create.spec.js`**: Tests the addition and validation of company holidays with backend-compatible date handling.



## 🛠️ Built With

* [Playwright](https://playwright.dev/) - Reliable end-to-end testing for modern web apps.
* [Node.js](https://nodejs.org/) - JavaScript runtime.

---
*Developed for automated testing excellence.*
