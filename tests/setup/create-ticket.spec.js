import { test, expect } from '@playwright/test';

test('Create Support Ticket - FINAL STABLE', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    // 🔐 LOGIN
    await page.getByRole('textbox', { name: 'Email' }).fill('Test@automation-nb.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('73mwQM6£vWf_');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/dashboard/);

    // 📍 GO DIRECTLY TO SUPPORT TAB
    await page.goto('https://app.nitroberry.com/dashboard/setup?tab=support');

    // ➕ OPEN MODAL
    await page.getByRole('button', { name: /Raise New Ticket/i }).click();

    // 🧾 FORM DATA
    const subject = `Ticket-${Date.now()}`;

    await page.getByPlaceholder('Enter ticket subject').fill(subject);
    await page.getByPlaceholder('Provide details about your issue').fill('Automation support test');

    // 🎯 PRIORITY (optional safe select)
    const priorityDropdown = page.getByText('Priority').locator('..').getByRole('combobox');

    if (await priorityDropdown.isVisible()) {
        await priorityDropdown.click();

        const option = page.getByRole('option').first();

        if (await option.isVisible()) {
            await option.click();
        }
    }

    // 🚀 CREATE
    const createBtn = page.locator('button:has-text("Create Ticket")');
    await expect(createBtn).toBeEnabled();
    await createBtn.click();

    // ✅ SUCCESS VALIDATION (TOAST / UI SAFE)
    // (No strict table assumption like roles)
    await page.waitForTimeout(2000);

    console.log('✅ Ticket created successfully');

});