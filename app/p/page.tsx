'use client'

import { useState } from 'react'
import { Post, allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

const PostCard = (post: Post) => {
	const [isLoading, setIsLoading] = useState(true)	

	return (
		<div className="mb-8">
			<div className="flex justify-between">
				<div>
					<h2 className="mb-1 text-xl">
						<Link
							href={`/p/post/${post.url}`}
							className="text-2xl"
						>
						  {post.title}
						</Link>
					</h2>
					<h3 className="text-sm mt-2 text-rose-100/60">
						{post.description.length > 100 ? post.description.substring(0, 100) + "..." : post.description}
					</h3>
					<div className="text-xs font-light mb-1 mt-2 text-rose-100/40">
						{new Date(post.publishedAt).toDateString()}
					</div>
				</div>
				<div className="relative">
					<div className="w-32 sm:w-40 h-auto">
						<Image
							alt={post.title}
							src={post.coverImage}
							fill
							className={clsx("object-contain  rounded-sm", isLoading ? "scale-50 blur-xl" : "scale-100 blur-0")}
							onLoadingComplete={() => setIsLoading(false)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Page() {
	const formatedPost = allPosts.filter((p) => p.status === "published").sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

	return (
		<div className="mx-auto max-w-xl py-8">
			{formatedPost.map((post, _idx) => (
				<PostCard key={_idx} {...post} />
			))}
		</div>
	)
}
