/* =========================================
   M.R WELFARE FOUNDATION - MAIN SCRIPT
========================================= */

/* ====================================
   1. Counter Animation for Impact Section
==================================== */
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

// সেফটি চেক: যদি পেজে কাউন্টার থাকে, তবেই এই কোড রান করবে
if (counters.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    // আগের প্লাস (+) চিহ্ন থাকলে সেটি সরিয়ে শুধু নাম্বার নেওয়া
                    const count = +counter.innerText.replace('+', ''); 
                    
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                
                updateCount();
                observer.unobserve(counter); // একবার অ্যানিমেশন হওয়ার পর এটি থেমে যাবে
            }
        });
    }, { threshold: 0.5 }); // সেকশনের অর্ধেক দেখা গেলে অ্যানিমেশন শুরু হবে

    counters.forEach(counter => observer.observe(counter));
}

/* ====================================
   2. Language Translation Data
==================================== */
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_projects: "Projects", 
        nav_gallery: "Gallery", nav_volunteer: "Volunteer", nav_contact: "Contact", nav_donate: "Donate Now",
        slide_1_title: "Helping People, Building a Better Future",
        slide_1_desc: "Join hands with us to support underprivileged and vulnerable communities across Bangladesh.",
        slide_2_title: "Zero Hunger Initiative",
        slide_2_desc: "We strive to ensure that no one goes to sleep on an empty stomach.",
        slide_3_title: "Education for All",
        slide_3_desc: "Empowering the next generation through free education and learning materials.",
        btn_our_work: "Our Work",
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
        srv_disaster_title: "Disaster Relief", srv_disaster_desc: "Emergency response and relief materials during floods, storms, and natural disasters.", 
        footer_title: "M.R Welfare Foundation",
        footer_desc: "Committed to creating sustainable social impact and spreading kindness, humanity, and support to make a better future for everyone.",
        footer_quick_links: "Quick Links",
        footer_contact_info: "Contact Info",
        footer_address: "kha-12/2,(3rd Floor), progoti Soroni, Shajadpur, Gulshan,Dhaka-1212, Bangladesh",
        footer_phone: "+880 1818861685",
        footer_phone: "+880 1714962854",
        footer_phone: "+880 1813205962",
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
        proj_cta_desc: "Your small contribution can make a huge difference in someone's life.",
        don_header_title: "Make a Donation",
        don_header_sub: "Your generosity can provide food, education, and medical care to those who need it the most.",
        don_amt_title: "Choose Donation Amount",
        don_custom_amt: "Custom",
        don_cause: "Select a Cause",
        don_cause_gen: "General Fund (Where it's needed most)",
        don_cause_edu: "Education Support",
        don_cause_med: "Medical Help",
        don_cause_food: "Food Distribution",
        don_cause_disaster: "Disaster Relief",
        don_personal_info: "Personal Information",
        don_name: "Full Name",
        don_email: "Email Address",
        don_phone: "Phone Number",
        don_btn_submit: "Proceed to Donate",
        don_pay_methods_title: "Offline Payment Methods",
        don_pay_desc: "You can directly send your donation to the following accounts using Send Money or Cash In.",
        don_bkash: "bKash (Personal)",
        don_nagad: "Nagad (Personal)",
        don_bank: "Bank Account",
        don_bank_name: "Bank: Islami Bank Bangladesh PLC",
        don_bank_acc_name: "A/C Name: M.R Welfare Foundation",
        vol_header_title: "Become a Volunteer",
        vol_header_sub: "Join our dedicated team and make a real difference in the lives of the underprivileged.",
        vol_info_title: "Why Volunteer With Us?",
        vol_info_desc1: "Volunteering is not just about giving your time; it's about giving your heart. When you join M.R Welfare Foundation, you become part of a family that works tirelessly to bring smiles to those who have forgotten how to smile.",
        vol_benefit_1_title: "Impact Lives",
        vol_benefit_1_desc: "Directly contribute to projects that provide education, food, and medical help.",
        vol_benefit_2_title: "Learn & Grow",
        vol_benefit_2_desc: "Develop leadership skills, teamwork, and gain valuable experience.",
        vol_benefit_3_title: "Build a Network",
        vol_benefit_3_desc: "Meet like-minded people who share your passion for social work.",
        vol_form_title: "Join Our Team",
        vol_name: "John Doe",
        vol_phone: "01XXXXXXXXX",
        vol_email: "example@mail.com",
        vol_address: "Dhaka, Bangladesh",
        vol_reason: "Tell us a little bit about yourself and why you want to volunteer...",
        vol_btn_submit: "Submit Application",
        gal_header_title: "Our Photo Gallery",
        gal_header_sub: "Glimpses of our activities, campaigns, and the smiles we've helped bring to the community.",
        gal_cat_food: "Food Distribution",
        gal_cat_medical: "Free Medical Camp",
        gal_cat_edu: "Education Support",
        gal_cat_community: "Community Development",
        gal_cat_disaster: "Disaster Relief",
        gal_cat_smiles: "Spreading Smiles",
        gal_btn_load: "Load More Images",
        gal_vol_tag: "Our Heroes",
        gal_vol_title: "Hear from our Volunteers",
        gal_vol_desc: "Watch how our dedicated team is making a real impact on the ground and bringing smiles to thousands of faces.",
        gal_more_title: "More Moments",
        gal_join_title: "Join Our Community Group",
        gal_join_desc: "Subscribe with your email to get the latest updates, event news, and become a part of our growing family.",
        gal_join_placeholder: "Enter your email address",
        gal_join_btn: "Join Now",
        nav_blog: "News",
        blog_header_title: "Latest News & Updates",
        blog_header_sub: "Stay informed about our recent campaigns, stories, and the impact we are making across the country.",
        blog_1_title: "Food Distribution in Sylhet",
        blog_1_desc: "We recently distributed emergency food packages to over 500 families affected by the severe floods in the Sylhet region.",
        blog_2_title: "Medical Camp in Pirojpur",
        blog_2_desc: "Our medical team organized a two-day free health camp in Pirojpur, providing checkups and medicines to more than 1,000 patients.",
        blog_3_title: "Winter Clothes Distribution",
        blog_3_desc: "To protect the vulnerable from extreme cold, our volunteers distributed warm clothes and blankets in several northern districts.",
        blog_btn_read: "Read More",
        contact_header_title: "Contact Us",
        contact_header_sub: "Have questions or want to get involved? We would love to hear from you.",
        contact_info_title: "Get in Touch",
        contact_info_desc: "Whether you want to donate, volunteer, or partner with us, feel free to drop a message or visit our office.",
        contact_office: "Office Address",
        contact_phone: "Phone Number",
        contact_email: "Email Address",
        contact_social: "Follow Us",
        contact_form_title: "Send Us a Message",
        contact_name_ph: "Your Name",
        contact_email_ph: "Your Email",
        contact_subject_ph: "Subject",
        contact_msg_ph: "Write your message here...",
        contact_btn_submit: "Send Message",
        work_click_hint: "(Click on the cards to view details)",
        modal_edu_detail: "Every child deserves the right to education. Through this project, we provide free books, uniforms, school fees, and stationeries to children who cannot afford to go to school. Your support can help build a bright future for a child.",
        modal_med_detail: "Healthcare is a basic right, yet many die due to lack of treatment. We organize free health camps in rural areas, provide life-saving medicines, and sponsor surgeries for extremely poor patients. Stand with us to save lives.",
        modal_food_detail: "No one should go to sleep hungry. We run daily food feeding programs for street children and destitute elderly people. During Ramadan, we provide month-long grocery packages to vulnerable families.",
        modal_disaster_detail: "Bangladesh is prone to natural calamities like floods and cyclones. Our emergency response team quickly reaches affected areas to provide safe drinking water, dry food, emergency shelters, and medical aid.",
        ab_mission_title: "Our Mission",
        ab_mission_desc: "To empower underprivileged communities through education, healthcare, and sustainable livelihood programs, ensuring a life of dignity and equal opportunities for everyone.",
        ab_vision_title: "Our Vision",
        ab_vision_desc: "To envision a poverty-free, educated, and compassionate society where every individual has access to basic human rights and a chance to thrive.",
        ab_founder_name: "Abdul Motaleb Moien",
        ab_founder_title: "Founder & Chairman",
        ab_msg_title: "Message from the Founder",
        ab_msg_desc: "\"Our journey started with a simple belief: no one should be left behind. M.R Welfare Foundation is not just an organization; it's a family of compassionate souls working together to bring smiles to the faces of the underprivileged. Together, we can build a society where humanity thrives.\"",
        ab_legal_title: "Registered under Govt. of Bangladesh",
        ab_legal_reg: "Registration No: NGO-XXXX/2026",
        ab_team_tag: "Our People",
        ab_team_title: "Meet Our Team",
        team_tab_exec: "Executive Board",
        team_tab_oper: "Operational Team",
        team_exec_1_name: "Abdul Motaleb Moien",
        team_exec_1_role: "Founder & Chairman",
        team_exec_2_name: "Jane Doe",
        team_exec_2_role: "General Secretary",
        team_exec_3_name: "John Smith",
        team_exec_3_role: "Treasurer",
        team_oper_1_name: "Robert Fox",
        team_oper_1_role: "Project Director",
        team_oper_2_name: "Sarah Connor",
        team_oper_2_role: "Volunteer Coordinator",
        team_oper_3_name: "Michael Bruce",
        team_oper_3_role: "PR & Media Head",
        btn_read_more: "Read More",
        ab_mission_short: "To empower underprivileged communities through education, healthcare, and sustainable livelihood programs...",
        ab_vision_short: "To envision a poverty-free, educated, and compassionate society where every individual has access to...",
        ab_mission_long: "Our ultimate mission is to empower underprivileged and marginalized communities through comprehensive education, accessible healthcare, and sustainable livelihood programs. We firmly believe that every individual deserves a life of dignity, respect, and equal opportunities. By creating supportive environments and providing necessary resources, we aim to break the cycle of poverty and build a foundation where future generations can thrive and lead independent, successful lives.",
        ab_vision_long: "We envision a world that is poverty-free, highly educated, and deeply compassionate. A society where no one goes to bed hungry, where every child has access to quality education regardless of their background, and where basic human rights are guaranteed for all. We strive to create a global community driven by empathy and mutual support, ensuring that every human being has a fair chance to reach their highest potential and contribute positively to the world.",
    },
    bn: {
        nav_home: "হোম", nav_about: "আমাদের সম্পর্কে", nav_projects: "প্রজেক্টসমূহ", 
        nav_gallery: "গ্যালারি", nav_volunteer: "স্বেচ্ছাসেবক", nav_contact: "যোগাযোগ", nav_donate: "দান করুন",
        slide_1_title: "মানুষকে সাহায্য করা, একটি সুন্দর ভবিষ্যৎ গড়া",
        slide_1_desc: "বাংলাদেশের সুবিধাবঞ্চিত ও অসহায় মানুষের পাশে দাঁড়াতে আমাদের সাথে হাত মেলান।",
        slide_2_title: "ক্ষুধামুক্ত সমাজ গড়ার উদ্যোগ",
        slide_2_desc: "আমরা নিশ্চিত করার চেষ্টা করি যেন কেউ খালি পেটে ঘুমাতে না যায়।",
        slide_3_title: "সবার জন্য শিক্ষা",
        slide_3_desc: "বিনামূল্যে শিক্ষা এবং শিক্ষা সামগ্রীর মাধ্যমে আগামী প্রজন্মকে ক্ষমতায়ন করা।",
        btn_our_work: "আমাদের কাজ",
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
        srv_disaster_title: "দুর্যোগ সহায়তা", srv_disaster_desc: "বন্যা, ঝড় এবং প্রাকৃতিক দুর্যোগের সময় জরুরি প্রতিক্রিয়া এবং ত্রাণ সামগ্রী বিতরণ।", 
        footer_title: "এম.আর ওয়েলফেয়ার ফাউন্ডেশন",
        footer_desc: "টেকসই সামাজিক প্রভাব তৈরি করতে এবং সবার জন্য একটি সুন্দর ভবিষ্যৎ গড়তে দয়া, মানবতা এবং সহায়তা ছড়িয়ে দিতে প্রতিশ্রুতিবদ্ধ।",
        footer_quick_links: "গুরুত্বপূর্ণ লিংক",
        footer_contact_info: "যোগাযোগের তথ্য",
        footer_address: "ঢাকা, বাংলাদেশ",
        footer_phone: "+৮৮০ ১৮১৮৮৬১৬৮৫",
        footer_email: "info@mrwelfare.org",
        footer_copyright: "© ২০২৬ এম.আর ওয়েলফেয়ার ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।",
        ab_header_title: "আমাদের সম্পর্কে",
        ab_header_sub: "একটি এনজিও হিসেবে আমাদের অনুপ্রেরণামূলক যাত্রা এবং লক্ষ্য সম্পর্কে জানুন, যা বিশ্বে ইতিবাচক প্রভাব ফেলতে পরিচালিত।",
        ab_title: "আমাদের সম্পর্কে",
        ab_subtitle: "মানবতাকে আলিঙ্গন: উষ্ণতা এবং সত্যিকারের সমর্থনের গল্প",
        ab_desc: "একটি যত্নশীল হৃদয় এবং খোলা বাহু দিয়ে, আমরা এমন একটি পরিবেশ তৈরি করার চেষ্টা করি যেখানে মানুষ সান্ত্বনা, বোঝাপড়া এবং জীবনের চ্যালেঞ্জগুলো অতিক্রম করার শক্তি খুঁজে পায়। আন্তরিক সংযোগ এবং অটল নিষ্ঠার মাধ্যমে, আমরা অভাবগ্রস্তদের আত্মাকে উন্নীত করতে এবং সম্প্রদায়ের মধ্যে আপনত্বের অনুভূতি গড়ে তুলতে লক্ষ্য রাখি।",
        ab_btn: "আরও জানুন",
        stat_1: "সংগৃহীত অনুদান",
        stat_2: "জীবন বাঁচানো হয়েছে",
        stat_3: "কমিউনিটি মেম্বার",
        stat_4: "লক্ষ্য অর্জিত",
        helped_title: "এখন পর্যন্ত আমাদের সহায়তা",
        feat_1_title: "মানবতার কল্যাণে",
        feat_1_desc: "শিক্ষা, স্বাস্থ্যসেবা, টেকসই উন্নয়ন এবং জরুরি ত্রাণের মাধ্যমে আমরা একটি ইতিবাচক প্রভাব তৈরি করি। এখনই যোগ দিন।",
        feat_2_title: "পরিবেশকে ভালোবাসুন",
        feat_2_desc: "মানুষকে সচেতন করার মাধ্যমে আমরা প্রকৃতির ভারসাম্য বজায় রাখতে পরিবেশের প্রতি ভালোবাসা এবং যত্ন অনুপ্রাণিত করার মিশনে রয়েছি।",
        feat_3_title: "সম্প্রদায়কে ক্ষমতায়ন",
        feat_3_desc: "কৌশলগত অংশীদারিত্ব এবং নিবেদিত স্বেচ্ছাসেবকদের মাধ্যমে, আমরা জরুরি পরিস্থিতিতে দ্রুত সাড়া দিয়ে আশ্রয় ও খাদ্য সরবরাহ করতে সক্ষম হয়েছি।",
        proj_header_title: "আমাদের প্রজেক্টসমূহ",
        proj_header_sub: "সমাজে ইতিবাচক পরিবর্তন আনতে আমরা যে উদ্যোগগুলো নিচ্ছি তা ঘুরে দেখুন।",
        proj_edu_title: "শিক্ষা সহায়তা",
        proj_edu_desc: "সুবিধাবঞ্চিত শিশুদের বিনামূল্যে বই, খাতা এবং স্কুলের বেতন প্রদান করা, যাতে তাদের উজ্জ্বল ভবিষ্যৎ নিশ্চিত হয়।",
        proj_med_title: "চিকিৎসা সহায়তা",
        proj_med_desc: "বিনামূল্যে মেডিকেল ক্যাম্প আয়োজন, ওষুধ সরবরাহ এবং যারা চিকিৎসা ব্যয় বহন করতে অক্ষম তাদের স্বাস্থ্যসেবা নিশ্চিত করা।",
        proj_food_title: "খাদ্য সহায়তা",
        proj_food_desc: "ক্ষুধার্তদের মাঝে পুষ্টিকর খাবার বিতরণ এবং রমজান ও সংকটকালীন সময়ে বিশেষ আহারের ব্যবস্থা করা।",
        proj_disaster_title: "দুর্যোগ সহায়তা",
        proj_disaster_desc: "বন্যা ও ঘূর্ণিঝড়ের মতো প্রাকৃতিক দুর্যোগে দ্রুত সাড়া দিয়ে জরুরি আশ্রয়, নিরাপদ পানীয় জল এবং ত্রাণ সামগ্রী প্রদান করা।",
        proj_cta_title: "আমাদের উদ্যোগে সমর্থন দিন",
        proj_cta_desc: "আপনার সামান্য অবদান কারো জীবনে বিশাল পরিবর্তন আনতে পারে।",
        don_header_title: "অনুদান দিন",
        don_header_sub: "আপনার মহানুভবতা যাদের সবচেয়ে বেশি প্রয়োজন তাদের খাদ্য, শিক্ষা এবং চিকিৎসা প্রদান করতে পারে।",
        don_amt_title: "অনুদানের পরিমাণ নির্বাচন করুন",
        don_custom_amt: "অন্যান্য",
        don_cause: "খাত নির্বাচন করুন",
        don_cause_gen: "সাধারণ তহবিল (যেখানে সবচেয়ে বেশি প্রয়োজন)",
        don_cause_edu: "শিক্ষা সহায়তা",
        don_cause_med: "চিকিৎসা সহায়তা",
        don_cause_food: "খাদ্য সহায়তা",
        don_cause_disaster: "দুর্যোগ সহায়তা",
        don_personal_info: "ব্যক্তিগত তথ্য",
        don_name: "পুরো নাম",
        don_email: "ইমেইল এড্রেস",
        don_phone: "ফোন নাম্বার",
        don_btn_submit: "অনুদান প্রদান করুন",
        don_pay_methods_title: "অফলাইন পেমেন্ট পদ্ধতি",
        don_pay_desc: "আপনি সেন্ড মানি বা ক্যাশ ইন ব্যবহার করে সরাসরি নিচের অ্যাকাউন্টগুলোতে আপনার অনুদান পাঠাতে পারেন।",
        don_bkash: "বিকাশ (পার্সোনাল)",
        don_nagad: "নগদ (পার্সোনাল)",
        don_bank: "ব্যাংক অ্যাকাউন্ট",
        don_bank_name: "ব্যাংক: ইসলামী ব্যাংক বাংলাদেশ পিএলসি",
        don_bank_acc_name: "হিসাবের নাম: এম.আর ওয়েলফেয়ার ফাউন্ডেশন",
        vol_header_title: "স্বেচ্ছাসেবক হোন",
        vol_header_sub: "আমাদের নিবেদিত দলে যোগ দিন এবং সুবিধাবঞ্চিতদের জীবনে বাস্তব পরিবর্তন আনুন।",
        vol_info_title: "কেন আমাদের সাথে যোগ দেবেন?",
        vol_info_desc1: "স্বেচ্ছাসেবক হওয়া মানে শুধু আপনার সময় দেওয়া নয়; এটি আপনার হৃদয় উজাড় করে দেওয়া। আপনি যখন এম.আর ওয়েলফেয়ার ফাউন্ডেশনে যোগ দেন, তখন আপনি এমন একটি পরিবারের অংশ হয়ে যান যা অভাবীদের মুখে হাসি ফোটাতে অক্লান্ত পরিশ্রম করে।",
        vol_benefit_1_title: "জীবনে প্রভাব ফেলুন",
        vol_benefit_1_desc: "সরাসরি শিক্ষা, খাদ্য এবং চিকিৎসা সহায়তা প্রদানকারী প্রকল্পগুলোতে অবদান রাখুন।",
        vol_benefit_2_title: "শিখুন এবং বড় হোন",
        vol_benefit_2_desc: "নেতৃত্বের দক্ষতা, দলবদ্ধ কাজ বিকাশ করুন এবং মূল্যবান অভিজ্ঞতা অর্জন করুন।",
        vol_benefit_3_title: "নেটওয়ার্ক তৈরি করুন",
        vol_benefit_3_desc: "সমাজকর্মে আপনার মতো আগ্রহী এবং সমমনা মানুষের সাথে পরিচিত হোন।",
        vol_form_title: "আমাদের টিমে যোগ দিন",
        vol_name: "পুরো নাম লিখুন",
        vol_phone: "০১৭XXXXXXXX",
        vol_email: "আপনার ইমেইল",
        vol_address: "আপনার বর্তমান ঠিকানা",
        vol_reason: "আপনার সম্পর্কে কিছু বলুন এবং আপনি কেন স্বেচ্ছায় কাজ করতে চান তা জানান...",
        vol_btn_submit: "আবেদন জমা দিন",
        gal_header_title: "আমাদের ফটো গ্যালারি",
        gal_header_sub: "আমাদের ক্রিয়াকলাপ, প্রচারাভিযান এবং আমরা সমাজে যে হাসি ফোটাতে সাহায্য করেছি তার এক ঝলক।",
        gal_cat_food: "খাদ্য বিতরণ",
        gal_cat_medical: "ফ্রি মেডিকেল ক্যাম্প",
        gal_cat_edu: "শিক্ষা সহায়তা",
        gal_cat_community: "সামাজিক উন্নয়ন",
        gal_cat_disaster: "দুর্যোগ সহায়তা",
        gal_cat_smiles: "হাসি ছড়ানো",
        gal_btn_load: "আরও ছবি দেখুন",
        gal_vol_tag: "আমাদের হিরোরা",
        gal_vol_title: "আমাদের স্বেচ্ছাসেবকদের কাছ থেকে শুনুন",
        gal_vol_desc: "দেখুন কীভাবে আমাদের নিবেদিত দল সরাসরি মাঠে কাজ করে প্রভাব ফেলছে এবং হাজারো মানুষের মুখে হাসি ফোটাচ্ছে।",
        gal_more_title: "আরও কিছু মুহূর্ত",
        gal_join_title: "আমাদের কমিউনিটি গ্রুপে যুক্ত হোন",
        gal_join_desc: "সর্বশেষ আপডেট, ইভেন্টের খবর পেতে এবং আমাদের ক্রমবর্ধমান পরিবারের অংশ হতে আপনার ইমেইল দিয়ে যুক্ত হোন।",
        gal_join_placeholder: "আপনার ইমেইল এড্রেস লিখুন",
        gal_join_btn: "যুক্ত হোন",
        nav_blog: "খবর",
        blog_header_title: "সর্বশেষ খবর এবং আপডেট",
        blog_header_sub: "সারাদেশে আমাদের সাম্প্রতিক প্রচারাভিযান, গল্প এবং কার্যক্রম সম্পর্কে অবগত থাকুন।",
        blog_1_title: "সিলেটে ব্যাপক খাদ্য বিতরণ",
        blog_1_desc: "আমরা সম্প্রতি সিলেট অঞ্চলে ভয়াবহ বন্যায় ক্ষতিগ্রস্ত ৫০০টিরও বেশি পরিবারকে জরুরি খাদ্য সহায়তা প্রদান করেছি।",
        blog_2_title: "পিরোজপুরে ফ্রি মেডিকেল ক্যাম্প",
        blog_2_desc: "আমাদের মেডিকেল দল পিরোজপুরে দুই দিনের একটি ফ্রি হেলথ ক্যাম্পের আয়োজন করে, যেখানে ১,০০০-এর বেশি রোগীকে চিকিৎসাসেবা দেওয়া হয়।",
        blog_3_title: "শীতবস্ত্র বিতরণ",
        blog_3_desc: "প্রচণ্ড শীত থেকে অসহায় মানুষদের রক্ষা করতে আমাদের স্বেচ্ছাসেবকরা উত্তরাঞ্চলের বেশ কয়েকটি জেলায় শীতবস্ত্র ও কম্বল বিতরণ করেছেন।",
        blog_btn_read: "বিস্তারিত পড়ুন",
        contact_header_title: "যোগাযোগ করুন",
        contact_header_sub: "আপনার কি কোনো প্রশ্ন আছে বা আমাদের সাথে যুক্ত হতে চান? আমরা আপনার কথা শুনতে চাই।",
        contact_info_title: "যোগাযোগের ঠিকানা",
        contact_info_desc: "আপনি অনুদান দিতে, স্বেচ্ছাসেবক হতে বা আমাদের সাথে কাজ করতে চাইলে, নির্দ্বিধায় একটি বার্তা পাঠান বা আমাদের অফিসে আসুন।",
        contact_office: "অফিসের ঠিকানা",
        contact_phone: "ফোন নাম্বার",
        contact_email: "ইমেইল এড্রেস",
        contact_social: "আমাদের ফলো করুন",
        contact_form_title: "আমাদের বার্তা পাঠান",
        contact_name_ph: "আপনার নাম",
        contact_email_ph: "আপনার ইমেইল",
        contact_subject_ph: "বিষয় (Subject)",
        contact_msg_ph: "আপনার বার্তা এখানে লিখুন...",
        contact_btn_submit: "বার্তা পাঠান",
        work_click_hint: "(বিস্তারিত জানতে কার্ডগুলোতে ক্লিক করুন)",
        modal_edu_detail: "প্রতিটি শিশুর শিক্ষার অধিকার রয়েছে। এই প্রকল্পের মাধ্যমে, আমরা যেসব শিশু স্কুলে যেতে অক্ষম তাদের বিনামূল্যে বই, পোশাক, স্কুলের বেতন এবং শিক্ষা সামগ্রী প্রদান করি। আপনার সহায়তায় একটি শিশুর উজ্জ্বল ভবিষ্যৎ গড়তে সাহায্য করতে পারে।",
        modal_med_detail: "স্বাস্থ্যসেবা একটি মৌলিক অধিকার, তবুও অনেকেই চিকিৎসার অভাবে মারা যায়। আমরা গ্রামাঞ্চলে বিনামূল্যে স্বাস্থ্য ক্যাম্পের আয়োজন করি, জীবন রক্ষাকারী ওষুধ সরবরাহ করি এবং অত্যন্ত দরিদ্র রোগীদের অস্ত্রোপচারের খরচ বহন করি। জীবন বাঁচাতে আমাদের পাশে দাঁড়ান।",
        modal_food_detail: "কেউ যেন ক্ষুধার্ত অবস্থায় না ঘুমায়। আমরা পথশিশু এবং অসহায় বয়স্ক মানুষের জন্য প্রতিদিন খাদ্য বিতরণ কর্মসূচি পরিচালনা করি। রমজান মাসে আমরা দুর্বল পরিবারগুলোকে মাসব্যাপী মুদি সামগ্রী সরবরাহ করি।",
        modal_disaster_detail: "বাংলাদেশ বন্যা ও ঘূর্ণিঝড়ের মতো প্রাকৃতিক দুর্যোগপ্রবণ এলাকা। আমাদের জরুরি সহায়তা দল দ্রুত ক্ষতিগ্রস্ত এলাকায় পৌঁছে নিরাপদ পানীয় জল, শুকনো খাবার, জরুরি আশ্রয় এবং চিকিৎসা সহায়তা প্রদান করে।",
        ab_mission_title: "আমাদের লক্ষ্য (Mission)",
        ab_mission_desc: "শিক্ষা, স্বাস্থ্যসেবা এবং টেকসই জীবনযাত্রা কর্মসূচির মাধ্যমে সুবিধাবঞ্চিত জনগোষ্ঠীকে ক্ষমতায়ন করা, যাতে সবার জন্য মর্যাদা এবং সমান সুযোগ নিশ্চিত হয়।",
        ab_vision_title: "আমাদের রূপকল্প (Vision)",
        ab_vision_desc: "এমন একটি দারিদ্র্যমুক্ত, শিক্ষিত এবং সহানুভূতিশীল সমাজের স্বপ্ন দেখা যেখানে প্রতিটি মানুষের মৌলিক অধিকার এবং উন্নতির সুযোগ রয়েছে।",
        ab_founder_name: "[প্রতিষ্ঠাতার নাম এখানে]",
        ab_founder_title: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
        ab_msg_title: "প্রতিষ্ঠাতার বার্তা",
        ab_msg_desc: "\"আমাদের যাত্রা শুরু হয়েছিল একটি সাধারণ বিশ্বাস নিয়ে: কেউ যেন পিছিয়ে না থাকে। এম.আর ওয়েলফেয়ার ফাউন্ডেশন শুধু একটি সংগঠন নয়; এটি সুবিধাবঞ্চিতদের মুখে হাসি ফোটাতে একসাথে কাজ করা একদল সহানুভূতিশীল মানুষের পরিবার। একতাবদ্ধ হয়ে আমরা এমন একটি সমাজ গড়তে পারি যেখানে মানবতার জয় হবে।\"",
        ab_legal_title: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক নিবন্ধিত",
        ab_legal_reg: "নিবন্ধন নং: এনজিও-XXXX/২০২৬",
        ab_team_tag: "আমাদের সদস্যবৃন্দ",
        ab_team_title: "আমাদের টিম",
        team_tab_exec: "এক্সিকিউটিভ বোর্ড",
        team_tab_oper: "অপারেশনাল টিম",
        team_exec_1_name: "আব্দুল মোতালেব মঈন",
        team_exec_1_role: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
        team_exec_2_name: "জেনারেল সেক্রেটারি নাম",
        team_exec_2_role: "সাধারণ সম্পাদক",
        team_exec_3_name: "কোষাধ্যক্ষের নাম",
        team_exec_3_role: "কোষাধ্যক্ষ",
        team_oper_1_name: "প্রজেক্ট ডিরেক্টর নাম",
        team_oper_1_role: "প্রজেক্ট ডিরেক্টর",
        team_oper_2_name: "ভলান্টিয়ার সমন্বয়ক নাম",
        team_oper_2_role: "স্বেচ্ছাসেবক সমন্বয়ক",
        team_oper_3_name: "মিডিয়া হেড নাম",
        team_oper_3_role: "জনসংযোগ ও মিডিয়া প্রধান",
        btn_read_more: "বিস্তারিত পড়ুন",
        ab_mission_short: "শিক্ষা, স্বাস্থ্যসেবা এবং টেকসই জীবনযাত্রা কর্মসূচির মাধ্যমে সুবিধাবঞ্চিত জনগোষ্ঠীকে ক্ষমতায়ন করা...",
        ab_vision_short: "এমন একটি দারিদ্র্যমুক্ত, শিক্ষিত এবং সহানুভূতিশীল সমাজের স্বপ্ন দেখা যেখানে প্রতিটি মানুষের...",
        ab_mission_long: "আমাদের চূড়ান্ত লক্ষ্য হলো ব্যাপক শিক্ষা, সহজলভ্য স্বাস্থ্যসেবা এবং টেকসই জীবনযাত্রার কর্মসূচির মাধ্যমে সুবিধাবঞ্চিত ও প্রান্তিক জনগোষ্ঠীকে ক্ষমতায়ন করা। আমরা দৃঢ়ভাবে বিশ্বাস করি যে প্রতিটি মানুষেরই মর্যাদা, সম্মান এবং সমান সুযোগ নিয়ে বাঁচার অধিকার রয়েছে। একটি সহায়ক পরিবেশ তৈরি করে এবং প্রয়োজনীয় সংস্থান প্রদানের মাধ্যমে, আমরা দারিদ্র্যের চক্র ভাঙতে এবং এমন একটি ভিত্তি তৈরি করতে চাই যেখানে ভবিষ্যৎ প্রজন্ম উন্নতি করতে পারে এবং স্বাধীন, সফল জীবনযাপন করতে পারে।",
        ab_vision_long: "আমরা এমন একটি বিশ্বের স্বপ্ন দেখি যা দারিদ্র্যমুক্ত, উচ্চশিক্ষিত এবং গভীরভাবে সহানুভূতিশীল। এমন একটি সমাজ যেখানে কেউ ক্ষুধার্ত অবস্থায় ঘুমাতে যাবে না, যেখানে প্রতিটি শিশুর তাদের পটভূমি নির্বিশেষে মানসম্মত শিক্ষার অধিকার রয়েছে এবং যেখানে সবার জন্য মৌলিক মানবাধিকার নিশ্চিত করা হয়। আমরা সহানুভূতি এবং পারস্পরিক সমর্থনের দ্বারা পরিচালিত একটি বিশ্ব সম্প্রদায় তৈরি করার চেষ্টা করি, যা নিশ্চিত করে যে প্রতিটি মানুষের তার সর্বোচ্চ সম্ভাবনায় পৌঁছানোর এবং বিশ্বে ইতিবাচক অবদান রাখার একটি ন্যায্য সুযোগ রয়েছে।",
        
        
    }
};

