# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\setup\job-title-create.spec.js >> Create Job Title
- Location: tests\setup\job-title-create.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic:
  - alert
  - generic:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - link:
                  - /url: /dashboard
                  - generic:
                    - img
                  - generic:
                    - img
                - button:
                  - img
                  - generic: Toggle Sidebar
            - generic:
              - generic:
                - list:
                  - listitem:
                    - link:
                      - /url: /dashboard
                      - img
                      - generic: Dashboard
                  - listitem:
                    - link:
                      - /url: /dashboard/workflow
                      - img
                      - generic: Workflow
                  - listitem:
                    - link:
                      - /url: /dashboard/workflow-templates
                      - img
                      - generic: Workflow Templates
                  - listitem:
                    - link:
                      - /url: /dashboard/setup
                      - img
                      - generic: Setup
                  - listitem:
                    - link:
                      - /url: /dashboard/reports
                      - img
                      - generic: Reports
                  - listitem:
                    - link:
                      - /url: /dashboard/task
                      - img
                      - generic: Task
                  - listitem:
                    - link:
                      - /url: /dashboard/vault
                      - img
                      - generic: Vault
                  - listitem:
                    - link:
                      - /url: /dashboard/task/template
                      - img
                      - generic: Task Templates
                  - listitem:
                    - link:
                      - /url: /dashboard/analytics
                      - img
                      - generic: Analytics
                  - listitem:
                    - link:
                      - /url: /dashboard/social/home
                      - img
                      - generic: Social
              - generic:
                - generic:
                  - list:
                    - listitem:
                      - link:
                        - /url: /dashboard/notifications
                        - generic:
                          - img
                          - generic: "0"
                        - generic: Notifications
                    - listitem:
                      - link:
                        - /url: /dashboard/messages
                        - generic:
                          - img
                          - generic: "0"
                        - generic: Message
            - generic:
              - list:
                - listitem:
                  - generic:
                    - link:
                      - /url: /dashboard/settings
                      - generic:
                        - generic: "N"
                      - generic:
                        - generic:
                          - generic: Nitroberry Test
                          - img
                        - generic: test@automation-nb.com
                    - button:
                      - img
            - button
      - main:
        - generic:
          - generic:
            - generic:
              - heading [level=1]: Setup
              - paragraph: Configure and manage system users, roles, groups, departments, and access permissions.
          - generic:
            - generic:
              - generic:
                - button:
                  - img
                - generic:
                  - navigation:
                    - button: Company
                    - button: Company Locations
                    - button: Location Calendar
                    - button:
                      - text: Plan & Billing
                      - generic: "2"
                    - button: Holidays
                    - button: Users
                    - button: Groups
                    - button: Job Titles
                    - button: Departments
                    - button: Roles & Permissions
                    - button: Storage
                    - button: Support
                    - button: Company Audit
                    - button: Company Shifts
                - button:
                  - img
          - generic:
            - generic:
              - generic:
                - paragraph: Total Job Titles
                - paragraph: "3"
            - generic:
              - generic:
                - paragraph: Active Job Titles
                - paragraph: "3"
            - generic:
              - generic:
                - paragraph: Inactive Job Titles
                - paragraph: "0"
          - generic:
            - generic:
              - generic:
                - img
                - generic:
                  - textbox:
                    - /placeholder: Search for job titles...
            - generic:
              - button: Create Job Title
              - button:
                - img
          - generic:
            - generic:
              - generic:
                - generic:
                  - table:
                    - rowgroup:
                      - row:
                        - columnheader: Name
                        - columnheader: Description
                        - columnheader: Status
                        - columnheader: Created At
                        - columnheader
                    - rowgroup:
                      - row:
                        - cell: Job-1776458220174
                        - cell: "-"
                        - cell:
                          - generic: Active
                        - cell: 4/18/2026
                        - cell:
                          - button:
                            - img
                      - row:
                        - cell: Job-1776458857884
                        - cell: "-"
                        - cell:
                          - generic: Active
                        - cell: 4/18/2026
                        - cell:
                          - button:
                            - img
                      - row:
                        - cell: Job-1776459053735
                        - cell: "-"
                        - cell:
                          - generic: Active
                        - cell: 4/18/2026
                        - cell:
                          - button:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - generic: "Rows per page:"
                      - combobox:
                        - generic: "10"
                        - img
                    - generic:
                      - button [disabled]: Prev
                      - generic: Page 1 of 1
                      - button [disabled]: Next
  - button [ref=e1]:
    - img [ref=e4]
  - dialog "Create Job Title" [active] [ref=e9]:
    - generic [ref=e10]:
      - generic [ref=e11]:
        - heading "Create Job Title" [level=2] [ref=e12]
        - paragraph [ref=e13]: Add a new job title to the system.
      - generic [ref=e16]:
        - generic [ref=e17]:
          - generic [ref=e18]: Job Title
          - textbox "Job Title" [ref=e20]:
            - /placeholder: Enter Job Title
            - text: Job-1776459383732
        - generic [ref=e21]:
          - generic [ref=e22]: Description
          - textbox "Description" [ref=e24]:
            - /placeholder: Enter Description
            - text: dsd
      - generic [ref=e26]:
        - button "Cancel" [ref=e27] [cursor=pointer]
        - button "Create" [ref=e28] [cursor=pointer]
    - button "Close" [ref=e29] [cursor=pointer]:
      - img [ref=e30]
      - generic [ref=e33]: Close
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { login } from '../../utils/login';
  3  | 
  4  | test('Create Job Title', async ({ page }) => {
  5  | 
  6  |     await login(page);
  7  | 
  8  |     await page.getByText('Setup').click();
  9  |     await page.getByRole('button', { name: 'Job Titles' }).click();
  10 | 
  11 |     await page.getByRole('button', { name: /create job title/i }).click();
  12 | 
  13 |     const name = `Job-${Date.now()}`;
  14 | 
  15 |     // ✅ correct input (avoid search box)
  16 |     await page.locator('#job-title').fill(name);
  17 | 
  18 |     await page.getByRole('button', { name: /submit|create/i }).click();
  19 | 
  20 |     // ✅ wait for API instead of networkidle
> 21 |     await page.waitForResponse(res =>
     |                ^ Error: page.waitForResponse: Test timeout of 30000ms exceeded.
  22 |         res.url().includes('/job') && res.status() === 200
  23 |     );
  24 | 
  25 |     // ✅ small UI wait (important)
  26 |     await page.waitForTimeout(2000);
  27 | 
  28 |     // ✅ verify using row (NOT whole table)
  29 |     const row = page.locator('table tr').filter({ hasText: name });
  30 | 
  31 |     await expect(row).toBeVisible({ timeout: 10000 });
  32 | });
```