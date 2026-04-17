import { test, expect } from '@playwright/test';
import { login } from '../../utils/login';

test('Create Job Title', async ({ page }) => {

    await login(page);

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Job Titles' }).click();

    await page.getByRole('button', { name: 'Create Job Title' }).click();

    const name = `Job-${Date.now()}`;

    // ✅ FINAL FIX
    await page.locator('#job-title').fill(name);

    await page.getByRole('button', { name: /submit|create/i }).click();

    await page.waitForLoadState('networkidle');

    await expect(page.locator('table')).toContainText(name);
});