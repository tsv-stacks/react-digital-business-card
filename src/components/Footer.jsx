import React from "react";
import { Icon } from '@iconify/react';
import twitterIcon from '@iconify/icons-line-md/twitter';
import githubLoop from '@iconify/icons-line-md/github-loop';
import externalLink from '@iconify/icons-line-md/external-link';

export default function Footer(){
    return (
        <footer>
            <Icon icon={twitterIcon} />
            <Icon icon={githubLoop} />
            <Icon icon={externalLink} />
        </footer>
    )
}
