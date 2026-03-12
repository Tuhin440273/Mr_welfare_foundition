// Counter Animation for Impact Section
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        // Calculate increment
        const inc = target / speed;

        // Check if target is reached
        if (count < target) {
            // Add increment to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target + "+";
        }
    };

    // Use Intersection Observer to trigger animation when section is in view
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            updateCount();
        }
    });

    observer.observe(counter);
});

/* ====================================
   Language Translation Data
==================================== */
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_projects: "Projects", 
        nav_gallery: "Gallery", nav_volunteer: "Volunteer", nav_contact: "Contact", nav_donate: "Donate Now",
        hero_title: "Helping People, Building a Better Future",
        hero_subtitle: "Join hands with us to support underprivileged and vulnerable communities across Bangladesh.",
        btn_donate_now: "Donate Now", btn_join_us: "Join Us",
        about_tag: "About Us", about_title: "Spreading Kindness & Humanity",
        about_desc1: "M.R Welfare Foundation is a non-profit organization dedicated to bringing positive change to society. We believe that every individual deserves the opportunity to live with dignity, hope, and basic human rights.",
        about_desc2: "Through the dedication of our volunteers, donors, and partners, we continuously work to improve the lives of disadvantaged people and build a compassionate community.",
        btn_read_more: "Read More",
        work_tag: "Our Work", work_title: "How We Help",
        srv_edu_title: "Education", srv_edu_desc: "Providing books, school fees, and essential support to underprivileged children.",
        srv_med_title: "Medical Help", srv_med_desc: "Organizing free medical camps, supplying medicines, and offering healthcare.",
        srv_food_title: "Food Distribution", srv_food_desc: "Distributing nutritious food to the hungry and providing special Ramadan meals.",
        srv_disaster_title: "Disaster Relief", srv_disaster_desc: "Emergency response and relief materials during floods, storms, and natural disasters.", /* এখানে কমা মিসিং ছিল */
        footer_title: "M.R Welfare Foundation",
        footer_desc: "Committed to creating sustainable social impact and spreading kindness, humanity, and support to make a better future for everyone.",
        footer_quick_links: "Quick Links",
        footer_contact_info: "Contact Info",
        footer_address: "Dhaka, Bangladesh",
        footer_phone: "+880 1818861685",
        footer_email: "info@mrwelfare.org",
        footer_copyright: "© 2026 M.R Welfare Foundation. All Rights Reserved.",
        ab_header_title: "About Us",
        ab_header_sub: "Discover our inspiring journey and mission as an NGO, driven to make a positive impact on the world.",
        ab_title: "About Us",
        ab_subtitle: "Embracing Humanity: A Tale of Warmth and True Support",
        ab_desc: "With a caring heart and open arms, we strive to create a nurturing environment where individuals can find solace, understanding, and the strength to overcome life's challenges. Through genuine connections and unwavering dedication, we aim to make a positive impact, uplifting the spirits of those in need and fostering a sense of belonging within our community.",
        ab_btn: "ABOUT US",
        stat_1: "RAISED DONATIONS",
        stat_2: "SAVING ONES",
        stat_3: "COMMUNITY",
        stat_4: "TARGET ACHIEVED",
        helped_title: "Helped till now",
        feat_1_title: "Helping humanity",
        feat_1_desc: "Through education, healthcare, sustainable development, and emergency relief, we make a positive impact. Join us now",
        feat_2_title: "Love your ecosystem",
        feat_2_desc: "Through awaking people we're on a mission to inspire love and care for our environment to keep balance nature.",
        feat_3_title: "Empowering Communities",
        feat_3_desc: "Through strategic partnerships and dedicated volunteers, we've been able to swiftly respond to emergencies, offering shelter, food.",
        proj_header_title: "Our Projects",
        proj_header_sub: "Explore the initiatives we are taking to bring a positive change in the community.",
        proj_edu_title: "Education Support",
        proj_edu_desc: "Providing free books, stationeries, and covering school fees for underprivileged children to ensure they have a bright future.",
        proj_med_title: "Medical Help",
        proj_med_desc: "Organizing free medical camps, providing essential medicines, and ensuring healthcare access for those who cannot afford it.",
        proj_food_title: "Food Distribution",
        proj_food_desc: "Distributing nutritious meals to the hungry and organizing special food drives during Ramadan and crisis periods.",
        proj_disaster_title: "Disaster Relief",
        proj_disaster_desc: "Swiftly responding to natural disasters like floods and cyclones with emergency shelter, safe drinking water, and relief materials.",
        proj_cta_title: "Support Our Cause",
        proj_cta_desc: "Your small contribution can make a huge difference in someone's life."
    },
    bn: {
        nav_home: "হোম", nav_about: "আমাদের সম্পর্কে", nav_projects: "প্রজেক্টসমূহ", 
        nav_gallery: "গ্যালারি", nav_volunteer: "স্বেচ্ছাসেবক", nav_contact: "যোগাযোগ", nav_donate: "দান করুন",
        hero_title: "মানুষকে সাহায্য করা, একটি সুন্দর ভবিষ্যৎ গড়া",
        hero_subtitle: "বাংলাদেশের সুবিধাবঞ্চিত ও অসহায় মানুষের পাশে দাঁড়াতে আমাদের সাথে হাত মেলান।",
        btn_donate_now: "দান করুন", btn_join_us: "যোগ দিন",
        about_tag: "আমাদের সম্পর্কে", about_title: "দয়া ও মানবতা ছড়িয়ে দেওয়া",
        about_desc1: "এম.আর ওয়েলফেয়ার ফাউন্ডেশন একটি অলাভজনক সংস্থা যা সমাজে ইতিবাচক পরিবর্তন আনতে নিবেদিত। আমরা বিশ্বাস করি যে প্রতিটি মানুষের মর্যাদা, আশা এবং মৌলিক মানবাধিকার নিয়ে বাঁচার অধিকার রয়েছে।",
        about_desc2: "আমাদের স্বেচ্ছাসেবক, দাতা এবং অংশীদারদের উৎসর্গের মাধ্যমে, আমরা সুবিধাবঞ্চিত মানুষের জীবন উন্নত করতে এবং একটি সহানুভূতিশীল সমাজ গড়তে কাজ করে যাচ্ছি।",
        btn_read_more: "আরও পড়ুন",
        work_tag: "আমাদের কাজ", work_title: "আমরা কীভাবে সাহায্য করি",
        srv_edu_title: "শিক্ষা সহায়তা", srv_edu_desc: "সুবিধাবঞ্চিত শিশুদের বই, স্কুলের বেতন এবং প্রয়োজনীয় সহায়তা প্রদান করা।",
        srv_med_title: "চিকিৎসা সহায়তা", srv_med_desc: "বিনামূল্যে মেডিকেল ক্যাম্প আয়োজন, ওষুধ সরবরাহ এবং স্বাস্থ্যসেবা প্রদান।",
        srv_food_title: "খাদ্য সহায়তা", srv_food_desc: "ক্ষুধার্তদের মাঝে পুষ্টিকর খাবার বিতরণ এবং রমজানে বিশেষ আহারের ব্যবস্থা।",
        srv_disaster_title: "দুর্যোগ সহায়তা", srv_disaster_desc: "বন্যা, ঝড় এবং প্রাকৃতিক দুর্যোগের সময় জরুরি প্রতিক্রিয়া এবং ত্রাণ সামগ্রী বিতরণ।", /* এখানে কমা মিসিং ছিল */
        footer_title: "এম.আর ওয়েলফেয়ার ফাউন্ডেশন",
        footer_desc: "টেকসই সামাজিক প্রভাব তৈরি করতে এবং সবার জন্য একটি সুন্দর ভবিষ্যৎ গড়তে দয়া, মানবতা এবং সহায়তা ছড়িয়ে দিতে প্রতিশ্রুতিবদ্ধ।",
        footer_quick_links: "গুরুত্বপূর্ণ লিংক",
        footer_contact_info: "যোগাযোগের তথ্য",
        footer_address: "ঢাকা, বাংলাদেশ",
        footer_phone: "+৮৮০ ১XXXXXXXXX",
        footer_email: "info@mrwelfare.org",
        footer_copyright: "© ২০২৬ এম.আর ওয়েলফেয়ার ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।",
       ab_header_title: "আমাদের সম্পর্কে",
        ab_header_sub: "একটি এনজিও হিসেবে আমাদের অনুপ্রেরণামূলক যাত্রা এবং লক্ষ্য সম্পর্কে জানুন, যা বিশ্বে ইতিবাচক প্রভাব ফেলতে পরিচালিত।",
        ab_title: "আমাদের সম্পর্কে",
        ab_subtitle: "মানবতাকে আলিঙ্গন: উষ্ণতা এবং সত্যিকারের সমর্থনের গল্প",
        ab_desc: "একটি যত্নশীল হৃদয় এবং খোলা বাহু দিয়ে, আমরা এমন একটি পরিবেশ তৈরি করার চেষ্টা করি যেখানে মানুষ সান্ত্বনা, বোঝাপড়া এবং জীবনের চ্যালেঞ্জগুলো অতিক্রম করার শক্তি খুঁজে পায়। আন্তরিক সংযোগ এবং অটল নিষ্ঠার মাধ্যমে, আমরা অভাবগ্রস্তদের আত্মাকে উন্নীত করতে এবং সম্প্রদায়ের মধ্যে আপনত্বের অনুভূতি গড়ে তুলতে লক্ষ্য রাখি।",
        ab_btn: "আরও জানুন",
        stat_1: "সংগৃহীত অনুদান",
        stat_2: "জীবন বাঁচানো হয়েছে",
        stat_3: "কমিউনিটি মেম্বার",
        stat_4: "লক্ষ্য অর্জিত",
        helped_title: "এখন পর্যন্ত আমাদের সহায়তা",
        feat_1_title: "মানবতার কল্যাণে",
        feat_1_desc: "শিক্ষা, স্বাস্থ্যসেবা, টেকসই উন্নয়ন এবং জরুরি ত্রাণের মাধ্যমে আমরা একটি ইতিবাচক প্রভাব তৈরি করি। এখনই যোগ দিন।",
        feat_2_title: "পরিবেশকে ভালোবাসুন",
        feat_2_desc: "মানুষকে সচেতন করার মাধ্যমে আমরা প্রকৃতির ভারসাম্য বজায় রাখতে পরিবেশের প্রতি ভালোবাসা এবং যত্ন অনুপ্রাণিত করার মিশনে রয়েছি।",
        feat_3_title: "সম্প্রদায়কে ক্ষমতায়ন",
        feat_3_desc: "কৌশলগত অংশীদারিত্ব এবং নিবেদিত স্বেচ্ছাসেবকদের মাধ্যমে, আমরা জরুরি পরিস্থিতিতে দ্রুত সাড়া দিয়ে আশ্রয় ও খাদ্য সরবরাহ করতে সক্ষম হয়েছি।",
        proj_header_title: "আমাদের প্রজেক্টসমূহ",
        proj_header_sub: "সমাজে ইতিবাচক পরিবর্তন আনতে আমরা যে উদ্যোগগুলো নিচ্ছি তা ঘুরে দেখুন।",
        proj_edu_title: "শিক্ষা সহায়তা",
        proj_edu_desc: "সুবিধাবঞ্চিত শিশুদের বিনামূল্যে বই, খাতা এবং স্কুলের বেতন প্রদান করা, যাতে তাদের উজ্জ্বল ভবিষ্যৎ নিশ্চিত হয়।",
        proj_med_title: "চিকিৎসা সহায়তা",
        proj_med_desc: "বিনামূল্যে মেডিকেল ক্যাম্প আয়োজন, ওষুধ সরবরাহ এবং যারা চিকিৎসা ব্যয় বহন করতে অক্ষম তাদের স্বাস্থ্যসেবা নিশ্চিত করা।",
        proj_food_title: "খাদ্য সহায়তা",
        proj_food_desc: "ক্ষুধার্তদের মাঝে পুষ্টিকর খাবার বিতরণ এবং রমজান ও সংকটকালীন সময়ে বিশেষ আহারের ব্যবস্থা করা।",
        proj_disaster_title: "দুর্যোগ সহায়তা",
        proj_disaster_desc: "বন্যা ও ঘূর্ণিঝড়ের মতো প্রাকৃতিক দুর্যোগে দ্রুত সাড়া দিয়ে জরুরি আশ্রয়, নিরাপদ পানীয় জল এবং ত্রাণ সামগ্রী প্রদান করা।",
        proj_cta_title: "আমাদের উদ্যোগে সমর্থন দিন",
        proj_cta_desc: "আপনার সামান্য অবদান কারো জীবনে বিশাল পরিবর্তন আনতে পারে।"
    }
};

/* ====================================
   Language Toggle Logic
==================================== */
const langToggleBtn = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("site_lang") || "en";

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    if (lang === "bn") {
        langToggleBtn.innerText = "English";
        document.body.classList.add("bangla-active");
    } else {
        langToggleBtn.innerText = "বাংলা";
        document.body.classList.remove("bangla-active");
    }
    localStorage.setItem("site_lang", lang);
}

// Initial Load
setLanguage(currentLang);

// Toggle Click Event
langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "bn" : "en";
    setLanguage(currentLang);
});


/* ====================================
   Dark Mode Toggle Logic
==================================== */
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("i");
let isDarkMode = localStorage.getItem("dark_mode") === "true";

function applyTheme(dark) {
    if (dark) {
        document.body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun"); // সূর্য আইকন হবে
    } else {
        document.body.classList.remove("dark-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon"); // চাঁদ আইকন হবে
    }
}

// Initial Load
applyTheme(isDarkMode);

// Toggle Click Event
themeToggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("dark_mode", isDarkMode);
    applyTheme(isDarkMode);
});