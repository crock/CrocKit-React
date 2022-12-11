import * as React from 'react';

export interface LayoutProps {
	children: React.ReactNode
}

export interface ContainerProps {
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
}

export interface AnalyticsProps {
    eventName: string
    params: {
        [key: string]: any
        category: string
        action: string
        label?: string
        value?: any
    }
}