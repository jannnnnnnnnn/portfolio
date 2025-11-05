import Image from "next/image";

export function AboutMe() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-12 items-center">
          {/* Left: Section Label */}
          <div className="text-sm uppercase tracking-wider text-muted-foreground">
            <p className="mb-2">Something About Me</p>
            <p>Before We Start Anything</p>
          </div>

          {/* Center: Main Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-balance">
              With a passion for building seamless digital experiences, I craft products that are{" "}
              <span className="text-accent">strategic, user-focused, and impactful</span>. Whether it's healthcare
              innovation or pharmaceutical platforms, I bring data-driven insights and modern product management
              together to solve real-world problems, with precision and purpose.
            </h2>
            {/* </CHANGE> */}
            <div className="flex items-center justify-between text-sm text-muted-foreground pt-8 border-t border-border">
              <p className="font-mono">43° 39' 9.0012'' N 79° 22' 49.9992'' W</p>
              <p className="uppercase tracking-wider">Toronto, Canada</p>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl bg-muted overflow-hidden">
              <Image
                src={`${prefix}/product-manager-portrait.jpg`}
                alt="Janet Han, Product Manager specializing in healthcare technology and pharmaceutical digital platforms"
                fill
                className="object-cover grayscale"
                sizes="100vw"
              />
              {/*working image file}
              {/* <img
                src="https://lh3.googleusercontent.com/d/1HZ7xI02bfGrDbDNxqMgWoDKqwklXwDI4=w1000"
                alt="Janet Han, Product Manager specializing in healthcare technology and pharmaceutical digital platforms"
                className="w-full h-full object-cover grayscale"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
