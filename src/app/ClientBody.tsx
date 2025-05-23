"use client";

import { BatchProvider } from '@/contexts/BatchContext';
import BatchCalculator from '@/components/layout/BatchCalculator';
import Creator from '@/components/forms/Creator';
import AdvancedCalculations from '@/components/layout/AdvancedCalculations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ClientBody() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#c3e6e8]">
        <div
          className="absolute inset-0 z-0 opacity-40 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/SynthChar_ver_1.0.png')" }}
        />
      </div>

      {/* Content */}
      <div className="container py-6 md:py-12 relative z-10">
        <BatchProvider>
          <Tabs defaultValue="calculator">
            <TabsList className="mb-6 bg-white/80 p-1 backdrop-blur-sm border border-blue-200 shadow-sm">
              <TabsTrigger value="calculator" className="font-medium">Batch Calculator</TabsTrigger>
              <TabsTrigger value="advancedCalc" className="font-medium">Advanced Calculations</TabsTrigger>
              <TabsTrigger value="testFormulas" className="font-medium">Creator</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator">
              <BatchCalculator />
            </TabsContent>

            <TabsContent value="advancedCalc">
              <AdvancedCalculations />
            </TabsContent>

            <TabsContent value="testFormulas">
              <div className="mt-4 space-y-6">
                <Creator />
              </div>
            </TabsContent>
          </Tabs>
        </BatchProvider>
      </div>
    </main>
  );
}
