
function sendMessage() {
    var _0x5987c7 = document.getElementById('user-input').value.trim();
    if (_0x5987c7 === '') {
      return;
    }
    document.getElementById('chat-container').classList.add("chatting");
    addUserMessage(_0x5987c7);
    document.getElementById("user-input").value = '';
    var _0x2a2d4b = generateBotResponse(_0x5987c7);
    addBotMessage(_0x2a2d4b);
    startTypingAnimation();
  }

  function search() {
    var _0x8d3045 = document.getElementById("user-input").value.trim();
    if (_0x8d3045 === '') {
      return;
    }
    performSearch(_0x8d3045);
  }
  
  function performSearch(query) {
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBn-1DwSjXpqV5nteGRxbiW-LvxS7pDz-Q&cx=73ecbbd20d97b4289&q=" + query;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const randomNumber = getRandomNumber(1, 10);
            displayResults(data, randomNumber);
        })
        .catch(error => console.log("Error:", error));
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayResults(data, numberOfResults) {
    var items = data.items;
    if (!items || items.length === 0) {
        addBotMessage("No search results found.");
        return;
    }
    items = items.slice(0, numberOfResults);
    const chatBox = document.getElementById("chat-box");
    if (!chatBox) {
        console.log("Chatbox element not found");
        return;
    }
    const userInput = document.getElementById('user-input').value;
    addUserMessage(userInput);
setTimeout(() => {
    items.forEach(item => {
        const botMessage = document.createElement("div");
        botMessage.classList.add('bot-message');
        
        const snippet = document.createElement('span');
        snippet.innerHTML += '*';
        snippet.innerHTML = item.snippet;
        botMessage.appendChild(snippet);
        
        const sourceLink = document.createElement('a');
        sourceLink.href = item.link;
        sourceLink.target = "_blank";
        sourceLink.textContent = ' [Source]';
        sourceLink.style.color = "#007bff";
        sourceLink.style.textDecoration = "none";
        botMessage.appendChild(sourceLink);
        
        chatBox.appendChild(botMessage);
    });
    
    chatBox.scrollTop = chatBox.scrollHeight;
}, 1000)};



function generateBotResponse(_0x38f2f3) {
    var _0x1b9718 = {
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
        'minute': '2-digit'
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
    for (var _0x51a413 in _0x1b9718) {
      if (_0x38f2f3.toLowerCase().includes(_0x51a413)) {
        return _0x1b9718[_0x51a413];
      }
    }
    if (/[+\*\-/]/.test(_0x38f2f3)) {
      var _0x475d4c = performCalculation(_0x38f2f3);
      return "Result: " + _0x475d4c;
    }
    return "I'm sorry, I didn't understand that. Could you please rephrase your question?, browse internet or ask Gemini for more information.";
  }
  function isCalculationRequest(_0x4f1c20) {
    return /[+\*\-/]/.test(_0x4f1c20);
  }
  function performCalculation(_0x5c7a17) {
    _0x5c7a17 = _0x5c7a17.replace(/\s/g, '');
    const _0x422bbc = _0x4dd812 => {
      while (_0x4dd812.includes('(')) {
        const _0x455589 = _0x4dd812.lastIndexOf('(');
        const _0x141179 = _0x4dd812.indexOf(')', _0x455589);
        const _0x44afa9 = _0x4dd812.substring(_0x455589 + 0x1, _0x141179);
        const _0x68b8da = _0x5a3cb6(_0x44afa9);
        _0x4dd812 = _0x4dd812.substring(0x0, _0x455589) + _0x68b8da + _0x4dd812.substring(_0x141179 + 0x1);
      }
      return _0x4dd812;
    };
    const _0x5a3cb6 = _0x1288f4 => {
      const _0x24a046 = ['*', '/', '+', '-'];
      for (const _0x52cf23 of _0x24a046) {
        while (_0x1288f4.includes(_0x52cf23)) {
          const _0x2c3e80 = _0x1288f4.indexOf(_0x52cf23);
          const _0x1252a4 = parseFloat(_0x1288f4.substring(0x0, _0x2c3e80));
          const _0x5aebce = parseFloat(_0x1288f4.substring(_0x2c3e80 + 0x1));
          let _0x31201c;
          switch (_0x52cf23) {
            case '*':
              _0x31201c = _0x1252a4 * _0x5aebce;
              break;
            case '/':
              if (_0x5aebce === 0x0) {
                return "Cannot divide by zero";
              }
              _0x31201c = _0x1252a4 / _0x5aebce;
              break;
            case '+':
              _0x31201c = _0x1252a4 + _0x5aebce;
              break;
            case '-':
              _0x31201c = _0x1252a4 - _0x5aebce;
              break;
          }
          _0x1288f4 = _0x1288f4.substring(0x0, _0x2c3e80 - _0x1252a4.toString().length) + _0x31201c + _0x1288f4.substring(_0x2c3e80 + 0x1 + _0x5aebce.toString().length);
        }
      }
      return _0x1288f4;
    };
    _0x5c7a17 = _0x422bbc(_0x5c7a17);
    const _0x1789d1 = _0x5a3cb6(_0x5c7a17);
    return _0x1789d1;
  }



  window.onload = function () {
    document.getElementById("user-input").focus();
  };



  document.getElementById('close-button').addEventListener('click', function () {
    document.getElementById("floating-window").style.display = "none";
  });



  document.getElementById("msg-btn").addEventListener("click", function (_0x223e53) {
    _0x223e53.preventDefault();
    const _0x490728 = document.getElementById("user-input").value;
    addUserMessage(_0x490728);
    const _0x28ea60 = {
      'contents': [{
        'parts': [{
          'text': _0x490728
        }]
      }]
    };
    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCgM0vxDVUTFNZ5QMuTJa_oa8k6hLmN8QI", {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(_0x28ea60)
    }).then(_0x1455b3 => _0x1455b3.json()).then(_0x3e8785 => {
      const _0x3eea71 = _0x3e8785.candidates[0x0].content.parts[0x0].text;
      addBotMessage(_0x3eea71);
    })["catch"](_0x25b832 => {
      console.error("Error fetching data:", _0x25b832);
    });
  });
  function startTypingAnimation(element, text) {
    element.innerHTML = '';  // Clear the element's content
    let isBold = false;      // Flag to track bold state
    let formattedText = '';  // Variable to accumulate the formatted text

    // Loop through the text and apply formatting
    for (let i = 0; i < text.length; i++) {
        if (text.substring(i, i + 2) === '**') {
            isBold = !isBold;
            formattedText += isBold ? '<strong>' : '</strong>';
            i++;  // Skip the next character as we've processed a pair of asterisks
        } else if (text.charAt(i) === "\n") {
            formattedText += "<br>";
        } else {
            formattedText += text.charAt(i);
        }
    }

    element.innerHTML = formattedText;  // Set the formatted text to the element
    const chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom of the chat box
}



