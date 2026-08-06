// Prueba 2 · Reglamentación
// Contenido redactado con palabras propias a partir de las dos fuentes de estudio
// del usuario (no es una copia literal de ninguno de los dos documentos).

export const sectionsP2 = [
  {
    id: 'indicativos',
    freq: '144.000 MHz',
    name: 'Indicativos y normas de uso',
    texto: `El indicativo o distintivo de llamada identifica a un radioaficionado a nivel mundial;
lo asigna la administración de cada país y debe transmitirse al inicio y al final de cada
comunicado, y además cada diez minutos durante una transmisión larga. Los indicativos
españoles siguen una estructura fija: empiezan por la letra E, seguida de A, B o C, después
una cifra de distrito (del 0 al 9 — el 0 se reserva para actos de la Casa Real) y terminan
con hasta tres letras asignadas por turno alfabético. También son indicativos españoles
los que empiezan por AM, AN, AO, ED, EE, EF, EG y EH, reservados para usos temporales o
eventos especiales.

Cuando un radioaficionado opera fuera de su ubicación fija habitual, añade a su indicativo
un sufijo: /M si va en móvil, /MM en móvil marítimo, /MA en móvil aéreo y /P en portable.
Si opera desde un país distinto al suyo, antepone el prefijo de ese país al propio
indicativo (por ejemplo, CT/EA4XXX si un español emite desde Portugal).

En cuanto a las formas de comunicarse, se suele dar un control de cortesía "5/9": el 5
indica que la inteligibilidad (claridad de lo transmitido) es excelente, y el 9 que la
intensidad de la señal es muy alta. Cuando se pide un control más real y específico, se
usan por separado el código de inteligibilidad (del 1, ininteligible, al 5, perfectamente
comprensible) y el código de intensidad de señal (leído directamente en el S-meter, del 1
al 9, y más allá con +20, +40 o +60 dB).

Las normas básicas de comportamiento en el aire son sencillas pero importantes para el
examen: las conversaciones pueden ser sobre cualquier tema, pero deben evitarse la
religión, la política y los anuncios comerciales; tampoco se puede retransmitir música ni
fragmentos de programas de radio. Las comunicaciones entre radioaficionados nunca pueden
ir cifradas — deben ser siempre en lenguaje claro — y solo en caso de catástrofe está
permitido transmitir un mensaje de un tercero. El sistema "split" es aquel en el que una
estación (típicamente una estación DX muy solicitada) escucha en una frecuencia y contesta
en otra distinta, para organizar mejor el orden de las llamadas ("pile-up").`,
  },
  {
    id: 'codigo-q-icao',
    freq: '145.500 MHz',
    name: 'Código Q y alfabeto ICAO',
    texto: `El código Q es un conjunto de abreviaturas de tres letras, siempre empezando por Q, que
sustituye preguntas y respuestas habituales para hacerlas comprensibles a cualquier
radioaficionado del mundo, independientemente del idioma. Algunos de los más importantes
para el examen: QRA (nombre o indicativo de la estación), QRG (frecuencia exacta), QRL
(¿está ocupada la frecuencia?), QRM (interferencia), QRN (ruido atmosférico), QRO/QRP
(aumentar/disminuir potencia — QRP también se usa coloquialmente como adjetivo para
"baja potencia", 10 W o menos), QRT (dejar de transmitir, o una estación que ha cesado su
actividad), QRV (estar listo, o "a su disposición"), QRX (llamar más tarde / se retomará
el contacto), QRZ (¿quién me llama? — nunca se usa para iniciar una llamada), QSB
(desvanecimiento de la señal / fading), QSL (confirmar recepción — también da nombre a las
tarjetas de confirmación), QSO (comunicado, contacto realizado), QSY (cambiar de
frecuencia) y QTH (ubicación de la estación).

Cuando hace falta deletrear un indicativo, una palabra o una abreviatura de forma
inequívoca, se usa el alfabeto fonético ICAO: A-Alfa, B-Bravo, C-Charlie, D-Delta, E-Echo,
F-Foxtrot, G-Golf, H-Hotel, I-India, J-Juliett, K-Kilo, L-Lima, M-Mike, N-November,
O-Oscar, P-Papa, Q-Quebec, R-Romeo, S-Sierra, T-Tango, U-Uniform, V-Victor, W-Whiskey,
X-X-ray, Y-Yankee, Z-Zulu. Para los números existe también un deletreo específico: Zero,
One, Two, Three, Four, Five, Six, Seven, Eight, Nine.`,
  },
  {
    id: 'legislacion',
    freq: '430.000 MHz',
    name: 'Legislación y trámites',
    texto: `El camino para convertirse en radioaficionado en España pasa por superar un examen (dos
pruebas de 30 preguntas cada una: electricidad/radioelectricidad y reglamentación, con un
mínimo de 15 aciertos —el 50%— para aprobar cada prueba) que da acceso al Certificado
HAREC (Harmonised Amateur Radio Examination Certificate), reconocido en toda Europa. Con
ese certificado se solicita la autorización administrativa de radioaficionado (el
indicativo) y, si se desea instalar una estación fija con antena, también la licencia de
estación correspondiente. La autorización es personal e intransferible; un mismo titular
no puede tener más de un indicativo.

Los menores de edad pueden ser titulares de una autorización y de una licencia de
estación, siempre con la autorización de sus padres o tutores legales, que asumen la
responsabilidad correspondiente. Los extranjeros residentes en España también pueden
obtener una autorización.

La licencia CEPT es un reconocimiento entre los países adheridos a esa organización
europea: el titular de una licencia CEPT puede operar en cualquier país visitado que
también la reconozca, con el mismo valor que una licencia nacional, siempre anteponiendo
el prefijo del país visitado a su propio indicativo. Eso sí, el titular de una licencia
CEPT en un país que no es el suyo no puede solicitar auxilio administrativo por
interferencias.

Sobre repetidores, radiobalizas y estaciones automáticas desatendidas: solo pueden
solicitarlas asociaciones legalmente constituidas, nunca un radioaficionado a título
individual. El acceso a los repetidores debe ser libre para todos los radioaficionados
(si tienen código de acceso, este debe ser público). En cuanto a potencia, los repetidores
de VHF/UHF no pueden superar los 10 W dentro del casco urbano ni los 25 W fuera de él; en
HF, el límite es de 50 W.

Respecto a interferencias: si un radioaficionado es responsable de una interferencia (por
ejemplo, por radiación de armónicos), debe solucionarla a su costa; si la interferencia se
debe a un defecto del aparato interferido, es su propietario quien dispone de un plazo
razonable para solucionarlo. Ciertas combinaciones de indicativo están reservadas o
prohibidas: no se entregan indicativos con las series DDD, PAN, SOS, TTT, XXX ni los que
empiecen por Q (con dos letras más); los que empiezan por Y o Z se reservan para
repetidores (analógicos y digitales respectivamente), y las combinaciones UR, RC o RK se
reservan para estaciones colectivas de asociaciones.`,
  },
  {
    id: 'ley-antenas',
    freq: '435.000 MHz',
    name: 'Instalación de antenas',
    texto: `Un radioaficionado con autorización administrativa en regla puede instalar su antena sin
necesitar el permiso explícito de sus vecinos, si bien debe seguir el procedimiento
reglado con la Jefatura de Telecomunicaciones. Ese procedimiento incluye presentar una
memoria técnica que describa los equipos y antenas, la ubicación de la antena sobre el
tejado, la ubicación del domicilio y de otras antenas próximas, el cálculo de alturas y
anclajes, y el nombre y dirección del presidente de la comunidad de propietarios (a quien
la Jefatura comunicará por escrito la intención de instalación, dando un plazo —
habitualmente dos meses— para que la comunidad pueda alegar lo que considere oportuno; si
no hay respuesta en ese plazo, se entiende aceptada la instalación).

Todos los gastos derivados de la instalación, mantenimiento y conservación de la antena
corren por cuenta del radioaficionado. La comunidad de propietarios puede exigir el
desmontaje temporal de la antena si es necesario para realizar obras en la cubierta, sin
que eso dé derecho a reclamar daños por dicho desmontaje.

Hay una serie de normas técnicas de seguridad para la instalación física: las antenas
horizontales deben estar a más de tres metros de altura sobre zonas de paso; si se colocan
en azoteas transitables, los anclajes y riostras deben ir elevados para evitar accidentes;
las sujeciones no pueden ir nunca a pararrayos ni a conducciones de electricidad, y los
anclajes deben fijarse a obra fija, no a chimeneas; los mástiles deben estar tapados por
arriba y abiertos por debajo para evitar que entre agua; y los cables de bajada deben
mantenerse a más de 10 cm de cualquier conducción del edificio, sujetos a las paredes (no
en caída libre).

Un requisito importante y muy preguntado en el examen: es obligatorio disponer de un
seguro de antenas en vigor. Su ausencia —igual que la cancelación de la licencia— obliga a
retirar la antena. Debe entregarse una copia de ese seguro al presidente de la comunidad.`,
  },
]

