let gender = "";
let currentQuestion = 0;
let selectedProduct = "";

// Estrutura das perguntas e produtos
const questions = {
    masculino: [
        { 
            question: "Qual frase mais representa seu estilo de vida?",
            options: [
                { text: "Viva pela fé 🙏", product: "https://lightchosen.com/product/camisa-3/" },
                { text: "Deus é minha fortaleza 💪", product: "https://lightchosen.com/product/camisa-2/" }
            ]
        },
        { 
            question: "Qual versículo mais te inspira?",
            options: [
                { text: "Salmos 23:1 - O Senhor é meu pastor...", product: "https://lightchosen.com/product/camisa-3/" },
                { text: "Isaías 40:31 - Aqueles que esperam no Senhor...", product: "https://lightchosen.com/product/camisa-2/" }
            ]
        }
    ],
    feminino: [
        { 
            question: "O que mais representa sua fé?",
            options: [
                { text: "Confiança em Deus 🌿", product: "https://lightchosen.com/product/camisa-fem-1/" },
                { text: "Ser luz neste mundo 💡", product: "https://lightchosen.com/product/camisa-fem-2/" }
            ]
        },
        { 
            question: "Qual versículo mais toca seu coração?",
            options: [
                { text: "Provérbios 31:25 - Ela se veste de força e dignidade...", product: "https://lightchosen.com/product/camisa-fem-1/" },
                { text: "Mateus 5:16 - Assim brilhe a sua luz...", product: "https://lightchosen.com/product/camisa-fem-2/" }
            ]
        }
    ]
};

const products = {
    "https://lightchosen.com/product/camisa-3/": { 
        img: "https://lightchosen.com/wp-content/uploads/2024/03/camisa3.jpg", 
        desc: "Camiseta minimalista com versículo inspirador para fortalecer sua fé."
    },
    "https://lightchosen.com/product/camisa-2/": { 
        img: "https://lightchosen.com/wp-content/uploads/2024/03/camisa2.jpg", 
        desc: "Design sofisticado que transmite a força e confiança em Deus."
    },
    "https://lightchosen.com/product/camisa-fem-1/": { 
        img: "https://lightchosen.com/wp-content/uploads/2024/03/camisa-fem1.jpg", 
        desc: "Uma peça elegante que reflete a beleza da fé cristã."
    },
    "https://lightchosen.com/product/camisa-fem-2/": { 
        img: "https://lightchosen.com/wp-content/uploads/2024/03/camisa-fem2.jpg", 
        desc: "Inspirada no brilho da luz que Deus colocou em você."
    }
};

// Seleção de elementos HTML
const genderContainer = document.getElementById("gender-container");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const productImage = document.getElementById("product-image");
const productDescription = document.getElementById("product-description");
const buyButton = document.getElementById("buy-button");

// Esconder a recomendação no início
resultContainer.style.display = "none";

// Definir o gênero e iniciar o quiz
function setGender(selectedGender) {
    gender = selectedGender;
    genderContainer.style.display = "none";
    questionContainer.style.display = "block";
    loadQuestion();
}

// Carregar pergunta atual
function loadQuestion() {
    const q = questions[gender][currentQuestion];
    questionText.innerText = q.question;
    optionsContainer.innerHTML = "";
    
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option.text;
        btn.classList.add("btn");
        btn.onclick = () => {
            selectedProduct = option.product;
            nextQuestion();
        };
        optionsContainer.appendChild(btn);
    });
}

// Passar para a próxima pergunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions[gender].length) {
        loadQuestion();
    } else {
        showProduct();
    }
}

// Exibir produto recomendado
function showProduct() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    
    if (selectedProduct in products) {
        productImage.src = products[selectedProduct].img;
        productImage.alt = "Imagem do produto recomendado";
        productDescription.innerText = products[selectedProduct].desc;
        buyButton.href = selectedProduct;
        buyButton.target = "_blank";
    } else {
        productImage.src = "";
        productDescription.innerText = "Produto não encontrado.";
    }
}
