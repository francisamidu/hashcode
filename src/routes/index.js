import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from '@tanstack/react-router';
import BackToTop from '@/components/BackToTop';
import FAQSection from '@/components/FAQ';
import CTASection from '@/components/CTA';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
const Home = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Features, {}), _jsx(Pricing, {}), _jsx(FAQSection, {}), _jsx(CTASection, {}), _jsx(Footer, {}), _jsx(BackToTop, {})] }));
};
export const Route = createFileRoute('/')({
    component: Home
});
export default Home;
