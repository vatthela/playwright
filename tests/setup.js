import { chromium } from "playwright";

module.exports = async () => {
  global.browser = await chromium.launch({ keepBrowserOpen: true });
  return global.browser;
};