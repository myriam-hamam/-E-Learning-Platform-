import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const academicCourses = [
  {
    id: 1,
    title: 'Software Project Management',
    instructor: 'Dr. Ahmed Hassan',
    avatar: 'AH',
    category: 'Core Software Engineering',
    price: 199.99,
    description: 'Master the mechanics of SDLC engineering frameworks, project charter generation, task scheduling models, risk evaluation trees, and scalable agile governance structures.',
    syllabus: [
      'Project Charter & Scope Definition Documentation',
      'WBS Architecture & Critical Path Scheduling (CPM)',
      'Agile Sprint Frameworks & Scrum Lifecycle Systems',
      'Risk Response Matrices & Software Quality Audits'
    ]
  },
  {
    id: 2,
    title: 'Advanced Full-Stack Architectures',
    instructor: 'Prof. Zeyad Mohamed',
    avatar: 'ZM',
    category: 'Web Development',
    price: 149.99,
    description: 'Design decoupled enterprise software using high-concurrency Node.js microservices, asynchronous web sockets, Redis storage cache clusters, and transactional database mapping layers.',
    syllabus: [
      'Decoupled Service Topologies & Web REST Gateways',
      'State Preservation Engines & Distributed Caching',
      'Relational Database Index Tuning & Query Optimization'
    ]
  },
  {
    id: 3,
    title: 'Cloud Systems Engineering & DevOps',
    instructor: 'Dr. Myriam Hamam',
    avatar: 'MH',
    category: 'Infrastructure',
    price: 179.99,
    description: 'Learn container orchestration via immutable Kubernetes multi-zone structures, configuration automation scripts, and seamless operational CI/CD pipeline structures.',
    syllabus: [
      'Virtual Container Configurations & Image Isolation',
      'Declarative Environments via Infrastructure-as-Code',
      'Automated Quality Pipeline Build Systems'
    ]
  },
  {
    id: 4,
    title: 'Applied AI & Neural Model Design',
    instructor: 'Eng. Mostafa Nour',
    avatar: 'MN',
    category: 'Data Science',
    price: 249.99,
    description: 'Evaluate multi-layer deep learning topologies, structural validation frameworks, processing layers, and scalable predictive pipelines.',
    syllabus: [
      'Supervised Optimization & Data Conditioning',
      'Convoluted Tensor Feature Separation Engines',
      'Production Deployment of Dynamic Inference Gateways'
    ]
  }
];


function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Add this!

  const filtered = academicCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* ... (Keep your titles and search bar code exactly the same) ... */}
      
      <div className="course-grid">
        {filtered.map(course => (
          <div key={course.id} className="course-card">
            {/* ... (Keep the card details the same) ... */}
            
            <div className="course-footer">
              <span className="price-text">${course.price}</span>
              {/* UPDATE THIS BUTTON */}
              <button className="action-btn" onClick={() => navigate(`/course/${course.id}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;