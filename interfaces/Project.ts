export interface Project  { 
    projectId: number 
    title: string 
}
export type CreateProject = Omit<Project,'projectId'>;