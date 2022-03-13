import { ComponentChildren } from "preact";
import { styled } from "goober";
import { colours, fonts } from "@styles";

// HomePage

export interface HomePageProps {
    children: ComponentChildren;
}

export const HomePage = styled<HomePageProps>("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: ${colours.white};
`;

// Title

export interface TitleProps {
    children: ComponentChildren;
}

export const Title = styled<TitleProps>("div")`
    line-height: 60px;
    font-size: 50px;
    font-weight: ${fonts.weight.light};
    margin-right: -30px;
    letter-spacing: 30px;
`;

// SubTitle

export interface SubTitleProps {
    children: ComponentChildren;
}

export const SubTitle = styled<SubTitleProps>("div")`
    font-size: ${fonts.size.lg};
    font-weight: ${fonts.weight.light};
    letter-spacing: ${fonts.spacing.wide};
`;
