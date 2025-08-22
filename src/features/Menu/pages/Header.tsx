import React, { useState } from 'react';
import { Home, BookOpen, Link, FileText, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Simulating logged-in user
    const user = {
        name: "Shreya",   // Change to null/"" if not logged in
        photo: ""            // Put an image URL here if available, keep empty if not
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, href: '/' },
        { id: 'resources', label: 'Resources', icon: BookOpen, href: '/resources' },
        { id: 'links', label: 'Links', icon: Link, href: '/links' },
        { id: 'docs', label: 'Docs', icon: FileText, href: '/docs' },
    ];

    // Get initials if no photo
    const getInitials = (name: string) => {
        if (!name) return "";
        const parts = name.trim().split(" ");
        return parts.map(p => p[0]).join("").toUpperCase();
    };

    return (
        <header className="px-4 py-3 bg-white border-b border-gray-200 shadow-sm md:px-6 md:py-4">
            <div className="flex items-center justify-between">
                {/* Left section - Logo/Brand */}
                <div className="font-bold text-xl text-blue-600">
                    YourBrand
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Center section - Navigation Links (Desktop) */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`flex items-center gap-2 transition-colors ${
                                    activeLink === item.id
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                                onClick={() => setActiveLink(item.id)}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </a>
                        );
                    })}
                </nav>

                {/* Right section - User Avatar */}
                <div className="hidden md:flex items-center gap-4">
                    {user.name ? (
                        user.photo ? (
                            // If photo exists
                            <img
                                src={user.photo}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover border border-gray-300"
                            />
                        ) : (
                            // If no photo, show initials
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                {getInitials(user.name)}
                            </div>
                        )
                    ) : (
                        // If not logged in
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                            Sign In
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
                    <div className="flex flex-col gap-3">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                                        activeLink === item.id
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                    onClick={() => {
                                        setActiveLink(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    <Icon size={20} />
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
