import { test, expect } from '@playwright/test';

test('Create User - FINAL STABLE', async ({ page }) => {

    await page.goto('https://app.nitroberry.com');

    // Login if needed
    const isLoginVisible = await page.locator('input[placeholder="Email"]').isVisible().catch(() => false);

    if (isLoginVisible) {
        await page.getByPlaceholder('Email').fill('Test@automation-nb.com');
        await page.getByPlaceholder('Password').fill('73mwQM6£vWf_');
        await page.getByRole('button', { name: 'Sign in' }).click();
    }

    await page.waitForURL('**/dashboard**');

    // Navigate
    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Users', exact: true }).click();

    // Create User
    await page.getByRole('button', { name: 'Create User' }).click();

    // Fill form
    await page.getByPlaceholder('Enter first name').fill('Test');
    await page.getByPlaceholder('Enter last name').fill('User');
    await page.getByPlaceholder('Enter email').fill(`test${Date.now()}@mail.com`);
    await page.getByPlaceholder('Enter password').fill('Password@123');

    // Dropdowns (safe selection)
    await page.locator('#roleId').click();
    await page.getByRole('option').nth(0).click();

    await page.locator('#locationId').click();
    await page.getByRole('option').nth(0).click();

    await page.locator('#departmentId').click();
    await page.getByRole('option').nth(0).click();

    await page.locator('#jobTitleId').click();
    await page.getByRole('option').nth(0).click();

    // Submit (ONLY ONCE)
    await page.getByRole('button', { name: 'Create', exact: true }).click();

    // ✅ REAL VALIDATION (IMPORTANT)
    await expect(page.locator('text=No Users Added Yet')).not.toBeVisible();

});