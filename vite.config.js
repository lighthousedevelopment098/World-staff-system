/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export default defineConfig({
	define: {
		"process.env": JSON.stringify(process.env),
	},
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						const packageName = id.split("node_modules/")[1].split("/")[0];
						return packageName;
					}
				},
			},
		},
	},
});
