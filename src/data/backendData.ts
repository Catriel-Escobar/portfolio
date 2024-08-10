export type InfoType = {
    title:string;
    data:string;
    link:string;
    imagen:string
}

const dataUno = "Mi proyecto backend está construido sobre Express y PostgreSQL, utilizando TypeORM para gestionar de manera eficiente la interacción con la base de datos mediante modelos TypeScript. Implemento autenticación segura con JWT y bcrypt para el manejo seguro de contraseñas. <br /><br />  Utilizo Postman para probar exhaustivamente las API RESTful, asegurando su correcto funcionamiento y documentación. Aplico buenas prácticas en seguridad y desarrollo, como validación de datos y protección contra vulnerabilidades comunes. Este enfoque no solo garantiza la integridad de los datos, sino también la robustez y escalabilidad de la aplicación backend."


const dataDos = "En mi proyecto de desarrollo full-stack, he integrado Express y PostgreSQL en el backend con React en el frontend, haciendo uso de TypeORM para facilitar la gestión de datos mediante modelos TypeScript. Implemento un sistema de autenticación seguro utilizando JWT y bcrypt para manejar contraseñas de manera segura y eficiente. Utilizo Postman para realizar pruebas exhaustivas de las API RESTful, asegurando su correcto funcionamiento y documentación detallada. Adicionalmente, sigo rigurosas prácticas de seguridad y desarrollo, incluyendo validación de datos y medidas preventivas contra posibles vulnerabilidades. Este enfoque integral no solo garantiza la confiabilidad y escalabilidad de la aplicación, sino que también proporciona una experiencia de usuario robusta y segura en todas las capas del sistema."

const dataTres = "Mi proyecto full-stack combina Express y PostgreSQL en el backend junto con React en el frontend, utilizando TypeORM para administrar eficientemente la interacción con la base de datos mediante modelos TypeScript. Implemento una capa de seguridad robusta con autenticación JWT y bcrypt para garantizar la gestión segura de contraseñas. Utilizo herramientas como Postman para realizar pruebas exhaustivas de las API RESTful, asegurando su funcionamiento correcto y documentación precisa. Además, aplico buenas prácticas en seguridad y desarrollo, incluyendo validación de datos y protección contra vulnerabilidades comunes. Este enfoque no solo asegura la integridad de los datos, sino que también fortalece la robustez y escalabilidad de la aplicación tanto en el frontend como en el backend."

export const Proyectos:InfoType[] = [
    {
        title:"Proyecto 1",
        data:dataUno,
        imagen:"portfolio.png",
        link:"https://github.com/Catriel-Escobar/proyecto-express-react"
    }
    ,
    {
        title:"Proyecto 2",
        data:dataDos,
        imagen:"portfolio.png",
        link:"https://github.com/Catriel-Escobar/proyecto-express-react"
    },

    {
        title:"Proyecto 3",
        data:dataTres,
        imagen:"portfolio.png",
        link:"https://github.com/Catriel-Escobar/proyecto-express-react"
    },

]