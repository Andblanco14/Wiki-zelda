function mostrarEvento(evento) {
  const descripciones = {
    infancia: "Link, un niño del Bosque Kokiri, es despertado por Navi, el hada, y enviado a ver al Gran Árbol Deku. Allí comienza su destino como héroe. Tras superar la mazmorra del árbol, recibe la primera piedra espiritual y se despide de su infancia.",
    espada: "Link reúne las tres piedras espirituales y accede al Templo del Tiempo, donde obtiene la Ocarina del Tiempo y la Espada Maestra. Al sacarla, es sellado durante siete años y despierta como adulto en un Hyrule devastado.",
    ganondorf: "Durante los siete años en que Link estuvo dormido, Ganondorf tomó el control del reino de Hyrule. El castillo fue destruido, el mercado está en ruinas y la oscuridad reina. Link debe restaurar el equilibrio despertando a los sabios.",
    sabios: "Link recorre los cinco templos: Bosque, Fuego, Agua, Sombra y Espíritu. En cada uno libera a un sabio que lo ayudará a sellar a Ganondorf. También descubre que Sheik, quien lo ha guiado, es en realidad la Princesa Zelda.",
    final: "Link se enfrenta a Ganondorf en su castillo. Tras derrotarlo, el castillo colapsa y Ganondorf se transforma en Ganon. En una batalla final, Link lo vence con la ayuda de Zelda. Ella lo envía de regreso a su infancia para vivir en paz."
  };

  const descripcion = descripciones[evento] || "Evento no encontrado.";
  const contenedor = document.getElementById("descripcion");
  contenedor.innerHTML = `<p>${descripcion}</p>`;
  contenedor.classList.remove("oculto");
  contenedor.classList.add("visible");
}

