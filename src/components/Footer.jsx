import React from "react";
import { Icon } from '@iconify/react';
import twitterIcon from '@iconify/icons-line-md/twitter';
import githubLoop from '@iconify/icons-line-md/github-loop';
import externalLink from '@iconify/icons-line-md/external-link';

export default function Footer(){
    return (
        <footer>
            <a target={"_blank"} href="https://twitter.com/tsv_stacks">
                <Icon className="footer-icon" icon={twitterIcon} />
            </a>
            <a target={"_blank"} href="https://github.com/tsv-stacks">
                <Icon className="footer-icon" icon={githubLoop} />
                </a>
            <a target={"_blank"} href="https://github.com/tsv-stacks/react-digital-business-card">
                <Icon className="footer-icon" icon={externalLink} />
            </a>
        </footer>
    )
}
