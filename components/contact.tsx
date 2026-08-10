import { IconArrowRight, IconPhone } from "@tabler/icons-react";
import Reveal from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div className="contact-card relative overflow-hidden rounded-[36px] px-8 py-16 text-center md:px-16 md:py-20">
            <div className="relative z-10 mx-auto mb-6 flex h-[72px] w-[72px] animate-float items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur">
              <IconPhone className="h-8 w-8 text-white" />
            </div>
            <h2 className="relative z-10 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Let's Work Together
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-[44ch] text-lg text-white/80">
              I'm available for freelance work. Let's discuss your project!
            </p>
            <a
              href="https://wa.me/256778698188"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "white", size: "lg" }),
                "relative z-10 mt-9"
              )}
            >
              HIRE ME <IconArrowRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
