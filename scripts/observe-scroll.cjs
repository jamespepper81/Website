#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = 'http://localhost:3000';

  // Ensure screenshots directory at project root
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  fs.mkdirSync(screenshotsDir, { recursive: true });
  
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    console.log('Opening', url);
    await page.goto(url, { waitUntil: 'networkidle' });

    const metrics = await page.evaluate(() => {
      const body = document.scrollingElement || document.documentElement;
      const scrollHeight = body.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTop = body.scrollTop || window.scrollY || 0;
      return { scrollHeight, clientHeight, scrollTop, canScroll: scrollHeight > clientHeight };
    });

    console.log('Desktop metrics:', metrics);

    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' }));
    await page.waitForTimeout(400);
    const after = await page.evaluate(() => ({ scrollY: window.scrollY, maxScroll: document.body.scrollHeight - window.innerHeight }));
    console.log('After scroll desktop:', after);
    await page.screenshot({ path: path.join(screenshotsDir, 'observe-desktop.png'), fullPage: true });

    // Mobile emulation
    const iphone = devices['iPhone 12'];
    const mobContext = await browser.newContext({ ...iphone });
    const mobPage = await mobContext.newPage();
    await mobPage.goto(url, { waitUntil: 'networkidle' });

    const mobMetrics = await mobPage.evaluate(() => {
      const body = document.scrollingElement || document.documentElement;
      return {
        scrollHeight: body.scrollHeight,
        clientHeight: window.innerHeight,
        scrollTop: body.scrollTop || window.scrollY || 0,
        canScroll: body.scrollHeight > window.innerHeight,
      };
    });
    console.log('Mobile metrics:', mobMetrics);

    await mobPage.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' }));
    await mobPage.waitForTimeout(400);
    const mobAfter = await mobPage.evaluate(() => {
      const body = document.scrollingElement || document.documentElement;
      return { scrollY: window.scrollY, maxScroll: body.scrollHeight - window.innerHeight };
    });
    console.log('After scroll mobile:', mobAfter);
    await mobPage.screenshot({ path: path.join(screenshotsDir, 'observe-mobile.png'), fullPage: true });

    console.log('Screenshots written: screenshots/observe-desktop.png, screenshots/observe-mobile.png');
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
