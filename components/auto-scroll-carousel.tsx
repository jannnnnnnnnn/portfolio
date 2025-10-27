"use client"

// import type React from "react"

// import { useEffect, useRef, useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface AutoScrollCarouselProps {
//   children: React.ReactNode
//   speed?: number
// }

// export function AutoScrollCarousel({ children, speed = 30 }: AutoScrollCarouselProps) {
//   const scrollRef = useRef<HTMLDivElement>(null)
//   const [isPaused, setIsPaused] = useState(false)
//   const [canScrollLeft, setCanScrollLeft] = useState(false)
//   const [canScrollRight, setCanScrollRight] = useState(true)

//   useEffect(() => {
//     const scrollContainer = scrollRef.current
//     if (!scrollContainer || isPaused) return

//     const scroll = () => {
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//         scrollContainer.scrollLeft = 0
//       } else {
//         scrollContainer.scrollLeft += 1
//       }
//       updateScrollButtons()
//     }

//     const interval = setInterval(scroll, speed)
//     return () => clearInterval(interval)
//   }, [isPaused, speed])

//   const updateScrollButtons = () => {
//     if (!scrollRef.current) return
//     setCanScrollLeft(scrollRef.current.scrollLeft > 0)
//     setCanScrollRight(scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10)
//   }

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -400, behavior: "smooth" })
//       setTimeout(updateScrollButtons, 300)
//     }
//   }

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 400, behavior: "smooth" })
//       setTimeout(updateScrollButtons, 300)
//     }
//   }

//   return (
//     <div className="relative group">
//       {/* Left Arrow */}
//       {canScrollLeft && (
//         <Button
//           variant="outline"
//           size="icon"
//           className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg bg-transparent"
//           onClick={scrollLeft}
//         >
//           <ChevronLeft className="w-4 h-4" />
//         </Button>
//       )}

//       {/* Scrollable Container */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onScroll={updateScrollButtons}
//       >
//         {children}
//       </div>

//       {/* Right Arrow */}
//       {canScrollRight && (
//         <Button
//           variant="outline"
//           size="icon"
//           className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg bg-transparent"
//           onClick={scrollRight}
//         >
//           <ChevronRight className="w-4 h-4" />
//         </Button>
//       )}
//     </div>
//   )
// }


import { Children, isValidElement } from "react";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import type { Options } from "@splidejs/splide";

type AutoScrollOpts = {
  speed?: number;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
};

type Props = {
  children: React.ReactNode;
  className?: string;
  perPage?: number;
  gap?: string;
  arrows?: boolean;
  pagination?: boolean;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  speed?: number; // AutoScroll speed
  options?: Partial<Options>; // allow callers to override anything
} & Omit<SplideProps, "options">;

export function AutoScrollCarousel({
  children,
  className,
  perPage = 4,
  gap = "1rem",
  arrows = true,
  pagination = false,
  pauseOnHover = true,
  pauseOnFocus = true,
  speed = 0.5,
  options,
  ...rest
}: Props) {
  // Merge core options with caller overrides
  const mergedOptions: Partial<Options> & { autoScroll?: AutoScrollOpts } = {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage,
    perMove: 1,
    gap,
    arrows,
    pagination,
    keyboard: "global",
    lazyLoad: "nearby",
    autoplay: false, // AutoScroll handles motion
    breakpoints: {
      1280: { perPage: Math.min(3, perPage) },
      1024: { perPage: Math.min(2, perPage) },
      640: { perPage: 1 },
    },
    autoScroll: {
      speed,
      pauseOnHover,
      pauseOnFocus,
    },
    ...(options || {}),
  };

  return (
    <Splide
      className={className}
      options={mergedOptions}
      extensions={{ AutoScroll }}
      aria-label="Auto scroll carousel"
      {...rest}
    >
      {Children.map(children, (child, idx) =>
        isValidElement(child) ? <SplideSlide key={idx}>{child}</SplideSlide> : null
      )}
    </Splide>
  );
}




