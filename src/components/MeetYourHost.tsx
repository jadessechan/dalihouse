import Image from "next/image";

export default function MeetYourHost() {
  return (
    <section
      id="meet-your-host"
      className="bg-cream px-8 pt-24 pb-14"
    >
      <p className="eyebrow text-center text-green">Your host</p>

      <div className="mx-auto mt-14 grid max-w-[980px] items-start gap-9 md:grid-cols-[300px_1fr] md:gap-16">
        <div className="pl-0 md:pl-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px]">
            <Image
              src="/dali-house-host.jpeg"
              alt="Jadesse, host of Dali House"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover object-[center_20%]"
            />
          </div>
          <Image
            src="/dali-house-cats.png"
            alt="Pookie and Spooky"
            width={200}
            height={200}
            className="mx-auto mt-5 block h-[110px] w-[110px] object-contain"
          />
          <p className="mt-2 text-center text-xs italic text-ink/55">
            Permanent residents: Pookie &amp; Spooky 🐱
          </p>
        </div>

        <div>
          <p className="mb-[22px] font-serif text-2xl font-medium text-pink">
            Hi, I&rsquo;m Jadesse
          </p>
          <div className="text-[16px] leading-[1.78] text-ink/75">
            <p className="mb-[18px]">
              Even though I grew up in Dallas, it took me years after moving
              back to truly feel a sense of belonging. I know firsthand that
              finding your people and your rhythm takes time, and it&rsquo;s
              hard to do that when you&rsquo;re also dealing with the stress of
              getting settled.
            </p>
            <p>
              That&rsquo;s why I created Dali House. Dali House is designed to
              give you a soft landing, so you can skip the friction of moving
              and focus your energy on what actually matters: building
              community, exploring the city, and creating your dream life.
            </p>
          </div>
          <blockquote className="mt-7 border-l-2 border-pink pl-5 font-serif text-[21px] leading-[1.6] italic text-green-deep">
            &ldquo;Home is about the people you find and the life you
            build.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
