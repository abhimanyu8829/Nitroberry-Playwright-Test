import { login } from '../../utils/login';
import { test, expect } from '@playwright/test';

test('Create User Validation', async ({ page }) => {

    await login(page);

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Users' }).click();

    await page.getByRole('button', { name: 'Create User', exact: true }).click();

    await page.getByRole('button', { name: /submit|create/i }).click();

    await expect(page.getByText(/First Name is required/i)).toBeVisible();
    await expect(page.getByText(/Email is required/i)).toBeVisible();
});
