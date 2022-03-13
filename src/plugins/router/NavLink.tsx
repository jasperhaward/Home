import type { JSX } from "preact";

export interface NavLinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {}

export function NavLink(props: NavLinkProps) {
    function onClick(event: MouseEvent) {
        event.preventDefault();

        onNavigate(props.href);

        if (props.onClick) {
            props.onClick.apply(event);
        }
    }

    function onNavigate(url: string) {
        history.push(url);
        window.dispatchEvent(new Event("popstate"));
    }

    return <a {...props} onClick={onClick} />;
}
