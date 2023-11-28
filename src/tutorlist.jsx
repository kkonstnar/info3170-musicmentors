


import React from 'react';
import TeacherCard from './tutorcard';


const teachersData = [
    
        {
          id: 1,
          name: 'Alfonso M.',
          image: 'assets/tutor1.jpg', 
          description: 'Serious English and Spanish teacher with 5 years of experience...',
          price: '15/hr',
          language: 'Spanish (Native), English (Proficient)',
          rating: '5',
          reviews: '65 reviews',
          lessons: '6,640 lessons',
          isActive: true, 
        },
        {
          id: 2,
          name: 'Estanislao G.',
          image: 'assets/tutor2.jpg', 
          description: 'Certified Spanish tutor from Sevilla that will teach you very correct Spanish while having fun!',
          price: '20/hr',
          language: 'Spanish (Native), English (Proficient)',
          rating: '5',
          reviews: '6 reviews',
          lessons: '93 lessons',
          isActive: true,
        },
        
      ];
      



export default function TeacherList() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col">
        {teachersData.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