/* ====================================
   3. Language Toggle Logic
==================================== */
const langToggleBtn = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("site_lang") || "en";

function setLanguage(lang) {
    // Text elements
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // Input Placeholders 
    document.querySelectorAll("[data-lang-placeholder]").forEach(element => {
        const key = element.getAttribute("data-lang-placeholder");
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    if (langToggleBtn) { // Safety check
        if (lang === "bn") {
            langToggleBtn.innerText = "English";
            document.body.classList.add("bangla-active");
        } else {
            langToggleBtn.innerText = "বাংলা";
            document.body.classList.remove("bangla-active");
        }
    }
    localStorage.setItem("site_lang", lang);
}

// Initial Load
setLanguage(currentLang);

// Toggle Click Event
if (langToggleBtn) { // Safety check
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "bn" : "en";
        setLanguage(currentLang);
    });
}

/* ====================================
   4. Dark Mode Toggle Logic
==================================== */
const themeToggleBtn = document.getElementById("theme-toggle");
let isDarkMode = localStorage.getItem("dark_mode") === "true";

function applyTheme(dark) {
    if (dark) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    if (themeToggleBtn) { // Safety check
        const themeIcon = themeToggleBtn.querySelector("i");
        if (themeIcon) {
            if (dark) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            } else {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
            }
        }
    }
}

// Initial Load
applyTheme(isDarkMode);

// Toggle Click Event
if (themeToggleBtn) { // Safety check
    themeToggleBtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem("dark_mode", isDarkMode);
        applyTheme(isDarkMode);
    });
}