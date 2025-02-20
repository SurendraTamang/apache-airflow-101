import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "About Me",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Surendra Tamang</h2>
          <p className="text-lg">Python Developer / Web Scraper</p>
          <p className="text-lg">Love doing trekking</p>
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306"
            alt="Trekking"
            className="w-full rounded-lg"
          />
        </div>
      )
    },
    {
      title: "Apache Airflow: Introduction",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">Welcome to Apache Airflow</h2>
          <p className="text-lg">A powerful tool for orchestrating your data workflows.</p>
          <div className="logo rounded-lg"></div>

        </div>
      )
    },
    {
      title: "What is Apache Airflow?",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-500">Definition</h3>
            <p className="mt-2">
              Apache Airflow is a platform to programmatically author, schedule, and monitor workflows.
              It simplifies the orchestration of complex data pipelines.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-500">History</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Created by Airbnb in 2014</li>
              <li>Apache top-level project since 2019</li>
              <li>Used by thousands of companies worldwide</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Core Concepts",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">DAGs & Tasks</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>DAGs represent workflows as Directed Acyclic Graphs</li>
              <li>Tasks are individual units of work within a DAG</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-semibold text-blue-600">Operators & Sensors</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Operators define what a task does</li>
              <li>Sensors wait for a condition to be met before proceeding</li>
            </ul>
          </div>
        </div>
      )
    },
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
      title: "Core Features of Apache Airflow",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-yellow-600">Key Features</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Dynamic pipeline generation with DAGs</li>
              <li>Scalable and flexible scheduling</li>
              <li>Robust monitoring and logging</li>
              <li>Extensible through plugins</li>
              <li>Rich user interface for visualization</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Installation and Setup",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-500">Getting Started</h3>
            <p className="mt-2">
              Install Apache Airflow using pip or Docker. Configure your executor and start the webserver.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-semibold text-blue-500">Quick Commands</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>pip install apache-airflow</li>
              <li>airflow db init</li>
              <li>airflow webserver -p 8080</li>
              <li>airflow scheduler</li>
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
                  <li>Fewer enterprise features</li>
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
            <h3 className="text-2xl font-semibold text-green-500">Ideal Scenarios</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Complex task dependencies</li>
              <li>Scheduled batch processing</li>
              <li>Data pipeline orchestration</li>
              <li>Tasks requiring retries and monitoring</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-semibold text-red-500">Not Suitable For</h3>
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
    {
      title: "Best Practices and Tips",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-500">Optimizing Airflow</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Modularize your DAGs</li>
              <li>Use templates for reusability</li>
              <li>Monitor task durations</li>
              <li>Leverage Airflow's logging features</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-semibold text-blue-500">Maintenance Tips</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Regularly clean up old logs and metadata</li>
              <li>Update dependencies periodically</li>
              <li>Document your DAGs and processes</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Q&A / Conclusion",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Thank You!</h2>
          <p className="text-lg">
            Questions, comments, or feedback? Let’s discuss!
          </p>
        </div>
      )
    }
  ];

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
              className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-100'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-gray-500">
              {currentSlide + 1} / {slides.length}
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full ${currentSlide === slides.length - 1 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-100'}`}
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
