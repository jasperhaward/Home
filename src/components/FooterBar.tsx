import type { ComponentChildren } from "preact";
import * as S from "./FooterBar.styles";

// FooterBarContent

export type FooterBarContentPositions = {
    [K in S.FooterBarContentPosition]?: boolean;
};

export interface FooterBarContentProps extends FooterBarContentPositions {
    children: ComponentChildren;
}

export function FooterBarContent({
    left,
    center,
    right,
    children,
}: FooterBarContentProps) {
    var position: S.FooterBarContentPosition;

    if (left) position = "left";
    if (center) position = "center";
    if (right) position = "right";

    return (
        <S.FooterBarContent position={position}>{children}</S.FooterBarContent>
    );
}

// FooterBar

export function FooterBar() {
    return (
        <S.FooterBar>
            <FooterBarContent left>
                <S.FooterBarText>
                    Built with Preact, TypeScript & SASS.
                </S.FooterBarText>
            </FooterBarContent>
            <FooterBarContent center>
                <S.FooterBarIconLink
                    external
                    href="https://github.com/jasperhaward"
                    icon={["fab", "github"]}
                />
                <S.FooterBarIconLink
                    external
                    href="https://www.linkedin.com/in/jhaward"
                    icon={["fab", "linkedin"]}
                />
                <S.FooterBarIconLink
                    external
                    href="https://steamcommunity.com/id/ric0o"
                    icon={["fab", "steam"]}
                />
                <S.FooterBarIconLink
                    external
                    href="mailto:jasperhaward@virginmedia.com"
                    icon={["fas", "envelope"]}
                />
            </FooterBarContent>
            <FooterBarContent right>
                <S.FooterBarText>
                    © 2021 Jasper Haward, All Rights Reserved.
                </S.FooterBarText>
            </FooterBarContent>
        </S.FooterBar>
    );
}
