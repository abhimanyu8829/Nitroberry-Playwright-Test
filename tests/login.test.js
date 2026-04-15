import { test, expect } from '@playwright/test';

test('Login Test (Readable)', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    const username = page.locator('#username');
    const password = page.locator('#password');
    const loginBtn = page.locator('button[type="submit"]');

    await username.fill('tomsmith');
    await password.fill('SuperSecretPassword!');
    await loginBtn.click();

    await expect(page.locator('.flash.success'))
        .toContainText('You logged into a secure area!');
});