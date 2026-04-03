"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Activity, Car, Coffee, Waves, Wifi } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="large"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Rooms",
          id: "rooms",
        },
        {
          name: "Amenities",
          id: "amenities",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
      ]}
      brandName="StayComfort"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Comfort Meets Affordability, Book Now"
      description="Beautifully designed rooms with modern amenities at unbeatable rates. See your perfect stay before you book it."
      buttons={[
        {
          text: "Reserve Your Room Today",
          href: "#rooms",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/lifestyle-person-decorating-their-front-door_23-2150562548.jpg?_wi=1"
    />
  </div>

  <div id="amenities" data-section="amenities">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Wifi,
          title: "High-Speed Wi-Fi",
          description: "Reliable connection for all your devices.",
        },
        {
          icon: Coffee,
          title: "Complimentary Breakfast",
          description: "Start your day with a healthy meal.",
        },
        {
          icon: Car,
          title: "Free Parking",
          description: "Ample parking space included with your stay.",
        },
        {
          icon: Waves,
          title: "Outdoor Pool",
          description: "Relax in our crystal-clear outdoor swimming pool.",
        },
        {
          icon: Activity,
          title: "Fitness Center",
          description: "Stay active with our modern exercise facility.",
        },
      ]}
      title="Modern Amenities for a Seamless Stay"
      description="We provide everything you need for a comfortable and productive visit, whether for business or leisure."
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "r1",
          name: "Standard Queen Room",
          price: "$89 / night",
          variant: "Queen Bed",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2058.jpg?_wi=1",
        },
        {
          id: "r2",
          name: "Deluxe King Suite",
          price: "$129 / night",
          variant: "King Bed",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-laptop-near-sad-man_23-2147769407.jpg?_wi=1",
        },
        {
          id: "r3",
          name: "Family Suite",
          price: "$159 / night",
          variant: "Two Queen Beds",
          imageSrc: "http://img.b2bpic.net/free-photo/open-laptop-bed_171337-12759.jpg?_wi=1",
        },
        {
          id: "r4",
          name: "Business Single",
          price: "$99 / night",
          variant: "Work Desk",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2058.jpg?_wi=2",
        },
        {
          id: "r5",
          name: "Executive King",
          price: "$149 / night",
          variant: "Luxury Suite",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-laptop-near-sad-man_23-2147769407.jpg?_wi=2",
        },
        {
          id: "r6",
          name: "Accessible Room",
          price: "$95 / night",
          variant: "ADA Compliant",
          imageSrc: "http://img.b2bpic.net/free-photo/open-laptop-bed_171337-12759.jpg?_wi=2",
        },
      ]}
      title="Our Accommodations"
      description="Select from a range of clean, comfortable rooms tailored to your travel needs."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-happy-female-student-woman-sits-bench-with-backpack-phone-pointing-finger_1258-206019.jpg",
        },
        {
          id: "2",
          name: "Michael B.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-hanging-out-jetty_23-2150558042.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-showing-his-boarding-pass-check-counter_107420-85111.jpg",
        },
        {
          id: "4",
          name: "David K.",
          imageSrc: "http://img.b2bpic.net/free-photo/youth-modern-sport-activities-active-recreation-attractive-bearded-guy-posing-with-his-board-against-landscape-wild-beach-calm-waves-blue-sea-water-looking-happy_273609-1550.jpg",
        },
        {
          id: "5",
          name: "Jessica L.",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-indian-couple-love-wear-saree-elegant-suit-posed-restaurant_627829-800.jpg",
        },
      ]}
      cardTitle="What Guests Say"
      cardTag="Testimonials"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Contact Us"
      description="Have questions about your stay? Reach out to our front desk team directly."
      imageSrc="http://img.b2bpic.net/free-photo/lifestyle-person-decorating-their-front-door_23-2150562548.jpg?_wi=2"
      mediaAnimation="blur-reveal"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
        required: true,
      }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Stay",
          items: [
            {
              label: "Rooms",
              href: "#rooms",
            },
            {
              label: "Book Now",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 StayComfort Motel. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
