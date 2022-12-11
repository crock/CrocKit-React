import React from "react"
import { ContainerProps } from "../types"

const VStack = ({ children, style, className }: ContainerProps) => (
	<div style={style} className={`flex flex-col ${className}`}>
		{children}
	</div>
)

VStack.defaultProps = {
	className: "",
	style: {},
} as Partial<ContainerProps>

export default VStack
