import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({
    params,
}: BarbershopDetailsPageProps) => {
    const session = await getServerSession(authOptions);

    if (!params.id) {
        // TODO: redirecionar para home page
        return null;
        ("");
    }

    const barbershop = await db.barberShop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        },
    });

    if (!barbershop) {
        // TODO: redirecionar para home page
        return null;
    }

    return (
        <div>
            <BarbershopInfo barbershop={barbershop} />

            <div className="px-5 flex flex-col gap-4 py-6">
                {barbershop.services.map((service: any) => (
                    <ServiceItem
                        key={service.id}
                        barbershop={barbershop}
                        service={service}
                        isAuthenticated={!!session?.user}
                    />
                ))}
            </div>
        </div>
    );
};

export default BarbershopDetailsPage;
