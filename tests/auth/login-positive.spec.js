import { test, expect } from '@playwright/test';

test('Login Positive', async ({ page }) => {

    await page.goto('https://app.nitroberry.com');

    await page.getByPlaceholder('Email').fill('Test@automation-nb.com');
    await page.getByPlaceholder('Password').fill('73mwQM6£vWf_');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/dashboard/);

});