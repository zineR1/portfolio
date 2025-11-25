import { User, Job, SideProject, ConsoleData, Project } from "../types";

interface OnboardingData {
	name: string;
	linkedinLink: string;
	githubLink: string;
	role: string;
	description: string;
    position: string;
	job: Job;
	sideProject: SideProject;
	experience: string;
	consoleData: ConsoleData;
	projects: Project[];
	resume: string | null;
	emailContact: string;
}

export const userAdapter = (data: Partial<OnboardingData>): User => {
	return {
		name: data.name || "",
		linkedinLink: data.linkedinLink || "",
		githubLink: data.githubLink || "",
		role: data.role || "",
		description: data.description || "",
        position: data.position || '',
		job: data.job || { title: "", subtitle: "", image: "" },
		sideProject: data.sideProject || { title: "", subtitle: "", image: "" },
		experience: data.experience || "",
		consoleData: data.consoleData || { aboutMe: "", techStack: [], hobbies: [], softSkills: [] },
		projects: data.projects || [],
		resume: data.resume || "",
		emailContact: data.emailContact || "",
	};
};
