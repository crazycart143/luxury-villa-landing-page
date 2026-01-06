import { NextResponse } from 'next/server';
import ical from 'node-ical';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url || url === 'mock://availability') {
        return NextResponse.json(getMockBookedDates());
    }

    try {
        const events = await ical.fromURL(url);
        const bookedDates = [];

        for (const k in events) {
            if (events.hasOwnProperty(k)) {
                const ev = events[k];
                if (ev.type === 'VEVENT' && ev.start && ev.end) {
                    bookedDates.push({
                        start: ev.start,
                        end: ev.end,
                    });
                }
            }
        }

        return NextResponse.json(bookedDates);
    } catch (error) {
        console.error('Error fetching iCal in API:', error);
        return NextResponse.json(getMockBookedDates());
    }
}

function getMockBookedDates() {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const endOfNextWeek = new Date(nextWeek);
    endOfNextWeek.setDate(nextWeek.getDate() + 4);

    const monthLater = new Date(today);
    monthLater.setDate(today.getDate() + 20);
    const monthLaterEnd = new Date(monthLater);
    monthLaterEnd.setDate(monthLater.getDate() + 3);

    return [
        { start: nextWeek, end: endOfNextWeek },
        { start: monthLater, end: monthLaterEnd },
    ];
}
