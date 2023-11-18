export default function HomePage() {
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-6 bg-blue-600 text-white">
  <a href="/" className="text-xl font-bold">Music Mentor</a>
  <ul className="flex space-x-4 items-center">
    <li>
      <label htmlFor="file-upload" className="bg-white text-blue-500 rounded px-3 py-2 cursor-pointer hover:bg-blue-100">
        Upload File...
        <input id="file-upload" type="file" className="hidden" onChange={event => {
          
          console.log(event.target.files);
        }} />
      </label>
    </li>
    <li>
      <input type="search" placeholder="Search..." className="rounded px-3 py-2" />
    </li>
    <li>
      <a href="/discover">Discover</a>
    </li>
    <li>
      <a href="/find-tutor">Find Tutor</a>
    </li>
    <li>
      <a href="/become-tutor">Become a Tutor</a>
    </li>
    <li>
      <a href="/signup">Sign Up</a>
    </li>
    <li>
      <a href="/login">Login</a>
    </li>
  </ul>
</nav>



      <main className="h-96 flex items-center justify-center " style={{
        backgroundImage: "url('src/assets/musicapp.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Think of the song and we'll find the materials! <br/>Find the best tutor for you!
          </h1>
          <div className="flex justify-center items-center">
            <input type="search" className="rounded-l px-4 py-2 w-1/2" placeholder="Search for tutors, songs, tutorials..." />
            <button type="submit" className="bg-blue-600 text-white rounded-r px-8 py-2">Search</button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h2 className="font-bold text-lg mb-3">ABOUT</h2>
              <ul>
                <li><a href="/about">About Music Mentors</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-3">FOR TUTORS</h2>
              <ul>
                <li><a href="/tutors/benefits">Benefits</a></li>
                <li><a href="/tutors/apply">Apply Now</a></li>
                <li><a href="/tutors/faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-3">FOR STUDENTS</h2>
              <ul>
                <li><a href="/students/find-tutor">Find a Tutor</a></li>
                <li><a href="/students/success-stories">Success Stories</a></li>
                <li><a href="/students/resources">Resources</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-3">CONTACT</h2>
              <ul>
                <li><a href="/support/help-desk">Help Desk</a></li>
                <li><a href="/support/community">Our Community</a></li>
                <li><a href="/support/contact">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
