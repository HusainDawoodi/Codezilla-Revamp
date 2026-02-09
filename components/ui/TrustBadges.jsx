import Image from "next/image";

export default function TrustBadges({ variant = "dark", className = "" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex flex-wrap items-center gap-6 md:gap-8 border-t ${
        isDark ? "border-white/10" : "border-black/10"
      } pt-8 ${className}`}
    >
      {/* Google Reviews */}
      <div className="flex items-center gap-3">
        <div className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-sm">
          <Image
            src="/images/google-icon.png"
            alt="Google Reviews"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex text-primary text-sm">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="material-symbols-outlined text-[16px] filled"
              >
                star
              </span>
            ))}
            <span className="material-symbols-outlined text-[16px] filled">
              star_half
            </span>
          </div>
          <span
            className={`text-[10px] uppercase tracking-wider ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            4.9/5 Rating
          </span>
        </div>
      </div>

      {/* Vertical Divider */}
      <div
        className={`hidden sm:block w-px h-8 ${
          isDark ? "bg-white/10" : "bg-black/10"
        }`}
      ></div>

      {/* Clutch Reviews */}
      <div className="flex items-center gap-3">
        <div className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-sm">
          <Image
            src="/images/clutch-icon.png"
            alt="Clutch"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex text-primary text-sm">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="material-symbols-outlined text-[16px] filled"
              >
                star
              </span>
            ))}
          </div>
          <span
            className={`text-[10px] uppercase tracking-wider ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            5.0/5 Clutch
          </span>
        </div>
      </div>
    </div>
  );
}
