import React from "react";
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-line-md/linkedin';
import emailIcon from '@iconify/icons-line-md/email';

export default function Social(){
    return (
       <div className="flex">
        <a href="mailto:tsvirdi@yahoo.co.uk" target={"_blank"} className="btn white-btn"><Icon icon={emailIcon} className="icon" /> Email</a>
        <a href="https://www.linkedin.com/in/tarndeep-virdi/" target={"_blank"} className="btn blue"><Icon icon={linkedinIcon} className="icon"/> LinkedIn</a>
       </div>
    )
}
