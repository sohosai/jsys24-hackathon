import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sohosai.github.io",
  base: import.meta.env.PROD ? "/jsys24-hackathon" : "/",
  integrations: [react()],
});
