import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import "./styles.css";
import App from "./app.tsx";

// Remove Runable badge
setTimeout(() => {
	const buttons = document.querySelectorAll('button');
	buttons.forEach((btn) => {
		if (btn.textContent?.includes('Made with') || btn.textContent?.includes('Runable')) {
			btn.remove();
		}
	});
}, 500);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
);
