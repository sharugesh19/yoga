import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-bg">
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24 animate-pulse">
          <Image
            src="/logo.png"
            alt="Mokshaa Yoga"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-brand-primary/20">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-brand-primary"></div>
        </div>

        <p className="mt-4 text-sm tracking-widest text-brand-primary">
          LOADING...
        </p>
      </div>
    </div>
  );
}