export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export type UploadFilesResponse = {
  id: string;
  publicId: string;
  url: string;
  format: string;
  size_mb: number;
};
