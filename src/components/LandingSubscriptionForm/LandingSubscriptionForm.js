import React from "react";
import HeroSection from "./HeroSection";
import ThankYouPage from "./ThankYouPage";
import USPSection from "./USPSection";
import PartnersSection from "../PartnersSection";
import Community from "../Community";
import PlacesSection from "../PlacesSection";
import FieldsSection from "../FieldsSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection
        header={"¿Buscas dónde vivir?"}
        subtitle={
          "VICO te ayuda a encontrar el lugar perfecto para vivir de una forma fácil y segura. Aprenda más sobre nosotros."
        }
      />
      <USPSection />
      <Community />
      <PartnersSection />
      <PlacesSection />
      <FieldsSection />
      <HeroSection
        header={"¿listo?"}
        subtitle={
          "VICO te ayuda a encontrar el lugar perfecto para vivir de una forma fácil y segura. Aprenda más sobre nosotros."
        }
      />
      <ThankYouPage
        header={"¡Muchas gracias!"}
        subtitle={
          "Yay! Vamos a estar en contacto contigo. Mientras tanto te recomendamos chequar las opciones disponibles o leer más en nuestro Blog."
        }
      />
      />
    </>
  );
};

export default LandingPage;
