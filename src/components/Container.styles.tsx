import type { ComponentChildren } from "preact";
import { styled } from "goober";

export interface ContainerProps {
    children: ComponentChildren;
}

export const Container = styled<ContainerProps>("main")`
    flex-grow: 1;
    min-height: 0;
    padding: 40px;
`;
