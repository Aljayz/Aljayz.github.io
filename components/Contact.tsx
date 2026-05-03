import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
        📫 Contact me via
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.instagram.com/the.aljayz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.shields.io/badge/Instagram-the.aljayz-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            alt="Instagram"
            width={0}   
            height={0}  
            className="h-8 w-auto"
            unoptimized 
          />
        </a>
        <a
          href="https://www.facebook.com/aljaytbit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.shields.io/badge/Facebook-aljaytbit-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
            alt="Facebook"
            width={0}
            height={0}
            className="h-8 w-auto"
            unoptimized
          />
        </a>
        <a
          href="https://github.com/Aljayz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.shields.io/badge/GitHub-Aljayz-181717?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
            width={0}
            height={0}
            className="h-8 w-auto"
            unoptimized
          />
        </a>
        <a
          href="mailto:albertjaybarrororoisque@gmail.com"
        >
          <Image
            src="https://img.shields.io/badge/Email-albertjaybarrororoisque%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Email"
            width={0}   
            height={0}  
            className="h-8 w-auto"
            unoptimized
          />
        </a>
      </div>
    </section>
  );
}