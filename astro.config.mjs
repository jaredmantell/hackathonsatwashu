import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://jaredmantell.github.io/",
  integrations: [tailwind(), icon()],
  image: {
    service: passthroughImageService(),
  },
});
