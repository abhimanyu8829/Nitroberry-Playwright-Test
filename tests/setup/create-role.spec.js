import { test, expect } from '@playwright/test';

test('Create Role - FINAL STABLE (STRICT FIX)', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    // 🔐 LOGIN
    await page.getByRole('textbox', { name: 'Email' }).fill('Test@automation-nb.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('73mwQM6£vWf_');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/dashboard/);

    // 📍 GO DIRECTLY TO ROLES
    await page.goto('https://app.nitroberry.com/dashboard/setup?tab=roles');

    // ➕ CREATE ROLE
    await page.getByRole('button', { name: /Create Role/i }).click();

    const roleName = `Role-${Date.now()}`;

    await page.getByPlaceholder('Enter Role Name').fill(roleName);
    await page.getByPlaceholder('Enter Description').fill('Automation Role');

    // 🚀 CREATE
    await page.locator('button:has-text("Create")').last().click();

    // ✅ WAIT TABLE TO UPDATE
    const table = page.locator('table');

    // 🔥 ONLY SEARCH INSIDE TABLE (NO STRICT ERROR)
    const createdRow = table.getByRole('cell', { name: roleName });

    await expect(createdRow).toBeVisible({ timeout: 10000 });

    console.log('✅ Role created and verified in table');

});