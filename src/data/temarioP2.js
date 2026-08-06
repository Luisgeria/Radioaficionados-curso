// Prueba 2 · Reglamentación
export const sectionsP2 = [
  { id: 'indicativos', freq: '144.000 MHz', name: 'Indicativos y normas de uso' },
  { id: 'codigo-q-icao', freq: '145.500 MHz', name: 'Código Q y alfabeto ICAO' },
  { id: 'legislacion', freq: '430.000 MHz', name: 'Legislación y trámites' },
  { id: 'ley-antenas', freq: '435.000 MHz', name: 'Instalación de antenas' },
]

export const cardsP2 = [
  // --- Indicativos y normas de uso ---
  { section: 'indicativos', p: '¿Cómo empiezan los indicativos españoles y cómo se estructuran?', r: 'Comienzan por la letra E, seguida de A, B o C; después una cifra de distrito (0 al 9) y terminan con hasta tres letras.' },
  { section: 'indicativos', p: '¿Qué distrito corresponde a Valladolid y a la Comunidad de Castilla y León en general?', r: 'La mayoría de provincias de Castilla y León (incluida Valladolid) pertenecen al distrito 1, salvo Segovia y Ávila también en el 1; el distrito agrupa Galicia, Asturias, Cantabria y buena parte de Castilla y León.' },
  { section: 'indicativos', p: '¿Qué sufijo se añade al indicativo si se opera en móvil, en móvil marítimo o en portable?', r: '/M en móvil, /MM en móvil marítimo (barco), /MA en móvil aéreo y /P en portable.' },
  { section: 'indicativos', p: '¿Cómo se identifica un radioaficionado que emite desde un país distinto al suyo?', r: 'Antepone el prefijo del país visitado al propio indicativo, por ejemplo CT/EA4XXX.' },
  { section: 'indicativos', p: '¿Con qué frecuencia debe transmitirse el indicativo durante una comunicación?', r: 'Al inicio y al final de cada comunicado, y además cada diez minutos.' },
  { section: 'indicativos', p: '¿Qué significa dar un "5/9" como control de señal?', r: 'Que la claridad de lo transmitido es excelente (5, inteligibilidad) y la fuerza de la señal es muy alta (9, intensidad), como cortesía habitual sin necesidad de medirlo con precisión.' },
  { section: 'indicativos', p: '¿Qué temas deben evitarse en las conversaciones entre radioaficionados?', r: 'Religión, política y anuncios comerciales; tampoco se puede retransmitir música ni fragmentos de programas de radio.' },
  { section: 'indicativos', p: '¿Pueden ir cifradas las comunicaciones entre radioaficionados?', r: 'No, nunca; las comunicaciones deben ser en lenguaje claro.' },
  { section: 'indicativos', p: '¿Cuándo se puede transmitir un mensaje de un tercero?', r: 'Solo en caso de catástrofe.' },
  { section: 'indicativos', p: '¿Qué es el sistema "split"?', r: 'Aquel en el que una estación (normalmente DX) escucha en una frecuencia y transmite/contesta en otra distinta.' },

  // --- Código Q y alfabeto ICAO ---
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para preguntar "¿debo dejar de transmitir?"', r: 'QRT.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q indica que el corresponsal llamará más tarde o que se le ha oído y se retomará el contacto?', r: 'QRX.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para preguntar la ubicación del corresponsal?', r: 'QTH.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para pedir confirmación por escrito de un contacto (y da nombre a las tarjetas de confirmación)?', r: 'QSL — también da nombre a las tarjetas QSL.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q equivale coloquialmente a "interferencia"?', r: 'QRM. QRN se usa para ruidos atmosféricos.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se emplea para indicar "¿quién me llama?"', r: 'QRZ (no debe usarse para iniciar una llamada, solo como respuesta).' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa coloquialmente para indicar "baja potencia"?', r: 'QRP (habitualmente 10 W o menos).' },
  { section: 'codigo-q-icao', p: '¿Cómo se deletrea la letra "Q" con el alfabeto ICAO?', r: 'Quebec.' },
  { section: 'codigo-q-icao', p: '¿Cómo se deletrea la letra "F" con el alfabeto ICAO?', r: 'Foxtrot.' },
  { section: 'codigo-q-icao', p: '¿Cómo se dice el número 9 en el deletreo numérico ICAO?', r: 'Nine.' },
  { section: 'codigo-q-icao', p: '¿Cómo se dice el número 7 en el deletreo numérico ICAO?', r: 'Seven.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para preguntar "¿está usted interferido?"', r: 'QRM.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para "¿debo cambiar de frecuencia?"', r: 'QSY.' },

  // --- Legislación y trámites ---
  { section: 'legislacion', p: '¿Cuántas pruebas tiene el examen para el Certificado HAREC y cuántas preguntas cada una?', r: 'Dos pruebas de 30 preguntas cada una (electricidad/radioelectricidad y reglamentación); se aprueba cada prueba con al menos 15 aciertos (50%).' },
  { section: 'legislacion', p: '¿Es necesario tener el diploma/certificado de operador antes de solicitar el indicativo?', r: 'Sí: primero se obtiene el Certificado HAREC superando el examen, y después se solicita la autorización de radioaficionado (indicativo) y, si procede, la licencia de estación.' },
  { section: 'legislacion', p: '¿Es transferible la autorización de radioaficionado?', r: 'No, es personal y no transferible.' },
  { section: 'legislacion', p: '¿Pueden los menores de edad obtener licencia de radioaficionado?', r: 'Sí, con la autorización de sus padres o tutores legales, que asumen la responsabilidad correspondiente.' },
  { section: 'legislacion', p: '¿Qué es una licencia CEPT y qué permite a un extranjero visitante?', r: 'Una licencia reconocida entre países adheridos a la CEPT; permite operar en el país visitado con el mismo valor que una licencia nacional, anteponiendo el prefijo del país visitado.' },
  { section: 'legislacion', p: '¿Puede el titular de una licencia CEPT solicitar auxilio por interferencias en el país visitado?', r: 'No.' },
  { section: 'legislacion', p: '¿Quién puede solicitar la instalación de repetidores, radiobalizas o estaciones desatendidas?', r: 'Únicamente las asociaciones legalmente constituidas, nunca un radioaficionado a título particular.' },
  { section: 'legislacion', p: '¿Qué potencia máxima pueden tener los repetidores en VHF/UHF y en HF?', r: 'En VHF/UHF, 10 W dentro del casco urbano y 25 W fuera de él; en HF, no más de 50 W.' },
  { section: 'legislacion', p: '¿El acceso a los repetidores debe ser libre?', r: 'Sí, para todos los radioaficionados; si tienen código de acceso, este debe ser público.' },
  { section: 'legislacion', p: '¿Qué pasa si un radioaficionado causa interferencias por una instalación defectuosa?', r: 'Debe solucionarlas a su costa. Si la interferencia es por defecto del aparato interferido, su titular dispone de un plazo (aprox. un mes) para solucionarlo.' },
  { section: 'legislacion', p: '¿Qué letras no pueden aparecer como sufijo de un indicativo?', r: 'No se entregan las combinaciones DDD, PAN, SOS, TTT, XXX, ni las que empiecen por Q (con dos letras más).' },
  { section: 'legislacion', p: '¿Para qué se reservan los indicativos que empiezan por Y o Z, o las combinaciones UR/RC/RK?', r: 'Y/Z se reservan para repetidores; UR, RC o RK para estaciones colectivas de asociaciones.' },
  { section: 'legislacion', p: '¿Se puede tener más de un indicativo con la misma titularidad?', r: 'No, un mismo titular no puede tener más de un indicativo.' },

  // --- Instalación de antenas ---
  { section: 'ley-antenas', p: '¿Necesita un radioaficionado con autorización administrativa el permiso de sus vecinos para instalar una antena?', r: 'No, aunque sí debe seguir el procedimiento con la Jefatura de Telecomunicaciones (memoria técnica, comunicación al presidente de la comunidad, etc.).' },
  { section: 'ley-antenas', p: '¿Quién asume los gastos de instalación, mantenimiento y conservación de la antena?', r: 'El propio radioaficionado.' },
  { section: 'ley-antenas', p: '¿Qué debe incluir la memoria técnica que se presenta a Telecomunicaciones para instalar una antena?', r: 'Descripción de equipos y antenas, ubicación de la antena y del domicilio, ubicación de otras antenas, cálculo de alturas y anclajes, y el nombre y dirección del presidente de la comunidad.' },
  { section: 'ley-antenas', p: '¿A qué altura mínima deben estar las antenas horizontales sobre zonas de paso?', r: 'A más de tres metros de altura.' },
  { section: 'ley-antenas', p: '¿Es obligatorio un seguro de antenas y qué pasa si no está en vigor?', r: 'Sí; la falta de seguro obliga a retirar la antena, y la cancelación de la licencia también.' },
  { section: 'ley-antenas', p: '¿Puede la comunidad de propietarios exigir el desmontaje de la antena para hacer obras en la cubierta?', r: 'Sí, sin que ello dé derecho a reclamar daños por el desmontaje.' },
  { section: 'ley-antenas', p: '¿Dónde no pueden anclarse las sujeciones de una antena?', r: 'A pararrayos ni a conducciones de electricidad; los anclajes deben ir a obra fija, no a chimeneas.' },
]
