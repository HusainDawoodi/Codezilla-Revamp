import Image from "next/image";

export default function WorkCard({
  category,
  imageSrc,
  logoSrc,
  description,
  number,
  alt = "Case Study",
  className = "w-[100vw] md:w-[50vw] lg:w-[37.2vw]",
}) {
  return (
    <div
      className={`${className} flex-shrink-0 border-r-2 border-black h-full relative group snap-start overflow-hidden`}
    >
      <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-1 tech-position absolute top-4 left-4 z-20">
        {category}
      </span>
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-8 z-20">
        <div className="flex justify-between items-end">
          <div>
            <Image
              src={logoSrc}
              alt={`${category} Logo`}
              width={100}
              height={30}
              className="h-8 w-auto"
            />
            <p className="font-display !text-sm lg:text-base font-medium mt-3 text-gray-500">
              {description}
            </p>
          </div>
          <span className="text-4xl font-display font-bold text-primary">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
}
