
// =====================================
// CATÁLOGO - BIBLIOTEC
// =====================================

// PESQUISAR GÊNEROS

const pesquisa = document.getElementById("pesquisa-genero");

const generos = document.querySelectorAll(".genero");

pesquisa.addEventListener("input", () => {

    const termo = pesquisa.value.toLowerCase().trim();

    generos.forEach(genero => {

        const nome = genero.querySelector("h2")
            .textContent.toLowerCase();

        const descricao = genero.querySelector("p")
            .textContent.toLowerCase();

        if (
            nome.includes(termo) ||
            descricao.includes(termo)
        ) {
            genero.style.display = "";
        } else {
            genero.style.display = "none";
        }

    });

});
