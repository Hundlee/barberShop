"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

export const cancelBooking = async (bookingId: string) => {
    await db.booking.delete({
        where: {
            id: bookingId,
        },
    });

    revalidatePath("/bookings");
};
