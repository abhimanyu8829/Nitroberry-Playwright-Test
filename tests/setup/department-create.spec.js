import { test, expect } from '@playwright/test';
import { login } from '../../utils/login';

test('Create Department', async ({ page }) => {

    await login(page);

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Departments' }).click();

    // ✅ exact button (no regex)
    await page.getByRole('button', { name: 'Create Department' }).click();

    const name = `Dept-${Date.now()}`;

    // ✅ exact input (no placeholder confusion)
    await page.locator('#department').fill(name);

    await page.getByRole('button', { name: /submit|create/i }).click();

    await page.waitForLoadState('networkidle');

    // ✅ stable assertion
    await expect(page.locator('table')).toContainText(name);
});