import React from "react";

function Footer() {
    return (
        <footer className="bg-[#292c36] px-4 py-12 font-sans">
            <div className="max-w-[1350px] container mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="">
                        <h2 className="text-2xl font-bold text-white mb-4">VBA</h2>
                        <p className="text-gray-400">Giới thiệu VBA</p>
                    </div>
                    <div className="">
                        <h3 className="text-white font-bold mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h3>
                        <p className="text-gray-400">Công Ty Cổ Phần Bóng Rổ Việt Nam</p>
                        <p className="text-gray-400">
                            86 Xuân Thủy, Phường Thảo Điền, TP Thủ Đức, <br /> TP Hồ Chí Minh, Việt Nam
                        </p>
                        <p className="text-gray-400">+84783335885</p>
                        <p className="text-gray-400">contact@vba.vn</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
