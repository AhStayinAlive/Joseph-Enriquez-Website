import { test, expect } from '@playwright/test'

test('4th project CTA is visible and opens modal or navigates', async ({ page }) => {
  await page.goto('/')

  // Wait for Projects section
  await page.locator('#projects').scrollIntoViewIfNeeded()

  // Ensure cards rendered
  const items = page.locator('#projects li')
  await expect(items.nth(3)).toBeVisible()

  // Click the 4th card title/button
  const fourth = items.nth(3)
  await fourth.getByRole('button').first().click({ trial: false }).catch(async () => {
    // If it is a link, click link instead
    const link = fourth.getByRole('link').first()
    if (await link.isVisible()) await link.click()
  })

  // Either modal present (dialog) or navigated to project page
  const modal = page.locator('[role="dialog"]')
  const atProjectPage = page.url().includes('/projects/') || page.url().includes('/work/')
  expect((await modal.count()) > 0 || atProjectPage).toBeTruthy()
})

