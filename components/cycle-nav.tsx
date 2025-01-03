"use client"

import clsx from "clsx"
import React from "react"
import { useIntersection } from "react-use"

export const CycleNav = ({
	children,
	nav,
}: {
	children: React.ReactNode
	nav: React.ReactNode
}) => {
	const intersectionRef = React.useRef(null)
	const intersection = useIntersection(intersectionRef, {
		root: null,
		rootMargin: "-100px",
	})

	let showPrimary = false
	if (intersection && !intersection.isIntersecting) {
		showPrimary = true
	}

	return (
		<>
			<div
				className={clsx(
					"sticky top-2 z-30 -mx-px transition duration-75 will-change-transform",
					{
						"-translate-y-2 scale-95 opacity-0": !showPrimary,
						"opacity-100": showPrimary,
					},
				)}
			>
				{nav}
			</div>
			<div ref={intersectionRef}>
				<div
					className={clsx("transition duration-150 will-change-transform", {
						"-translate-y-2 scale-[0.98] opacity-0": showPrimary,
						"opacity-100 delay-100": !showPrimary,
					})}
				>
					{children}
				</div>
			</div>
		</>
	)
}
