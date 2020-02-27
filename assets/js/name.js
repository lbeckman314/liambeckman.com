let name = `[
  {
    "locale": "af",
    "country": "Afrikaans",
    "string": "Hallo, ek is liam",
    "wiki": "https://wikipedia.org/wiki/Afrikaans_language"
  },
  {
    "locale": "ar",
    "country": "Arabic",
    "string": "مرحبا ، أنا ليام",
    "wiki": "https://wikipedia.org/wiki/Arabic_language"
  },
  {
    "locale": "ca",
    "country": "Catalan",
    "string": "Hola, sóc liam",
    "wiki": "https://wikipedia.org/wiki/Catalan_language"
  },
  {
    "locale": "cs",
    "country": "Czech",
    "string": "Ahoj, jsem liam",
    "wiki": "https://wikipedia.org/wiki/Czech_language"
  },
  {
    "locale": "cy",
    "country": "Welsh",
    "string": "Helo, dwi&#39;n liam",
    "wiki": "https://wikipedia.org/wiki/Welsh_language"
  },
  {
    "locale": "da",
    "country": "Danish",
    "string": "Hej, jeg er liam",
    "wiki": "https://wikipedia.org/wiki/Danish_language"
  },
  {
    "locale": "de",
    "country": "German",
    "string": "Hallo, ich bin liam",
    "wiki": "https://wikipedia.org/wiki/German_language"
  },
  {
    "locale": "en",
    "country": "English",
    "string": "Hello, I'm liam",
    "wiki": "https://wikipedia.org/wiki/English_language"
  },
  {
    "locale": "es",
    "country": "Spanish",
    "string": "Hola, me llamo liam",
    "wiki": "https://wikipedia.org/wiki/Spanish_language"
  },
  {
    "locale": "et",
    "country": "Estonian",
    "string": "Tere, minu nimi on liam",
    "wiki": "https://wikipedia.org/wiki/Estonian_language"
  },
  {
    "locale": "fa",
    "country": "Persian",
    "string": "سلام ، اسم من لیام است",
    "wiki": "https://wikipedia.org/wiki/Persian_language"
  },
  {
    "locale": "fi",
    "country": "Finnish",
    "string": "Hei, olen liam",
    "wiki": "https://wikipedia.org/wiki/Finnish_language"
  },
  {
    "locale": "fr",
    "country": "French",
    "string": "Bonjour, je suis liam",
    "wiki": "https://wikipedia.org/wiki/French_language"
  },
  {
    "locale": "ga",
    "country": "Irish",
    "string": "Dia duit, is mise liam",
    "wiki": "https://wikipedia.org/wiki/Irish_language"
  },
  {
    "locale": "hi",
    "country": "Hindi",
    "string": "हैलो, मैं लियाम हूँ",
    "wiki": "https://wikipedia.org/wiki/Hindi_language"
  },
  {
    "locale": "ht",
    "country": "Haitian Creole",
    "string": "Bonjou, mwen se liam",
    "wiki": "https://wikipedia.org/wiki/Haitia_language"
  },
  {
    "locale": "id",
    "country": "Indonesian",
    "string": "Halo, saya liam",
    "wiki": "https://wikipedia.org/wiki/Indonesian_language"
  },
  {
    "locale": "is",
    "country": "Icelandic",
    "string": "Halló, ég er liam",
    "wiki": "https://wikipedia.org/wiki/Icelandic_language"
  },
  {
    "locale": "it",
    "country": "Italian",
    "string": "Ciao, sono liam",
    "wiki": "https://wikipedia.org/wiki/Italian_language"
  },
  {
    "locale": "iw",
    "country": "Hebrew",
    "string": "שלום, אני ליאם",
    "wiki": "https://wikipedia.org/wiki/Hebrew_language"
  },
  {
    "locale": "la",
    "country": "Latin",
    "string": "Salve, sum liam",
    "wiki": "https://wikipedia.org/wiki/Latin_language"
  },
  {
    "locale": "ne",
    "country": "Nepali",
    "string": "नमस्कार, म लिअम हुँ",
    "wiki": "https://wikipedia.org/wiki/Nepali_language"
  },
  {
    "locale": "nl",
    "country": "Dutch",
    "string": "Hallo, ik ben liam",
    "wiki": "https://wikipedia.org/wiki/Dutch_language"
  },
  {
    "locale": "no",
    "country": "Norwegian",
    "string": "Hei, jeg er liam",
    "wiki": "https://wikipedia.org/wiki/Norwegian_language"
  },
  {
    "locale": "pa",
    "country": "Punjabi",
    "string": "ਹੈਲੋ, ਮੈਂ ਲੀਅਮ ਹਾਂ",
    "wiki": "https://wikipedia.org/wiki/Punjabi_language"
  },
  {
    "locale": "pl",
    "country": "Polish",
    "string": "Cześć, jestem liam",
    "wiki": "https://wikipedia.org/wiki/Polish_language"
  },
  {
    "locale": "pt",
    "country": "Portuguese",
    "string": "Olá, eu sou liam",
    "wiki": "https://wikipedia.org/wiki/Portuguese_language"
  },
  {
    "locale": "ru",
    "country": "Russian",
    "string": "Привет я Лиам",
    "wiki": "https://wikipedia.org/wiki/Russian_language"
  },
  {
    "locale": "sv",
    "country": "Swedish",
    "string": "Hej, jag är liam",
    "wiki": "https://wikipedia.org/wiki/Swedish_language"
  },
  {
    "locale": "th",
    "country": "Thai",
    "string": "สวัสดีฉันชื่อเลียม",
    "wiki": "https://wikipedia.org/wiki/Thai_language"
  },
  {
    "locale": "uk",
    "country": "Ukrainian",
    "string": "Здрастуйте, я liam",
    "wiki": "https://wikipedia.org/wiki/Ukrainian_language"
  },
  {
    "locale": "ur",
    "country": "Urdu",
    "string": "ہیلو ، میں لیام ہوں",
    "wiki": "https://wikipedia.org/wiki/Urdu_language"
  },
  {
    "locale": "vi",
    "country": "Vietnamese",
    "string": "Xin chào, tôi là liam",
    "wiki": "https://wikipedia.org/wiki/Vietnamese_language"
  },
  {
    "locale": "yi",
    "country": "Yiddish",
    "string": "העלא, איך בין ליאַם",
    "wiki": "https://wikipedia.org/wiki/Yiddish_language"
  }
]`;

let nameObj = JSON.parse(name);
let keys = Object.keys(nameObj);
let random = keys[Math.floor(Math.random() * keys.length)];
let hello = document.getElementById("hello");
hello.innerHTML = nameObj[random].string;
let wiki = document.getElementById("wiki");
wiki.href = nameObj[random].wiki;

