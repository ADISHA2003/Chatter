/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("function sendMessage() {\n  var userInput = document.getElementById('user-input').value.trim();\n  if (userInput === '') {\n    return;\n  }\n  document.getElementById('chat-container').classList.add(\"chatting\");\n  addUserMessage(userInput);\n  document.getElementById(\"user-input\").value = '';\n  // Assuming generateBotResponse is defined elsewhere\n  var botResponse = generateBotResponse(userInput); \n  addBotMessage(botResponse);\n  startTypingAnimation();\n}\n\n  function search() {\n    var query = document.getElementById(\"user-input\").value.trim();\n    if (query === '') {\n      return;\n    }\n    performSearch(query);\n  }\n  \n  function performSearch(query) {\n    // Construct the URL using string concatenation\n    var url = 'https://www.googleapis.com/customsearch/v1?key=' +\n      \"AIzaSyAnBflOjGSET7ZQHK4iNeZ0jqAj7bXtbMw\" +\n      '&cx=' +\n      \"73ecbbd20d97b4289\" +\n      '&q=' +\n      query;\n  \n    console.log(\"Constructed URL:\", url); // Debugging: Check the URL\n  \n    fetch(url)\n      .then(response => {\n        console.log(\"Response Status:\", response.status); // Debugging: Check response status\n        return response.json();\n      })\n      .then(data => {\n        console.log(\"API Response:\", data); // Debugging: Log the API response\n        const randomNumber = getRandomNumber(1, 10);\n        displayResults(data, randomNumber);\n      })\n      .catch(error => console.error(\"Fetch Error:\", error));\n  }\n  \n  function getRandomNumber(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n  \n  function displayResults(data, numberOfResults) {\n    var items = data.items;\n    if (!items || items.length === 0) {\n      addBotMessage(\"No search results found.\");\n      return;\n    }\n  \n    items = items.slice(0, numberOfResults);\n    const chatBox = document.getElementById(\"chat-box\");\n    if (!chatBox) {\n      console.error(\"Chatbox element not found\");\n      return;\n    }\n  \n    const userInput = document.getElementById('user-input').value;\n    addUserMessage(userInput);\n  \n    setTimeout(() => {\n      items.forEach(item => {\n        const botMessage = document.createElement(\"div\");\n        botMessage.classList.add('bot-message');\n  \n        const snippet = document.createElement('span');\n        snippet.innerHTML += '*';\n        snippet.innerHTML = item.snippet;\n        botMessage.appendChild(snippet);\n  \n        const sourceLink = document.createElement('a');\n        sourceLink.href = item.link;\n        sourceLink.target = \"_blank\";\n        sourceLink.textContent = ' [Source]';\n        sourceLink.style.color = \"#007bff\";\n        sourceLink.style.textDecoration = \"none\";\n        botMessage.appendChild(sourceLink);\n  \n        chatBox.appendChild(botMessage);\n      });\n  \n      chatBox.scrollTop = chatBox.scrollHeight;\n    }, 1000); \n  }\n\n  window.onload = function () {\n    document.getElementById(\"user-input\").focus();\n  };\n\n  document.getElementById('close-button').addEventListener('click', function () {\n    document.getElementById(\"floating-window\").style.display = \"none\";\n  });\n\n  document.getElementById(\"msg-btn\").addEventListener(\"click\", function (_0x223e53) {\n    _0x223e53.preventDefault();\n    const _0x490728 = document.getElementById(\"user-input\").value;\n    addUserMessage(_0x490728);\n    const _0x28ea60 = {\n      'contents': [{\n        'parts': [{\n          'text': _0x490728\n        }]\n      }]\n    };\n    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${\"AIzaSyCgM0vxDVUTFNZ5QMuTJa_oa8k6hLmN8QI\"}`, {\n      'method': 'POST',\n      'headers': {\n        'Content-Type': 'application/json'\n      },\n      'body': JSON.stringify(_0x28ea60)\n    }).then(_0x1455b3 => _0x1455b3.json()).then(_0x3e8785 => {\n      const _0x3eea71 = _0x3e8785.candidates[0x0].content.parts[0x0].text;\n      addBotMessage(_0x3eea71);\n    })[\"catch\"](_0x25b832 => {\n      console.error(\"Error fetching data:\", _0x25b832);\n    });\n  });\n  function startTypingAnimation(element, text) {\n    element.innerHTML = '';  // Clear the element's content\n    let isBold = false;      // Flag to track bold state\n    let formattedText = '';  // Variable to accumulate the formatted text\n\n    // Loop through the text and apply formatting\n    for (let i = 0; i < text.length; i++) {\n        if (text.substring(i, i + 2) === '**') {\n            isBold = !isBold;\n            formattedText += isBold ? '<strong>' : '</strong>';\n            i++;  // Skip the next character as we've processed a pair of asterisks\n        } else if (text.charAt(i) === \"\\n\") {\n            formattedText += \"<br>\";\n        } else {\n            formattedText += text.charAt(i);\n        }\n    }\n\n    element.innerHTML = formattedText;  // Set the formatted text to the element\n    const chatBox = document.getElementById('chat-box');\n    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom of the chat box\n}\n\nfunction addUserMessage(_0xe20525) {\n    var _0x369fc6 = document.getElementById(\"chat-box\");\n    var _0x2c1dac = document.createElement(\"div\");\n    _0x2c1dac.className = \"user-message\";\n    _0x2c1dac.textContent = _0xe20525;\n    _0x369fc6.appendChild(_0x2c1dac);\n    _0x369fc6.scrollTop = _0x369fc6.scrollHeight;\n  }\n  function addBotMessage(_0x4b7efa) {\n    var _0x4d8479 = document.getElementById(\"chat-box\");\n    var _0x449b1c = document.createElement('div');\n    _0x449b1c.className = \"bot-message\";\n    _0x4d8479.appendChild(_0x449b1c);\n    setTimeout(function () {\n      startTypingAnimation(_0x449b1c, _0x4b7efa);\n    }, 0x3e8);\n  }\n\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    const sidebarIcon = document.querySelector('#sidebar-icon');\n    const sidebar = document.getElementById('sidebar');\n    const body = document.body;\n\n    sidebarIcon.addEventListener('click', function (event) {\n        event.preventDefault();\n        sidebar.classList.toggle(\"active\");\n        body.classList.toggle(\"sidebar-open\");\n        // Toggle the Font Awesome icon class\n        sidebarIcon.classList.toggle('fa-bars');\n        sidebarIcon.classList.toggle('fa-times');\n    });\n});\n\nasync function fetchCustomSearchResults(query) {\n  const apiKeys = [\n    \"AIzaSyAnBflOjGSET7ZQHK4iNeZ0jqAj7bXtbMw\",\n    \"AIzaSyBn-1DwSjXpqV5nteGRxbiW-LvxS7pDz-Q\",\n    \"AIzaSyAtQtO2RDaXU1dr3OB8xAFK1uXOmgmfPes\"\n  ];\n  const cx = `${\"73ecbbd20d97b4289\"}`;\n\n  async function fetchResults(apiKey) {\n      const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&num=10`;\n      const response = await fetch(url);\n      if (response.status === 403) {\n          const responseJson = await response.json();\n          if (responseJson.error.errors[0].reason === \"quotaExceeded\") {\n              throw new Error(\"Quota exceeded\");\n          }\n      }\n      return response.json();\n  }\n\n  for (const apiKey of apiKeys) {\n      try {\n          const results = await fetchResults(apiKey);\n          return results.items || [];\n      } catch (error) {\n          if (error.message === \"Quota exceeded\") {\n              console.warn(`API key ${apiKey} quota exceeded, trying next key...`);\n          } else {\n              console.error(\"Error fetching custom search results:\", error);\n              return [];\n          }\n      }\n  }\n  throw new Error(\"All API keys have exceeded their quota limits\");\n}\n  async function fetchGeminiContent(_0x7e70a3) {\n    const _0xb3b78d = {\n      'contents': [{\n        'parts': [{\n          'text': _0x7e70a3\n        }]\n      }]\n    };\n    try {\n      const _0x134c96 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${\"AIzaSyCgM0vxDVUTFNZ5QMuTJa_oa8k6hLmN8QI\"}`, {\n        'method': 'POST',\n        'headers': {\n          'Content-Type': \"application/json\"\n        },\n        'body': JSON.stringify(_0xb3b78d)\n      });\n      const _0x5278ee = await _0x134c96.json();\n      return _0x5278ee.candidates && _0x5278ee.candidates[0x0].content.parts && _0x5278ee.candidates[0x0].content.parts.length > 0x0 ? _0x5278ee.candidates[0x0].content.parts[0x0].text.trim() : (console.error(\"Invalid response format:\", _0x5278ee), \"Error: Invalid response format.\");\n    } catch (_0x572e0e) {\n      console.error(\"Error fetching Gemini content:\", _0x572e0e);\n      return \"Error: Could not fetch content.\";\n    }\n  }\n  async function getResponse(_0x226a71) {\n    const _0x5afc73 = await fetchCustomSearchResults(_0x226a71);\n    const _0x3cb320 = _0x5afc73.map(_0x2f78f5 => _0x2f78f5.title + \": \" + _0x2f78f5.snippet).join(\"\\n\");\n    const _0x25a563 = \"Based on these search results, generate a response that also includes your own knowledge, give latest and accurate information:\\n\\n\" + _0x3cb320;\n    const _0x59f5a5 = await fetchGeminiContent(_0x25a563);\n    return _0x59f5a5;\n  }\n\n  document.getElementById(\"searchButton\").addEventListener('click', async () => {\n    const _0x49f82b = document.getElementById(\"searchQuery\").value;\n    const _0x7caea1 = document.getElementById(\"searchResults\");\n    const _0x157c0a = document.getElementById(\"search-box\");\n    const _0x3ec3ba = document.getElementById('loading');\n    _0x7caea1.innerHTML = '';\n    _0x157c0a.innerHTML = '';\n    _0x3ec3ba.classList.remove(\"hidden\");\n    try {\n      const _0x17f7b0 = await fetchCustomSearchResults(_0x49f82b);\n      _0x3ec3ba.classList.add(\"hidden\");\n      _0x7caea1.innerHTML = _0x17f7b0.map(_0x847292 => \"<p><strong><a href=\\\"\" + _0x847292.link + \"\\\" target=\\\"_blank\\\">\" + _0x847292.title + \"</a></strong>: \" + _0x847292.snippet + '</p>').join('');\n      const _0x56e0ce = await getResponse(_0x49f82b);\n      startTypingAnimation(_0x157c0a, _0x56e0ce);\n    } catch (_0x97496b) {\n      _0x3ec3ba.classList.add(\"hidden\");\n      _0x7caea1.innerHTML = \"<p>Error fetching search results: \" + _0x97496b.message + \"</p>\";\n      _0x157c0a.innerHTML = \"<p>Error: \" + _0x97496b.message + \"</p>\";\n    }\n  });\n\n  document.addEventListener(\"keydown\", function (_0x4edf77) {\n    if (_0x4edf77.shiftKey && _0x4edf77.key === 'Escape') {\n      var _0x51db18 = document.getElementById(\"user-input\");\n      if (_0x51db18) {\n        _0x51db18.focus();\n        _0x4edf77.preventDefault();\n      }\n    }\n  });\n\n  document.addEventListener(\"DOMContentLoaded\", function () {\n\n    const lightThemeLink = document.getElementById('light-theme');\n    const darkThemeLink = document.getElementById('dark-theme');\n\n    lightThemeLink.addEventListener('click', function (event) {\n        event.preventDefault();\n        setTheme('light');\n    });\n\n    darkThemeLink.addEventListener('click', function (event) {\n        event.preventDefault();\n        setTheme('dark');\n    });\n\n    function setTheme(theme) {\n        if (theme === 'light') {\n            document.getElementById('theme-style').setAttribute('href', 'css/light.css');\n        } else if (theme === 'dark') {\n            document.getElementById('theme-style').setAttribute('href', 'css/dark.css');\n        }\n        localStorage.setItem('theme', theme);\n    }\n\n    function loadTheme() {\n        const savedTheme = localStorage.getItem('theme');\n        if (savedTheme) {\n            setTheme(savedTheme);\n        }\n    }\n\n    loadTheme();\n});\n\n\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  // Function to change icon to loader and revert back after delay\n  function setLoading(buttonId, iconClass, duration, customAnimation) {\n    const button = document.getElementById(buttonId);\n    const originalIcon = button.innerHTML;\n\n    // Set to loader icon with custom animation\n    button.innerHTML = `<i class=\"fas fa-spinner fa-spin\"></i>`;\n\n    // Add random delay before reverting back\n    const randomDelay = Math.random() * 1000; // Delay between 0 and 1 second\n    const totalDuration = duration + randomDelay;\n\n    // Revert back after the specified duration\n    setTimeout(() => {\n      button.innerHTML = originalIcon;\n    }, totalDuration);\n  }\n\n  // Add event listeners to the buttons with different durations and custom animations\n  document.getElementById('searchButton').addEventListener('click', function() {\n    setLoading('searchButton', 'fas fa-search', 3000, 'animation: pulse 1s infinite;'); // Pulsating loader\n  });\n\n  document.getElementById('msg-btn').addEventListener('click', function() {\n    setLoading('msg-btn', 'fa-solid fa-wand-magic-sparkles', 3000, 'animation: rotate 1s linear infinite;'); // Rotating loader\n  });\n\n  document.getElementById('search-btn').addEventListener('click', function() {\n    setLoading('search-btn', 'fas fa-search', 3000, 'animation: zoomIn 1s linear infinite;'); // Zooming loader\n  });\n});\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;