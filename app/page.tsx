'use client'
import { I18nProvider } from "@react-aria/i18n";
import { DatePicker } from '@nextui-org/date-picker';

export default function Home() {
  return (
    <I18nProvider locale="ar-SA">
      <DatePicker lang='ar' showMonthAndYearPickers={true} aria-label="Date (International Calendar)" />
    </I18nProvider>
  );
}
