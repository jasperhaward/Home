import type { ComponentChildren } from "preact";
import { styled } from "goober";
import { IconLink, IconLinkProps } from "@components";
import { colours, fonts, breakpoints } from "@styles";

// FooterBarContent

export type FooterBarContentPosition = "left" | "center" | "right";

export interface FooterBarContentProps {
    position: FooterBarContentPosition;
    children: ComponentChildren;
}

export const FooterBarContent = styled<FooterBarContentProps>("div")`
    grid-area: ${(props) => props.position};
    text-align: ${(props) => props.position};

    @media (max-width: ${breakpoints.sm}) {
        text-align: center;
    }
`;

// FooterBarText

export interface FooterBarTextProps {
    children: ComponentChildren;
}

export const FooterBarText = styled<FooterBarTextProps>("div")`
    color: ${colours.grey};
    font-size: ${fonts.size.xs};
    letter-spacing: ${fonts.spacing.narrow};
`;

// FooterBarIconLink

export interface FooterBarIconLinkProps
    extends Omit<IconLinkProps, "className"> {}

export const FooterBarIconLink = styled<FooterBarIconLinkProps>(IconLink)`
    margin: 0 6px;
    color: ${colours.white};
    font-size: ${fonts.size.lg};
    transition: color 0.3s ease;

    &:hover,
    &:focus {
        color: ${colours.grey};
    }
`;

// FooterBar

export interface FooterBarProps {
    children: ComponentChildren;
}

export const FooterBar = styled<FooterBarProps>("footer")`
    display: grid;
    grid-template-areas: "left center right";
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 10px;
    background-color: ${colours.darkenedBackground};

    @media (max-width: ${breakpoints.sm}) {
        display: block;
    }
`;
