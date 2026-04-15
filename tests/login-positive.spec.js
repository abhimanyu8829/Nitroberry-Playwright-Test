import { test, expect } from '@playwright/test';

test('Nitroberry Login - Valid Credentials', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    await page.fill('#email', 'sales@nitroberry.com');
    await page.fill('#password', '123456');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.waitForLoadState('networkidle');

    // Replace with actual success element
    await expect(page.locator('body')).toContainText(/dashboard|welcome/i);
});