import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: process.env.APP_URL ?? "http://localhost:3000",
    pageLoadTimeout: 5000,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
})
