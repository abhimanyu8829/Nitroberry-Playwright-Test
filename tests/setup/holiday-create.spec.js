import { test, expect } from '@playwright/test';
import { login } from '../../utils/login';

test('Create Holiday', async ({ page }) => {

    await login(page);

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Holidays', exact: true }).click();

    await page.getByRole('button', { name: /add holiday/i }).click();

    const holidayName = `Holiday-${Date.now()}`;

    await page.locator('#name').fill(holidayName);

    // ✅ FIXED DATE (backend compatible)
    await page.locator('#holidayDate').click();
    await page.keyboard.type('05/01/2026');

    await page.locator('#type').click();
    await page.getByRole('option', { name: 'Public' }).click();

    await page.getByRole('button', { name: /submit|create/i }).click();

    await page.waitForLoadState('networkidle');

    // ✅ stable validation
    await expect(page.locator('table')).toContainText('5/1/2026');
});