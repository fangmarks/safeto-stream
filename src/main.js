import App from "./App.svelte";
import safe from "./safetostream.json";
const app = new App({
  target: document.body,
  props: { safe },
});

export default app;
