import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astrotestwabpage.netlify.app",
  integrations: [
    preact(), 
    react(), 
    tailwind({
    applyBaseStyles: false
  })]
});