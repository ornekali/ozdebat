import Link from 'next/link';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  bgImage: string;
}

export default function PageHeader({ title, breadcrumb, bgImage }: PageHeaderProps) {
  return (
    <section className="relative py-20 mt-[112px] md:mt-[120px] bg-dark overflow-hidden">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/60" />
      <div className="relative z-10 max-w-[1170px] mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
        <nav aria-label="breadcrumb">
          <ol className="flex items-center justify-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-white/70 hover:text-secondary transition-colors">
                Accueil
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li className="text-secondary font-medium">{breadcrumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
