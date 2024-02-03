export const projects = [
  {
    title: "Chip-8 emulator",
    subtitle: "Rust",
    description:
      "This project is an implementation of an emulator for the CHIP-8 fantasy video game console. It is written in Rust and uses the minifb library for graphics and input handling. The project is open-source and available on GitHub.",
    image: "https://private-user-images.githubusercontent.com/59739923/297450538-f29670bf-30b7-4aeb-8ed6-3ae8e35876a0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY5MzY3ODMsIm5iZiI6MTcwNjkzNjQ4MywicGF0aCI6Ii81OTczOTkyMy8yOTc0NTA1MzgtZjI5NjcwYmYtMzBiNy00YWViLThlZDYtM2FlOGUzNTg3NmEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjAzVDA1MDEyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzYTE2MWMxNzJhODA5ZTIzZmQzNzAxZWZmOTNiMGMwYjk1YmI1MTM0OWI1YzUwMDQ0M2Q2NGQ0N2Y4YzU0ZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.eiRtqVn9rEB2hLp_bIdSxXXGSZWF5m7XDdgQpixhLJ4",
    link: "https://github.com/Saphereye/chip-8-emulator",
  },
  {
    title: "Chess AI comparative analysis",
    subtitle: "Python3",
    description:
      "Aimed to explore search algorithms to create a novel chess engine. We use python3.10 programming language and chess module as an interace for handling the board. Furthermore chessboard library was used for gui display.",
    image: "https://private-user-images.githubusercontent.com/59739923/284095534-a40912ba-c853-4099-911f-adf27e5432cb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY5NDU3MDQsIm5iZiI6MTcwNjk0NTQwNCwicGF0aCI6Ii81OTczOTkyMy8yODQwOTU1MzQtYTQwOTEyYmEtYzg1My00MDk5LTkxMWYtYWRmMjdlNTQzMmNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjAzVDA3MzAwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY3MDc1ZjQ1YmVjNTZmYjA2ODQ2NDk1YTIxMmE3Mzg1OGVjYzNlZjIyZDQ5MzBmODA2N2ZhMzI1MjEwNWNlZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.AMHIoDdVC0hTa_TUQ9UfPfc3MGQS0phnTg23M3PlCKQ",
    link: "https://github.com/Saphereye/ChessAI",
  },
  {
    title: "Secure and friendly Quiz App",
    subtitle: "Next.js",
    description:
      "A secure and user friendly quiz app interface that detects malpractices and auto submits the user's response. It can detect tab changes and window changes as well.",
    image: "./projectdata/quizapp.png",
    link: "https://quizapp-ten-swart.vercel.app/",
  },
  {
    title: "Brainfuck Interpreter",
    subtitle: "Rust",
    description:
      "Implemented a brainf*ck interpreter in Rust with the brain of the code in about 150 loc. Supports intuitive command line support. A toy project finished in two hours.\nThe project support improved versions also.\nAs a demo, for the below input of a serpinski triangle in brainfuck code, the interpreter succesfully produces the output",
    image: "./projectdata/brainfuck.png",
    link: "https://github.com/Saphereye/brainfuck-interpreter",
  },
  {
    title: "Terminal image display",
    subtitle: "Rust",
    description:
      "This program addresses the challenge of displaying images in a terminal, which lacks the ability to render small pixels. It achieves this by pixelating the image and leveraging the terminal's color coding capabilities to provide a more accurate representation",
    image: "./projectdata/imgterm.png",
    link: "https://github.com/Saphereye/image-to-terminal",
  },
  {
    title: "Malaria Cell classification using state-of-the-art Vision Tranformer",
    subtitle: "Python3",
    description:
      "The project utilized vision transformer trained on various processed images of the training data such as green channel, green channle canny filx`tered and klahe filter. The individual models where then combined using a ensemble methods. The validation set gave 99.7% accuracy and the testing accuracy was ~94%",
    image: "./projectdata/ip.png",
    link: "./projectdata/Malaria Detection.pdf"
  },
  {
    title: "Pneumonia diagnosis using chest X-ray",
    subtitle: "Python3",
    description:
      "The project leveraged vision transformers architecture for pneumonia diagnosis. The project also included implementing methods for improving upon the research paper on which it was implemented",
    image: "./projectdata/dl.png",
    link: "./projectdata/DL_Report.pdf"
  },
  {
    title: "BC6 data analysis and proposal submission website",
    subtitle: "Django, React",
    description:
      "This was a project for my research internship at NCPOR, Goa. The project was made using Django. It supports a step by step research submission portal and features such as email verification for proposal acceptance. It also includes a page for visualizing BC6 carbon data.",
    image: "./projectdata/ncpor.png",
    link: null
  },
  {
    title: "NES Emulator",
    subtitle: "Rust",
    description:
      "Implemented a an NES emulator in rust. Supports screen switching and input mapping.",
    image: "./projectdata/nes.png",
    link: "https://github.com/Saphereye/nes_emulator"
  },
  {
    title: "Handouts For You",
    subtitle: "React.js",
    description:
      "A dedicated website to facilitate the accessibility of almost 2000+ course handouts, expanded the website's functionality by incorporating features for sharing notes, resources, and questions related to the campus, and implemented a course review system, notes sharing system and CGPA cutoff system with 4000+ students handling 1000+ requests per day.",
    image: "./projectdata/handouts.png",
    link: "https://handoutsforyou.vercel.app/"
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node",
  "GraphQL",
  "Tailwind",
  "Figma",
  "Python",
  "Django",
  "Flask",
];

export const education = [
  "Data Structures and Algorithms",
  "Database Systems",
  "Object Oriented Programming",
  "Operating Systems",
  "Computer Architecture",
  "Deep Learning",
  "Machine Learning",
  "Artificial Intelligence",
  "Image Processing",
  "Digital Design",
  "Computer Programming",
  "Principles of Management",
];