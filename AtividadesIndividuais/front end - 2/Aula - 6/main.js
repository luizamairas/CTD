let contentRef = document.querySelector("#content");

const felins = [
  {
    imageUrl: "./imagens/tiger.jpg",
    tittle: "O Tigre",
    text: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão",
  },

  {
    imageUrl: "./imagens/leon.jpg",
    tittle: "O leão",
    text: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão",
  },

  {
    imageUrl: "./imagens/leopardo.jpg",
    tittle: "O leopardo",
    text: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão",
  },

  {
    imageUrl: "./imagens/pantera-negra.jpg",
    tittle: "A pantera negra",
    text: "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Pantheraleo).",
  },

  {
    imageUrl: "./imagens/chita.jpg",
    tittle: "O guepardo",
    text: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
  },

  {
    imageUrl: "./imagens/chita.jpg",
    tittle: "O guepardo",
    text: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
  },
];

for (const feline of felins) {
    contentRef.innerHTML += `
    <div class="item">
        <img src="${feline.imageUrl}">
        <h2>${feline.tittle}</h2>
        <p>${feline.text}</p>
    </div> 
    `;
}