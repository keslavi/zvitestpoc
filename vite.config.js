/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals:true,
    environment:"jsdom",
    setupFiles: './src/test/_setupTest.js',
    css: true,
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"], // important
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100, // ms
    },
    // hmr: {
    //   overlay: false, // Disable the overlay
    // },
    optimizeDeps: {
      force: true,
    }    
  },  
})



    // watch: true,
    // isolate: true, // <-- this helps with stale state
    // forceRerunTriggers: ['**/src/**/*.{js,jsx,ts,tsx}'], // triggers full rerun
    // //clearScreen: false // Explicitly prevents clearing 
    // fileParallelism: true, // default: true
    // poolOptions: {
    //   threads: {
    //     maxThreads: 8 // Adjust based on your CPU cores
    //   },
    // },
    // onConsoleLog: (log, type) => {
    //   // helpful for debugging
    //   console.log(`[Vitest][${type}] ${log}`);
    // },
    // clearMocks: true,
    // restoreMocks: true,     