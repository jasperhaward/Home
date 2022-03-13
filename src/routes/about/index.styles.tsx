import { ComponentChildren } from "preact";
import { styled } from "goober";
import { colours, fonts } from "@styles";

// AboutPage

export interface AboutPageProps {
    children: ComponentChildren;
}

export const AboutPage = styled<AboutPageProps>("div")`
    height: 100%;
    margin: 0 20%;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    color: ${colours.white};
    background-color: ${colours.darkenedBackground};
`;

// Title

export interface TitleProps {
    children: ComponentChildren;
}

export const Title = styled<TitleProps>("div")`
    font-size: ${fonts.size.xl};
    font-weight: ${fonts.weight.light};
    letter-spacing: ${fonts.spacing.normal};
`;
