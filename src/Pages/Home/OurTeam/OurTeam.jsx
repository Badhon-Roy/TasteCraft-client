
const OurTeam = () => {
    return (
      <section className="py-12 bg-blue-50">
        <h2 className="mb-6 text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="flex justify-center gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/path-to-image" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold text-center">John Doe</h3>
            <p className="text-center">CEO</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/path-to-image" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold text-center">Jane Smith</h3>
            <p className="text-center">Head Chef</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurTeam;
  