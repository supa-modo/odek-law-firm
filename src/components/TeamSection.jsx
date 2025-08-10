const TeamSection = () => {
  const team = [
    {
      name: "Sarah Odek",
      role: "Managing Partner",
      specialization: "Corporate Law & Commercial Litigation",
      experience: "15+ years",
      education: "LLB (Hons), University of Nairobi",
    },
    {
      name: "Michael Kiprotich",
      role: "Senior Associate",
      specialization: "Real Estate & Property Law",
      experience: "12+ years",
      education: "LLB, Moi University",
    },
    {
      name: "Grace Wanjiku",
      role: "Associate",
      specialization: "Family Law & Employment Law",
      experience: "8+ years",
      education: "LLB, Kenyatta University",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Legal Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of legal professionals committed to
            delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Specialization:</strong> {member.specialization}
                </p>
                <p>
                  <strong>Experience:</strong> {member.experience}
                </p>
                <p>
                  <strong>Education:</strong> {member.education}
                </p>
              </div>
              <button className="mt-6 text-amber-600 hover:text-amber-700 font-semibold">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
