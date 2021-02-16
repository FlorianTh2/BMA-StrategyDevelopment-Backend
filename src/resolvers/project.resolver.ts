import { Project } from "../entities/project";

export function projectQuery() {
    return {
        project(parent, args, context, info) {
            // context.user.id;
            return { id: args.project.projectId, name: "testName", description: "testDescription" } as Project;
        },
        projects(parent, args, context, info) {
            // context.user.id;
            return [{ id: 1, name: "testName", description: "testDescription" }] as [Project];
        },
    };
}

export function projectMutation() {}
