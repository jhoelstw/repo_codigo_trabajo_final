function enviarMensaje() {
    nombre = document.getElementById('consulta_nombre').value;
    email = document.getElementById('consulta_email').value;
    celular = document.getElementById('consulta_celular').value;
    mensaje = document.getElementById('consulta_consulta').value;

    alert(`
    Mensaje enviado correctamente!!!

    Nombre: ${nombre}
    Email: ${email}
    Celular: ${celular}
    Mensaje: ${mensaje}
    `);
}

function enviarConsulta() {
    nombre = document.getElementById('consulta_nombre').value;
    email = document.getElementById('consulta_email').value;
    consulta = document.getElementById('consulta_consulta').value;

    alert(`
    Consulta enviada correctamente!!!

    Nombre: ${nombre}
    Email: ${email}
    Consulta: ${consulta}
    `);
}

function publicarComentario() {
    comentario = document.getElementById('comentario_id').value;
    alert(`
    Comentario Publicado correctamente!!!

    Comentario: ${comentario}
    `);
}


