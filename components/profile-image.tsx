import Image from 'next/image'
import Link from 'next/link'

const Ankit = () => (
	<Image
		src="/profile-image.png"
		quality={95}
		width={50}
		height={50}
		priority={true}
		className="rounded-full"
		alt="ankit"
	/>
)

export const ProfileImageLarge = () => {
	return (
		<Link 
			href={"/profile"}
			className="rounded-full bg-gradient-to-tl from-teal-700/60 to-gray-400/60 p-1 shadow-lg ring-[5px] ring-purple-500/10"
		>
			<Ankit />
		</Link>
	)
}
