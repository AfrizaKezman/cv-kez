'use client';

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaLinkedin, FaGraduationCap, FaProjectDiagram, FaCode } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-gray-900 shadow-lg rounded-lg p-8 text-white">
        <div className="flex items-center space-x-6 mb-6">
          <Image
            src="/pp.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border-4 border-gold"
          />
          <div>
            <h1 className="text-4xl font-bold text-gold">Afriza Kezman Setiawan</h1>
            <p className="text-gray-400">Programmer | Student at Masoem University</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gold flex items-center"><FaGraduationCap className="mr-2" /> Education</h2>
          <p className="text-gray-300">Masoem University - Information Systems (2023 - Present, Semester 4)</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gold flex items-center"><FaCode className="mr-2" /> Skills</h2>
          <div className="space-y-4">
            {[
              { name: 'JavaScript (ES6+)', level: '80%' },
              { name: 'React.js & Next.js', level: '75%' },
              { name: 'Node.js & Express', level: '70%' },
              { name: 'HTML, CSS, Tailwind CSS', level: '85%' },
              { name: 'MySQL & Firebase', level: '65%' },
              { name: 'Git & GitHub', level: '75%' },
            ].map((skill, index) => (
              <div key={index}>
                <p className="text-gray-300">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-gold h-2.5 rounded-full" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gold flex items-center"><FaProjectDiagram className="mr-2" /> Projects</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Landing Page Cosmos (Next.js)</li>
            <li>Basketball Club Merchandise Design</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gold flex items-center"><FaEnvelope className="mr-2" /> Contact</h2>
          <p className="text-gray-300 flex items-center"><FaEnvelope className="mr-2" /> afriza@example.com</p>
          <p className="text-gray-300 flex items-center"><FaGithub className="mr-2" /> github.com/afriza</p>
          <p className="text-gray-300 flex items-center"><FaLinkedin className="mr-2" /> linkedin.com/in/afriza</p>
        </div>
      </div>
    </div>
  );
}