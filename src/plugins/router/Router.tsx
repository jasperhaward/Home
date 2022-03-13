import type { ComponentChildren } from "preact";

export interface RouterProps {
    children: ComponentChildren;
}

export function Router({ children }: RouterProps) {
    if (history.push) {
        throw new Error("More than one instance of Router mounted.");
    }

    history.push = (path) => {
        history.pushState(null, null, path);
    };

    return <>{children}</>;
}
