import { test, expect } from '@playwright/test';

test('test_todo_app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('buy groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('shoes');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('clothes');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('pay bills');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'buy groceries' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'shoes' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.getByText('clothes')).toBeVisible();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByText('pay bills').click();
});