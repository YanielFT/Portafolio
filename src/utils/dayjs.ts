// lib/dayjs.ts
import dayjs from "dayjs";
import "dayjs/locale/es";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.locale("es");

export const parseISO = (fecha: string | Date | undefined) =>
  dayjs(fecha).format("D [de] MMMM [del] YYYY");

export default dayjs;
