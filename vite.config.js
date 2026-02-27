import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lift-app/',
})
export default {
  base: '/Lift-App/', // This MUST match your repository name
  // ... rest of your config
}
