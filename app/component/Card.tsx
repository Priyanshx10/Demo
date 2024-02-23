import React from 'react';

interface Stat {
  value: string;
  label: string;
  description?: string; // Optional description
}

const Stat = ({ value, label, description }: Stat) => (
  <div className="stat-container flex flex-col items-center space-y-1 border border-white rounded-lg p-2">
    <span className="text-3xl font-bold text-gray-100">{value}</span>
    <span className="text-white text-sm">{label}</span>
    {description && <span className="text-white text-sm">{description}</span>}
  </div>
);

function Card() {
  const stats: Stat[] = [
    { value: '1T', label: 'Cloud events processed', description: 'Total number of events processed in the cloud.' },
    { value: '3.5k', label: 'Exploit Attempts Detected', description: 'Number of potential security threats detected.' },
    { value: '705.33K', label: 'Malware Executions Blocked', description: 'Number of malware attempts prevented from running.' },
    { value: '1.12B', label: 'New Unique Objects Analyzed', description: 'Number of new files and data scanned for potential threats.' },
    { value: '25TB', label: 'Data stored', description: 'Total amount of data securely stored and managed.' },
  ];

  return (
    <div className="card bg-orange-500 p-4 shadow-md">
      <h2 className='text-white font-semibold text-3xl px-5'>We're securing the future, second by second</h2>
      <h2 className="card-date text-sm font-bold pb-4 pt-2 px-5 text-white" aria-label="Data as of February 22, 2024 at 7AM PST">02.22.24 at 7AM PST</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 bg-orange-500 p-4  shadow-md">
        {stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} description={stat.description} />
        ))}
      </div>
    </div>
  );
}

export default Card;
