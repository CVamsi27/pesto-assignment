import { Dispatch, SetStateAction } from "react";

export interface TaskType {
    taskId?: string,
    taskTitle: string,
    taskDescription: string,
    taskStatus: "To Do" | "In Progress" | "Done",
}

export interface NewTaskType {
    taskTitle: string,
    taskDescription: string,
    taskStatus: "To Do" | "In Progress" | "Done",
}

export type Status = "loading" | "error" | "success" | "";

export type InputTitleProps = React.HTMLAttributes<HTMLSpanElement> & {
    title: string;
};

export type BasicTextProps = React.HTMLAttributes<HTMLSpanElement> & {
    text: string;
    variant?: "basic" | "error";
};

export type BasicButtonProps = React.HTMLAttributes<HTMLSpanElement> & {
    text: string;
    variant?: "basic" | "error" | "primary";
};

export interface GetTaskType {
    tasks?: TaskType[];
    status?: Status;
    error?: Error | null;
    getFiltertasks?: (statusFilter: TaskFilterTypes) => void;
    getTasks?: () => Promise<void>;
    taskStatus?: TaskFilterTypes;
    setTaskStatus?: Dispatch<SetStateAction<TaskFilterTypes>>
}

export interface PostTaskType {
    postResponse?: string;
    postError?: Error | null;
    postStatus?: Status;
    postTask: (task: TaskType) => Promise<void>;
}

export interface PatchTaskType {
    patchResponse?: string;
    patchError?: Error | null;
    patchStatus?: Status;
    patchTask: (task: NewTaskType, taskId: string) => Promise<void>;
}

export interface FilterVariants {
    All: "primary" | "basic" | "error",
    To_Do: "primary" | "basic" | "error",
    In_Progress: "primary" | "basic" | "error",
    Done: "primary" | "basic" | "error",
}

export type TaskFilterTypes = "All" | "To Do" | "In Progress" | "Done"