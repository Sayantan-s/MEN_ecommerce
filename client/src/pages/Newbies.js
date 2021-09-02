import { Box, Page } from 'components';
import Heading from 'components/elements/Heading.component';
import React from 'react';

const Newbies = () => {
    return (
        <Page>
            <Heading level={1}>Hello said everyOne</Heading>
            <Heading level={2}>Hello said everyOne</Heading>
            <Heading level={3}>Hello said everyOne</Heading>
            <Heading level={4}>Hello said everyOne</Heading>
            <Heading level={5}>Hello said everyOne</Heading>
            <Heading level={6}>Hello said everyOne</Heading>
            <Box className="absolute top-0 w-56 h-64 z-50 bg-black">
                    <svg width={377} height={279} viewBox="0 0 377 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_bd)">
                            <rect x={23} y={22} width={331} height={233} rx={18} fill="url(#paint0_linear)" />
                            <rect x={24} y={23} width={329} height={231} rx={17} stroke="url(#paint1_linear)" strokeWidth={2} />
                        </g>
                        <defs>
                            <filter id="filter0_bd" x={-31} y={-32} width={439} height={341} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImage" stdDeviation={27} />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect2_dropShadow" />
                            <feOffset dy={1} />
                            <feGaussianBlur stdDeviation={12} />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear" x1="180.908" y1="243.621" x2="35.3933" y2="38.1907" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.1" />
                            <stop offset={1} stopColor="white" stopOpacity="0.4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>
        </Page>
    );
};

export default Newbies;
