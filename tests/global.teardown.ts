import { test as teardown } from '@playwright/test';

teardown('global teardown', async ({ }) => {
  console.log('global teardown...');
  console.log('stop mock server...');
});