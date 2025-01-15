import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const teamMembers = [
    {
        name: "John Doe",
        position: "CEO & Founder",
        image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        linkedin: "https://www.linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        facebook: "https://facebook.com/johndoe"
    },
    {
        name: "Jane Smith",
        position: "Head Chef",
        image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        linkedin: "https://www.linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        facebook: "https://facebook.com/janesmith"
    },
    {
        name: "Alice Brown",
        position: "Marketing Director",
        image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        linkedin: "https://www.linkedin.com/in/alicebrown",
        twitter: "https://twitter.com/alicebrown",
        facebook: "https://facebook.com/alicebrown"
    },
    {
        name: "Robert Lee",
        position: "Lead Developer",
        image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        linkedin: "https://www.linkedin.com/in/robertlee",
        twitter: "https://twitter.com/robertlee",
        facebook: "https://facebook.com/robertlee"
    }
];

const OurTeam = () => {
    return (
        <section className="py-16">
            <div className="container px-6 mx-auto text-center">
                <SectionTitle subHeading="Get to know the people behind the magic!" heading="Meet Our Amazing Team" />


                {/* Dynamic Team Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="p-8 transition-all transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-[#fd930b]"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.position}</p>
                            <p className="mt-2 text-gray-500">A passionate and dedicated professional working behind the scenes to make sure everything runs smoothly.</p>
                            <div className="flex justify-center gap-4 mt-4">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#fd930b] hover:text-[#ff7f00]"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#fd930b] hover:text-[#ff7f00]"
                                    >
                                        <FaTwitter size={24} />
                                    </a>
                                )}
                                {member.facebook && (
                                    <a
                                        href={member.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#fd930b] hover:text-[#ff7f00]"
                                    >
                                        <FaFacebook size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
