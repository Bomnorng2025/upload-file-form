export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ImageFile = {
  id: string;
  file: File;
  preview: string;
  progress: number;
  status: "uploading" | "completed" | "error";
  error?: string;
};
