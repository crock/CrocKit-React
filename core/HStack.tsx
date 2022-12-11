import React from "react"
import { ContainerProps } from "../types"

const HStack = ({ children, style, className }: ContainerProps) => (
	<div style={style} className={`flex flex-row ${className}`}>
		{children}
	</div>
)

HStack.defaultProps = {
	className: "",
	style: {},
} as Partial<ContainerProps>

export default HStack
