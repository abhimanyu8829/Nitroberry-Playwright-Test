import { test, expect } from '@playwright/test';

test('Login Validation Empty Fields', async ({ page }) => {

    await page.goto('https://app.nitroberry.com');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText('Email address is required.')).toBeVisible();
    await expect(page.getByText('Password is required.')).toBeVisible();

});