"use server";

import { ApiResponse } from "@/types/api";
import { ContactFormData } from "@/types/emial";
import { handleResendError } from "@/utils/api";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  data: ContactFormData,
): Promise<ApiResponse<{ id: string }>> {
  try {
    const resp = await resend.emails.send({
      from: "onboarding@resend.dev", // ⚠️ Usa un dominio verificado
      to: "ceyfuentes@gmail.com", // corregido typo en gmail
      subject: `${data.name} quiere contactarte desde el portafolio`,
      replyTo: data.email, // ✅ Para que puedas responder directamente
      text: data.message,
    });

    return handleResendError(resp);
  } catch (error: any) {
    return {
      error: true,
      title: "Unexpected Error",
      status: 500,
      detail: error.message || "Error desconocido al enviar el correo",
    };
  }
}
