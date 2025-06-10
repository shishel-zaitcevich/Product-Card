export const CURRENCY_LOCALE_MAP: Record<string, string> = {
  RUB: 'ru-RU',
  USD: 'en-US',
  EUR: 'de-DE',
};

export const formatPrice = (
  priceInCopecks: number,
  currency: string
): string => {
  const priceInMajorUnits = priceInCopecks / 100;

  return new Intl.NumberFormat(CURRENCY_LOCALE_MAP[currency], {
    style: 'currency',
    currency: currency,
  }).format(priceInMajorUnits);
};