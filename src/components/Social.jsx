import React from "react";
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-line-md/linkedin';
import emailIcon from '@iconify/icons-line-md/email';

export default function Social(){
    return (
       <div>
           <Icon icon={linkedinIcon} />
            <Icon icon={emailIcon} />
       </div>

    )
}
