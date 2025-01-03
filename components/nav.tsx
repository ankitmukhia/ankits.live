import Link from 'next/link'
import { SiGithub, SiX, SiGmail } from '@icons-pack/react-simple-icons';

const NavItems = ({ href, children, icon }: {
	href: string
	icon?: React.ReactNode
	children?: React.ReactNode
}) => {
	return <Link target="__blank" href={href}>
		<div className="sm:flex sm:items-center sm:space-x-2">
			<div>
				{icon}
			</div>
			<div className="">
				{children}
			</div>
		</div>
	</Link>
}

export const Nav = () => {
	const email = "ankitmukhia@gmail.com";
	const subject = "Hello Ankit";

	return <div className="flex items-center space-x-3 text-base font-medium leading-none text-rose-100/90 lg:space-x-6">
		<NavItems
			href="https://github.com/ankitmukhia"
			icon={<SiGithub size={20} className="hover:text-teal-700/60" />}
		/>

		<NavItems
			href="https://x.com/ankitmukhiax"
			icon={<SiX size={18} className="hover:text-teal-700/60" />}
		/>

		<NavItems
			href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
			icon={<SiGmail size={20} className="hover:text-teal-700/60" />}
		/>
	</div>
}
