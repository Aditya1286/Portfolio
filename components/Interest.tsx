"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/Apple";

interface ContentItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface DummyContentProps {
  content: ContentItem[];
}

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Know me beyond the code — I’m more than just commits
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent: React.FC<DummyContentProps> = ({ content }) => {
  return (
    <>
      {content.map((item: ContentItem, index: number) => {
        return (
          <div
            key={"content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {item.title}
              </span>{" "}
              {item.description}
            </p>
            <img
              src={item.image}
              alt={item.alt}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Caffiene",
title: "Fueled by coffee, powered by code.",
src: "/adi1.jpg",
content: <DummyContent content={[
  {
    title: "Caffeine-Driven Coding.",
    description: "Late nights, strong brews, and even stronger focus — coffee isn’t just a drink, it’s my debugging companion. Whether I’m building interfaces or battling bugs, that first sip of caffeine kicks my code into gear. It’s not just fuel — it’s a whole vibe.",
    image: "/adi11.jpg",
    alt: "Coffee mug on a developer's desk"
  }
]} />,
  },
  {
    category: "Music",
title: "From loops to loops — music and code.",
src: "/adi2.jpg",
content: <DummyContent content={[
  {
    title: "Code with a Soundtrack.",
    description: "Music keeps me in the zone, and my playlists hit harder than production bugs. Whether I’m deep in logic or designing UIs, Seedhe Maut and Nanku are always in my ears. Their raw energy, lyricism, and vibe sync perfectly with my code flow — from late-night commits to early-morning coffee-fueled sprints.",
    image: "/adi12.jpg",
    alt: "Headphones resting on a laptop keyboard"
  }
]} />,
  },
  {
    category: "Visual Diary",
title: "Freezing moments, creating memories",
src: "/adi3.jpg",
content: <DummyContent content={[
  {
    title: "Unposed. Unplanned. Unreal.",
    description: "I love clicking random shots of people — unaware, in their own world. There’s something peaceful about capturing moments that aren’t staged. Just pure, raw energy. Whether it’s a stranger laughing on the street or a friend lost in thought, these frames feel real… and they ground me.",
    image: "/adi14.jpg",
    alt: "Candid photo of someone walking on the street"
  }
]} />,
  },
  {
    category: "Chaptered Thoughts",
title: "Escaping reality one chapter at a time — no WiFi needed",
src: "/adi5.jpg",
content: <DummyContent content={[
  {
    title: "Books I Didn’t Expect to Love.",
    description: "I don’t read a lot, but when I do — it hits deep. Some books just have that quiet magic. They pull you in without trying too hard, and suddenly you’re 200 pages in, rethinking life. It’s rare, but those reads stay with me way longer than they should.",
    image: "/adi13.jpg",
    alt: "Open book on a cozy table"
  }
]} />,
  },
  {
    category: "Quiet Chaos",
title: "Sometimes I just vibe in silence — it’s not lonely, it’s healing",
src: "/adi6.jpg",
content: <DummyContent content={[
  {
    title: "Alone, Not Lonely.",
    description: "I’m not the 'introvert in a hoodie' stereotype — I just enjoy doing my thing solo. Quiet walks, solo cafe sessions, building stuff late at night — that’s my kind of peace. I don’t hate people, I just don't vibe with chaos. Crowds drain me; quiet recharges me.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    alt: "Person alone in calm environment"
  }
]} />,
  },
  {
    category: "Collaboration",
title: "Every project starts with listening — and grows through teamwork",
src: "/adi4.jpg",
content: <DummyContent content={[
  {
    title: "Built Together, Not Alone.",
    description: "I love building with people — brainstorming ideas, solving bugs together, and learning along the way. Whether it's jamming on open source, pairing up on side projects, or just sharing feedback in a pull request, I believe good code gets better when it’s a team effort. Communication and clarity always come first.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2000&auto=format&fit=crop",
    alt: "Open source collaboration"
  }
]} />,
  },
];

export default AppleCardsCarouselDemo;