// eslint-disable-next-line no-unused-vars
import React from 'react'
import AnalysisContainer from './AnalysisContainer'
import { Layers, Handshake, HandCoins, BanknoteX } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels)

const Analytics = ({ jobs = [] }) => {
  const totalApplications = jobs.length;
  const interviewed = jobs.filter(job => job.status === "Interviewed").length;
  const offered = jobs.filter(job => job.status === "Offered").length;
  const rejected = jobs.filter(job => job.status === "Rejected").length;

  // Math calculated correctly before string conversions
  const interviewRate = totalApplications > 0 
    ? `${((interviewed / totalApplications) * 100).toFixed(1)}%` 
    : "0%";
    
  const offerRate = totalApplications > 0 
    ? `${((offered / totalApplications) * 100).toFixed(1)}%` 
    : "0%";
    
  const rejectionRate = totalApplications > 0 
    ? `${((rejected / totalApplications) * 100).toFixed(1)}%` 
    : "0%";

  const data = {
    labels: ["Interviewed", "Offered", "Rejected"],
    datasets: [{
      label: "Application Status",
      data: [interviewed, offered, rejected],
      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',   // Clean Blue
        'rgba(34, 197, 94, 0.7)',    // Smooth Green for Offers
        'rgba(239, 68, 68, 0.7)',    // Vibrant Red for Rejections
      ],
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          font: { size: 12, weight: '500' },
          padding: 15
        }
      },
      title: {
        display: true,
        text: "Proportional Status Breakdown",
        font: { size: 14, weight: '600' },
        padding: { bottom: 10 }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className='w-full min-h-screen bg-slate-50 pb-12'>
      {/* Top Header */}
      <div className='w-full border-b border-gray-200 bg-white py-5 px-4 sm:px-6 lg:px-8 shadow-sm'>
        <h2 className='text-xl font-bold tracking-tight text-slate-900 sm:text-2xl'>
          Hunt Analytics
        </h2>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-8'>
        {/* Title */}
        <div>
          <h3 className='text-lg font-semibold text-slate-800 sm:text-xl'>
            Your Job Hunt Performance
          </h3>
          <p className='text-xs text-slate-500 sm:text-sm mt-0.5'>
            Real-time conversion metrics calculated from submitted records.
          </p>
        </div>

        {/* Analytics Grid: Mobile-First layout stacking up to columns */}
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <AnalysisContainer Icon={Layers} heading="Total Applied" calculation={totalApplications} subheading="Total entries tracked" />
          <AnalysisContainer Icon={Handshake} heading="Interview Rate" calculation={interviewRate} subheading="Conversion to interview" />
          <AnalysisContainer Icon={HandCoins} heading="Offer Rate" calculation={offerRate} subheading="Conversion to employment" />
          <AnalysisContainer Icon={BanknoteX} heading="Rejection Rate" calculation={rejectionRate} subheading="Closed out profiles" />
        </div>

        {/* Chart Card Wrapper: Centered on mobile, aligned neatly on large displays */}
        <div className='flex justify-center lg:justify-start mt-4'>
          <div className='w-full max-w-[450px] aspect-square rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6'>
            <div className='w-full h-full relative'>
              {totalApplications > 0 ? (
                <Pie data={data} options={options} />
              ) : (
                <div className='flex h-full w-full items-center justify-center text-sm font-medium italic text-slate-400'>
                  No status data available to chart
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics;