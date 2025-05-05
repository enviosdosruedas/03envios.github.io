
"use client";

import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Truck,
  ChevronDown,
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
  Newspaper,
  Mail,
  Menu,
  X,
} from '@lucide/react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Close mobile menu on route change or screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
        setServicesOpen(false);
        setQuoteOpen(false);
        setAboutOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDropdown = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    // Close other dropdowns when opening one on mobile/desktop for simplicity
    setServicesOpen(false);
    setQuoteOpen(false);
    setAboutOpen(false);
    setter(prev => !prev);
  };

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setQuoteOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-md" aria-label="Main navigation">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            {/* Placeholder logo */}
            <Image
              src="/LogoEnviosDosRuedas.webp" // Use absolute path from public root
              alt="Envios DosRuedas Logo"
              width={50}
              height={50}
              className="rounded-full"
              data-ai-hint="logo delivery service"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Envios DosRuedas</h1>
              <p className="text-xs text-primary-foreground/80">Tu Solución Confiable para Envíos</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/" className="flex items-center hover:text-secondary transition-colors">
                <Home className="mr-1 h-4 w-4" />
                Inicio
              </Link>
            </li>
            {/* Services Dropdown */}
            <li className="relative group">
              <button
                onClick={() => toggleDropdown(setServicesOpen)}
                className="flex items-center hover:text-secondary transition-colors focus:outline-none"
              >
                <Truck className="mr-1 h-4 w-4" />
                Servicios
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-card text-card-foreground rounded-md shadow-lg z-20 py-1 border"
                  onMouseLeave={closeAllDropdowns}
                >
                  <Link href="/mensajeria-envios-express" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                    <Send className="mr-2 h-4 w-4" /> Envíos Express
                  </Link>
                  <Link href="/mensajeria-envios-lowcost" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                    <DollarSign className="mr-2 h-4 w-4" /> Envíos LowCost
                  </Link>
                   <Link href="/delivery-moto-express" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                    <Bike className="mr-2 h-4 w-4" /> Moto Express
                  </Link>
                   <Link href="/delivery-moto-fija" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                    <Clock className="mr-2 h-4 w-4" /> Moto Fija
                  </Link>
                   <Link href="/envios-emprendedores" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                    <Store className="mr-2 h-4 w-4" /> Plan Emprendedores
                  </Link>
                   <Link href="/enviosflex" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                    <Box className="mr-2 h-4 w-4" /> Envíos Flex
                  </Link>
                </div>
              )}
            </li>
             {/* Cotizar Dropdown */}
            <li className="relative group">
               <button
                 onClick={() => toggleDropdown(setQuoteOpen)}
                 className="flex items-center hover:text-secondary transition-colors focus:outline-none"
               >
                <Calculator className="mr-1 h-4 w-4" />
                Cotizar
                 <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", quoteOpen && "rotate-180")} />
               </button>
              {quoteOpen && (
                 <div
                   className="absolute left-0 mt-2 w-48 bg-card text-card-foreground rounded-md shadow-lg z-20 py-1 border"
                   onMouseLeave={closeAllDropdowns}
                 >
                   <Link href="/cotizador-envios-express" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                     <Zap className="mr-2 h-4 w-4" /> Cotizar Express
                   </Link>
                   <Link href="/cotizador-envios-lowcost" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                     <PiggyBank className="mr-2 h-4 w-4" /> Cotizar LowCost
                   </Link>
                 </div>
              )}
            </li>
            {/* Nosotros Dropdown */}
            <li className="relative group">
               <button
                 onClick={() => toggleDropdown(setAboutOpen)}
                 className="flex items-center hover:text-secondary transition-colors focus:outline-none"
               >
                <Users className="mr-1 h-4 w-4" />
                Nosotros
                 <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", aboutOpen && "rotate-180")} />
               </button>
              {aboutOpen && (
                 <div
                   className="absolute left-0 mt-2 w-48 bg-card text-card-foreground rounded-md shadow-lg z-20 py-1 border"
                    onMouseLeave={closeAllDropdowns}
                 >
                   <Link href="/sobre-nosotros" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                     <Building className="mr-2 h-4 w-4" /> Sobre Nosotros
                   </Link>
                   <Link href="/preguntasfrecuentes" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                     <HelpCircle className="mr-2 h-4 w-4" /> Preguntas Frecuentes
                   </Link>
                   <Link href="/nuestrasredes" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                     <Hash className="mr-2 h-4 w-4" /> Nuestras Redes
                   </Link>
                   {/* Link to FAQ again for Noticias, as per original HTML */}
                   <Link href="/preguntasfrecuentes" className="flex items-center px-4 py-2 text-sm hover:bg-muted">
                     <Newspaper className="mr-2 h-4 w-4" /> Noticias
                   </Link>
                 </div>
              )}
            </li>
            <li>
              <Link href="/contacto" className="flex items-center hover:text-secondary transition-colors">
                <Mail className="mr-1 h-4 w-4" />
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

       {/* Mobile Navigation Menu */}
       {isMobileMenuOpen && (
         <div className="md:hidden absolute top-20 left-0 w-full bg-primary text-primary-foreground shadow-lg z-10">
           <ul className="flex flex-col p-4 space-y-3">
             <li>
               <Link href="/" className="flex items-center py-2 hover:text-secondary" onClick={toggleMobileMenu}>
                 <Home className="mr-2 h-5 w-5" />
                 Inicio
               </Link>
             </li>
             {/* Mobile Services Dropdown */}
             <li>
               <button
                 onClick={() => toggleDropdown(setServicesOpen)}
                 className="flex items-center justify-between w-full py-2 hover:text-secondary focus:outline-none"
               >
                 <span className="flex items-center"><Truck className="mr-2 h-5 w-5" /> Servicios</span>
                 <ChevronDown className={cn("ml-1 h-5 w-5 transition-transform", servicesOpen && "rotate-180")} />
               </button>
               {servicesOpen && (
                 <div className="pl-4 mt-2 space-y-2">
                   <Link href="/mensajeria-envios-express" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <Send className="mr-2 h-4 w-4" /> Envíos Express
                   </Link>
                   <Link href="/mensajeria-envios-lowcost" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <DollarSign className="mr-2 h-4 w-4" /> Envíos LowCost
                   </Link>
                   <Link href="/delivery-moto-express" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                    <Bike className="mr-2 h-4 w-4" /> Moto Express
                  </Link>
                   <Link href="/delivery-moto-fija" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                    <Clock className="mr-2 h-4 w-4" /> Moto Fija
                  </Link>
                   <Link href="/envios-emprendedores" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                    <Store className="mr-2 h-4 w-4" /> Plan Emprendedores
                  </Link>
                   <Link href="/enviosflex" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                    <Box className="mr-2 h-4 w-4" /> Envíos Flex
                  </Link>
                 </div>
               )}
             </li>
             {/* Mobile Cotizar Dropdown */}
              <li>
               <button
                 onClick={() => toggleDropdown(setQuoteOpen)}
                 className="flex items-center justify-between w-full py-2 hover:text-secondary focus:outline-none"
               >
                 <span className="flex items-center"><Calculator className="mr-2 h-5 w-5" /> Cotizar</span>
                 <ChevronDown className={cn("ml-1 h-5 w-5 transition-transform", quoteOpen && "rotate-180")} />
               </button>
               {quoteOpen && (
                 <div className="pl-4 mt-2 space-y-2">
                   <Link href="/cotizador-envios-express" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <Zap className="mr-2 h-4 w-4" /> Cotizar Express
                   </Link>
                   <Link href="/cotizador-envios-lowcost" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <PiggyBank className="mr-2 h-4 w-4" /> Cotizar LowCost
                   </Link>
                 </div>
               )}
             </li>
              {/* Mobile Nosotros Dropdown */}
               <li>
               <button
                 onClick={() => toggleDropdown(setAboutOpen)}
                 className="flex items-center justify-between w-full py-2 hover:text-secondary focus:outline-none"
               >
                 <span className="flex items-center"><Users className="mr-2 h-5 w-5" /> Nosotros</span>
                 <ChevronDown className={cn("ml-1 h-5 w-5 transition-transform", aboutOpen && "rotate-180")} />
               </button>
               {aboutOpen && (
                 <div className="pl-4 mt-2 space-y-2">
                   <Link href="/sobre-nosotros" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <Building className="mr-2 h-4 w-4" /> Sobre Nosotros
                   </Link>
                   <Link href="/preguntasfrecuentes" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <HelpCircle className="mr-2 h-4 w-4" /> Preguntas Frecuentes
                   </Link>
                   <Link href="/nuestrasredes" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <Hash className="mr-2 h-4 w-4" /> Nuestras Redes
                   </Link>
                   <Link href="/preguntasfrecuentes" className="flex items-center py-1 text-sm hover:text-secondary" onClick={toggleMobileMenu}>
                     <Newspaper className="mr-2 h-4 w-4" /> Noticias
                   </Link>
                 </div>
               )}
             </li>
             <li>
               <Link href="/contacto" className="flex items-center py-2 hover:text-secondary" onClick={toggleMobileMenu}>
                 <Mail className="mr-2 h-5 w-5" />
                 Contacto
               </Link>
             </li>
           </ul>
         </div>
       )}

      {/* Optional overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-5 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
