import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import svgSpritePlugin from 'vite-plugin-svg-sprite';

// https://vite.dev/config/
export default defineConfig({

  plugins: [
    react(),
    svgSpritePlugin({
      symbolId: 'icon-[name]',  // This will generate IDs like icon-search
      include: ['src/assets/icons/**/*.svg']
    })
  ],
});
