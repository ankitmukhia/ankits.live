'use client';

import { Project } from '@/lib/constants'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export const ProjectPreview = (project: Project) => {
	return (
		<div className="flex flex-col items-start font-satoshi">
		  <div className="group relative -mx-3 w-full space-y-2 rounded-lg px-3 py-2 transform transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-hoverColor/20">
		    <div className="flex items-center justify-between">
		       <div>
		         <h3 className="text-sm group-hover:text-blue-300">
		           {project.title}
		         </h3>
		       </div>

		       <ArrowUpRightIcon className="h-3 w-3 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
		    </div>

		    <p className="text-sm font-thin">{project.description}</p>
		   </div>
		</div>
	)
}
