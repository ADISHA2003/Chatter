function sendMessage() {
  var userInput = document.getElementById('user-input').value.trim();
  if (userInput === '') {
    return;
  }
  document.getElementById('chat-container').classList.add("chatting");
  addUserMessage(userInput);
  document.getElementById("user-input").value = '';
  // Assuming generateBotResponse is defined elsewhere
  var botResponse = generateBotResponse(userInput); 
  addBotMessage(botResponse);
  startTypingAnimation();
}

  function search() {
    var query = document.getElementById("user-input").value.trim();
    if (query === '') {
      return;
    }
    performSearch(query);
  }
  
  function performSearch(query) {
    // Construct the URL using string concatenation
    var url = 'https://www.googleapis.com/customsearch/v1?key=' +
      process.env.GOOGLE_API_KEY_1 +
      '&cx=' +
      process.env.GOOGLE_CX +
      '&q=' +
      query;
  
    console.log("Constructed URL:", url); // Debugging: Check the URL
  
    fetch(url)
      .then(response => {
        console.log("Response Status:", response.status); // Debugging: Check response status
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data); // Debugging: Log the API response
        const randomNumber = getRandomNumber(1, 10);
        displayResults(data, randomNumber);
      })
      .catch(error => console.error("Fetch Error:", error));
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
      console.error("Chatbox element not found");
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
    }, 1000); 
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
    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
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
    process.env.GOOGLE_API_KEY_1,
    process.env.GOOGLE_API_KEY_2,
    process.env.GOOGLE_API_KEY_3
  ];
  const cx = `${process.env.GOOGLE_CX}`;

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
      const _0x134c96 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
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
            document.getElementById('theme-style').setAttribute('href', 'styles/light.css');
        } else if (theme === 'dark') {
            document.getElementById('theme-style').setAttribute('href', 'styles/dark.css');
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
