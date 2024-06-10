import { test as setup } from '@playwright/test';

setup('global setup', async ({ }) => {
  console.log('global setup...');
  console.log('start mock server...');
});