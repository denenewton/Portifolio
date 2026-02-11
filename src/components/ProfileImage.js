import Image from 'next/image';


export default function ProfileImage() {
    return (
        <Image
            src="/dene.jpg"
            alt="Profile Picture"
            fill // Fills the parent div automatically
            className="object-cover" // Ensures the face isn't stretched
            priority // Use this if the image is at the top of the page
        />
    );
}
