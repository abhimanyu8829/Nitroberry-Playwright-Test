import { test, expect } from '@playwright/test';

test('Create Task - Clean Stable Flow', async ({ page }) => {

    await page.goto('https://app.nitroberry.com/login');

    // 🔐 LOGIN
    await page.getByRole('textbox', { name: 'Email' }).fill('Test@automation-nb.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('73mwQM6£vWf_');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/dashboard/);

    // ➕ OPEN CREATE TASK
    const createBtn = page.getByRole('button', { name: 'Create Task' }).first();
    await expect(createBtn).toBeVisible();
    await createBtn.click();

    // 🧾 WAIT FOR MODAL
    await expect(page.getByText('Create New Task')).toBeVisible();

    // 📝 FILL FIELDS
    const taskName = `Task-${Date.now()}`;

    await page.getByPlaceholder('Enter task title').fill(taskName);
    await page.getByPlaceholder('Enter task description').fill('test');

    // 🔽 TASK TYPE (FIXED - NO KEYBOARD)
    const taskType = page.getByText('Task Type').locator('..').getByRole('combobox');
    await taskType.click();
    await page.getByRole('option', { name: /Delegation|Help|.*/ }).first().click();

    // 🔽 PRIORITY (FIXED)
    const priority = page.getByText('Priority').locator('..').getByRole('combobox');
    await priority.click();
    await page.getByRole('option', { name: /Low|Medium|High|.*/ }).first().click();

    // 📅 END DATE = today + 20 days (CORRECT FORMAT)
    const today = new Date();
    today.setDate(today.getDate() + 20);

    // ✅ format for input[type="date"]
    const formattedDate = today.toISOString().split('T')[0];

    const endDate = page.getByText('End Date').locator('..').locator('input');

    await expect(endDate).toBeVisible();
    await endDate.fill(formattedDate);

    console.log('End Date set to:', formattedDate);

    // 👤 ASSIGN USER (IMPORTANT)
    const userInput = page.getByPlaceholder('Search users...');
    await userInput.click();
    await userInput.fill('test');

    const userOption = page.locator('[role="option"]').first();
    await expect(userOption).toBeVisible();
    await userOption.click();

    // 🚀 SUBMIT
    const submitBtn = page.getByRole('button', { name: 'Create Task' }).last();
    await submitBtn.click();

    // 📡 API VALIDATION
    const response = await page.waitForResponse(res =>
        res.url().includes('/task') &&
        res.request().method() === 'POST'
    );

    const data = await response.json();
    console.log('API:', data);

    expect(data).toBeTruthy();

    if (!data.success) {
        throw new Error(`❌ Failed: ${data.message}`);
    }

    console.log('✅ Task Created');
});