"use client"
export const Footer = () => {
  return (
    <footer className="w-full py-8 text-center text-sm text-gray-500 border-t border-gray-200">
      © {new Date().getFullYear()} CLI Sam Noris. All rights reserved.
    </footer>
  );
};
