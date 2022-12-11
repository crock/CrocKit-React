import React from "react"
import { ContainerProps } from "../types"

const Wrapper = ({ className, style, children }: ContainerProps) => (
	<div className={`container mx-auto ${className}`} style={style}>
		{children}
	</div>
)

Wrapper.defaultProps = {
	className: "",
	style: {},
} as Partial<ContainerProps>

export default Wrapper
