if (process.env.NODE_ENV === "development") {
    require("preact/debug");
}

import { render, h } from "preact";
import { setup } from "goober";

// Import icons from respective directories to reduce bundle size,
// webpack tree shaking seems to not work correctly otherwise
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam";

import App from "./App";
import "./index.css";

library.add({
    faEnvelope,
    faLinkedin,
    faGithub,
    faSteam,
});

setup(h);

render(<App />, document.body);
