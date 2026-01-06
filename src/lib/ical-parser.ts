import { isWithinInterval, startOfDay, endOfDay } from 'date-fns';

export interface BookedDate {
    start: Date;
    end: Date;
}

export async function getBookedDates(url: string): Promise<BookedDate[]> {
    try {
        const response = await fetch(`/api/bookings?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        return data.map((d: any) => ({
            start: new Date(d.start),
            end: new Date(d.end),
        }));
    } catch (error) {
        console.error('Error fetching booked dates from API:', error);
        return [];
    }
}

function getMockBookedDates(): BookedDate[] {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const endOfNextWeek = new Date(nextWeek);
    endOfNextWeek.setDate(nextWeek.getDate() + 4);

    return [
        {
            start: nextWeek,
            end: endOfNextWeek,
        },
    ];
}

export function isDateBooked(date: Date, bookedDates: BookedDate[]): boolean {
    const checkDate = startOfDay(date);
    return bookedDates.some((booking) => {
        return isWithinInterval(checkDate, {
            start: startOfDay(booking.start),
            end: endOfDay(booking.end),
        });
    });
}
