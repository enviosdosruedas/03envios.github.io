
"use client"; // Add this directive for useState

import type { FC } from 'react';
import { useState } from 'react'; // Import useState
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Truck,
  Send,
  DollarSign,
  Bike,
  Clock,
  Store,
  Box,
  Calculator,
  Zap,
  PiggyBank,
  Users,
  Building,
  HelpCircle,
  Hash,
  Mail,
  MapPin,
  Phone,
  Newspaper,
  ChevronDown, // Import ChevronDown
} from '@astrojs/react';
import { FaInstagram, FaFacebook, FaWhatsapp } from '@astrojs/react'; // Using react-icons for social media
import { cn } from '@/lib/utils'; // Import cn for conditional classes

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleSection = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    // Only toggle on mobile, this logic might need refinement based on exact needs
    if (window.innerWidth < 768) {
        setter(prev => !prev);
    }
  };


  return (
    <footer className="w-full bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/LogoEnviosDosRuedas.webp" // Ensure this path is correct relative to public folder
                alt="Envios DosRuedas Logo"
                width={60}
                height={60}
                className="rounded-full"
                data-ai-hint="logo delivery service"
              />
              <div>
                <h3 className="text-xl font-bold">Envios DosRuedas</h3>
                <p className="text-xs text-primary-foreground/80">
                  Tu solución confiable para Envíos
                </p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/90">
              Tu solución confiable para mensajería y delivery en Mar del Plata.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 md:mb-4">Menú</h4>
            <nav className="w-full">
              <ul className="space-y-2 text-sm w-full">
                <li>
                  <Link href="/" className="flex items-center hover:text-secondary transition-colors justify-center md:justify-start">
                    <Home className="mr-2 h-4 w-4" /> Inicio
                  </Link>
                </li>
                {/* Services Section */}
                <li>
                   <button
                     onClick={() => toggleSection(setServicesOpen)}
                     className="font-semibold flex items-center justify-between w-full text-left hover:text-secondary transition-colors md:pointer-events-none md:w-auto"
                   >
                     <span className="flex items-center">
                      <Truck className="mr-2 h-4 w-4 md:hidden lg:inline-flex" /> Servicios
                     </span>
                     <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform md:hidden", servicesOpen && "rotate-180")} />
                  </button>
                  <ul className={cn(
                    "ml-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ease-in-out md:block md:mt-1 md:max-h-none md:overflow-visible",
                    servicesOpen ? "max-h-screen" : "max-h-0 md:max-h-none"
                  )}>
                    <li>
                      <Link href="/mensajeria-envios-express" className="flex items-center hover:text-secondary transition-colors">
                        <Send className="mr-2 h-4 w-4" /> Envíos Express
                      </Link>
                    </li>
                    <li>
                      <Link href="/mensajeria-envios-lowcost" className="flex items-center hover:text-secondary transition-colors">
                        <DollarSign className="mr-2 h-4 w-4" /> Envíos LowCost
                      </Link>
                    </li>
                    <li>
                      <Link href="/delivery-moto-express" className="flex items-center hover:text-secondary transition-colors">
                        <Bike className="mr-2 h-4 w-4" /> Moto Express
                      </Link>
                    </li>
                    <li>
                      <Link href="/delivery-moto-fija" className="flex items-center hover:text-secondary transition-colors">
                        <Clock className="mr-2 h-4 w-4" /> Moto Fija
                      </Link>
                    </li>
                    <li>
                      <Link href="/envios-emprendedores" className="flex items-center hover:text-secondary transition-colors">
                        <Store className="mr-2 h-4 w-4" /> Plan Emprendedores
                      </Link>
                    </li>
                    <li>
                      <Link href="/enviosflex" className="flex items-center hover:text-secondary transition-colors">
                        <Box className="mr-2 h-4 w-4" /> Envíos Flex
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Quote Section */}
                <li>
                  <button
                    onClick={() => toggleSection(setQuoteOpen)}
                    className="font-semibold flex items-center justify-between w-full text-left hover:text-secondary transition-colors md:pointer-events-none md:w-auto"
                  >
                    <span className="flex items-center">
                        <Calculator className="mr-2 h-4 w-4 md:hidden lg:inline-flex" /> Cotizar
                    </span>
                    <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform md:hidden", quoteOpen && "rotate-180")} />
                  </button>
                   <ul className={cn(
                     "ml-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ease-in-out md:block md:mt-1 md:max-h-none md:overflow-visible",
                     quoteOpen ? "max-h-screen" : "max-h-0 md:max-h-none"
                   )}>
                    <li>
                      <Link href="/cotizador-envios-express" className="flex items-center hover:text-secondary transition-colors">
                        <Zap className="mr-2 h-4 w-4" /> Cotizar Express
                      </Link>
                    </li>
                    <li>
                      <Link href="/cotizador-envios-lowcost" className="flex items-center hover:text-secondary transition-colors">
                        <PiggyBank className="mr-2 h-4 w-4" /> Cotizar LowCost
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* About Section */}
                <li>
                  <button
                    onClick={() => toggleSection(setAboutOpen)}
                    className="font-semibold flex items-center justify-between w-full text-left hover:text-secondary transition-colors md:pointer-events-none md:w-auto"
                  >
                    <span className="flex items-center">
                        <Users className="mr-2 h-4 w-4 md:hidden lg:inline-flex" /> Nosotros
                    </span>
                    <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform md:hidden", aboutOpen && "rotate-180")} />
                  </button>
                  <ul className={cn(
                    "ml-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ease-in-out md:block md:mt-1 md:max-h-none md:overflow-visible",
                    aboutOpen ? "max-h-screen" : "max-h-0 md:max-h-none"
                  )}>
                    <li>
                      <Link href="/sobre-nosotros" className="flex items-center hover:text-secondary transition-colors">
                        <Building className="mr-2 h-4 w-4" /> Sobre Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link href="/preguntasfrecuentes" className="flex items-center hover:text-secondary transition-colors">
                        <HelpCircle className="mr-2 h-4 w-4" /> Preguntas Frecuentes
                      </Link>
                    </li>
                     <li>
                      <Link href="/nuestrasredes" className="flex items-center hover:text-secondary transition-colors">
                        <Hash className="mr-2 h-4 w-4" /> Nuestras Redes
                      </Link>
                    </li>
                     <li> {/* Added Noticias Link consistent with Navbar */}
                      <Link href="/preguntasfrecuentes" className="flex items-center hover:text-secondary transition-colors">
                        <Newspaper className="mr-2 h-4 w-4" /> Noticias
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contacto" className="flex items-center hover:text-secondary transition-colors justify-center md:justify-start">
                    <Mail className="mr-2 h-4 w-4" /> Contacto
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm mb-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>Mar del Plata, Argentina</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <a
                  href="https://wa.me/+542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  +54 223 660 2699
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:dosruedasmdq@gmail.com"
                  className="hover:text-secondary transition-colors break-all" // Added break-all for email
                >
                  dosruedasmdq@gmail.com
                </a>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-center md:text-left">Síguenos en:</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://instagram.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://wa.me/+542236602699?text=Hola!%20Encontre%20su%20contacto%20en%20el%20sitio%20web%20y%20me%20gustaria%20mas%20informacion%20sobre%20su%20servicio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {currentYear} EnviosDosRuedas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

