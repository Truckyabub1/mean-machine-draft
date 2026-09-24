import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

const phaseAssets = [
  ['/Users/mufasa/.gemini/antigravity-cli/brain/4c446f93-88e0-48ba-a51f-063be0592279/family_vision_haven_1789760928040.jpg', '/Users/mufasa/mean-machine-draft/public/assets/phase-01-vision.jpg'],
  ['/Users/mufasa/.gemini/antigravity-cli/brain/4c446f93-88e0-48ba-a51f-063be0592279/honest_blueprint_craft_1789760973459.jpg', '/Users/mufasa/mean-machine-draft/public/assets/phase-02-blueprint.jpg'],
  ['/Users/mufasa/.gemini/antigravity-cli/brain/4c446f93-88e0-48ba-a51f-063be0592279/compassionate_build_craft_1789761042539.jpg', '/Users/mufasa/mean-machine-draft/public/assets/phase-03-build.jpg'],
  ['/Users/mufasa/.gemini/antigravity-cli/brain/4c446f93-88e0-48ba-a51f-063be0592279/family_celebration_haven_1789761086452.jpg', '/Users/mufasa/mean-machine-draft/public/assets/phase-04-haven.jpg']
];

for (const [src, dest] of phaseAssets) {
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  } catch (err) {
    // pass
  }
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
});
