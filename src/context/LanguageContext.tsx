import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "EN" | "VI";
type TranslationNode = string | string[] | { [key: string]: TranslationNode };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("EN");

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "VI" ? "vi" : "en";
    document.title = lang === "VI"
      ? "Nguyễn Thế Anh | Hồ sơ Kỹ thuật"
      : "Nguyen The Anh | Engineering Portfolio";
  }, [lang]);

  const t = (key: string): string | string[] => {
    const keys = key.split(".");
    let result: TranslationNode = translations[lang];
    for (const k of keys) {
      if (typeof result === "object" && !Array.isArray(result) && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return typeof result === "string" || Array.isArray(result) ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

const translations: Record<Language, TranslationNode> = {
  EN: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      philosophy: "Philosophy & Future"
    },
    roles: [
      "Software Engineer",
      "Fullstack Developer",
      "Blockchain Developer",
      "AI Enthusiast"
    ],
    home: {
      hero: {
        tag: "SOFTWARE ENGINEER • FULLSTACK • WEB3",
        title: "Nguyen The Anh",
        subtitle: "Software Engineering student at VKU focused on building comprehensive fullstack systems, secure blockchain protocols, and intelligent AI applications. Bridging the gap between robust architecture and data-driven intelligence.",
        location: "Da Nang, Vietnam",
        status: "Available for Q3 Internships",
        cta_projects: "View Projects",
        cta_contact: "Contact Me"
      }
    }
  },
  VI: {
    nav: {
      home: "Trang chủ",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      education: "Học vấn",
      philosophy: "Triết lý & Tương lai"
    },
    roles: [
      "Kỹ sư Phần mềm",
      "Lập trình viên Fullstack",
      "Lập trình viên Blockchain",
      "Đam mê AI"
    ],
    home: {
      hero: {
        tag: "KỸ SƯ PHẦN MỀM • FULLSTACK • WEB3",
        title: "Nguyễn Thế Anh",
        subtitle: "Sinh viên Kỹ thuật Phần mềm tại VKU, tập trung xây dựng các hệ thống fullstack toàn diện, các giao thức blockchain bảo mật và các ứng dụng AI thông minh. Kết nối khoảng cách giữa kiến trúc vững chắc và trí tuệ dựa trên dữ liệu.",
        location: "Đà Nẵng, Việt Nam",
        status: "Đang tìm kiếm thực tập Q3",
        cta_projects: "Xem Dự án",
        cta_contact: "Liên hệ tôi"
      }
    }
  }
};
