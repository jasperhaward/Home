import * as S from "./HeaderBar.styles";

export function HeaderBar() {
    return (
        <S.HeaderBar>
            <S.HeaderBarLink href="/">HOME</S.HeaderBarLink>
            <S.HeaderBarLink href="/about">ABOUT</S.HeaderBarLink>
        </S.HeaderBar>
    );
}
