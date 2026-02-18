'use client';

import { ReactNode, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {
    trigger: ReactNode;
    defaultOpen?: boolean;
    align?: 'start' | 'center' | 'end';
};

const labels: Record<string, string> = {
    en: 'English',
    de: 'Deutsch',
    ar: 'العربية',
};

export default function LanguageDropdown({
    defaultOpen,
    align,
    trigger,
}: Props) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function changeLocale(nextLocale: string) {
        startTransition(() => {
            router.replace(
                pathname,
                { locale: nextLocale },
            );
        });
    }

    return (
        <DropdownMenu defaultOpen={defaultOpen}>
            <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

            <DropdownMenuContent className="w-44" align={align || 'end'}>
                <DropdownMenuRadioGroup
                    value={locale}
                    onValueChange={changeLocale}
                >
                    {routing.locales.map((cur) => (
                        <DropdownMenuRadioItem
                            key={cur}
                            value={cur}
                            disabled={isPending}
                            className="pl-2 text-base"
                        >
                            {labels[cur] || cur.toUpperCase()}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
