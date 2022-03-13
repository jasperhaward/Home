import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

export interface RouteComponentProps {
    history: {
        path: string;
        push: History["push"];
    };
}

export interface RouteProps {
    route: string;
    component: FunctionComponent<RouteComponentProps>;
}

export function Route({ route, component: Component }: RouteProps) {
    const [path, setPath] = useState(location.pathname);

    useEffect(() => {
        window.addEventListener("popstate", onPopstateChange);

        return () => window.removeEventListener("popstate", onPopstateChange);
    }, [path]);

    function onPopstateChange(event: PopStateEvent) {
        const { location } = event.currentTarget as Window;

        if (location.pathname !== path) {
            setPath(location.pathname);
        }
    }

    return (
        path === route && (
            <Component
                history={{
                    path,
                    push: history.push,
                }}
            />
        )
    );
}
