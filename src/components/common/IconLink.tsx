import { Icon, IconProps } from "@components";

export interface IconLinkProps extends IconProps {
    // Must pass className so we can use styled(IconLink) functionality
    className?: string;
    href: string;
    external?: boolean;
}

export function IconLink({ external, icon, ...props }: IconLinkProps) {
    return (
        <a
            {...props}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer nofollow" : undefined}
        >
            <Icon icon={icon} />
        </a>
    );
}
