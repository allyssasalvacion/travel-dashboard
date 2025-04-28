import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-vmw",
  project: "tour-agency-dashboard",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
  sentryConfig,
  ssr: {
    noExternal: [/@syncfusion/]
  }
  };
});
