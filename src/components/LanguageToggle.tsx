"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(locale === 'ja' ? 'en' : 'ja')}
      className="text-sm font-medium"
    >
      {locale === 'ja' ? 'English' : '日本語'}
    </Button>
  )
} 