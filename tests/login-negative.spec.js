import { test, expect } from '@playwright/test';

test('Nitroberry Login - Invalid Credentials', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    await page.fill('#email', 'wrong@email.com');
    await page.fill('#password', 'wrongpassword');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/login/);
});