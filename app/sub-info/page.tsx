"use client"
import React, { useState } from 'react';

import CategoriesList from '@/components/CategoriesList';
import Dashboard from '@/components/CancelFlow';
import NavDashboard from '@/components/header/NavDashboard';
import H1Text from '@/components/text/H1Text';
import Down from '@/components/icons/Down';
import RightChevron from '@/components/icons/RightChevron';
import SH2Text from '@/components/text/SH2Text';
import CourseCard from '@/components/CourseCard';
import B1Text from '@/components/text/B1Text';
import Link from 'next/link';

const SubInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <NavDashboard />
            <CategoriesList />
            <div className='p-2'>
                <H1Text text="Subscription Info" />
                <div className='pt-2'>
                    <SH2Text text='CURRENT PLAN STATUS' color={''} />
                </div>
                <div className='pt-3 flex'>
                    <SH2Text text='Subscription:' color={''} />
                    <B1Text text='&nbsp;Basic' />
                    {/* to do: pull in "free,basic, etc. dynamically */}
                </div>
                <div className='pt-3 flex'>
                    <B1Text text='Last Day of Full Access:' />
                    <B1Text text='&nbsp; N/A' />
                    {/* to do: pull in DATE */}
                </div>
                <div className='pt-3 flex bg-red'>
                INSERT INFO ON THEIR SUB HERE!!
                {/* to do: this */}
                </div>
                <div className='pt-3 flex'>
                    <Link href="/pause">
                        <SH2Text text='PAUSE/' color={''} />
                    </Link>
                    <Link href="/cancel">
                        <SH2Text text='CANCEL' color={''} />
                    </Link>

                    {/* to do: both pauce and/or cancel should link to the pause/cancel flow */}
                    <SH2Text text='&nbsp;SUBSCRIPTION' color={''} />
                </div>
                <div className='pt-3 flex'>
                <Link href="/bulk-subscriptions">
                    <SH2Text text='GIFT A SUBSCRIPTION' color={''} />
                </Link>
                </div>
                <div className='pt-3 flex'>
                <Link href="/">
                    <SH2Text text='PAYMENT INFO' color={''} />
                </Link>
                {/* to do: idk where this should go? */}
                </div>
                <div className='pt-3 flex'>

                <Link href="/support">
                    <SH2Text text='SUBSCRIPTION FAQS' color={''} />
                </Link>
                </div>
                <div className='pt-3 pb-3 flex'>
                    <B1Text text='Not satisfied with your subscription?' />
                    <SH2Text text='&nbsp;Chat with Support.' color='' />
                    {/* to do: whatever this chat w/ support should do */}
                </div>
            </div>


        </>
    );
};


export default SubInfo;





// to do: dynamically pull in info, also add in auth content here, didn't add it yet, because i was testing while signed out. but it should direct user to the login page if not signed in. 

