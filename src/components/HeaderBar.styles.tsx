import type { ComponentChildren } from "preact";
import { styled } from "goober";
import { NavLink } from "@plugins/router";
import { colours, fonts } from "@styles";

// HeaderBar

export interface HeaderBarProps {
    children: ComponentChildren;
}

export const HeaderBar = styled<HeaderBarProps>("header")`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${colours.darkenedBackground};
`;

// HeaderBarLink

export interface HeaderBarLinkProps {
    href: string;
    children: string;
}

export const HeaderBarLink = styled<HeaderBarLinkProps>(NavLink)`
    padding: 10px;
    color: ${colours.grey};
    font-size: ${fonts.size.xs};
    letter-spacing: ${fonts.spacing.narrow};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus,
    &[type="active"] {
        color: ${colours.white};
    }
`;
