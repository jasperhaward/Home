import * as S from "./HeaderBar.styles";

// HeaderBarLink

export interface HeaderBarLinkProps {
    href: string;
    children: string;
}

export function HeaderBarLink({ href, children }: HeaderBarLinkProps) {
    return (
        <S.HeaderBarLink active={location.pathname === href} href={href}>
            {children}
        </S.HeaderBarLink>
    );
}

// HeaderBar

export function HeaderBar() {
    return (
        <S.HeaderBar>
            <HeaderBarLink href="/">HOME</HeaderBarLink>
            <HeaderBarLink href="/about">ABOUT</HeaderBarLink>
        </S.HeaderBar>
    );
}
