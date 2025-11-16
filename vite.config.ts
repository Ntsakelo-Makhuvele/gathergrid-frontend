// import { defineConfig } from 'vite'
import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
/// <reference types="vitest/config" />


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, 
    environment: 'jsdom', 
    css: true, 
    include: ['src/**/*.test.{ts,tsx}', 'src/tests/**/*.{test,spec}.{ts,tsx}'],
  }, 

})