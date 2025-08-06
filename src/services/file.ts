"use server";
import cloudinary from "@/utils/cloudinary";
import { Readable } from "stream";
import { ApiResponse } from "@/types/api";
import { UploadFilesResponse } from "@/types/file";
import { createClient } from "@/utils/supabase/server";
import { handleSupabaseError } from "@/utils/api";


const supabase = createClient();

export async function uploadImage(
  formData: FormData
): Promise<ApiResponse<UploadFilesResponse | null>> {
  const file = formData.get("file") as File;

  if (!file || file.size === 0) {
    return {
      status: 400,
      data: null,
      error: true,
      detail: "No file provided or file is empty",
    };
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const cloudinaryResult = await new Promise<any>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "portafolio",
        transformation: [{ fetch_format: "webp" }],
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error("Error desconocido"));
        } else {
          resolve(result);
        }
      }
    );

    Readable.from(buffer).pipe(uploadStream);
  });

  const res = await updateImage({
    publicId: cloudinaryResult.public_id,
    url: cloudinaryResult.secure_url,
    format: cloudinaryResult.format,
    size_mb: cloudinaryResult.bytes / (1024 * 1024),
  });

  if (res.error) {
    return {
      status: 400,
      data: null,
      error: true,
      detail: "Upload failed",
    };
  }

  return {
    data: {
      id: res.data?.id,
      publicId: cloudinaryResult.public_id,
      url: cloudinaryResult.url,
      format: cloudinaryResult.format,
      size_mb: cloudinaryResult.size_mb,
    },
    error: false,
    status: 200,
  };
}

export async function updateImage(
  file: Omit<UploadFilesResponse, "id">
): Promise<ApiResponse<any>> {
  const res = await supabase
    .from("imagenes")
    .insert({
      public_id: file.publicId,
      imagen_url: file.url,
      format: file.format,
      size_mb: file.size_mb,
    })
    .select("id")
    .single();

  if (res.error) return handleSupabaseError(res);
  return { data: res.data, error: false, status: 200 };
}

export const deleteImageFromCloudinary = async (publicId: string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Error eliminando imagen:", error);
    return null;
  }
};
