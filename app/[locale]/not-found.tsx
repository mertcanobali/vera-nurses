import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-slate-50 p-6 rounded-full mb-6">
        <FileQuestion className="h-16 w-16 text-slate-400" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-3">
        {t("title")}
      </h2>
      <p className="text-slate-600 max-w-md mb-8">{t("desc")}</p>
      <Link
        href="/"
        className="bg-[#8E1B20] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#701519] transition-colors"
      >
        {t("homeButton")}
      </Link>
    </div>
  );
}
