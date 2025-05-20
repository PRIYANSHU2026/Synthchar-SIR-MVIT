"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CommentSectionProps {
  onCommentsChange: (comments: string) => void;
  onGeneratePDF: () => void;
}

export const CommentSection: React.FC<CommentSectionProps> = ({
  onCommentsChange,
  onGeneratePDF
}) => {
  const [comments, setComments] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newComments = e.target.value;
    setComments(newComments);
    onCommentsChange(newComments);
  };

  return (
    <div className="flex items-center gap-3 mt-4 bg-white/95 p-3 rounded-lg shadow-sm">
      <div className="flex-grow">
        <input
          type="text"
          id="comments"
          className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add a brief comment (e.g., L1, L2)"
          value={comments}
          onChange={handleChange}
          maxLength={50}
        />
      </div>
      <Button
        onClick={onGeneratePDF}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        PDF Report
      </Button>
    </div>
  );
};
