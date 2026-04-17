import { test, expect } from '@playwright/test';

test('Create User - FINAL STABLE', async ({ page }) => {

    await page.goto('https://app.nitroberry.com');

    const isLoginVisible = await page.locator('input[placeholder="Email"]').isVisible().catch(() => false);

    if (isLoginVisible) {
        await page.getByPlaceholder('Email').fill('Test@automation-nb.com');
        await page.getByPlaceholder('Password').fill('73mwQM6£vWf_');
        await page.getByRole('button', { name: 'Sign in' }).click();
    }

    await page.waitForURL('**/dashboard**');

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Users', exact: true }).click();

    await page.getByRole('button', { name: 'Create User' }).click();

    const email = `test${Date.now()}@mail.com`;

    await page.getByPlaceholder('Enter first name').fill('Test');
    await page.getByPlaceholder('Enter last name').fill('User');
    await page.getByPlaceholder('Enter email').fill(email);
    await page.getByPlaceholder('Enter password').fill('Password@123');

    await page.locator('#roleId').click();
    await page.locator('[role="option"]').first().click();

    await page.locator('#locationId').click();
    await page.locator('[role="option"]').first().click();

    await page.locator('#departmentId').click();
    await page.locator('[role="option"]').first().click();

    await page.locator('#jobTitleId').click();
    await page.locator('[role="option"]').first().click();

    await page.getByRole('button', { name: 'Create', exact: true }).click();

    // ✅ REAL VALIDATION
    await expect(page.getByText(email)).toBeVisible({ timeout: 10000 });

});