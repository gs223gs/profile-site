"use client";

import Image from "next/image";

const techStacks = "https://skillicons.dev/icons?i=react,nextjs,java";

export const TechStack = () => {
  return (
    <div className="h-full flex flex-col">
      <Image
        src={techStacks}
        alt="React, Next.js, Java技術スタック"
        width={200}
        height={50}
        className="mx-auto"
      />
    </div>
  );
};
