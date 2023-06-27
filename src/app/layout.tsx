import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Giải bóng rổ chuyên nghiệp Việt Nam",
    description:
        "Giải Bóng Rổ Chuyên Nghiệp Việt Nam – VBA được xây dựng theo mô hình Thể thao – Giải trí tiêu chuẩn quốc tế, thể hiện qua sự chuyên nghiệp, trình độ vận động viên, quy mô lẫn phương thức tổ chức.",
    icons: {
        icon: "/vba-logo.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
