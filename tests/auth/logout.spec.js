const { test, expect } = require('@playwright/test');

test('Login → Logout (with confirmation)', async ({ page }) => {

    // Login
    await page.goto('https://app.nitroberry.com/login');

    await page.fill('input[type="email"]', 'Test@automation-nb.com');
    await page.fill('input[type="password"]', '73mwQM6£vWf_');

    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);

    // Open profile (bottom-left)
    await page.getByText('Nitroberry Test').click();

    // Click logout icon
    await page.locator('[class*="log-out"]').click();

    // 🔥 Click confirmation button
    await page.getByRole('button', { name: /yes, log out/i }).click();

    // Verify redirected to login
    await expect(page).toHaveURL(/login/);

});