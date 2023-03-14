import React from "react";
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-line-md/linkedin';
import emailIcon from '@iconify/icons-line-md/email';

export default function Social(){
    return (
       <div className="flex">
        <button className="btn"><Icon icon={emailIcon} className="icon" /> Email</button>
        <button className="btn blue"><Icon icon={linkedinIcon} className="icon"/> LinkedIn</button>
       </div>
    )
}
