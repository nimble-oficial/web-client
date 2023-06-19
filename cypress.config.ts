import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    pageLoadTimeout: 5000,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
})
