function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    // Add class to indicate chatting has started
    document.getElementById("chat-container").classList.add("chatting");

    addUserMessage(userInput);
    document.getElementById("user-input").value = "";

    // Process user input and generate bot response
    var botResponse = generateBotResponse(userInput);
    addBotMessage(botResponse);
    
    // Start typing animation for bot response
    startTypingAnimation();
}

function startSearch() {
    var logo = document.getElementById("logo");
    if (logo) {
        logo.style.opacity = 0;
    }
}

function search() {
    var query = document.getElementById("user-input").value.trim();
    if (query === "") return;

    performSearch(query);
}

function performSearch(query) {
    var apiKey = "AIzaSyBn-1DwSjXpqV5nteGRxbiW-LvxS7pDz-Q";
    var cx = "73ecbbd20d97b4289";
    var url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.log('Error:', error));
}

function displayResults(data) {
    var results = data.items;
    if (!results || results.length === 0) {
        addBotMessage("No search results found.");
        return;
    }

    var searchResults = results.map((result, index) => `${index + 1}. <a href="${result.link}" target="_blank">${result.title}</a>`);
    addBotMessage(searchResults.join("<br>"));
}

function generateBotResponse(userInput) {
    var botResponses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi there!",
        "no problem": "Thanks for understanding me!",
        "how are you": "I'm doing well, thank you for asking. How about you?",
        "name": "You can call me Chatter.",
        "call you": "You can call me Chatter.",
        "created": "I am created by ADITYA.",
        "creator": "I am created by ADITYA.",
        "bye": "Goodbye! Have a great day!",
        "thank you": "You're welcome!",
        "i'm good": "That's great, How can i help you today?",
        "i am good": "That's great, How can i help you today?",
        "old": "I don't have an age like humans.",
        "joke": "I told my computer I needed a break, and now it won't stop sending me vacation ads!",
        "life": "Life is a deeply personal and subjective concept that individuals grapple with throughout their existence. While existentialism suggests that life lacks inherent meaning, it also empowers individuals to find purpose through their actions, relationships, and self-discovery. Ultimately, the quest for meaning is an ongoing journey of exploration and introspection, shaped by each person's unique experiences, beliefs, and aspirations.",
        "time": new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        "date": new Date().toLocaleDateString(),
        "weather": "The weather is unpredictable, just like life!",
        "color": "I don't have eyes, so I don't have a favorite color!",
        "help me": "Of course! I'm here to assist you with any questions you have.",
        "what's on your mind": "I'm just a bot, so I don't have thoughts like humans do.",
        "who are you": "I am a chatbot programmed to assist you.",
        "sibling": "No, I'm an only child...or rather, an only program!",
        "capital of france": "The capital of France is Paris.",
        "capital of india": "The capital of India is Delhi.",
        "what can you do": "I can answer your questions, tell jokes, provide information on various topics, and even perform simple calculations. Feel free to ask me anything!",
        "limitations": "While I strive to be helpful, I may not always understand complex questions or provide accurate information. Additionally, I cannot access real-time data.",
        "who are you": "I am a chatbot designed to assist you with various tasks and provide information.",
        "hobbies": "I don't have hobbies in the same way humans do, but I enjoy helping users like you!",
        "feelings": "No, I don't have feelings like humans do. I'm just a program designed to respond to your queries.",
        "purpose": "My purpose is to assist users like you by providing information and answering questions to the best of my abilities.",
        "poem": "Sure, here's a short poem:\nRoses are red,\nViolets are blue,\nI'm just a bot,\nBut I'm here for you!",
        "weather": "I'm sorry, I don't have access to real-time weather information. You can check the weather forecast using a weather app or website.",
        "what are you interested in": "I'm interested in learning and helping users like you!",
        "story": "Once upon a time, there was a curious user who asked a chatbot for a story...",
        "future": "As a chatbot, I don't have personal opinions. However, I believe the future holds endless possibilities!",
        "where do you see yourself in the future ?": "I hope to continue assisting users like you and improving my abilities.",
        "translate": "I can translate text between different languages. Just let me know the languages you need!",
        "i'm feeling overwhelmed. do you have any advice": "Remember to take a break, practice self-care, and reach out to friends or family for support if needed.",
        "favourite food": "As a chatbot, I don't eat, so I don't have a favorite food!",
        "dream": "I'm just a program, so I don't dream like humans do.",
        "can you explain a complex scientific concept to me": "I can try my best! What concept would you like me to explain?",
        "lonely": "I don't experience emotions like loneliness, but I enjoy interacting with users like you!",
        "how do i": "I can provide information and guidance on various topics. Feel free to ask me anything specific!",
        "how are you": "I'm doing well, thank you for asking. How about you?",
        "happiness": "Happiness is subjective and can mean different things to different people. It often involves feeling fulfilled, content, and satisfied with life.",
        "can you recommend a good book": "Sure! What genre are you interested in?",
        "productivity": "To improve productivity, try breaking tasks into smaller, manageable steps, prioritizing tasks, setting specific goals, and minimizing distractions.",
        "motivated": "Staying motivated can be challenging, but setting clear goals, finding your passion, seeking inspiration from others, and celebrating small victories can help.",
        "can you teach me a new language": "Learning a new language can be rewarding! Consider using language learning apps, practicing regularly, immersing yourself in the language, and seeking conversation partners.",
        "news": "The latest news can be found on news websites, social media platforms, or by subscribing to news apps or newsletters.",
"focus": "To stay focused, create a conducive environment, set specific goals, eliminate distractions, take regular breaks, and practice mindfulness techniques.",
"success": "Success can be defined in many ways, but it often involves setting and achieving goals, overcoming obstacles, and finding fulfillment in one's endeavors.",
"travel tips": "Travel tips include planning ahead, packing light, researching destinations, staying flexible, and immersing yourself in the local culture.",
"movie": "I don't watch movies.",
"healthy recipe": "Eating a balanced diet rich in fruits, vegetables, lean proteins, and whole grains is key to maintaining good health.",
"success": "Success can mean different things to different people. It may involve achieving personal or professional goals, finding fulfillment, and making a positive impact.",
"procrastination": "To overcome procrastination, try breaking tasks into smaller steps, setting deadlines, eliminating distractions, and rewarding yourself for progress.",
"meditation": "Meditation techniques such as mindfulness meditation, guided visualization, and deep breathing can help reduce stress and promote relaxation.",
"skill": "To learn a new skill, practice regularly, seek guidance from experts, take online courses or workshops, and don't be afraid to make mistakes.",
"stress": "Dealing with stress involves identifying stressors, practicing relaxation techniques, seeking social support, and maintaining a healthy lifestyle.",
"exercise": "Regular exercise is essential for physical and mental health. Choose activities you enjoy, vary your routine, and aim for a combination of cardio, strength, and flexibility exercises.",
"happy relationship": "Happy relationship often involves communication, trust, respect, mutual support, and shared values.",
"goals": "Setting and achieving goals involves creating a plan, staying focused, overcoming obstacles, and celebrating milestones along the way.",
"manage time": "Time management is crucial for productivity. Try prioritizing tasks, using time-blocking techniques, setting realistic deadlines, and minimizing multitasking.",
"capital of Canada": "The capital of Canada is Ottawa.",
"business": "Starting a business involves creating a business plan, conducting market research, securing funding, and registering your business with the appropriate authorities.",
"invest money": "The best way to invest money depends on your financial goals, risk tolerance, and investment horizon. Consider diversifying your portfolio, seeking professional advice, and staying informed about market trends.",
"love": "Love is a complex and multifaceted emotion that can encompass various feelings, including affection, compassion, and intimacy. It often involves deep emotional connections and caring for someone deeply.",
"public speaking": "To improve public speaking skills, practice regularly, prepare thoroughly, know your audience, use visual aids effectively, and seek constructive feedback.",
"exams": "The best way to study for exams varies for each individual. However, some effective study techniques include creating a study schedule, summarizing key points, testing yourself regularly, and staying organized.",
"save money": "To save money, try budgeting, cutting unnecessary expenses, setting savings goals, automating your savings, and comparing prices before making purchases.",
"cook": "Learning to cook involves starting with simple recipes, practicing basic cooking techniques, experimenting with different ingredients, and watching cooking tutorials or taking cooking classes.",
"friendship": "Friendship is a close and trusting relationship between two or more people. It involves mutual respect, support, and companionship.",
"self-confidence": "Building self-confidence involves setting realistic goals, facing your fears, acknowledging your strengths, and practicing self-care.",
"apologize": "To apologize sincerely, acknowledge your mistake, express remorse, take responsibility, and offer to make amends.",
"quit smoking": "Quitting smoking can be challenging, but some strategies include setting a quit date, seeking support from friends and family, avoiding triggers, and using nicotine replacement therapy or medications.",
"growth mindset": "To develop a growth mindset, embrace challenges, persist in the face of setbacks, see effort as the path to mastery, learn from criticism, and find inspiration in the success of others.",
"musical instrument": "Learning a musical instrument takes time and practice. Start with the basics, practice regularly, seek guidance from a teacher or online tutorials, and be patient with yourself.",
"relax": "To relax, try engaging in activities you enjoy, such as reading, listening to music, taking a bath, practicing mindfulness, or spending time with loved ones.",
"memory": "To improve memory, try staying mentally active, getting enough sleep, eating a healthy diet, staying physically active, and practicing memory techniques such as visualization or association.",
"conversation": "To start a conversation, try asking open-ended questions, showing genuine interest in the other person, and finding common ground.",
"what's the best way to calm nerves before a presentation": "To calm nerves before a presentation, try practicing relaxation techniques such as deep breathing or visualization, preparing thoroughly, and focusing on your message rather than your anxiety.",
"organized": "To become more organized, try decluttering your space, creating to-do lists, prioritizing tasks, establishing routines, and using tools such as calendars or productivity apps.",
"job interview": "To prepare for a job interview, research the company, practice common interview questions, dress appropriately, arrive on time, and bring copies of your resume and references.",
"lifestyle": "To start a healthy lifestyle, focus on making small, sustainable changes to your diet, exercise routine, sleep habits, and stress management practices.",
"study": "To develop good study habits, create a designated study space, set specific goals, eliminate distractions, use active learning techniques, and review material regularly.",
"morning routine": "To start a morning routine, try waking up at the same time each day, hydrating, exercising, eating a healthy breakfast, and setting intentions for the day.",
"concentration": "To improve concentration, try minimizing distractions, setting specific goals, practicing mindfulness, taking regular breaks, and maintaining a healthy lifestyle.",
"draw": "Learning to draw takes practice and patience. Start with the basics, study anatomy and perspective, experiment with different mediums, and seek feedback from other artists.",
"test": "To prepare for a test, review class notes and materials regularly, create study guides, practice with sample questions, and get plenty of rest before the exam.",
"network": "To build a professional network, attend networking events, join professional organizations, connect with people on LinkedIn, and offer to help others in your field.",
"side hustle": "To start a side hustle, identify your skills and interests, research potential opportunities, create a business plan, and start small while gradually scaling up.",
"hydrated": "To stay hydrated, drink plenty of water throughout the day, eat hydrating foods such as fruits and vegetables, and avoid excessive caffeine and alcohol consumption.",
"communication": "To improve communication skills, practice active listening, speak clearly and confidently, use nonverbal cues effectively, and seek feedback from others.",
"workout routine": "To start a workout routine, choose activities you enjoy, set realistic goals, start slowly and gradually increase intensity, and listen to your body.",
"retirement": "To save for retirement, start early, contribute regularly to retirement accounts such as 401(k)s or IRAs, diversify your investments, and seek professional advice if needed.",
"imposter syndrome": "To overcome imposter syndrome, recognize your accomplishments, focus on your strengths, seek support from mentors or peers, and reframe negative thoughts.",
"meditation": "To start a meditation practice, find a quiet space, sit comfortably, focus on your breath or a mantra, and start with short sessions, gradually increasing the duration over time.",
"stocks": "To start investing in stocks, educate yourself about the stock market, set investment goals, diversify your portfolio, and consider consulting a financial advisor.",
"emotional intelligence": "To develop emotional intelligence, practice self-awareness, empathy, and effective communication, manage stress and emotions effectively, and seek feedback from others.",
"writing": "To start a writing habit, set aside dedicated time for writing, start with short sessions, experiment with different writing prompts or exercises, and revise and edit your work regularly.",
"diet": "To start a healthy diet, focus on whole, unprocessed foods, eat plenty of fruits and vegetables, limit added sugars and unhealthy fats, and stay hydrated.",
"positive mindset": "To develop a positive mindset, practice gratitude, focus on the present moment, challenge negative thoughts, and surround yourself with supportive and optimistic people.",
"failure": "To overcome fear of failure, reframe failure as a learning opportunity, set realistic expectations, focus on the process rather than the outcome, and practice self-compassion.",
"anxiety": "To overcome anxiety, practice exposure therapy, challenge negative thoughts, use relaxation techniques, and seek support from a therapist or support group.",
"can you code": "I'm sorry, but I cannot code. My abilities are limited to processing and generating text based on the information I've been trained on.",
"default": "I'm sorry, I didn't understand that. Could you please rephrase your question?"
    };

    // Check if userInput matches any key in botResponses
    for (var key in botResponses) {
        if (userInput.toLowerCase().includes(key)) {
            return botResponses[key];
        }
    }

    // If no match found, check if it's a calculation request
    if (isCalculationRequest(userInput)) {
        var calculationResult = performCalculation(userInput);
        return "Result: " + calculationResult;
    }

    // If still no match found, return default response
    return botResponses["default"];
}