export const cardsP2 = [
  { section: 'indicativos', p: '¿Cómo empiezan los indicativos españoles y cómo se estructuran?', r: 'Comienzan por la letra E, seguida de A, B o C; después una cifra de distrito (0 al 9) y terminan con hasta tres letras.' },
  { section: 'indicativos', p: '¿A qué se reserva el distrito 0 en un indicativo?', r: 'A actos y eventos relacionados con la Casa Real.' },
  { section: 'indicativos', p: '¿Qué sufijo se añade al indicativo si se opera en móvil, en móvil marítimo o en portable?', r: '/M en móvil, /MM en móvil marítimo (barco), /MA en móvil aéreo y /P en portable.' },
  { section: 'indicativos', p: '¿Cómo se identifica un radioaficionado que emite desde un país distinto al suyo?', r: 'Antepone el prefijo del país visitado al propio indicativo, por ejemplo CT/EA4XXX.' },
  { section: 'indicativos', p: '¿Con qué frecuencia debe transmitirse el indicativo durante una comunicación?', r: 'Al inicio y al final de cada comunicado, y además cada diez minutos.' },
  { section: 'indicativos', p: '¿Qué significa dar un "5/9" como control de señal?', r: 'Que la inteligibilidad de lo transmitido es excelente (5) y la intensidad de la señal es muy alta (9).' },
  { section: 'indicativos', p: '¿Qué temas deben evitarse en las conversaciones entre radioaficionados?', r: 'Religión, política y anuncios comerciales; tampoco se puede retransmitir música ni fragmentos de programas de radio.' },
  { section: 'indicativos', p: '¿Pueden ir cifradas las comunicaciones entre radioaficionados?', r: 'No, nunca; deben ser en lenguaje claro.' },
  { section: 'indicativos', p: '¿Cuándo se puede transmitir un mensaje de un tercero?', r: 'Solo en caso de catástrofe.' },
  { section: 'indicativos', p: '¿Qué es el sistema "split"?', r: 'Aquel en el que una estación escucha en una frecuencia y transmite/contesta en otra distinta.' },
  { section: 'indicativos', p: '¿Qué código de inteligibilidad indica que un mensaje se entiende con dificultad pero se entiende?', r: 'El código 3 (de una escala del 1, ininteligible, al 5, perfectamente comprensible).' },
  { section: 'indicativos', p: '¿Dónde se mide la intensidad de la señal para dar un control real?', r: 'En el S-meter del equipo, en una escala del 1 al 9 que continúa con +20, +40 o +60 dB.' },

  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para preguntar "¿debo dejar de transmitir?"', r: 'QRT.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q indica que el corresponsal llamará más tarde?', r: 'QRX.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para preguntar la ubicación del corresponsal?', r: 'QTH.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para confirmar por escrito un contacto y da nombre a las tarjetas de confirmación?', r: 'QSL.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q equivale coloquialmente a "interferencia"?', r: 'QRM (QRN se usa para ruidos atmosféricos).' },
  { section: 'codigo-q-icao', p: '¿Qué código Q significa "¿quién me llama?"', r: 'QRZ (no debe usarse para iniciar una llamada, solo como respuesta).' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa coloquialmente para "baja potencia"?', r: 'QRP (habitualmente 10 W o menos).' },
  { section: 'codigo-q-icao', p: '¿Qué código Q significa "comunicado" o contacto realizado?', r: 'QSO.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para "¿debo cambiar de frecuencia?"', r: 'QSY.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q indica desvanecimiento de la señal (fading)?', r: 'QSB.' },
  { section: 'codigo-q-icao', p: '¿Cómo se deletrea la letra "Q" con el alfabeto ICAO?', r: 'Quebec.' },
  { section: 'codigo-q-icao', p: '¿Cómo se deletrea la letra "F" con el alfabeto ICAO?', r: 'Foxtrot.' },
  { section: 'codigo-q-icao', p: '¿Cómo se deletrea la letra "X" con el alfabeto ICAO?', r: 'X-ray.' },
  { section: 'codigo-q-icao', p: '¿Cómo se dice el número 9 en el deletreo numérico ICAO?', r: 'Nine.' },
  { section: 'codigo-q-icao', p: '¿Cómo se dice el número 7 en el deletreo numérico ICAO?', r: 'Seven.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para "¿está usted interferido?"', r: 'QRM.' },
  { section: 'codigo-q-icao', p: '¿Qué código Q se usa para preguntar la frecuencia exacta?', r: 'QRG.' },

  { section: 'legislacion', p: '¿Cuántas pruebas tiene el examen HAREC y cuántas preguntas cada una?', r: 'Dos pruebas de 30 preguntas cada una (electricidad/radioelectricidad y reglamentación); se aprueba con al menos 15 aciertos por prueba.' },
  { section: 'legislacion', p: '¿Qué hay que tener antes de solicitar el indicativo y la licencia de estación?', r: 'El Certificado HAREC, superando previamente el examen.' },
  { section: 'legislacion', p: '¿Es transferible la autorización de radioaficionado?', r: 'No, es personal y no transferible.' },
  { section: 'legislacion', p: '¿Pueden los menores de edad obtener licencia de radioaficionado?', r: 'Sí, con la autorización de sus padres o tutores legales.' },
  { section: 'legislacion', p: '¿Qué es una licencia CEPT?', r: 'Una licencia reconocida entre países adheridos a la CEPT; permite operar en el país visitado con el mismo valor que una nacional.' },
  { section: 'legislacion', p: '¿Puede el titular de una licencia CEPT solicitar auxilio por interferencias en el país visitado?', r: 'No.' },
  { section: 'legislacion', p: '¿Quién puede solicitar la instalación de repetidores o estaciones desatendidas?', r: 'Únicamente las asociaciones legalmente constituidas.' },
  { section: 'legislacion', p: '¿Qué potencia máxima pueden tener los repetidores en VHF/UHF y en HF?', r: 'En VHF/UHF, 10 W en casco urbano y 25 W fuera; en HF, no más de 50 W.' },
  { section: 'legislacion', p: '¿El acceso a los repetidores debe ser libre?', r: 'Sí, para todos los radioaficionados; si tienen código de acceso, debe ser público.' },
  { section: 'legislacion', p: '¿Qué pasa si un radioaficionado causa interferencias por una instalación defectuosa?', r: 'Debe solucionarlas a su costa.' },
  { section: 'legislacion', p: '¿Qué letras no pueden aparecer como sufijo de un indicativo?', r: 'No se entregan las combinaciones DDD, PAN, SOS, TTT, XXX, ni las que empiecen por Q.' },
  { section: 'legislacion', p: '¿Para qué se reservan los indicativos que empiezan por Y o Z?', r: 'Para repetidores (analógicos y digitales respectivamente).' },
  { section: 'legislacion', p: '¿Para qué se reservan las combinaciones UR, RC o RK?', r: 'Para estaciones colectivas de asociaciones.' },
  { section: 'legislacion', p: '¿Se puede tener más de un indicativo con la misma titularidad?', r: 'No.' },

  { section: 'ley-antenas', p: '¿Necesita un radioaficionado el permiso de sus vecinos para instalar una antena?', r: 'No de forma directa, pero sí debe seguir el procedimiento reglado (memoria técnica, comunicación al presidente de la comunidad).' },
  { section: 'ley-antenas', p: '¿Quién asume los gastos de instalación, mantenimiento y conservación de la antena?', r: 'El propio radioaficionado.' },
  { section: 'ley-antenas', p: '¿Qué debe incluir la memoria técnica para instalar una antena?', r: 'Equipos y antenas, ubicación de la antena y del domicilio, otras antenas próximas, cálculo de alturas/anclajes, y el nombre y dirección del presidente de la comunidad.' },
  { section: 'ley-antenas', p: '¿A qué altura mínima deben estar las antenas horizontales sobre zonas de paso?', r: 'A más de tres metros de altura.' },
  { section: 'ley-antenas', p: '¿Es obligatorio un seguro de antenas?', r: 'Sí; su falta —igual que la cancelación de la licencia— obliga a retirar la antena.' },
  { section: 'ley-antenas', p: '¿Puede la comunidad exigir el desmontaje de la antena para obras en la cubierta?', r: 'Sí, sin derecho a reclamar daños por ello.' },
  { section: 'ley-antenas', p: '¿Dónde no pueden anclarse las sujeciones de una antena?', r: 'A pararrayos ni a conducciones de electricidad; los anclajes van a obra fija, no a chimeneas.' },
  { section: 'ley-antenas', p: '¿A qué distancia mínima deben estar los cables de bajada de cualquier conducción del edificio?', r: 'A más de 10 cm, sujetos a las paredes y sin bajar en caída libre.' },
]
