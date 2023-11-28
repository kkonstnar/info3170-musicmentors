// TeacherCard.jsx
export default function TeacherCard({ teacher }) {
    return (
      <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden my-4 bg-white">
        {/* Main card container */}
        <div className="flex flex-grow">
          {/* Left column for the image */}
          <div className="flex-shrink-0">
            <img className="h-full w-full md:w-48 object-cover" src={teacher.image} alt={`${teacher.name}`} />
          </div>
  
          {/* Middle column for content */}
          <div className="p-4 flex-1">
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{teacher.name}</h2>
              {teacher.isSuperTutor && (
                <span className="ml-2 inline-block bg-pink-500 text-white text-xs px-2 py-1 leading-none rounded-full">
                  Super tutor
                </span>
              )}
            </div>
            <div className="mb-4">
              <img src={teacher.flag} alt="flag" className="w-5 h-5 rounded-full" />
            </div>
            <p className="text-gray-600 text-sm mb-2">{teacher.description}</p>
            <p className="text-gray-600 text-sm mb-1">{teacher.language}</p>
            <p className="text-gray-600 text-sm mb-1">{teacher.activeStudents} active students</p>
            <p className="text-gray-600 text-sm mb-4">{teacher.lessons} lessons</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  {/* Star SVG path here */}
                </svg>
                <span className="text-gray-600 text-sm ml-1">{teacher.rating} Stars</span>
              </div>
              <span className="text-xl font-bold text-gray-900">${teacher.price}</span>
            </div>
            {/* Action buttons */}
            <div className="flex flex-col space-y-2">
              <button className="bg-white text-black border border-black rounded px-4 py-2 text-sm font-bold w-full">
                Message
              </button>
              <button className="bg-pink-500 text-white border border-black rounded px-4 py-2 text-sm font-bold w-full">
                Book trial lesson
              </button>
            </div>
          </div>
        </div>
  
        {/* Separate right column for schedule */}
        <div className="flex-shrink-0 w-48 p-4 bg-gray-100 rounded-lg flex flex-col justify-between">
          {/* Schedule image with video button overlay */}
          <div className="relative">
            <img className="w-full h-32 rounded-lg mb-4 object-cover" src={teacher.scheduleBackground} alt="Schedule background" />
            <button className="absolute inset-0 w-full h-full flex items-center justify-center">
              <svg className="h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.504 3.752V7.416l6.504 3.752z" />
              </svg>
            </button>
          </div>
          <button className="bg-transparent text-black border border-black rounded px-4 py-2 text-sm font-bold w-full">
            View full schedule
          </button>
        </div>
      </div>
    );
  }
  