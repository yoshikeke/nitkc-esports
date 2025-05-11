import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md  w-full z-50 ">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* ロゴ部分 */}
                <Link to="/" className="text-2xl font-bold hover:opacity-80">
                    熊本高専eスポーツ同好会
                </Link>

                {/* ナビゲーションメニュー */}
                <nav>
                    <ul className="flex space-x-6 text-sm font-medium">
                        <li>
                            <Link to="/" className="hover:text-gray-400 transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-400 transition duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-400 transition duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;