function addUserMessage(_0xe20525) {
    var _0x369fc6 = document.getElementById("chat-box");
    var _0x2c1dac = document.createElement("div");
    _0x2c1dac.className = "user-message";
    _0x2c1dac.textContent = _0xe20525;
    _0x369fc6.appendChild(_0x2c1dac);
    _0x369fc6.scrollTop = _0x369fc6.scrollHeight;
  }
  function addBotMessage(_0x4b7efa) {
    var _0x4d8479 = document.getElementById("chat-box");
    var _0x449b1c = document.createElement('div');
    _0x449b1c.className = "bot-message";
    _0x4d8479.appendChild(_0x449b1c);
    setTimeout(function () {
      startTypingAnimation(_0x449b1c, _0x4b7efa);
    }, 0x3e8);
  }



  document.addEventListener("DOMContentLoaded", function () {
    const sidebarIcon = document.querySelector('#sidebar-icon');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    sidebarIcon.addEventListener('click', function (event) {
        event.preventDefault();
        sidebar.classList.toggle("active");
        body.classList.toggle("sidebar-open");
        // Toggle the Font Awesome icon class
        sidebarIcon.classList.toggle('fa-bars');
        sidebarIcon.classList.toggle('fa-times');
    });
});



async function fetchCustomSearchResults(query) {
  const apiKeys = [
      "AIzaSyAnBflOjGSET7ZQHK4iNeZ0jqAj7bXtbMw",
      "AIzaSyBn-1DwSjXpqV5nteGRxbiW-LvxS7pDz-Q",
      "AIzaSyAtQtO2RDaXU1dr3OB8xAFK1uXOmgmfPes"
  ];
  const cx = "73ecbbd20d97b4289";

  async function fetchResults(apiKey) {
      const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&num=10`;
      const response = await fetch(url);
      if (response.status === 403) {
          const responseJson = await response.json();
          if (responseJson.error.errors[0].reason === "quotaExceeded") {
              throw new Error("Quota exceeded");
          }
      }
      return response.json();
  }

  for (const apiKey of apiKeys) {
      try {
          const results = await fetchResults(apiKey);
          return results.items || [];
      } catch (error) {
          if (error.message === "Quota exceeded") {
              console.warn(`API key ${apiKey} quota exceeded, trying next key...`);
          } else {
              console.error("Error fetching custom search results:", error);
              return [];
          }
      }
  }
  throw new Error("All API keys have exceeded their quota limits");
}
  async function fetchGeminiContent(_0x7e70a3) {
    const _0xb3b78d = {
      'contents': [{
        'parts': [{
          'text': _0x7e70a3
        }]
      }]
    };
    try {
      const _0x134c96 = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCgM0vxDVUTFNZ5QMuTJa_oa8k6hLmN8QI", {
        'method': 'POST',
        'headers': {
          'Content-Type': "application/json"
        },
        'body': JSON.stringify(_0xb3b78d)
      });
      const _0x5278ee = await _0x134c96.json();
      return _0x5278ee.candidates && _0x5278ee.candidates[0x0].content.parts && _0x5278ee.candidates[0x0].content.parts.length > 0x0 ? _0x5278ee.candidates[0x0].content.parts[0x0].text.trim() : (console.error("Invalid response format:", _0x5278ee), "Error: Invalid response format.");
    } catch (_0x572e0e) {
      console.error("Error fetching Gemini content:", _0x572e0e);
      return "Error: Could not fetch content.";
    }
  }
  async function getResponse(_0x226a71) {
    const _0x5afc73 = await fetchCustomSearchResults(_0x226a71);
    const _0x3cb320 = _0x5afc73.map(_0x2f78f5 => _0x2f78f5.title + ": " + _0x2f78f5.snippet).join("\n");
    const _0x25a563 = "Based on these search results, generate a response that also includes your own knowledge, give latest and accurate information:\n\n" + _0x3cb320;
    const _0x59f5a5 = await fetchGeminiContent(_0x25a563);
    return _0x59f5a5;
  }

  document.getElementById("searchButton").addEventListener('click', async () => {
    const _0x49f82b = document.getElementById("searchQuery").value;
    const _0x7caea1 = document.getElementById("searchResults");
    const _0x157c0a = document.getElementById("search-box");
    const _0x3ec3ba = document.getElementById('loading');
    _0x7caea1.innerHTML = '';
    _0x157c0a.innerHTML = '';
    _0x3ec3ba.classList.remove("hidden");
    try {
      const _0x17f7b0 = await fetchCustomSearchResults(_0x49f82b);
      _0x3ec3ba.classList.add("hidden");
      _0x7caea1.innerHTML = _0x17f7b0.map(_0x847292 => "<p><strong><a href=\"" + _0x847292.link + "\" target=\"_blank\">" + _0x847292.title + "</a></strong>: " + _0x847292.snippet + '</p>').join('');
      const _0x56e0ce = await getResponse(_0x49f82b);
      startTypingAnimation(_0x157c0a, _0x56e0ce);
    } catch (_0x97496b) {
      _0x3ec3ba.classList.add("hidden");
      _0x7caea1.innerHTML = "<p>Error fetching search results: " + _0x97496b.message + "</p>";
      _0x157c0a.innerHTML = "<p>Error: " + _0x97496b.message + "</p>";
    }
  });



  document.addEventListener("keydown", function (_0x4edf77) {
    if (_0x4edf77.shiftKey && _0x4edf77.key === 'Escape') {
      var _0x51db18 = document.getElementById("user-input");
      if (_0x51db18) {
        _0x51db18.focus();
        _0x4edf77.preventDefault();
      }
    }
  });



  document.addEventListener("DOMContentLoaded", function () {

    const lightThemeLink = document.getElementById('light-theme');
    const darkThemeLink = document.getElementById('dark-theme');

    lightThemeLink.addEventListener('click', function (event) {
        event.preventDefault();
        setTheme('light');
    });

    darkThemeLink.addEventListener('click', function (event) {
        event.preventDefault();
        setTheme('dark');
    });

    function setTheme(theme) {
        if (theme === 'light') {
            document.getElementById('theme-style').setAttribute('href', 'css/light.css');
        } else if (theme === 'dark') {
            document.getElementById('theme-style').setAttribute('href', 'css/dark.css');
        }
        localStorage.setItem('theme', theme);
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }

    loadTheme();
});



document.addEventListener('DOMContentLoaded', (event) => {
  // Function to change icon to loader and revert back after delay
  function setLoading(buttonId, iconClass, duration, customAnimation) {
    const button = document.getElementById(buttonId);
    const originalIcon = button.innerHTML;

    // Set to loader icon with custom animation
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;

    // Add random delay before reverting back
    const randomDelay = Math.random() * 1000; // Delay between 0 and 1 second
    const totalDuration = duration + randomDelay;

    // Revert back after the specified duration
    setTimeout(() => {
      button.innerHTML = originalIcon;
    }, totalDuration);
  }

  // Add event listeners to the buttons with different durations and custom animations
  document.getElementById('searchButton').addEventListener('click', function() {
    setLoading('searchButton', 'fas fa-search', 3000, 'animation: pulse 1s infinite;'); // Pulsating loader
  });

  document.getElementById('msg-btn').addEventListener('click', function() {
    setLoading('msg-btn', 'fa-solid fa-wand-magic-sparkles', 3000, 'animation: rotate 1s linear infinite;'); // Rotating loader
  });

  document.getElementById('search-btn').addEventListener('click', function() {
    setLoading('search-btn', 'fas fa-search', 3000, 'animation: zoomIn 1s linear infinite;'); // Zooming loader
  });
});
