import { test, expect } from '@playwright/test';

test('Create Shift - WORKING FINAL', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    // 🔐 LOGIN
    await page.getByRole('textbox', { name: 'Email' }).fill('Test@automation-nb.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('73mwQM6£vWf_');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/dashboard/);

    // 📍 PAGE
    await page.goto('https://app.nitroberry.com/dashboard/setup?tab=company_shifts');

    // ➕ OPEN MODAL
    await page.getByRole('button', { name: /Create Shift/i }).click();

    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();

    const shiftName = `Shift-${Date.now()}`;

    // 🧾 SHIFT NAME
    await modal.getByRole('textbox', { name: /shift name/i }).fill(shiftName);

    await page.keyboard.press('Tab');

    // 📜 scroll modal
    await modal.evaluate(el => el.scrollTop = el.scrollHeight);

    // ✅ DEFINE BUTTON (THIS WAS MISSING)
    const createBtn = modal.getByRole('button', { name: /create shift/i });

    await expect(createBtn).toBeEnabled();

    // 🔥 CLICK
    await createBtn.scrollIntoViewIfNeeded();
    await createBtn.click();

    // ✅ WAIT FOR MODAL CLOSE
    await expect(modal).toBeHidden();

    // ✅ REAL VALIDATION
    await expect(page.getByText(shiftName)).toBeVisible({ timeout: 10000 });

    console.log('✅ Shift actually created and verified');

});