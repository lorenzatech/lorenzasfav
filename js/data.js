/* ============================================================
   DATOS DEL SITIO: edita SOLO este archivo para cambiar contenido.
   - estado: "publicado" (se ve) o "borrador" (se oculta).
   - enlace: deja "" si aún no tienes el enlace; el botón mostrará "Enlace pendiente".
   - imagen: ruta local (assets/img/archivo.jpg) o URL.
   - tono: color de fondo de la tarjeta de la categoría.
   ============================================================ */
window.SITE = {
  titulo: "Mis favoritos",
  introduccion: "Una colección pequeña de cosas que me gustaría recomendarte. Elige una categoría y mira qué hay dentro.",
  categorias: [
    { id: "finanzas", titulo: "Finanzas", orden: 1, tono: "#cfd8dd",
      descripcion: "Herramientas para ordenar y mover tu dinero.",
      productos: ["didi-tarjeta-credito", "didi-cuenta-ahorro"] },
    { id: "cuidado-personal", titulo: "Cuidado personal", orden: 2, tono: "#e4d3cd",
      descripcion: "Rutinas sencillas para sentirte bien.",
      productos: ["cerave-crema-hidratante"] },
    { id: "libros", titulo: "Libros", orden: 3, tono: "#cdd6bd",
      descripcion: "Para leer más y leer mejor.",
      productos: ["amazon-kindle", "pilares-de-la-tierra"] },
    { id: "buenas-compras", titulo: "Buenas compras", orden: 4, tono: "#e3d6b4",
      descripcion: "Compras que valen la pena pensar con calma.",
      productos: ["bicicleta"] }
  ],
  productos: [
    { id: "didi-tarjeta-credito", nombre: "Tarjeta de crédito DiDi", categoria: "finanzas",
      descripcion: "Tarjeta de crédito que se solicita desde la app de DiDi.",
      razones: ["Se solicita desde la app, sin ir a una sucursal (según DiDi).",
                "DiDi indica que no cobra anualidad: confirma las condiciones vigentes.",
                "Antes de decidir, revisa el CAT y las tasas en la página oficial."],
      imagen: "assets/img/didi-tarjeta.svg", enlace: "", estado: "publicado" },
    { id: "didi-cuenta-ahorro", nombre: "DiDi Cuenta de ahorro", categoria: "finanzas",
      descripcion: "Cuenta de ahorro dentro del ecosistema DiDi.",
      razones: ["Razón por completar: tasa de rendimiento vigente.",
                "Razón por completar: disponibilidad de tu dinero y límites.",
                "Verifica condiciones y protección de depósitos en la página oficial."],
      imagen: "assets/img/didi-ahorro.svg", enlace: "", estado: "publicado" },
    { id: "cerave-crema-hidratante", nombre: "Crema hidratante CeraVe", categoria: "cuidado-personal",
      descripcion: "Crema hidratante para rostro y cuerpo.",
      razones: ["Las fichas de tienda la describen para piel seca a muy seca.",
                "Se anuncia con ceramidas y ácido hialurónico.",
                "Existen varios tamaños: elige el que prefieras."],
      imagen: "assets/img/cerave-crema.svg", enlace: "", estado: "publicado" },
    { id: "amazon-kindle", nombre: "Amazon Kindle", categoria: "libros",
      descripcion: "Lector de libros digitales (modelo por elegir).",
      razones: ["Permite llevar muchos libros en un solo dispositivo.",
                "Pantalla pensada para leer texto.",
                "Modelo por elegir: revisa opciones en Amazon México."],
      imagen: "assets/img/kindle.svg", enlace: "", estado: "publicado" },
    { id: "pilares-de-la-tierra", nombre: "Los pilares de la Tierra, de Ken Follett", categoria: "libros",
      descripcion: "Novela histórica de Ken Follett (edición por elegir).",
      razones: ["Novela histórica ambientada en la Inglaterra medieval.",
                "Es una lectura larga, buena para sumergirse.",
                "Edición por elegir: papel, bolsillo o digital."],
      imagen: "assets/img/pilares-tierra.svg", enlace: "", estado: "publicado" },
    { id: "bicicleta", nombre: "Una bicicleta", categoria: "buenas-compras",
      descripcion: "Bicicleta de uso general (modelo pendiente de elegir).",
      razones: ["Una forma de moverte y hacer ejercicio a la vez.",
                "Modelo y marca pendientes de elegir.",
                "Revisa talla, uso y presupuesto antes de comprar."],
      imagen: "assets/img/bicicleta.svg", enlace: "", estado: "publicado" }
  ]
};
