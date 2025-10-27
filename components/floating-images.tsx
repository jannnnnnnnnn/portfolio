import Image from "next/image"

interface FloatingImagesProps {
  images: Array<{
    src: string
    alt: string
    className?: string
  }>
}

export function FloatingImages({ images }: FloatingImagesProps) {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px] my-8 flex items-center justify-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute ${
            index === 0
              ? "top-[40px] lg:top-[50px] left-[50%] -translate-x-[220px] lg:-translate-x-[280px] w-[200px] lg:w-[280px] animate-float z-10"
              : index === 1
                ? "top-[40px] lg:top-[50px] left-[50%] translate-x-[20px] lg:translate-x-[40px] w-[200px] lg:w-[280px] animate-float-delayed z-10"
                : "top-[140px] lg:top-[180px] left-[50%] -translate-x-1/2 w-[220px] lg:w-[320px] animate-float-slow z-30"
          } ${image.className || ""}`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
