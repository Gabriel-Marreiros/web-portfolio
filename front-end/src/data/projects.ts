import IProject from "../types/interfaces/IProject";


const projects: Array<IProject> = [
    {
        title: "Portfólio Web",
        description: "Este projeto foi criado para mostrar a minha trajetória profissional e educacional, apresentar os meus projetos de estudo e freelancer, meus certificados de cursos, as tecnologias e ferramentas nas quais possuo conhecimento e os meus contatos.",
        coverImage: "/images/web-portfolio-project-cover-image.png",
        demonstrationVideo: "/videos/web-portfolio-demonstration-video.mp4",
        repository: "https://github.com/Gabriel-Marreiros/Portfolio",
        usedTechnologies: [
            "React",
            "Typescript",
            "Sass",
            "Bootstrap",
            "Docker"
        ]
    },
    {
        title: "Help Desk Angular & Java",
        description: "O Help Desk Angular & Java é uma aplicação criada para gerenciar a criação e atribuição de chamados. Além de possibilitar a criação, exclusão e atualização de usuários com diferentes perfis, como: técnico, cliente e administrador. Os clientes podem abrir chamados para os técnicos e os administradores conseguem inativar tecnicos e clientes.",
        coverImage: "/images/help-desk-project-cover-image.png",
        demonstrationVideo: "/videos/help-desk-demonstration-video.mp4",
        repository: "https://github.com/Gabriel-Marreiros/help-desk-angular-java",
        projectSite: "https://www.gabrielmarreiros.com.br/help-desk",
        usedTechnologies: [
            "Angular",
            "Typescript",
            "Sass",
            "Bootstrap",
            "Java",
            "Spring",
            "Flyway",
            "MySQL",
            "Docker"
        ]
    },
    {
        title: "Inventory Management Angular & Java",
        description: "Inventory Management Angular & Java é uma aplicação destinada ao gerenciamento de um inventário de produtos. A aplicação possui dois perfis de usuário, sendo eles administrador e usuário. Os administradores conseguem adicionar, editar e inativar produtos e categorias além de criar novos usuários, editar e inativar usuários existentes. Já o usuário comum consegue apenas criar e visualizar os produtos do inventário.",
        coverImage: "/images/inventory-management-project-cover-image.png",
        demonstrationVideo: "/videos/inventory-management-demonstration-video.mp4",
        repository: "https://github.com/Gabriel-Marreiros/inventory-management-angular-java",
        projectSite: "https://www.gabrielmarreiros.com.br/inventory-management",
        usedTechnologies: [
            "Angular",
            "Typescript",
            "Sass",
            "Bootstrap",
            "Java",
            "Spring",
            "Flyway",
            "MySQL",
            "Docker"
        ]
    }
]

export default projects;