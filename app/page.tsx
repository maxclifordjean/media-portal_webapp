import { Card } from "@/components/ui/card";
import { Plus, Grid, Users, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Nouveau Projet */}
        <Card className="p-8 bg-yellow-100 hover:bg-yellow-200 transition-colors cursor-pointer h-[300px] flex flex-col items-center justify-center">
          <Plus className="h-16 w-16 mb-4" />
          <h2 className="text-2xl font-bold text-center">NOUVEAU PROJET</h2>
        </Card>

        {/* Mes Projets */}
        <Card className="p-8 bg-yellow-100 hover:bg-yellow-200 transition-colors cursor-pointer h-[300px] flex flex-col items-center justify-center">
          <div className="text-center w-full">
            <span className="text-xl font-bold">MES PROJETS (5)</span>
          </div>
        </Card>

        {/* Messages */}
        <Card className="p-8 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer h-[300px] flex flex-col items-center justify-center">
          <Mail className="h-16 w-16 mb-4" />
          <h2 className="text-2xl font-bold text-center">MES MESSAGES</h2>
        </Card>

        {/* Apps & Services */}
        <Card className="p-8 bg-yellow-100 hover:bg-yellow-200 transition-colors cursor-pointer h-[300px] flex flex-col items-center justify-center">
          <Grid className="h-16 w-16 mb-4" />
          <h2 className="text-2xl font-bold text-center">APPS SUITES & OFFRES</h2>
        </Card>

        {/* Networks&You */}
        <Card className="p-8 bg-yellow-100 hover:bg-yellow-200 transition-colors cursor-pointer h-[300px] flex flex-col items-center justify-center">
          <Users className="h-16 w-16 mb-4" />
          <h2 className="text-2xl font-bold text-center">NETWORKS&YOU</h2>
        </Card>
      </div>
    </div>
  );
}