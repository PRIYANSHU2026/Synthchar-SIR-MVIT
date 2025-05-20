"use client";

import { type FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useBatch } from '@/contexts/BatchContext';
import CompositionPieChart from './CompositionPieChart';
import CompositionSymbolicView from './CompositionSymbolicView';
import { generatePdf } from '@/lib/pdfGenerator';
import { CommentSection } from '@/components/ui/CommentSection';

const VisualizationSection: FC = () => {
  const [activeView, setActiveView] = useState<'pie' | 'symbolic'>('symbolic');
  const [comments, setComments] = useState<string>('');
  const {
    elementComposition,
    compResults,
    weightPercents,
    totalWeight,
    desiredBatch,
    gfResults,
    gfWeightPercents,
    gfTotalWeight,
    productResults,
    productWeightPercents,
    productTotalWeight
  } = useBatch();

  const handleCommentsChange = (newComments: string) => {
    setComments(newComments);
  };

  const handleGeneratePDF = () => {
    generatePdf({
      title: 'SynthChar Batch Report',
      compResults,
      weightPercents,
      totalWeight,
      desiredBatch,
      gfResults,
      gfWeightPercents,
      gfTotalWeight,
      productResults,
      productWeightPercents,
      productTotalWeight,
      elementComposition,
      comments
    });
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
          <div>
            <CardTitle>Batch Composition Visualization</CardTitle>
            <CardDescription>
              Analyze the elemental composition of your batch
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <div className="bg-white/80 border border-blue-200 rounded-lg p-1 flex shadow-sm">
              <button
                onClick={() => setActiveView('symbolic')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  activeView === 'symbolic'
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                Symbolic
              </button>
              <button
                onClick={() => setActiveView('pie')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  activeView === 'pie'
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                Pie Chart
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeView === 'pie' ? (
            <CompositionPieChart
              data={elementComposition}
              title="Element Composition Distribution"
            />
          ) : (
            <CompositionSymbolicView
              data={elementComposition}
              title="Symbolic Element Representation"
            />
          )}
        </CardContent>
      </Card>

      <CommentSection
        onCommentsChange={handleCommentsChange}
        onGeneratePDF={handleGeneratePDF}
      />
    </>
  );
};

export default VisualizationSection;
