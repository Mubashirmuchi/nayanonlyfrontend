import { Button } from '@/components/ui/button';
import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

type PrimaryButtonProps = {
  text: string;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
};

const PrimaryButton = ({ text, href, className, icon }: PrimaryButtonProps) => {
  const content = (
    <Button
      className={cn(
        `
        group
        relative
        h-14
        rounded-full
        px-6
        pr-16
        text-base
        font-medium
        bg-[#b88944]
        text-white
        hover:bg-[#a97b3d]
        `,
        className
      )}
    >
      {text}

      {/* Circle icon */}
      <span
        className="
          absolute
          right-1.5
          top-1/2
          -translate-y-1/2
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          transition-transform
          group-hover:scale-105
        "
      >
        {icon || <IconArrowUpRight stroke={2} color="black" size={20} />}
      </span>
    </Button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default PrimaryButton;
