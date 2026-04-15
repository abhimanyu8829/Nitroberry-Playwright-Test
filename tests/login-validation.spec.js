import { test, expect } from '@playwright/test';

test('Nitroberry Login - Empty Fields', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText('Email address is required.')).toBeVisible();
    await expect(page.getByText('Password is required.')).toBeVisible();
});

test('Nitroberry Login - Missing Password', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    await page.fill('#email', 'sales@nitroberry.com');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText('Password is required.')).toBeVisible();
});