import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SectionHeading = ({ textNormal, textStripped }) => {
    return (_jsxs("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 text-center sm:text-4xl", children: [textNormal, ' ', _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600", children: textStripped })] }));
};
export default SectionHeading;
