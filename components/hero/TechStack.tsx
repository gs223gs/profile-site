"use client";

import Link from "next/link";
import Image from "next/image";

const techStacks = "https://skillicons.dev/icons?i=react,nextjs,java";

export const TechStack = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Link
        href="/stack"
        className="block hover:shadow-md transition-all cursor-pointer"
      >
        <div className="text-center">
          <Image
            src={techStacks}
            alt="React, Next.js, Java技術スタック"
            width={200}
            height={50}
            className="mx-auto"
          />
        </div>
      </Link>
    </div>
  );
};
