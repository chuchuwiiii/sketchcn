import { useEffect, useState } from "react";
import {
	DEFAULT_PLAYGROUND_CONFIG,
	type PlaygroundConfig,
} from "./playground-config";

const STORAGE_KEY = "sketchcn:playground-config";

function readStoredConfig(): PlaygroundConfig | null {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);

		if (raw === null) {
			return null;
		}

		// A config saved by an older build can be missing keys this one reads.
		return { ...DEFAULT_PLAYGROUND_CONFIG, ...JSON.parse(raw) };
	} catch {
		return null;
	}
}

/**
 * Playground state, persisted to local storage.
 *
 * The first render uses the defaults so the server and client markup match, and
 * saving waits for the restore so it cannot overwrite storage with defaults.
 */
export function usePlaygroundConfig() {
	const [config, setConfig] = useState(DEFAULT_PLAYGROUND_CONFIG);
	const [restored, setRestored] = useState(false);

	useEffect(() => {
		const stored = readStoredConfig();

		if (stored !== null) {
			setConfig(stored);
		}

		setRestored(true);
	}, []);

	useEffect(() => {
		if (!restored) {
			return;
		}

		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
	}, [config, restored]);

	const patchConfig = (patch: Partial<PlaygroundConfig>) => {
		setConfig((current) => ({ ...current, ...patch }));
	};

	const resetConfig = () => {
		setConfig(DEFAULT_PLAYGROUND_CONFIG);
	};

	return { config, patchConfig, resetConfig };
}
