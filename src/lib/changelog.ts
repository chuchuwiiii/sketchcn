import CHANGELOG_SOURCE from "../../CHANGELOG.md?raw";

const VERSION_HEADING = /^## (\S+)/m;

export const LATEST_VERSION = CHANGELOG_SOURCE.match(VERSION_HEADING)?.[1];
