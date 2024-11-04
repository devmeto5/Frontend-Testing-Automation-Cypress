### Project: Frontend Testing Automation with Cypress

**Technology Stack**:

- **Frontend**: React
- **Backend**: C# .NET
- **Databases**: SQL Server or Neo4J
- **Repository Management and Deployment**: Azure DevOps

**Tasks and Roles**:

- Creating Cypress tests for frontend testing, which will run automatically with every cloud build.
- Providing the ability to run tests manually by team members during new feature development.
- Creating a stable automated testing system that integrates into the existing CI/CD process to ensure product quality at every stage of development.

**Project Goal**: Ensure reliable and automated testing of all frontend components to minimize bugs and improve application stability. Tests should be integrated into the CI/CD process for continuous quality assurance and compliance.

**Example Cypress Test for CompTIA Homepage**:

```javascript
/// <reference types="cypress" />

describe('CompTIA Homepage Test', () => {
  beforeEach(() => {
    cy.visit('https://www.comptia.org');
  });

  it('Should display the correct page title', () => {
    cy.title().should('include', 'CompTIA');
  });

  it('Get Started button should be clickable', () => {
    cy.contains('Get Started').should('be.visible').click();
    cy.url().should('include', '/certifications');
  });

  it('Navigation menu should contain all main sections', () => {
    cy.get('nav').within(() => {
      cy.contains('Certifications').should('be.visible');
      cy.contains('Training').should('be.visible');
      cy.contains('Resources').should('be.visible');
      cy.contains('About').should('be.visible');
    });
  });
});
```

**Test Description**:
- The first test checks that the page title contains the keyword "CompTIA" to ensure the homepage loads correctly.
- The second test verifies that the "Get Started" button on the homepage is available and that clicking it redirects to the certifications page.
- The third test checks the navigation menu for all main sections to ensure the website's structure is correct.

**Step-by-Step Guide to Running Cypress Tests**

```markdown
# Step-by-Step Guide to Running Cypress Tests

## 1. Install Node.js and npm

1. Go to the official [Node.js](https://nodejs.org) website and download the latest LTS version.
2. Install Node.js, which will also install npm (Node Package Manager) automatically.
3. Verify the installation by running the following commands in the terminal:
   ```bash
   node -v
   npm -v
   ```
   These commands will display the installed versions of Node.js and npm.

## 2. Install Cypress

1. Open a terminal and navigate to your project folder. If you do not have a project folder, create one:
   ```bash
   mkdir my-project
   cd my-project
   ```
2. Initialize the project to create a `package.json` file:
   ```bash
   npm init -y
   ```
   The `package.json` file stores information about your project and its dependencies.
3. Install Cypress as a dev dependency:
   ```bash
   npm install cypress --save-dev
   ```

## 3. Launch Cypress

1. To launch Cypress, run the following command:
   ```bash
   npx cypress open
   ```
2. This will open the Cypress graphical interface, where you can create and run tests. If everything is set up correctly, you will see a window with example tests.

## 4. Create a New Test

1. A folder structure for Cypress will be created in your project. Navigate to the `cypress/e2e` folder.
2. Create a new test file, for example, `comptia_home_page.cy.js`:
   ```bash
   touch cypress/e2e/comptia_home_page.cy.js
   ```
3. Open the file and paste the example test provided above.

## 5. Write Your First Test

1. Review the example test. Key Cypress commands include:
   - `cy.visit(url)` — Visit the page at the specified URL.
   - `cy.get('selector')` — Select an element on the page by its selector.
   - `.should('condition')` — Check that an element meets a certain condition (e.g., contains text).
   - `.click()` — Click on the selected element.
2. Use these commands to write your own tests. Start with simple checks, such as the presence of text, buttons, and their clickability.

## 6. Run the Tests

1. Once the test is written, it can be run through the Cypress graphical interface.
2. Launch Cypress with the command `npx cypress open`, select your created test, and it will run in the browser, showing each step's execution.

## 7. Integrate Cypress into the CI/CD Process

1. To run the tests automatically with each code update, add a Cypress run command to your CI/CD system configuration.
2. If using Azure DevOps, add the following steps to your `.yml` file:
   ```yaml
   - script: npm install
     displayName: 'Install dependencies'
   - script: npx cypress run
     displayName: 'Run Cypress tests'
   ```
3. This will allow tests to run automatically with every new commit to your repository.

## 8. Viewing Results and Reports

1. After running the tests, Cypress automatically generates a report in the console. For more detailed analysis, use plugins like those that generate HTML reports.
2. The Cypress command line will display which tests passed or failed, along with detailed error information.

## 9. Key Cypress Commands for Testing

- `cy.get(selector)` — Select an element.
- `cy.contains(text)` — Select an element containing specific text.
- `cy.click()` — Click an element.
- `cy.type('text')` — Type text into an input field.
- `cy.url().should('include', '/path')` — Verify the URL.
- `cy.visit(url)` — Visit the specified URL.

