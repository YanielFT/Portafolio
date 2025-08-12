"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "lucide-react";
import { useTranslationClient } from "@/locales/lib/useTranslationClient";
import { createClient } from "@/utils/supabase/client";
import { enqueueSnackbar } from "notistack";
import { logger } from "@/utils/logger/default-logger";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { t } = useTranslationClient();
  const supabse = createClient();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabse.from("contact").insert({
        name: data.name,
        email: data.email,
        subject: data.message,
      });

      if (!error) {
        reset();
        enqueueSnackbar({
          message: "Mensaje enviado",
          variant: "success",
        });
      } else {
        enqueueSnackbar({
          message: "Mensaje no enviado",
          variant: "error",
        });
      }
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:mt-0 z-50 flex flex-col items-center justify-center gap-3 [&>*]:flex [&>*]:items-start [&>*]:flex-col [&>*]:w-full"
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="bg-gray-600/40 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none transition"
          placeholder="John"
        />
        {errors.name && (
          <p className="text-red-900 mt-2 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="bg-gray-600/40 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none transition"
          placeholder="john@gmail.com"
        />
        {errors.email && (
          <p className="text-red-900 mt-2 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="bg-gray-600/40 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none transition"
          placeholder="Write your thoughts here..."
        />
        {errors.message && (
          <p className="text-red-900 mt-2 text-sm">{errors.message.message}</p>
        )}

        <div className="w-full flex items-center justify-center mt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer inline-flex max-auto flex-none gap-3 items-center capitalize justify-center bg-gray-900 px-5 py-3 rounded-xl mt-4"
          >
            <span className="text-white font-semibold">
              {t("section.contact.contact_me")}
            </span>
            <ArrowRightIcon className="text-white" />
          </button>
        </div>
      </div>
    </form>
  );
};
