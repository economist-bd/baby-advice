চমৎকার! আপনার আগের অগোছালো কোডটি ঠিক করে, ১ থেকে ১০০ পর্যন্ত সম্পূর্ণ উপদেশগুলো সুন্দর `Title`, `Content` এবং কালার কম্বিনেশনসহ সাজিয়ে দিচ্ছি।

আমি কোডটিকে এমনভাবে তৈরি করেছি যেন এটি আপনার **React/Frontend** প্রজেক্টে সরাসরি কপি করে ব্যবহার করতে পারেন। প্রতিটি কার্ডের জন্য ভিন্ন ভিন্ন কালার (Primary, Secondary, Accent) চক্রাকারে আসবে।

### `advices.js`

```javascript
export const advicesList = [
    // --- পর্ব ১: আদব-কায়দা ও ব্যবহার (১-১০) ---
    {
        id: 1,
        title: "সর্বদা সত্য কথা বলো",
        content: "সত্য হলো আলোর মতো। মিথ্যা বলে সাময়িক পার পাওয়া গেলেও শেষ পর্যন্ত তা বিপদের কারণ হয়। সত্যবাদী মানুষকে সবাই বিশ্বাস করে ও ভালোবাসে। তাই সাহস করে সত্য বলার অভ্যাস করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 2,
        title: "বড়দের সম্মান করো",
        content: "বাবা-মা, শিক্ষক এবং বয়সে বড়দের সম্মান করা তোমার দায়িত্ব। তাদের অভিজ্ঞতা ও উপদেশ মেনে চললে তুমি জীবনে অনেক ভুল থেকে বাঁচতে পারবে এবং সফল হবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 3,
        title: "সময়ের মূল্য দাও",
        content: "সময় নদীর স্রোতের মতো, একবার গেলে আর ফিরে আসে না। আজকের কাজ আগামীকালের জন্য ফেলে রেখো না। সময়ের সঠিক ব্যবহারই তোমাকে অন্যদের চেয়ে এগিয়ে রাখবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 4,
        title: "সালাম ও শুভেচ্ছা",
        content: "পরিচিত বা অপরিচিত বড় কাউকে দেখলে আগে সালাম বা নমস্কার দাও। এটি তোমার ভদ্রতা ও পারিবারিক শিক্ষার পরিচয় বহন করে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 5,
        title: "হাসিমুখে কথা বলা",
        content: "কারো সাথে কথা বলার সময় সর্বদা হাসিমুখে কথা বলো। তোমার মিষ্টি ব্যবহার অন্যের মন জয় করতে সাহায্য করবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 6,
        title: "বিনয়ী অনুরোধ",
        content: "কোনো কিছু চাওয়ার সময় সর্বদা 'দয়া করে' (Please) বলো। এতে মানুষ তোমাকে সাহায্য করতে আনন্দ বোধ করবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 7,
        title: "কৃতজ্ঞতা স্বীকার",
        content: "কেউ তোমার ছোট কোনো উপকার করলেও তাকে 'ধন্যবাদ' (Thank you) জানাতে ভুলবে না। কৃতজ্ঞতা মহৎ গুণের লক্ষণ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 8,
        title: "কথার মাঝখানে থামা",
        content: "দুজন কথা বলার সময় মাঝখানে কথা বলবে না। তাদের কথা শেষ হলে অনুমতি নিয়ে নিজের কথা বলা শুরু করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 9,
        title: "ক্ষমা চাওয়া",
        content: "মানুষ মাত্রই ভুল হয়। ভুল করে ফেললে তর্কে না জড়িয়ে সাথে সাথে 'দুঃখিত' (Sorry) বলো। এতে তোমার সম্মান কমবে না, বরং বাড়বে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 10,
        title: "মেহমান আপ্যায়ন",
        content: "বাড়িতে অতিথি আসলে তাদের সম্মান করো এবং তাদের প্রয়োজনে এগিয়ে এসো। অতিথির সেবা করা খুব ভালো কাজ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },

    // --- পর্ব ২: স্বাস্থ্য ও পরিচ্ছন্নতা (১১-২০) ---
    {
        id: 11,
        title: "হাত ধোয়ার অভ্যাস",
        content: "খাওয়ার আগে ও পরে এবং টয়লেট ব্যবহারের পর সাবান দিয়ে ভালো করে হাত ধোও। এটি তোমাকে জীবাণু থেকে রক্ষা করবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 12,
        title: "দাঁতের যত্ন",
        content: "প্রতিদিন সকালে নাস্তার পর ও রাতে ঘুমানোর আগে দাঁত মাজো। সুস্থ দাঁত মানে সুন্দর হাসি।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 13,
        title: "নখ পরিষ্কার রাখা",
        content: "নখ বড় হলে তাতে ময়লা জমে রোগ ছড়ায়। তাই নিয়মিত নখ কেটে ছোট ও পরিষ্কার রাখো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 14,
        title: "পরিচ্ছন্নতা",
        content: "বাইরে থেকে ফিরে হাত-মুখ ধুয়ে নাও। নিজের শরীর ও কাপড়চোপড় সবসময় পরিষ্কার রাখা স্বাস্থ্যের জন্য ভালো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 15,
        title: "হাঁচি ও কাশি",
        content: "হাঁচি বা কাশির সময় মুখে রুমাল বা হাতের কনুই দাও। এতে অন্যদের মধ্যে রোগ ছড়াবে না।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 16,
        title: "নিয়মিত গোসল",
        content: "প্রতিদিন গোসল করো। এতে শরীর ঝরঝরে থাকে এবং মন ভালো থাকে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 17,
        title: "সুস্থ খাবার",
        content: "বাইরের খোলা, ভাজাপোড়া বা বাসি খাবার খাবে না। ঘরের তৈরি টাটকা খাবার শরীরকে শক্তিশালী করে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 18,
        title: "পানি পান",
        content: "পর্যাপ্ত পরিমাণে বিশুদ্ধ পানি পান করো। পানি শরীরের বিষাক্ত পদার্থ বের করে দিতে সাহায্য করে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 19,
        title: "টয়লেট ব্যবহার",
        content: "টয়লেট ব্যবহারের পর পর্যাপ্ত পানি ব্যবহার করো এবং সাবান দিয়ে হাত ধোও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 20,
        title: "পরিবেশ রক্ষা",
        content: "যেখানে সেখানে থুথু বা ময়লা ফেলবে না। নির্দিষ্ট ডাস্টবিনে ময়লা ফেলো এবং পরিবেশ সুন্দর রাখো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },

    // --- পর্ব ৩: নৈতিকতা ও চরিত্র (২১-৩০) ---
    {
        id: 21,
        title: "সততা",
        content: "সবসময় সৎ থাকার চেষ্টা করো। সৎ মানুষকে আল্লাহ পছন্দ করেন এবং মানুষও বিশ্বাস করে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 22,
        title: "ভুল স্বীকার",
        content: "নিজের ভুল হলে তা লুকাবে না। সাহসের সাথে স্বীকার করো, এতে তোমার ব্যক্তিত্ব বড় হবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 23,
        title: "অন্যের জিনিস",
        content: "অনুমতি ছাড়া অন্যের জিনিস ধরবে না বা নেবে না। এটি চুরির সমান অপরাধ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 24,
        title: "ওয়াদা রক্ষা",
        content: "কাউকে কথা দিলে তা রাখার সর্বোচ্চ চেষ্টা করো। ওয়াদা ভঙ্গ করা মুনাফিকের লক্ষণ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 25,
        title: "হিংসা ত্যাগ",
        content: "অন্যের ভালো দেখে হিংসা করো না। বরং সবার ভালো চাও, এতে তোমার মন প্রশান্ত থাকবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 26,
        title: "শান্তি বজায় রাখা",
        content: "ঝগড়া বা মারামারি করা ভালো শিশুর কাজ নয়। সমস্যা হলে কথা বলে সমাধান করার চেষ্টা করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 27,
        title: "গীবত না করা",
        content: "কাউকে নিয়ে আড়ালে খারাপ কথা (গীবত) বলবে না। এটি খুব জঘন্য কাজ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 28,
        title: "সৎ পথ",
        content: "সবসময় ন্যায়ের পথে চলো। অসৎ পথে সাময়িক লাভ হলেও তা ধ্বংস ডেকে আনে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 29,
        title: "সহমর্মিতা",
        content: "দুর্বল, গরিব বা অসহায় মানুষকে সাহায্য করো। তাদের কষ্ট দেখে হাসাহাসি করবে না।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 30,
        title: "স্বাবলম্বী হওয়া",
        content: "নিজের ছোট ছোট কাজ (যেমন: জুতা পরা, বই গোছানো) নিজেই করার চেষ্টা করো। স্বাবলম্বী হওয়া গর্বের বিষয়।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },

    // --- পর্ব ৪: পড়াশোনা ও শৃঙ্খলা (৩১-৪০) ---
    {
        id: 31,
        title: "নিয়মিত পড়া",
        content: "প্রতিদিনের পড়া প্রতিদিন শেষ করো। পড়া জমিয়ে রাখলে পরে তা বোঝা হয়ে দাঁড়াবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 32,
        title: "মনোযোগ",
        content: "পড়ার সময় মনোযোগ দিয়ে পড়ো এবং খেলার সময় মন খুলে খেলো। সবকিছুর জন্য আলাদা সময় রাখো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 33,
        title: "স্কুলের নিয়ম",
        content: "স্কুল ও ক্লাসের নিয়মকানুন মেনে চলো। ইউনিফর্ম পরে পরিপাটি হয়ে স্কুলে যাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 34,
        title: "সঠিক ঘুম",
        content: "রাত জাগবে না। তাড়াতাড়ি ঘুমাতে যাও এবং ভোরে ওঠো। এটি মেধা বিকাশে সাহায্য করে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 35,
        title: "গোছানো স্বভাব",
        content: "পড়া শেষ হলে বই-খাতা ও কলম গুছিয়ে রাখো। অগোছালো টেবিলে পড়তে বসলে মনোযোগ আসে না।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 36,
        title: "শিক্ষকের সম্মান",
        content: "শিক্ষকরা আমাদের মানুষ গড়ার কারিগর। তাদের কথা মনোযোগ দিয়ে শোনো ও মেনে চলো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 37,
        title: "নতুন কিছু শেখা",
        content: "প্রতিদিন অন্তত একটি নতুন শব্দ বা বিষয় শেখার চেষ্টা করো। এতে তোমার জ্ঞান বৃদ্ধি পাবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 38,
        title: "স্ক্রিন টাইম",
        content: "মোবাইল, টিভি বা গেমসে বেশিক্ষণ সময় নষ্ট করবে না। এর চেয়ে বই পড়া বা মাঠে খেলা অনেক ভালো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 39,
        title: "প্রশ্ন করা",
        content: "ক্লাসে না বুঝলে লজ্জা পাবে না, হাত তুলে শিক্ষককে বারবার জিজ্ঞেস করো। প্রশ্ন করাই শেখার শুরু।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 40,
        title: "হাতের লেখা",
        content: "সুন্দর হাতের লেখা পরীক্ষার খাতায় ভালো নম্বর পেতে সাহায্য করে। প্রতিদিন এক পৃষ্ঠা হাতের লেখা চর্চা করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },

    // --- পর্ব ৫: সামাজিক ও মানসিক বিকাশ (৪১-৫০) ---
    {
        id: 41,
        title: "প্রাণীর প্রতি দয়া",
        content: "পশুপাখিকে কখনো কষ্ট দেবে না। তারাও ব্যথা পায়। তাদের ভালোবাসো এবং খাবার দাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 42,
        title: "খাবার অপচয়",
        content: "খাবার অপচয় করা খুব খারাপ। প্লেটে যতটুকু খেতে পারবে, ঠিক ততটুকুই নাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 43,
        title: "পথ চলা",
        content: "রাস্তা পার হওয়ার সময় ডানে-বাঁয়ে দেখে সাবধানে পার হও। ফুটপাত ব্যবহার করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 44,
        title: "সতর্কতা",
        content: "অপরিচিত কারো দেওয়া খাবার খাবে না বা তাদের সাথে কোথাও যাবে না। বিপদে পড়লে চিৎকার করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 45,
        title: "শেয়ারিং",
        content: "বন্ধুদের সাথে খেলনা বা খাবার ভাগ করে নাও। 'Sharing is Caring' - মিলেমিশে থাকলে আনন্দ বাড়ে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 46,
        title: "গাছ লাগানো",
        content: "গাছ আমাদের বন্ধু। গাছের পাতা ছিঁড়বে না বা ডাল ভাঙবে না। সুযোগ পেলে একটি করে গাছ লাগাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 47,
        title: "সহযোগিতা",
        content: "খেলার মাঠে কেউ পড়ে গেলে তাকে হাসাহাসি না করে টেনে তোলো এবং সান্ত্বনা দাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 48,
        title: "কাজে সাহায্য",
        content: "বাসার ছোট ছোট কাজে মা-বাবাকে সাহায্য করো। যেমন: পানি এগিয়ে দেওয়া বা ঘর গোছানো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 49,
        title: "সম্পদ রক্ষা",
        content: "বিদ্যুৎ ও পানি জাতীয় সম্পদ। অকারণে ফ্যান-লাইট জ্বালিয়ে রাখবে না এবং পানির কল বন্ধ রাখবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 50,
        title: "আত্মবিশ্বাস",
        content: "নিজেকে ভালোবাসো এবং বিশ্বাস করো 'আমিও পারব'। আত্মবিশ্বাস তোমাকে অনেক দূর নিয়ে যাবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },

    // --- পর্ব ৬: নিরাপত্তা ও সচেতনতা (৫১-৬০) ---
    {
        id: 51,
        title: "আগুন থেকে সাবধান",
        content: "ম্যাচ, লাইটার বা গ্যাসের চুলা নিয়ে খেলা করবে না। আগুন খুব বিপজ্জনক, এটি থেকে দূরে থাকো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 52,
        title: "ধারালো বস্তু",
        content: "ছুরি, ব্লেড বা কাঁচি দিয়ে খেলবে না। এগুলো ব্যবহার করতে হলে বড়দের সাহায্য নাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 53,
        title: "গুড টাচ ও ব্যাড টাচ",
        content: "তোমার শরীরের ব্যক্তিগত জায়গায় কেউ হাত দিলে জোরে চিৎকার করো এবং সাথে সাথে বাবা-মাকে জানাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 54,
        title: "বৈদ্যুতিক সুইচ",
        content: "ভেজা হাতে কখনো বৈদ্যুতিক সুইচ বা প্লাগ ধরবে না। এতে শক খাওয়ার ভয় থাকে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 55,
        title: "ঔষধ",
        content: "বড়দের অনুমতি ছাড়া কোনো ঔষধ মুখে দেবে না। ভুল ঔষধ খাওয়া জীবনের জন্য ঝুঁকিপূর্ণ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 56,
        title: "ছিটকিনি বা লক",
        content: "বাথরুম বা ঘরের দরজা ভেতর থেকে লক করার সময় সাবধান থেকো, যেন আটকে না যাও।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 57,
        title: "সিঁড়িতে সতর্কতা",
        content: "সিঁড়ি দিয়ে ওঠানামার সময় দৌড়াদৌড়ি করবে না। রেলিং ধরে সাবধানে ওঠানামা করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 58,
        title: "পুকুর বা নদী",
        content: "সাঁতার না জানলে পুকুর বা নদীর গভীর পানিতে নামবে না। বড়দের সাথে ছাড়া পানিতে যাবে না।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 59,
        title: "ভেজা মেঝ",
        content: "বাথরুম বা ঘরের মেঝে ভেজা থাকলে দৌড়াবে না। পিছলে পড়ে হাড় ভাঙার ভয় থাকে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 60,
        title: "ঠিকানা ও ফোন নম্বর",
        content: "নিজের বাসার ঠিকানা এবং বাবা-মায়ের ফোন নম্বর মুখস্থ রাখো। হারিয়ে গেলে এটি তোমাকে সাহায্য করবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },

    // --- পর্ব ৭: মানসিক ও আবেগীয় শিক্ষা (৬১-৭০) ---
    {
        id: 61,
        title: "রাগ নিয়ন্ত্রণ",
        content: "রাগ হলে সাথে সাথে কোনো কাজ করবে না। ১০ পর্যন্ত গুনতে থাকো অথবা পানি পান করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 62,
        title: "ধৈর্য",
        content: "যেকোনো কাজে ধৈর্য ধরো। তাড়াহুড়ো করলে কাজ নষ্ট হয়ে যায়। ধৈর্যশীলরা শেষে বিজয়ী হয়।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 63,
        title: "ক্ষমা করা",
        content: "কেউ তোমার সাথে খারাপ ব্যবহার করলে তাকে ক্ষমা করতে শেখো। ক্ষমা মহৎ গুণের লক্ষণ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 64,
        title: "ভয় জয় করা",
        content: "অকারণে ভয় পাবে না। ভয় পেলে বাবা-মাকে বলো। সাহসের সাথে ভয়ের মোকাবিলা করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 65,
        title: "মন খারাপ হলে",
        content: "মন খারাপ হলে চুপ করে থেকো না। বন্ধুদের সাথে খেলো অথবা পছন্দের কোনো ছবি আঁকো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 66,
        title: "অন্যের প্রশংসা",
        content: "অন্যের ভালো কাজের প্রশংসা করো। এতে তাদের উৎসাহ বাড়ে এবং তুমিও আনন্দ পাবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 67,
        title: "নেতৃত্ব দেওয়া",
        content: "খেলার সময় বা দলের কাজে সবাইকে নিয়ে কাজ করো। ভালো নেতা সবাইকে সম্মান দেয়।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 68,
        title: "কৌতুহল",
        content: "আশেপাশের জগত সম্পর্কে জানার আগ্রহ রাখো। 'কেন' এবং 'কিভাবে' - এই প্রশ্নগুলো করতে শেখো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 69,
        title: "সাফল্যে গর্ব নয়",
        content: "ভালো রেজাল্ট বা বিজয়ে অহংকার করবে না। বিনীত থাকো এবং আরও ভালো করার চেষ্টা করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 70,
        title: "ব্যর্থতায় শিক্ষা",
        content: "হেরে গেলে মন খারাপ করবে না। কেন হেরেছো তা ভাবো এবং পরের বার আরও ভালো করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },

    // --- পর্ব ৮: দেশপ্রেম ও সংস্কৃতি (৭১-৮০) ---
    {
        id: 71,
        title: "দেশকে ভালোবাসা",
        content: "তোমার দেশকে ভালোবাসো। দেশের মঙ্গলে কাজ করা প্রতিটি নাগরিকের দায়িত্ব।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 72,
        title: "জাতীয় সংগীত",
        content: "জাতীয় সংগীত গাওয়ার সময় সোজা হয়ে দাঁড়িয়ে সম্মান প্রদর্শন করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 73,
        title: "আইন মানা",
        content: "দেশের আইন কানুন মেনে চলো। ছোটবেলা থেকেই সুনাগরিক হওয়ার চর্চা করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 74,
        title: "সংস্কৃতি চর্চা",
        content: "নিজের ভাষা ও সংস্কৃতিকে ভালোবাসো। বাংলা ভাষায় কথা বলতে গর্ববোধ করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 75,
        title: "বই পড়া",
        content: "পাঠ্যবইয়ের বাইরেও গল্পের বই, ছড়ার বই বা ইতিহাসের বই পড়ো। বই মানুষের সেরা বন্ধু।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 76,
        title: "ঐতিহাসিক স্থান",
        content: "সুযোগ পেলে জাদুঘর বা ঐতিহাসিক স্থানে ঘুরতে যাও। এতে জ্ঞান বাড়ে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 77,
        title: "সাম্প্রদায়িক সম্প্রীতি",
        content: "সব ধর্মের মানুষকে সম্মান করো। ধর্ম যার যার, কিন্তু আমরা সবাই মানুষ।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 78,
        title: "উৎসব পালন",
        content: "সবাই মিলে উৎসবের আনন্দ ভাগ করে নাও। একা আনন্দ করায় কোনো মজা নেই।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 79,
        title: "মুক্তিযুদ্ধ",
        content: "মুক্তিযুদ্ধের ইতিহাস জানো এবং শহীদদের প্রতি শ্রদ্ধা রাখো। তাদের ত্যাগের কারণেই আমরা স্বাধীন।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 80,
        title: "সতর্কতা ও গুজব",
        content: "না জেনে কোনো খবর বিশ্বাস করবে না বা ছড়াবে না। গুজবে কান দেওয়া বুদ্ধিমানের কাজ নয়।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },

    // --- পর্ব ৯: দৈনন্দিন দক্ষতা ও শখ (৮১-৯০) ---
    {
        id: 81,
        title: "সঞ্চয় করা",
        content: "তোমার টিফিনের টাকা থেকে অল্প অল্প করে জমানোর অভ্যাস করো। বিপদে এই সঞ্চয় কাজে লাগে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 82,
        title: "ছবি আঁকা",
        content: "মনের ভাব প্রকাশ করতে ছবি আঁকো। এটি তোমার সৃজনশীলতা বাড়াতে সাহায্য করবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 83,
        title: "বাগান করা",
        content: "অবসর সময়ে ছোট পরিসরে বাগান করতে পারো। মাটির সাথে সম্পর্ক রাখলে মন ভালো থাকে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 84,
        title: "ব্যায়াম",
        content: "প্রতিদিন সকালে বা বিকেলে কিছুক্ষণ দৌড়াদৌড়ি বা ব্যায়াম করো। শরীর সুস্থ থাকবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 85,
        title: "গল্প বলা",
        content: "সুন্দর করে গল্প বলা বা কবিতা আবৃত্তি শেখো। এতে তোমার জড়তা কাটবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 86,
        title: "সময়ানুবর্তিতা",
        content: "যেকোনো অনুষ্ঠানে বা স্কুলে সঠিক সময়ে পৌঁছানোর চেষ্টা করো। দেরি করা খারাপ অভ্যাস।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 87,
        title: "দিনলিপি লেখা",
        content: "প্রতিদিন কী করলে তা ডায়েরিতে লেখার অভ্যাস করতে পারো। এতে তোমার লেখার হাত ভালো হবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 88,
        title: "জুতা ও পোশাক",
        content: "নিজের জুতা নিজেই পরিষ্কার করো এবং কাপড় ভাঁজ করে রাখো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 89,
        title: "প্রযুক্তি ব্যবহার",
        content: "কম্পিউটার বা মোবাইল ভালো কাজে ব্যবহার শেখো। অপ্রয়োজনীয় গেমস খেলে সময় নষ্ট করো না।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 90,
        title: "উপহার তৈরি",
        content: "বন্ধুর জন্মদিনে দোকান থেকে না কিনে নিজের হাতে কার্ড বানিয়ে উপহার দাও। এর মূল্য অনেক বেশি।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },

    // --- পর্ব ১০: বিবিধ ও আধ্যাত্মিকতা (৯১-১০০) ---
    {
        id: 91,
        title: "প্রার্থনা",
        content: "প্রতিদিন সৃষ্টিকর্তাকে স্মরণ করো এবং প্রার্থনা করো। এতে মনের জোর বাড়ে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 92,
        title: "ধ্যান বা মেডিটেশন",
        content: "মাঝে মাঝে চোখ বন্ধ করে চুপচাপ বসে থাকো। এটি তোমার মনোযোগ বাড়াতে সাহায্য করবে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 93,
        title: "দান করা",
        content: "তোমার পুরনো খেলনা বা কাপড় গরিব শিশুদের দান করো। দানে ধন কমে না, বাড়ে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 94,
        title: "প্রতিবেশীর হক",
        content: "প্রতিবেশীর সাথে ভালো ব্যবহার করো। তাদের বিপদে এগিয়ে যাওয়া তোমার দায়িত্ব।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 95,
        title: "শব্দ দূষণ",
        content: "উচ্চস্বরে গান বাজাবে না। এতে অসুস্থ বা বয়স্ক মানুষের কষ্ট হতে পারে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 96,
        title: "প্লাস্টিক বর্জন",
        content: "প্লাস্টিকের প্যাকেট বা বোতল যেখানে সেখানে ফেলবে না। এগুলো পচে না এবং মাটি নষ্ট করে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 97,
        title: "দলগত কাজ",
        content: "সবাই মিলে কাজ করতে শেখো। মিলেমিশে কাজ করলে কঠিন কাজও সহজ হয়ে যায়।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    },
    {
        id: 98,
        title: "হাসি খুশি থাকা",
        content: "সবসময় হাসি খুশি থাকার চেষ্টা করো। হাসি মন ও শরীর দুই-ই ভালো রাখে।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-secondary/10",
        borderColor: "border-kid-secondary"
    },
    {
        id: 99,
        title: "স্বপ্ন দেখা",
        content: "বড় হওয়ার স্বপ্ন দেখো। যার স্বপ্ন যত বড়, তার সফল হওয়ার সম্ভাবনা তত বেশি।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-accent/10",
        borderColor: "border-kid-accent"
    },
    {
        id: 100,
        title: "ভালো মানুষ হওয়া",
        content: "জীবনে ডাক্তার বা ইঞ্জিনিয়ার হওয়ার চেয়েও বড় কথা হলো একজন ভালো মানুষ হওয়া। মানবিক গুণাবলী অর্জন করো।",
        image: "https://i.ibb.co.com/7t1HCxhX/aa0d41d7-b5d0-4711-aa10-11750dfb8bed-Copy-Copy.jpg",
        bgColor: "bg-kid-primary/10",
        borderColor: "border-kid-primary"
    }
];

```
