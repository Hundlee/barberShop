import BarbershopItem from "../(home)/_components/barbershop-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";

interface BarbershopsPageProps {
    searchParams: {
        search?: string;
    };
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
    const barbershops = await db.barberShop.findMany({
        where: {
            name: {
                contains: searchParams.search,
                mode: "insensitive",
            },
        },
    });

    return (
        <>
            <Header />

            <div className="px-5 py-6">
                <h1 className="font-bold text-gray-400 text-xs uppercase">
                    Resultados para &quot;{searchParams.search}&quot;
                </h1>

                <div className="grid grid-cols-2 mt-3 gap-4">
                    {barbershops.map((barbershop: any) => (
                        <div key={barbershop.id} className="w-full">
                            <BarbershopItem barbershop={barbershop} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BarbershopsPage;
