// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ZenStartt/',         // 👈 exact repo name (double “t”)
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
  
})
