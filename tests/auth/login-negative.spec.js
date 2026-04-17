import { test, expect } from '@playwright/test';

test('Nitroberry Login - Invalid Credentials', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    await page.fill('#email', 'wrong@email.com');
    await page.fill('#password', 'wrongpassword');

    await page.getByRole('button', { name: 'Sign in' }).click();

    // ✅ Wait for navigation attempt
    await page.waitForLoadState('networkidle');

    // ✅ Assert still on login page
    await expect(page).toHaveURL(/login/);

    // ✅ Optional: check login form still visible
    await expect(page.locator('#email')).toBeVisible();
});