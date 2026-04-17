import { test, expect } from '@playwright/test';
import { login } from '../../utils/login';

test('Create Job Title', async ({ page }) => {

    await login(page);

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Job Titles' }).click();

    await page.getByRole('button', { name: /create job title/i }).click();

    const name = `Job-${Date.now()}`;

    // ✅ correct input (avoid search box)
    await page.locator('#job-title').fill(name);

    await page.getByRole('button', { name: /submit|create/i }).click();

    // ✅ wait for API instead of networkidle
    await page.waitForResponse(res =>
        res.url().includes('/job') && res.status() === 200
    );

    // ✅ small UI wait (important)
    await page.waitForTimeout(2000);

    // ✅ verify using row (NOT whole table)
    const row = page.locator('table tr').filter({ hasText: name });

    await expect(row).toBeVisible({ timeout: 10000 });
});