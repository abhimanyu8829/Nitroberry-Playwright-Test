import { test, expect } from '@playwright/test';
import { login } from '../../utils/login';

test('Create User Negative', async ({ page }) => {

    await login(page);

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Users' }).click();
    await page.getByRole('button', { name: 'Create User' }).click();

    await page.getByRole('button', { name: /create/i }).click();

    await expect(page.getByText('First Name is required')).toBeVisible();

});