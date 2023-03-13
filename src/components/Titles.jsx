import React from "react";
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-line-md/linkedin';
import emailIcon from '@iconify/icons-line-md/email';

export default function Titles(){
    return (
        <div>
            <h1>Titles</h1>
            <Icon icon={linkedinIcon} />
            <Icon icon={emailIcon} />
        </div>

    )
}
