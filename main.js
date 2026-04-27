const usuario={
    nombre:"Lucas",
    apellido:"Pajarito",
    email:"lucaspajarot2023@gmail,com",
    telefono:"4123-4463",
    ciudad:"Guatemala",
    pais:"Guatemla",
    activo:true
}

// Desestrucuturación
const {nombre, apellido, email:correo, telefono:contacto, ciudad, pais, activo}=usuario;

//Usuario_formateado
const usuarioformateado={
    identidad:{nombre, apellido},
    contacto:{correo, contacto},
    ubicacion:{ ciudad, pais},
    activo:activo
}
console.log(usuarioformateado)