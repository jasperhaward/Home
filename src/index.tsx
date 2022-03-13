if (process.env.NODE_ENV === "development") {
    require("preact/debug");
}

import { render, h } from "preact";
import { setup } from "goober";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faSteam,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App";
import "./index.css";

setup(h);

library.add({
    faEnvelope,
    faLinkedin,
    faGithub,
    faSteam,
});

render(<App />, document.body);