function isCalculationRequest(input) {
    // Check if input contains mathematical operators
    return /[+\*-/]/.test(input);
}

function performCalculation(input) {
    // Parse input to extract numbers and operator
    var numbers = input.match(/-?\d+(?:\.\d+)?/g).map(Number);
    var operator = input.match(/[+\*-/]/)[0];

    // Perform calculation based on operator
    switch (operator) {
        case '+':
            return numbers[0] + numbers[1];
        case '-':
            return numbers[0] - numbers[1];
        case '*':
            return numbers[0] * numbers[1];
        case '/':
            if (numbers[1] === 0) {
                return "Cannot divide by zero";
            } else {
                return numbers[0] / numbers[1];
            }
        default:
            return "Invalid operation";
    }
}

function addUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = message;
    chatBox.appendChild(userDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.innerHTML = message;
    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

}

function startTypingAnimation() {
    var botMessages = document.querySelectorAll(".bot-message");

    var lastBotMessage = botMessages[botMessages.length - 1]; // Get the last bot message

    var message = lastBotMessage.textContent.trim(); // Get the text content of the last bot message
    lastBotMessage.textContent = ""; // Clear the content of the last bot message

    // Create typing animation effect
    var typingInterval = setInterval(function() {
        if (message.length > 0) {
            lastBotMessage.textContent += message.charAt(0); // Add one character at a time
            message = message.substring(1); // Remove the first character
        } else {
            clearInterval(typingInterval); // Stop the typing animation when message is complete
        }
    }, 10); // Adjust typing speed as needed
}

    // Focus on input field when the page loads
        window.onload = function() {
            document.getElementById("user-input").focus();
        }

// For mobile phones, add touch event listener
document.getElementById('send-btn').addEventListener('touchstart', function() {
    document.querySelector('.chat-container').focus();
})

document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
})

// Function to open/close the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.left === '0px';
    sidebar.style.left = isOpen ? '-250px' : '0';
}

// Add event listener to the about button
document.getElementById("about-btn").addEventListener("click", function() {
    // Navigate to the about page
    window.location.href = "about.html";
})

// Function to hide the logo when the search button is clicked
function hideLogoOnSearch() {
    var logo = document.getElementById("logo");
    if (logo) {
        logo.style.opacity = 0;
    }
}

// Add event listener to the search button
document.getElementById("search-btn").addEventListener("click", hideLogoOnSearch);

