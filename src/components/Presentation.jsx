import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Understanding Data Orchestration",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">The Data Challenge</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg mb-2">Modern businesses face complex data needs:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple data sources (databases, APIs, files)</li>
              <li>Different processing requirements</li>
              <li>Various destination systems</li>
              <li>Complex dependencies between tasks</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <p className="text-lg mb-2">This leads to challenges in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scheduling and timing</li>
              <li>Error handling and recovery</li>
              <li>Monitoring and alerting</li>
              <li>Resource management</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "What is Apache Airflow?",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-500">Definition</h3>
            <p className="mt-2">Apache Airflow is a platform to programmatically author, schedule, and monitor workflows. Think of it as a sophisticated task scheduler that ensures your data processes run in the right order, at the right time, while handling failures gracefully.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-500">History</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Created by Airbnb in 2014 to manage complex workflows</li>
              <li>Became Apache top-level project in 2019</li>
              <li>Now maintained by a large community</li>
              <li>Used by thousands of companies worldwide</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Why Choose Airflow?",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600">Key Strengths</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Python-based (accessible)</li>
                <li>Highly customizable</li>
                <li>Scalable architecture</li>
                <li>Rich user interface</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">Features</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Dynamic pipeline generation</li>
                <li>Easy testing and maintenance</li>
                <li>Extensive monitoring</li>
                <li>Rich ecosystem of plugins</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold text-yellow-600">Business Benefits</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Reduced development time</li>
              <li>Lower maintenance costs</li>
              <li>Better reliability</li>
              <li>Improved visibility into data pipelines</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Common Use Cases",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">ETL/ELT Processes</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Database migrations</li>
                <li>Data warehouse loading</li>
                <li>Data lake operations</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600">Machine Learning</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Model training pipelines</li>
                <li>Feature engineering</li>
                <li>Model deployment</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600">Data Analysis</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Report generation</li>
                <li>Data quality checks</li>
                <li>Analytics pipelines</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-600">Web Scraping</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Scheduled data collection</li>
                <li>Multi-source aggregation</li>
                <li>Data transformation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Airflow vs Other Technologies",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-500">Apache Kafka vs Airflow</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="font-semibold">Kafka:</p>
                <ul className="list-disc pl-6">
                  <li>Real-time data streaming</li>
                  <li>Message broker</li>
                  <li>Event-driven architecture</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Airflow:</p>
                <ul className="list-disc pl-6">
                  <li>Batch processing</li>
                  <li>Workflow orchestration</li>
                  <li>Schedule-driven tasks</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-semibold text-green-500">Other Alternatives</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="font-semibold">Apache Nifi:</p>
                <ul className="list-disc pl-6">
                  <li>Visual workflow design</li>
                  <li>Real-time processing</li>
                  <li>Data provenance</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Luigi:</p>
                <ul className="list-disc pl-6">
                  <li>Simpler architecture</li>
                  <li>Python-based</li>
                  <li>Less enterprise features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "When to Use Airflow",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-500">Perfect For:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Complex task dependencies</li>
              <li>Scheduled batch processing</li>
              <li>Data pipeline orchestration</li>
              <li>Tasks requiring retries and monitoring</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-semibold text-red-500">Not Ideal For:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Real-time stream processing</li>
              <li>Simple cron jobs</li>
              <li>Extremely low-latency tasks</li>
              <li>Standalone event-driven systems</li>
            </ul>
          </div>
        </div>
      )
    },
    // ... [Previous slides continue here]
  ];

  // ... [Rest of the component code remains the same]
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 min-h-[28rem]">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              {slides[currentSlide].title}
            </h1>
          </div>
          
          <div className="mb-8">
            {slides[currentSlide].content}
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={previousSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full ${
                currentSlide === 0 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-gray-500">
              {currentSlide + 1} / {slides.length}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full ${
                currentSlide === slides.length - 1 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;