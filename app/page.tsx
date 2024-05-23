'use client';
import { DatePicker } from '@nextui-org/date-picker';
import { NextUIProvider } from '@nextui-org/system';

export default function Home() {
	return (
		<NextUIProvider locale="ar-SA">
			<DatePicker
				showMonthAndYearPickers={true}
				aria-label="Date (International Calendar)"
			/>
		</NextUIProvider>
	);
}
