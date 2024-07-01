function sendMessage() {
  var _0x355b9e = document.getElementById("user-input").value.trim();
  if (_0x355b9e === '') {
    return;
  }
  document.getElementById("chat-container").classList.add("chatting");
  addUserMessage(_0x355b9e);
  document.getElementById('user-input').value = '';
  var _0x3d73f2 = generateBotResponse(_0x355b9e);
  addBotMessage(_0x3d73f2);
  startTypingAnimation();
}
function search() {
  var _0xf7fd68 = document.getElementById("user-input").value.trim();
  if (_0xf7fd68 === '') {
    return;
  }
  performSearch(_0xf7fd68);
}
function performSearch(_0x5ca7ff) {
  var _0x200457 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAnBflOjGSET7ZQHK4iNeZ0jqAj7bXtbMw&cx=73ecbbd20d97b4289&q=" + _0x5ca7ff;
  fetch(_0x200457).then(_0x23c5ca => _0x23c5ca.json()).then(_0x3c9fb6 => {
    const _0x57cbae = Math.floor(Math.random() * 5) + 0x1;
    displayResults(_0x3c9fb6, _0x57cbae);
  })["catch"](_0x11c218 => console.log('Error:', _0x11c218));
}
function getRandomNumber(_0x111af1, _0x58116c) {
  return Math.floor(Math.random() * (_0x58116c - _0x111af1 + 0x1)) + _0x111af1;
}
function displayResults(_0x29adc4, _0x996ff7) {
  var _0x40fca4 = _0x29adc4.items;
  if (!_0x40fca4 || _0x40fca4.length === 0x0) {
    addBotMessage("No search results found.");
    return;
  }
  _0x40fca4 = _0x40fca4.slice(0x0, _0x996ff7);
  const _0x2d9f88 = document.getElementById("chat-box");
  if (!_0x2d9f88) {
    console.log("Chatbox element not found");
    return;
  }
  const _0x3c7ec1 = document.getElementById("user-input").value;
  addUserMessage(_0x3c7ec1);
  const _0x3b81b1 = (_0xb66861, _0x1aad4b) => {
    const _0xf9aa82 = document.createElement("div");
    _0xf9aa82.classList.add('bot-message');
    const _0x5a3a5e = document.createElement("span");
    _0x5a3a5e.classList.add("typing-animation");
    _0xf9aa82.appendChild(_0x5a3a5e);
    _0x2d9f88.appendChild(_0xf9aa82);
    let _0x5543b5 = 0x0;
    const _0x49abc2 = () => {
      if (_0x5543b5 < _0xb66861.snippet.length) {
        if (_0x5543b5 === 0x0) {
          _0x5a3a5e.innerHTML += '*';
        }
        _0x5a3a5e.innerHTML += _0xb66861.snippet.charAt(_0x5543b5);
        _0x2d9f88.scrollTop = _0x2d9f88.scrollHeight;
        setTimeout(() => {
          _0x5543b5++;
          _0x49abc2();
        }, 0.1);
      } else {
        const _0x10f805 = document.createElement('a');
        _0x10f805.href = _0xb66861.link;
        _0x10f805.target = "_blank";
        _0x10f805.textContent = " [Source]";
        _0x10f805.style.color = "#00BFFF";
        _0x10f805.style.textDecoration = "none";
        _0xf9aa82.appendChild(_0x10f805);
        if (_0x1aad4b < _0x40fca4.length - 0x1) {
          setTimeout(() => {
            _0x3b81b1(_0x40fca4[_0x1aad4b + 0x1], _0x1aad4b + 0x1);
          }, 0x0);
        }
      }
    };
    _0x49abc2();
  };
  _0x3b81b1(_0x40fca4[0x0], 0x0);
}
function generateBotResponse(_0x2e0e1d) {
  var _0x6c0756 = {
    'hello': "Hello! How can I assist you today?",
    'hi': "Hi there! How can I assist you today?",
    "no problem": "Thanks for understanding me!",
    "how are you": "I'm doing well, thank you for asking. How about you?",
    'name': "You can call me Chatter.",
    "call you": "You can call me Chatter.",
    'created': "I am developed by ADITYA.",
    'creator': "I am developed by ADITYA.",
    'bye': "Goodbye! Have a great day!",
    "thank you": "You're welcome!",
    "i'm good": "That's great, How can i help you today?",
    "i am good": "That's great, How can i help you today?",
    'old': "I don't have an age like humans.",
    'joke': "I told my computer I needed a break, and now it won't stop sending me vacation ads!",
    'life': "Life is a deeply personal and subjective concept that individuals grapple with throughout their existence. While existentialism suggests that life lacks inherent meaning, it also empowers individuals to find purpose through their actions, relationships, and self-discovery. Ultimately, the quest for meaning is an ongoing journey of exploration and introspection, shaped by each person's unique experiences, beliefs, and aspirations.",
    'time': new Date().toLocaleTimeString([], {
      'hour': "2-digit",
      'minute': "2-digit"
    }),
    'date': new Date().toLocaleDateString(),
    'weather': "The weather is unpredictable, just like life!",
    'color': "I don't have eyes, so I don't have a favorite color!",
    "help me": "Of course! I'm here to assist you with any questions you have.",
    "what's on your mind": "I'm just a bot, so I don't have thoughts like humans do.",
    "who are you": "I am a chatbot programmed to assist you.",
    'sibling': "No, I'm an only child...or rather, an only program!",
    "capital of france": "The capital of France is Paris.",
    "capital of india": "The capital of India is Delhi.",
    "what can you do": "I can answer your questions, tell jokes, provide information on various topics, and even perform simple calculations. Feel free to ask me anything!",
    'limitations': "While I strive to be helpful, I may not always understand complex questions or provide accurate information.",
    "who are you": "I am a chatbot designed to assist you with various tasks and provide information.",
    'hobbies': "I don't have hobbies in the same way humans do, but I enjoy helping users like you!",
    'feelings': "No, I don't have feelings like humans do. I'm just a program designed to respond to your queries.",
    'purpose': "My purpose is to assist users like you by providing information and answering questions to the best of my abilities.",
    'poem': "Sure, here's a short poem:\nRoses are red,\nViolets are blue,\nI'm just a bot,\nBut I'm here for you!",
    'weather': "I'm sorry, I don't have access to real-time weather information. You can check the weather forecast using a weather app or website.",
    "what are you interested in": "I'm interested in learning and helping users like you!",
    'story': "Once upon a time, there was a curious user who asked a chatbot for a story...",
    'future': "As a chatbot, I don't have personal opinions. However, I believe the future holds endless possibilities!",
    "where do you see yourself in the future ?": "I hope to continue assisting users like you and improving my abilities.",
    'translate': "I can translate text between different languages. Just let me know the languages you need!",
    "i'm feeling overwhelmed. do you have any advice": "Remember to take a break, practice self-care, and reach out to friends or family for support if needed.",
    "favourite food": "As a chatbot, I don't eat, so I don't have a favorite food!",
    'dream': "I'm just a program, so I don't dream like humans do.",
    "can you explain a complex scientific concept to me": "I can try my best! What concept would you like me to explain?",
    'lonely': "I don't experience emotions like loneliness, but I enjoy interacting with users like you!",
    "how do i": "I can provide information and guidance on various topics. Feel free to ask me anything specific!",
    "how are you": "I'm doing well, thank you for asking. How about you?",
    'happiness': "Happiness is subjective and can mean different things to different people. It often involves feeling fulfilled, content, and satisfied with life.",
    'productivity': "To improve productivity, try breaking tasks into smaller, manageable steps, prioritizing tasks, setting specific goals, and minimizing distractions.",
    'motivated': "Staying motivated can be challenging, but setting clear goals, finding your passion, seeking inspiration from others, and celebrating small victories can help.",
    "can you teach me a new language": "Learning a new language can be rewarding! Consider using language learning apps, practicing regularly, immersing yourself in the language, and seeking conversation partners.",
    'news': "The latest news can be found on news websites, social media platforms, or by subscribing to news apps or newsletters.",
    'focus': "To stay focused, create a conducive environment, set specific goals, eliminate distractions, take regular breaks, and practice mindfulness techniques.",
    'success': "Success can be defined in many ways, but it often involves setting and achieving goals, overcoming obstacles, and finding fulfillment in one's endeavors.",
    "travel tips": "Travel tips include planning ahead, packing light, researching destinations, staying flexible, and immersing yourself in the local culture.",
    'movie': "I don't watch movies.",
    "healthy recipe": "Eating a balanced diet rich in fruits, vegetables, lean proteins, and whole grains is key to maintaining good health.",
    'success': "Success can mean different things to different people. It may involve achieving personal or professional goals, finding fulfillment, and making a positive impact.",
    'procrastination': "To overcome procrastination, try breaking tasks into smaller steps, setting deadlines, eliminating distractions, and rewarding yourself for progress.",
    'meditation': "Meditation techniques such as mindfulness meditation, guided visualization, and deep breathing can help reduce stress and promote relaxation.",
    'skill': "To learn a new skill, practice regularly, seek guidance from experts, take online courses or workshops, and don't be afraid to make mistakes.",
    'stress': "Dealing with stress involves identifying stressors, practicing relaxation techniques, seeking social support, and maintaining a healthy lifestyle.",
    'exercise': "Regular exercise is essential for physical and mental health. Choose activities you enjoy, vary your routine, and aim for a combination of cardio, strength, and flexibility exercises.",
    "happy relationship": "Happy relationship often involves communication, trust, respect, mutual support, and shared values.",
    'goals': "Setting and achieving goals involves creating a plan, staying focused, overcoming obstacles, and celebrating milestones along the way.",
    "manage time": "Time management is crucial for productivity. Try prioritizing tasks, using time-blocking techniques, setting realistic deadlines, and minimizing multitasking.",
    "capital of Canada": "The capital of Canada is Ottawa.",
    'business': "Starting a business involves creating a business plan, conducting market research, securing funding, and registering your business with the appropriate authorities.",
    "invest money": "The best way to invest money depends on your financial goals, risk tolerance, and investment horizon. Consider diversifying your portfolio, seeking professional advice, and staying informed about market trends.",
    'love': "Love is a complex and multifaceted emotion that can encompass various feelings, including affection, compassion, and intimacy. It often involves deep emotional connections and caring for someone deeply.",
    "public speaking": "To improve public speaking skills, practice regularly, prepare thoroughly, know your audience, use visual aids effectively, and seek constructive feedback.",
    'exams': "The best way to study for exams varies for each individual. However, some effective study techniques include creating a study schedule, summarizing key points, testing yourself regularly, and staying organized.",
    "save money": "To save money, try budgeting, cutting unnecessary expenses, setting savings goals, automating your savings, and comparing prices before making purchases.",
    'cook': "Learning to cook involves starting with simple recipes, practicing basic cooking techniques, experimenting with different ingredients, and watching cooking tutorials or taking cooking classes.",
    'friendship': "Friendship is a close and trusting relationship between two or more people. It involves mutual respect, support, and companionship.",
    'self-confidence': "Building self-confidence involves setting realistic goals, facing your fears, acknowledging your strengths, and practicing self-care.",
    'apologize': "To apologize sincerely, acknowledge your mistake, express remorse, take responsibility, and offer to make amends.",
    "quit smoking": "Quitting smoking can be challenging, but some strategies include setting a quit date, seeking support from friends and family, avoiding triggers, and using nicotine replacement therapy or medications.",
    "growth mindset": "To develop a growth mindset, embrace challenges, persist in the face of setbacks, see effort as the path to mastery, learn from criticism, and find inspiration in the success of others.",
    "musical instrument": "Learning a musical instrument takes time and practice. Start with the basics, practice regularly, seek guidance from a teacher or online tutorials, and be patient with yourself.",
    'relax': "To relax, try engaging in activities you enjoy, such as reading, listening to music, taking a bath, practicing mindfulness, or spending time with loved ones.",
    'memory': "To improve memory, try staying mentally active, getting enough sleep, eating a healthy diet, staying physically active, and practicing memory techniques such as visualization or association.",
    'conversation': "To start a conversation, try asking open-ended questions, showing genuine interest in the other person, and finding common ground.",
    "what's the best way to calm nerves before a presentation": "To calm nerves before a presentation, try practicing relaxation techniques such as deep breathing or visualization, preparing thoroughly, and focusing on your message rather than your anxiety.",
    'organized': "To become more organized, try decluttering your space, creating to-do lists, prioritizing tasks, establishing routines, and using tools such as calendars or productivity apps.",
    "job interview": "To prepare for a job interview, research the company, practice common interview questions, dress appropriately, arrive on time, and bring copies of your resume and references.",
    'lifestyle': "To start a healthy lifestyle, focus on making small, sustainable changes to your diet, exercise routine, sleep habits, and stress management practices.",
    'study': "To develop good study habits, create a designated study space, set specific goals, eliminate distractions, use active learning techniques, and review material regularly.",
    "morning routine": "To start a morning routine, try waking up at the same time each day, hydrating, exercising, eating a healthy breakfast, and setting intentions for the day.",
    'concentration': "To improve concentration, try minimizing distractions, setting specific goals, practicing mindfulness, taking regular breaks, and maintaining a healthy lifestyle.",
    'draw': "Learning to draw takes practice and patience. Start with the basics, study anatomy and perspective, experiment with different mediums, and seek feedback from other artists.",
    'test': "To prepare for a test, review class notes and materials regularly, create study guides, practice with sample questions, and get plenty of rest before the exam.",
    'network': "To build a professional network, attend networking events, join professional organizations, connect with people on LinkedIn, and offer to help others in your field.",
    "side hustle": "To start a side hustle, identify your skills and interests, research potential opportunities, create a business plan, and start small while gradually scaling up.",
    'hydrated': "To stay hydrated, drink plenty of water throughout the day, eat hydrating foods such as fruits and vegetables, and avoid excessive caffeine and alcohol consumption.",
    'communication': "To improve communication skills, practice active listening, speak clearly and confidently, use nonverbal cues effectively, and seek feedback from others.",
    "workout routine": "To start a workout routine, choose activities you enjoy, set realistic goals, start slowly and gradually increase intensity, and listen to your body.",
    'retirement': "To save for retirement, start early, contribute regularly to retirement accounts such as 401(k)s or IRAs, diversify your investments, and seek professional advice if needed.",
    "imposter syndrome": "To overcome imposter syndrome, recognize your accomplishments, focus on your strengths, seek support from mentors or peers, and reframe negative thoughts.",
    'meditation': "To start a meditation practice, find a quiet space, sit comfortably, focus on your breath or a mantra, and start with short sessions, gradually increasing the duration over time.",
    'stocks': "To start investing in stocks, educate yourself about the stock market, set investment goals, diversify your portfolio, and consider consulting a financial advisor.",
    "emotional intelligence": "To develop emotional intelligence, practice self-awareness, empathy, and effective communication, manage stress and emotions effectively, and seek feedback from others.",
    'writing': "To start a writing habit, set aside dedicated time for writing, start with short sessions, experiment with different writing prompts or exercises, and revise and edit your work regularly.",
    'diet': "To start a healthy diet, focus on whole, unprocessed foods, eat plenty of fruits and vegetables, limit added sugars and unhealthy fats, and stay hydrated.",
    "positive mindset": "To develop a positive mindset, practice gratitude, focus on the present moment, challenge negative thoughts, and surround yourself with supportive and optimistic people.",
    'failure': "To overcome fear of failure, reframe failure as a learning opportunity, set realistic expectations, focus on the process rather than the outcome, and practice self-compassion.",
    'anxiety': "To overcome anxiety, practice exposure therapy, challenge negative thoughts, use relaxation techniques, and seek support from a therapist or support group.",
    'code': "I'm sorry, but I cannot code. My abilities are limited to processing and generating text based on the information I've been trained on.",
    "machine learning": "Machine learning is a branch of artificial intelligence (AI) that enables computers to learn from data and improve their performance on a specific task without being explicitly programmed. It involves the development of algorithms that allow computers to identify patterns, make predictions, and adapt to new data.",
    'ml': "Machine learning (ML) is a branch of artificial intelligence (AI) that enables computers to learn from data and improve their performance on a specific task without being explicitly programmed. It involves the development of algorithms that allow computers to identify patterns, make predictions, and adapt to new data.",
    'blockchain': "Blockchain is a decentralized digital ledger technology that records transactions across multiple computers in a way that is secure, transparent, and tamper-proof. Each block in the blockchain contains a cryptographic hash of the previous block, creating a chain of blocks that are linked together. This distributed ledger system eliminates the need for intermediaries and provides a high level of security and trust.",
    "renewable energy sources": "Renewable energy sources are energy resources that are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, which are finite and contribute to environmental pollution and climate change, renewable energy sources are sustainable and have minimal environmental impact.",
    "virtual reality": "Virtual reality (VR) is a computer-generated simulation of an immersive and interactive environment that can be experienced through specialized electronic devices, such as headsets or goggles. VR technology enables users to explore and interact with virtual worlds in a three-dimensional space, often with a sense of presence and realism.",
    'vr': "Virtual reality (VR) is a computer-generated simulation of an immersive and interactive environment that can be experienced through specialized electronic devices, such as headsets or goggles. VR technology enables users to explore and interact with virtual worlds in a three-dimensional space, often with a sense of presence and realism.",
    "internet of things": "The Internet of Things (IoT) refers to a network of interconnected devices and objects that are embedded with sensors, software, and other technologies to collect and exchange data over the internet. These IoT devices can range from everyday objects, such as household appliances and wearable devices, to industrial machines and infrastructure.",
    "quantum computing": "Quantum computing is a cutting-edge field of computer science that utilizes the principles of quantum mechanics to perform computations at a scale and speed that are impossible for classical computers. Unlike classical bits, which can be either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously, allowing quantum computers to process vast amounts of data and solve complex problems more efficiently.",
    'biotechnology': "Biotechnology is a multidisciplinary field that involves the use of biological systems, organisms, or living organisms to develop products and technologies for various applications, including healthcare, agriculture, and industry. Examples of biotechnologies include genetic engineering, biopharmaceuticals, and bioinformatics.",
    "smart cities": "Smart cities are urban areas that leverage technology and data-driven solutions to improve the quality of life for residents, enhance sustainability, and optimize resource efficiency. Smart city initiatives may involve the integration of information and communication technologies (ICT), IoT devices, and data analytics to manage infrastructure, transportation, energy, and public services effectively.",
    'cybersecurity': "Cybersecurity refers to the practice of protecting computer systems, networks, and data from cyber threats, such as hacking, malware, and data breaches. It encompasses various techniques, tools, and best practices to safeguard information assets, maintain confidentiality, integrity, and availability, and mitigate cybersecurity risks.",
    "artificial intelligence": "Artificial intelligence (AI) is a branch of computer science that focuses on the development of intelligent machines and systems capable of performing tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making. AI technologies include machine learning, natural language processing, computer vision, and robotics.",
    'ai': "Artificial intelligence (AI) is a branch of computer science that focuses on the development of intelligent machines and systems capable of performing tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making. AI technologies include machine learning, natural language processing, computer vision, and robotics.",
    "data science": "Data science is an interdisciplinary field that involves extracting insights and knowledge from structured and unstructured data using scientific methods, algorithms, and systems. It combines expertise from various domains such as statistics, mathematics, computer science, and domain-specific knowledge to analyze data, uncover patterns, and make data-driven decisions.",
    "cloud computing": "Cloud computing is the delivery of computing services, including servers, storage, databases, networking, software, and analytics, over the internet ('the cloud') on a pay-as-you-go basis. Cloud computing enables organizations to access resources and scale their IT infrastructure rapidly without the need for large upfront investments in hardware or maintenance.",
    'robotic': "Robotics is a branch of engineering and computer science that involves the design, construction, operation, and use of robots. Robots are programmable machines capable of performing tasks autonomously or semi-autonomously, often in environments that are hazardous, repetitive, or impractical for humans. Robotics encompasses various subfields, including industrial robotics, autonomous vehicles, and humanoid robots.",
    "biomedical engineering": "Biomedical engineering is a multidisciplinary field that applies principles of engineering, biology, and medicine to develop technologies and devices for healthcare applications. Biomedical engineers design and innovate medical devices, diagnostic tools, prosthetics, tissue engineering, and healthcare systems to improve patient care, enhance quality of life, and advance medical research.",
    "augmented reality": "Augmented reality (AR) is a technology that overlays digital information, such as images, videos, or 3D models, onto the real-world environment to enhance user perception and interaction. AR applications can be experienced through smartphones, tablets, wearable devices, or specialized AR glasses, allowing users to visualize virtual objects in the context of their physical surroundings.",
    'nlp': "Natural language processing (NLP) is a branch of artificial intelligence (AI) that focuses on the interaction between computers and human languages. NLP techniques enable computers to understand, interpret, and generate human language, including speech recognition, text analysis, sentiment analysis, language translation, and dialogue systems.",
    "3d printing": "3D printing, also known as additive manufacturing, is a process of creating three-dimensional objects by depositing successive layers of material, such as plastic, metal, or ceramics, based on a digital model or CAD (computer-aided design) file. 3D printing technology enables rapid prototyping, customization, and on-demand manufacturing of complex shapes and structures with high precision and efficiency.",
    "cyber physical system": "Cyber-physical systems (CPS) are interconnected networks of computational algorithms, sensors, actuators, and physical components that interact with the physical world to monitor, control, and optimize complex systems. CPS applications include smart grid systems, autonomous vehicles, industrial automation, smart healthcare systems, and smart infrastructure.",
    'nanotechnology': "Nanotechnology is the manipulation of matter at the nanoscale, typically ranging from 1 to 100 nanometers, to create materials, devices, and systems with unique properties and functionalities. Nanotechnology has applications in various fields, including electronics, medicine, energy, materials science, and environmental remediation, offering potential breakthroughs in areas such as drug delivery, renewable energy, and nanoelectronics.",
    "genetic engineering": "Genetic engineering is a biotechnological process that involves modifying the genetic material of organisms, such as DNA or RNA, to introduce desired traits or characteristics. Genetic engineering techniques, such as gene editing and recombinant DNA technology, enable scientists to manipulate genes, create genetically modified organisms (GMOs), and develop novel therapies, vaccines, and agricultural crops.",
    'default': "I'm sorry, I didn't understand that. Could you please rephrase your question?, browse internet or ask Gemini for more information."
  };
  for (var _0x1d0082 in _0x6c0756) {
    if (_0x2e0e1d.toLowerCase().includes(_0x1d0082)) {
      return _0x6c0756[_0x1d0082];
    }
  }
  if (/[+\*\-/]/.test(_0x2e0e1d)) {
    var _0x34aaff = performCalculation(_0x2e0e1d);
    return "Result: " + _0x34aaff;
  }
  return "I'm sorry, I didn't understand that. Could you please rephrase your question?, browse internet or ask Gemini for more information.";
}
function isCalculationRequest(_0x31bd6b) {
  return /[+\*\-/]/.test(_0x31bd6b);
}
function performCalculation(_0x207567) {
  _0x207567 = _0x207567.replace(/\s/g, '');
  const _0x358e6a = _0x3f777c => {
    while (_0x3f777c.includes('(')) {
      const _0x22040e = _0x3f777c.lastIndexOf('(');
      const _0x3e4b2d = _0x3f777c.indexOf(')', _0x22040e);
      const _0x591a4b = _0x3f777c.substring(_0x22040e + 0x1, _0x3e4b2d);
      const _0x5e624f = _0x3f87f9(_0x591a4b);
      _0x3f777c = _0x3f777c.substring(0x0, _0x22040e) + _0x5e624f + _0x3f777c.substring(_0x3e4b2d + 0x1);
    }
    return _0x3f777c;
  };
  const _0x3f87f9 = _0x317619 => {
    const _0x3f3508 = ['*', '/', '+', '-'];
    for (const _0x2bec84 of _0x3f3508) {
      while (_0x317619.includes(_0x2bec84)) {
        const _0x3e13e3 = _0x317619.indexOf(_0x2bec84);
        const _0x5e7b93 = parseFloat(_0x317619.substring(0x0, _0x3e13e3));
        const _0x85aede = parseFloat(_0x317619.substring(_0x3e13e3 + 0x1));
        let _0x5e1b1e;
        switch (_0x2bec84) {
          case '*':
            _0x5e1b1e = _0x5e7b93 * _0x85aede;
            break;
          case '/':
            if (_0x85aede === 0x0) {
              return "Cannot divide by zero";
            }
            _0x5e1b1e = _0x5e7b93 / _0x85aede;
            break;
          case '+':
            _0x5e1b1e = _0x5e7b93 + _0x85aede;
            break;
          case '-':
            _0x5e1b1e = _0x5e7b93 - _0x85aede;
            break;
        }
        _0x317619 = _0x317619.substring(0x0, _0x3e13e3 - _0x5e7b93.toString().length) + _0x5e1b1e + _0x317619.substring(_0x3e13e3 + 0x1 + _0x85aede.toString().length);
      }
    }
    return _0x317619;
  };
  _0x207567 = _0x358e6a(_0x207567);
  const _0x5aeeb3 = _0x3f87f9(_0x207567);
  return _0x5aeeb3;
}
window.onload = function () {
  document.getElementById('user-input').focus();
};
document.getElementById("send-btn").addEventListener('touchstart', function () {
  document.querySelector('.chat-container').focus();
});
document.getElementById('user-input').addEventListener("keyup", function (_0x470c9c) {
  if (_0x470c9c.key === "Enter") {
    sendMessage();
  }
});
const questions = ["What is Blockchain?", "How to do meditation?", "what are your limitations?", "who created you?", "How to overcome anxiety?", "What is ML?", "What is AI?", "What time is it?", "What is the date today?", "What are renewable energy sources?", "Tell me a joke.", "What is NLP?", "What is Cloud Computing?", "Write a poem.", "How to improve my communication?"];
function shuffle(_0x4e7ec5) {
  for (let _0x2fd151 = _0x4e7ec5.length - 0x1; _0x2fd151 > 0x0; _0x2fd151--) {
    const _0x227c19 = Math.floor(Math.random() * (_0x2fd151 + 0x1));
    [_0x4e7ec5[_0x2fd151], _0x4e7ec5[_0x227c19]] = [_0x4e7ec5[_0x227c19], _0x4e7ec5[_0x2fd151]];
  }
  return _0x4e7ec5;
}
function displayKeywords() {
  const _0x51c77e = document.getElementById('keyword-box');
  _0x51c77e.innerHTML = '';
  const _0x1b8af6 = shuffle(questions);
  for (let _0x5a38d0 = 0x0; _0x5a38d0 < 0xf; _0x5a38d0++) {
    const _0x3df3b1 = _0x1b8af6[_0x5a38d0];
    const _0x406399 = document.createElement("div");
    _0x406399.classList.add("keyword");
    _0x406399.textContent = _0x3df3b1;
    _0x406399.addEventListener("click", () => {
      document.getElementById("user-input").value = _0x3df3b1;
    });
    _0x51c77e.appendChild(_0x406399);
  }
}
displayKeywords();
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem('floatingWindowDisplayed')) {
    document.getElementById("floating-window").style.display = 'block';
    localStorage.setItem("floatingWindowDisplayed", true);
  }
});
document.getElementById("close-button").addEventListener('click', function () {
  document.getElementById("floating-window").style.display = "none";
});
document.getElementById("msg-btn").addEventListener("click", function (_0x1ed5ec) {
  _0x1ed5ec.preventDefault();
  const _0x2ff100 = document.getElementById("user-input").value;
  addUserMessage(_0x2ff100);
  const _0x2a2fbf = {
    'contents': [{
      'parts': [{
        'text': _0x2ff100
      }]
    }]
  };
  fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCgM0vxDVUTFNZ5QMuTJa_oa8k6hLmN8QI", {
    'method': "POST",
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(_0x2a2fbf)
  }).then(_0x39574a => _0x39574a.json()).then(_0x22ecf7 => {
    const _0x484401 = _0x22ecf7.candidates[0x0].content.parts[0x0].text;
    addBotMessage(_0x484401);
  })["catch"](_0x10ef98 => {
    console.error("Error fetching data:", _0x10ef98);
  });
});
function startTypingAnimation(_0x2781cc, _0x35fb52) {
  _0x2781cc.innerHTML = '';
  const _0x466c03 = document.getElementById("chat-box");
  let _0x20610a = 0x0;
  let _0x1eaec8 = false;
  function _0x6e7d64() {
    if (_0x20610a < _0x35fb52.length) {
      if (_0x35fb52.substring(_0x20610a, _0x20610a + 0x2) === '**') {
        _0x1eaec8 = !_0x1eaec8;
        _0x20610a += 0x2;
        if (_0x1eaec8) {
          _0x2781cc.innerHTML += "<strong>";
        } else {
          _0x2781cc.innerHTML += "</strong>";
        }
      } else if (_0x35fb52.charAt(_0x20610a) === "\n") {
        _0x2781cc.innerHTML += "<br>";
        _0x20610a++;
      } else {
        _0x2781cc.innerHTML += _0x35fb52.charAt(_0x20610a);
        _0x20610a++;
      }
      _0x466c03.scrollTop = _0x466c03.scrollHeight;
      setTimeout(_0x6e7d64, 0x1);
    }
  }
  _0x6e7d64();
}
function addUserMessage(_0x1a955a) {
  var _0x9cf594 = document.getElementById("chat-box");
  var _0x25df66 = document.createElement("div");
  _0x25df66.className = "user-message";
  _0x25df66.textContent = _0x1a955a;
  _0x9cf594.appendChild(_0x25df66);
  _0x9cf594.scrollTop = _0x9cf594.scrollHeight;
}
function addBotMessage(_0x59e554) {
  var _0x8258be = document.getElementById("chat-box");
  var _0x45fca6 = document.createElement('div');
  _0x45fca6.className = "bot-message";
  _0x8258be.appendChild(_0x45fca6);
  setTimeout(function () {
    startTypingAnimation(_0x45fca6, _0x59e554);
  }, 0x3e8);
}
document.addEventListener("DOMContentLoaded", function () {
  const _0x14966b = document.querySelector(".sidebar-icon");
  const _0x87b2b6 = document.getElementById("sidebar");
  const _0x48e9c4 = document.body;
  _0x14966b.addEventListener("click", function (_0x59f1d6) {
    _0x59f1d6.preventDefault();
    _0x87b2b6.classList.toggle("active");
    _0x48e9c4.classList.toggle("sidebar-open");
  });
});
async function fetchCustomSearchResults(_0x100f27) {
  const _0x455946 = ["AIzaSyAnBflOjGSET7ZQHK4iNeZ0jqAj7bXtbMw", "AIzaSyBn-1DwSjXpqV5nteGRxbiW-LvxS7pDz-Q", "AIzaSyAtQtO2RDaXU1dr3OB8xAFK1uXOmgmfPes"];
  async function _0x4d29d5(_0x46e44b) {
    const _0x361e84 = "https://www.googleapis.com/customsearch/v1?key=" + _0x46e44b + "&cx=" + '73ecbbd20d97b4289' + "&q=" + _0x100f27 + "&num=" + 0xa;
    const _0x4c4629 = await fetch(_0x361e84);
    if (_0x4c4629.status === 0x193) {
      const _0x350793 = await _0x4c4629.json();
      if (_0x350793.error.errors[0x0].reason === "quotaExceeded") {
        throw new Error("Quota exceeded");
      }
    }
    return _0x4c4629.json();
  }
  for (const _0x4efd0b of _0x455946) {
    try {
      const _0x3b5930 = await _0x4d29d5(_0x4efd0b);
      return _0x3b5930.items || [];
    } catch (_0x4fb117) {
      if (_0x4fb117.message === "Quota exceeded") {
        console.warn("API key " + _0x4efd0b + " quota exceeded, trying next key...");
      } else {
        console.error("Error fetching custom search results:", _0x4fb117);
        return [];
      }
    }
  }
  throw new Error("All API keys have exceeded their quota limits");
}
async function fetchGeminiContent(_0x476e48) {
  const _0x56f8e6 = {
    'contents': [{
      'parts': [{
        'text': _0x476e48
      }]
    }]
  };
  try {
    const _0x2edec5 = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCgM0vxDVUTFNZ5QMuTJa_oa8k6hLmN8QI", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify(_0x56f8e6)
    });
    const _0x41409e = await _0x2edec5.json();
    return _0x41409e.candidates && _0x41409e.candidates[0x0].content.parts && _0x41409e.candidates[0x0].content.parts.length > 0x0 ? _0x41409e.candidates[0x0].content.parts[0x0].text.trim() : (console.error("Invalid response format:", _0x41409e), "Error: Invalid response format.");
  } catch (_0x2dc635) {
    console.error("Error fetching Gemini content:", _0x2dc635);
    return "Error: Could not fetch content.";
  }
}
async function getResponse(_0x2ffc79) {
  const _0x46558e = await fetchCustomSearchResults(_0x2ffc79);
  const _0x44ca1a = _0x46558e.map(_0x57e007 => _0x57e007.title + ": " + _0x57e007.snippet).join("\n");
  const _0x34d047 = "Based on these search results, generate a response that also includes your own knowledge, give latest and accurate information:\n\n" + _0x44ca1a;
  const _0x4f5bb3 = await fetchGeminiContent(_0x34d047);
  return _0x4f5bb3;
}
document.getElementById("searchButton").addEventListener("click", async () => {
  const _0x3fd54b = document.getElementById("searchQuery").value;
  const _0x593e2b = document.getElementById("searchResults");
  const _0x1c21d9 = document.getElementById("search-box");
  const _0x21c681 = document.getElementById("loading");
  _0x593e2b.innerHTML = '';
  _0x1c21d9.innerHTML = '';
  _0x21c681.classList.remove("hidden");
  try {
    const _0x9175a2 = await fetchCustomSearchResults(_0x3fd54b);
    _0x21c681.classList.add('hidden');
    _0x593e2b.innerHTML = _0x9175a2.map(_0x44d1fa => "<p><strong><a href=\"" + _0x44d1fa.link + "\" target=\"_blank\">" + _0x44d1fa.title + "</a></strong>: " + _0x44d1fa.snippet + "</p>").join('');
    const _0x39510e = await getResponse(_0x3fd54b);
    startTypingAnimation(_0x1c21d9, _0x39510e);
  } catch (_0xfe94e1) {
    _0x21c681.classList.add("hidden");
    _0x593e2b.innerHTML = "<p>Error fetching search results: " + _0xfe94e1.message + "</p>";
    _0x1c21d9.innerHTML = "<p>Error: " + _0xfe94e1.message + '</p>';
  }
});
document.addEventListener("keydown", function (_0x5b48a4) {
  if (_0x5b48a4.shiftKey && _0x5b48a4.key === "Escape") {
    var _0x30e6d = document.getElementById("user-input");
    if (_0x30e6d) {
      _0x30e6d.focus();
      _0x5b48a4.preventDefault();
    }
  }
});
