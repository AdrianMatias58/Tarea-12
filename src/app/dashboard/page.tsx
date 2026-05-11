import { TablaAprendices } from "./components/tabla-aprendices";
import { Cards } from "./components/cards"; 

export default function DashboardPage() {
    return (
        <div className="dark bg-background min-h-screen p-8 space-y-8">
            <section>
                <Cards />
            </section>

            <section className="animate-fade-in duration-500">
                <TablaAprendices />
            </section>
        </div>
    )
}