import { TestTube2 } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: "Senior QA Engineer",
    company: "TechCorp Inc.",
    date: "2020 - Present",
    description: "Led end-to-end testing strategies for enterprise applications. Implemented automated testing frameworks reducing testing time by 60%."
  },
  {
    title: "QA Automation Engineer",
    company: "Software Solutions Ltd",
    date: "2018 - 2020",
    description: "Developed and maintained test automation frameworks using Selenium and Cypress. Improved test coverage by 40%."
  },
  {
    title: "Software Tester",
    company: "Digital Innovations",
    date: "2016 - 2018",
    description: "Performed manual and automated testing for web applications. Created comprehensive test documentation and test cases."
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Work Experience
        </h2>
        <VerticalTimeline lineColor="rgba(139, 92, 246, 0.3)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(88, 28, 135, 0.5)', backdropFilter: 'blur(8px)', border: '1px solid rgba(139, 92, 246, 0.2)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(88, 28, 135, 0.5)' }}
              date={exp.date}
              iconStyle={{ background: '#6366F1', color: '#fff' }}
              icon={<TestTube2 />}
            >
              <h3 className="text-xl font-bold text-blue-200">{exp.title}</h3>
              <h4 className="text-purple-400">{exp.company}</h4>
              <p className="text-purple-200">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};