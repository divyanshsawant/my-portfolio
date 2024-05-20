const logotext = "Home";
const meta = {
    title: "Projects",
    description: "I’m Divyansh Sawant studying at MIT Academy of Engineering",
};

const introdata = {
    title: "I’m Divyansh Sawant",
    animated: {
        first: "Studying at MIT Academy of Engineering, Alandi",
        //second: "I love programming",
        third: "An aspiring fullstack Developer",
    },
    description: "Welcome to My Portfolio!",
    sub_desc:" I\'m a Computer Science student currently pursuing my B.Tech from MITAOE. I\'m particularly passionate about software development and have a strong interest in artificial intelligence.  In this portfolio, you\'ll find projects that showcase my abilities in programming, problem-solving, and creative thinking.",
    your_img_url: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716213319/Me/a8aaof41f2c9rxh0gord.jpg"
   ,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a B.Tech Computer Science student at the MIT Academy of Engineering (MITAOE) in Pune, India, currently on track to graduate in 2024. My passion for technology fuels my exploration of various computer science fields, particularly Artificial Intelligence, Machine Learning, Fullstack Development. To put theory into practice, I've actively participated in projects like building projects using Node.js, Mongoose.js, and Javascript. These experiences have helped me develop strong skills in  Programming Languages, Frameworks, Databases.  I'm always eager to learn and collaborate, so feel free to reach out if you share my passion for technology!",
};

const certificationData ={
    title : 'Certifications'
};
const worktimeline = [{
        jobtitle: "Computer Networks",
        // where: "YAdfi",
        // date: "2020",
    },
    {
        jobtitle: "Operating System",
        // where: "Jamalya",
        // date: "2019",
    },
    {
        jobtitle: "Data Structures",
        // where: "Jamalya",
        // date: "2019",
    },
    {
        jobtitle: "Database Management System",
        // where: "Jamalya",
        // date: "2019",
    },
    
];

const skills = [{
        name: "MongoDB",
        value: 90,
    },
    {
        name: "Node.js",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 75,
    },
    {
        name: "C++",
        value: 85,
    },
];

const services = [{
        title: "Blogs on Gen-AI",
        description: " Exploring Generative AI (Gen AI), where machines learn to create new content. We'll discuss its potential to revolutionize creative fields and analyze its impact on various industries.",
    },
    {
        title: "Generative AI: Beyond Science Fiction — Real-World Applications Shaping Our Future",
        description: "Skilled robotics engineer excelling in AI and autonomous systems development, adept at optimizing algorithms for enhanced robotic functionality and operational efficiency..",
    },
    {
        title: "From Dream to Reality: The Evolution of Generative Models and Their Impact on the World",
        description: "Generative models have evolved drastically from hidden Markov models in the 1950s to powerful architectures like GANs in the 2010s, impacting diverse fields. Ethical considerations, such as deepfakes and job displacement, are crucial as these models advance.",
    },
    {
        title: "Blurring the Lines Between Real and Imagined: The Fusion of Generative AI and Augmented Reality",
        description: "The fusion of generative AI and augmented reality creates immersive experiences. AR and AI in smartphones and innovative projects like IKEA's app showcase their potential in enhancing user interactions.",
    },
];
//certification start
const cert = [{
    img: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217496/Certifications/NPTELzii35zis5k3jbhaiahwt.jpg",
    description: "NPTEL Industrial IOT 4.0",
    link: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217496/Certifications/NPTELzii35zis5k3jbhaiahwt.jpg",
},
{
    img: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217490/Certifications/Azure900ktavqzdqurf0aratxnys.jpg",
    description: "Microsoft Azure AI 900",
    link: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217490/Certifications/Azure900ktavqzdqurf0aratxnys.jpg",
},
{
    img: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217487/Certifications/AWSCloudArchitecting6t87bvhifuwbbjiykgm.jpg",
    description: "AWS Academy Cloud Architecting.",
    link: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217487/Certifications/AWSCloudArchitecting6t87bvhifuwbbjiykgm.jpg",
},
{
    img: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217482/Certifications/CloudFoundationsecha7ej3t5nwjoxgy8dr.jpg",
    description: "AWS Academy Cloud Foundations",
    link: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716217482/Certifications/CloudFoundationsecha7ej3t5nwjoxgy8dr.jpg",
},
{
    img: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716218138/Certifications/CiscoNetworkingzluobb8occn3nh9owvc4.jpg",
    description: "CISCO Networking Essentials.",
    link: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716218138/Certifications/CiscoNetworkingzluobb8occn3nh9owvc4.jpg",
},
{
    img: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716218495/Certifications/ciscoCyberSecum1dkctlwc6be5mvuc3mz.jpg",
    description: "CISCO Networking Essentials.",
    link: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1716218138/Certifications/CiscoNetworkingzluobb8occn3nh9owvc4.jpg",
},
];

//certification end

const dataportfolio = [{
        img: "https://res.cloudinary.com/dsgq5hscg/image/upload/v1712255259/ysddwoyo1xx71rpntfdz.jpg",
        description: "Personal Portfolio site implemented using HTML,CSS,JAVASCRIPT",
        link: "https://divyanshsawant.github.io/myfirstsite",
    },
    {
        img: "https://images.unsplash.com/photo-1604872441539-ef1db9b25f92?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Exam Proctoring System.",
        link: "https://github.com/divyanshsawant/onlineProctoringExam",
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "AI-powered chatbot tackles customer service overload by automatically answering FAQs, freeing up resources and offering users a faster, more efficient way to get information.",
        link: "https://github.com/divyanshsawant/AI-Chatbot-Team30-SE",
    },
    {
        img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "VideoTube is a YouTube-inspired web app built from scratch using Node.js, Mongoose.js, and Javascript. Users can create accounts, subscribe to channels, and manage their watch history, offering a familiar video experience with a custom twist.",
        link: "https://github.com/divyanshsawant/YTBackend",
        // https://res.cloudinary.com/dsgq5hscg/image/upload/v1716218495/Certifications/ciscoCyberSecum1dkctlwc6be5mvuc3mz.jpg
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "  divyanshsawant [at] gmail [dot] com",
    YOUR_EMAIL_id: "divyanshsawant@gmail.com",
    YOUR_FONE: "+91-800-3732-520",
    description: "Let's chat! I'm always interested in new opportunities and collaborations. Feel free to reach out using the form below or connect with me on LinkedIn. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_y3p09qv",
    YOUR_TEMPLATE_ID: "template_tssru3s",
    YOUR_USER_ID: "2HRwYlvgVLRez1eeC",
};

const socialprofils = {
    github: "https://github.com/divyanshsawant",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/divyansh-sawant-749369146/",
    twitter: "https://twitter.com/iDivyansh19",
};
export {
    meta,
    cert,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};