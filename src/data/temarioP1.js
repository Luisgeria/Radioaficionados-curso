// Prueba 1 · Electricidad y Radioelectricidad
// Contenido redactado con palabras propias a partir de las dos fuentes de estudio
// del usuario (no es una copia literal de ninguno de los dos documentos).

export const sectionsP1 = [
  {
    id: 'electricidad-magnetismo',
    freq: '1.800 MHz',
    name: 'Electricidad y magnetismo',
    texto: `El átomo es el punto de partida de toda la electricidad. En su núcleo hay protones
(carga positiva) y neutrones (sin carga); en las órbitas exteriores giran los electrones
(carga negativa). Cuando esos electrones se mueven de forma ordenada por un conductor,
tenemos corriente eléctrica: la intensidad, que se mide en amperios, es precisamente la
cantidad de electrones que atraviesan una sección del conductor por unidad de tiempo.

La tensión, voltaje o diferencia de potencial (en voltios) es lo que "empuja" a esos
electrones. La Ley de Ohm relaciona las tres magnitudes básicas de un circuito: V = I × R.
De aquí se derivan I = V/R y R = V/I. La potencia que se disipa o entrega en un circuito se
calcula como P = I × V, y se mide en vatios (1 kW = 1.000 W, 1 MW = 1.000.000 W).

La resistencia de un conductor no es fija: aumenta con la temperatura, aumenta si el
conductor es más largo o más fino, y disminuye si es más grueso o corto. Un dieléctrico,
en cambio, es un material aislante que no deja pasar la corriente.

Un concepto clásico del examen es la Ley de Coulomb: la fuerza de atracción o repulsión
entre dos cargas eléctricas es directamente proporcional al producto de esas cargas, e
inversamente proporcional al cuadrado de la distancia que las separa. Cuanto más lejos
están dos cargas, mucho más débil es la fuerza entre ellas.

Las pilas se comportan de forma distinta según cómo se conecten. En serie (polo positivo
de una con el negativo de la siguiente), las tensiones se suman y la intensidad es la de
una sola pila. En paralelo (bornes del mismo signo unidos entre sí), la tensión conjunta
es la de una sola pila, pero la intensidad disponible es la suma de todas.

En magnetismo, un imán genera un campo formado por líneas que van de un polo a otro; el
conjunto de esas líneas es el flujo magnético (se mide en maxwell), y la fuerza de
atracción o repulsión se mide en dinas. La histéresis es el fenómeno por el que, a partir
de cierto punto, un imán deja de ganar fuerza aunque el campo que lo magnetiza siga
aumentando.

Electricidad y magnetismo están unidos por la inducción: todo conductor por el que
circula corriente genera un campo magnético a su alrededor, y si a un conductor rectilíneo
le damos una vuelta (pasa a llamarse solenoide), ese campo se refuerza. A la inversa, si un
conductor se mueve dentro de un campo magnético variable, en ese conductor se induce una
corriente — este es el principio de generadores y transformadores. La Ley de Lenz añade
un matiz importante: la corriente inducida siempre tiene un sentido que se opone al
cambio que la ha generado.`,
  },
  {
    id: 'ondas-modulacion',
    freq: '3.500 MHz',
    name: 'Ondas y modulación',
    texto: `Las ondas de radio son de naturaleza electromagnética: están formadas por un campo
eléctrico y un campo magnético que oscilan perpendiculares entre sí, y se propagan en el
vacío a 300.000 km/s (la velocidad de la luz). La relación entre longitud de onda (en
metros) y frecuencia (en MHz) es sencilla: L = 300 / F. Así, cuanto más alta es la
frecuencia, más corta es la longitud de onda, y viceversa.

Toda onda periódica tiene un ciclo (el recorrido completo por todos sus valores positivos
y negativos), un semiciclo positivo y otro negativo, una cresta (valor máximo) y un nodo
(el punto donde vale cero). El periodo es el tiempo que tarda en completarse un ciclo; la
frecuencia es cuántos ciclos se completan en un segundo, y su unidad es el hercio (Hz): un
ciclo por segundo. El oído humano percibe sonidos entre 20 Hz y 20.000 Hz.

Para que una onda de radio (la portadora) transporte información, hay que modularla: es
decir, modificar alguna de sus características en función de la señal que queremos
transmitir. Una portadora sin modular no lleva ninguna información. Existen tres tipos
básicos de modulación:
— Amplitud (AM): varía la amplitud de la portadora, la frecuencia se mantiene fija.
— Frecuencia (FM): varía la frecuencia, la amplitud se mantiene fija.
— Fase (PM): varía únicamente la fase de la señal.

Cuando se modula una portadora aparecen bandas laterales a ambos lados de su frecuencia:
la banda lateral superior (USB, suma de la frecuencia moduladora y la portadora) y la
inferior (LSB, resta de ambas). En AM aparecen solo estas dos bandas; en FM aparecen
muchas más, y al conjunto de portadora más bandas laterales se le llama espectro de
frecuencia. El ancho de banda es precisamente el espacio de espectro que ocupa toda esa
información.

La modulación de banda lateral única (SSB, en su variante USB o LSB) es especialmente
eficiente porque se prescinde de la portadora y de una de las dos bandas laterales: toda
la potencia disponible se concentra en la información útil, lo que supone hasta 4 veces
más rendimiento que una emisión de AM convencional. En la práctica, en las bandas de HF de
radioaficionado se usa LSB en 160, 80 y 40 metros (1,8 / 3,5 / 7 MHz), y USB en el resto de
bandas.

La sobremodulación aparece cuando se fuerza demasiado la señal moduladora: la portadora se
deforma y se generan interferencias en frecuencias adyacentes. Se corrige bajando la
ganancia del micrófono o revisando si hay alguna avería en el equipo.`,
  },
  {
    id: 'componentes',
    freq: '7.000 MHz',
    name: 'Componentes y circuitos',
    texto: `Las resistencias se pueden combinar en serie, en paralelo o en montajes mixtos. En
serie, la resistencia total es la suma de todas y la intensidad es la misma en cualquier
punto del circuito. En paralelo, la intensidad total es la suma de las intensidades de
cada rama, y la resistencia equivalente se calcula con 1/R = 1/r1 + 1/r2 + ...; el
resultado siempre es menor que la más pequeña de las resistencias que se combinan. Una
resistencia en "shunt" se coloca en paralelo con un aparato de medida para protegerlo. El
código de colores de una resistencia se lee así: las dos primeras bandas dan el valor,
la tercera indica el número de ceros, y la cuarta es la tolerancia. Existen resistencias
especiales: el termistor NTC reduce su resistencia al calentarse, el PTC la aumenta; el
potenciómetro regula tensión, el reóstato regula la corriente que llega a una carga.

Un condensador está formado por dos placas separadas por un dieléctrico, y su función es
acumular carga eléctrica. Su capacidad se mide en faradios (con submúltiplos habituales
como el microfaradio y el picofaradio) y se calcula como C = Q/V. La capacidad aumenta
con placas más grandes o más próximas entre sí, y disminuye en el caso contrario. Los
condensadores pueden ser fijos (con o sin polaridad — los que la tienen se llaman
electrolíticos), variables, ajustables o trimmer. La tensión de trabajo es el límite antes
de que el dieléctrico se rompa y el condensador se cortocircuite.

Cuando un condensador (reactancia capacitiva) o una bobina (reactancia inductiva) se
oponen al paso de la corriente sin ser propiamente una resistencia, hablamos de
reactancia, que también se mide en ohmios. Un circuito es resonante cuando su reactancia
capacitiva y su reactancia inductiva se igualan. El factor Q de ese circuito resonante
mide su capacidad para discriminar una frecuencia frente a las demás: Q = frecuencia de
resonancia / ancho de banda. Los filtros aprovechan esta idea de resonancia para dejar
pasar o bloquear determinadas frecuencias: paso alto, paso bajo, pasa banda y supresión de
banda.

Los transformadores tienen un bobinado primario (donde entra la tensión) y uno secundario
(de donde sale, ya transformada). La relación de transformación es el cociente entre el
número de espiras del secundario y del primario; la potencia del primario es igual a la
del secundario (si no hubiera pérdidas).

En cuanto a semiconductores: tienen una zona P y una zona N. En polarización directa, el
positivo va a P y el negativo a N, favoreciendo el paso de corriente; en inversa ocurre lo
contrario y se bloquea. El diodo permite el paso de corriente en un único sentido — su
extremo P es el ánodo, el N es el cátodo. El diodo zener, en cambio, se usa para
estabilizar tensión al llegar a su tensión de ruptura. El diodo LED emite luz según el
material semiconductor con que está fabricado. El transistor bipolar tiene tres
conexiones (base, emisor, colector) y puede ser NPN o PNP; el transistor de efecto de
campo (FET) tiene puerta, drenador y fuente. Los amplificadores construidos con estos
componentes se clasifican en clase A, B, AB (combinación de las dos anteriores) y C, según
cómo trabajen respecto a la señal de entrada.`,
  },
  {
    id: 'receptores',
    freq: '14.000 MHz',
    name: 'Receptores',
    texto: `Existen dos grandes familias de receptores. El de conversión directa mezcla la señal de
antena con la de un oscilador local, y de esa mezcla obtiene directamente frecuencias
audibles que pasan por un filtro de audio y un amplificador hasta el altavoz. El receptor
superheterodino, en cambio, convierte primero la señal a una o varias frecuencias
intermedias (F.I.) fijas, donde resulta mucho más fácil filtrar y amplificar con calidad
antes de detectarla; si usa una sola F.I. se llama de simple conversión, si usa dos, de
doble conversión.

Las etapas típicas de un receptor superheterodino son, en orden: amplificador de RF (a la
entrada, filtra y da una primera ganancia a la señal que llega de la antena, puede incluir
un atenuador para señales muy fuertes), oscilador (genera la frecuencia que se mezclará
con la entrante), mezclador (combina ambas señales), filtro de paso de banda (extrae la
F.I. de esa mezcla), amplificador de F.I. (refuerza esa frecuencia intermedia), detector o
detector de producto (recupera la información original de la portadora — en FM se usan
circuitos PLL para esta tarea) y amplificador de audio (lleva la señal detectada hasta un
nivel audible).

Además hay circuitos de apoyo importantes: el control automático de ganancia (CAG)
mantiene constante el nivel de señal que llega al detector, evitando que las señales
fuertes saturen y produciendo un volumen de audio uniforme independientemente de la
intensidad real que llega por antena. El squelch o silenciador mantiene el altavoz en
silencio mientras la señal no supera un umbral ajustable. El medidor S (S-meter) muestra
en el frontal, con una aguja o LEDs, la intensidad de la señal recibida.

Las características que definen la calidad de un receptor son: la selectividad (capacidad
de separar frecuencias muy próximas entre sí), la sensibilidad (capacidad de distinguir la
señal deseada del ruido de fondo, también llamada relación señal-ruido), la estabilidad
(mantener sintonizada siempre la misma frecuencia sin desviarse) y la ausencia de
frecuencia imagen (señales "fantasma" que puede generar el propio receptor por su diseño
interno).`,
  },
  {
    id: 'transmisores',
    freq: '18.000 MHz',
    name: 'Transmisores',
    texto: `Un transmisor comparte varias etapas con un receptor, pero en sentido inverso: empieza
en un micrófono o manipulador y termina en la antena. El oscilador genera la frecuencia de
trabajo; el excitador amplifica esa señal de RF lo suficiente como para atacar al
amplificador final de potencia, que es la etapa que realmente entrega la energía que se
irradiará. A veces se usan también multiplicadores de frecuencia (para obtener frecuencias
más altas a partir de un oscilador de frecuencia más baja) y mezcladores.

A la salida, un filtro en configuración PI cumple una doble función: elimina armónicos y
frecuencias indeseadas, y además adapta la impedancia de salida del amplificador final a
la del cable coaxial y la antena — recordemos que la impedancia de salida típica en los
equipos de radioaficionado es de 50 ohmios, en salida asimétrica.

Según el modo de emisión, cambia el punto donde entra la modulación: en CW no hay
micrófono, solo un manipulador Morse que activa el amplificador final. En AM, la señal de
micrófono (ya amplificada) modula directamente el amplificador de potencia. En SSB, la
señal de micrófono entra en un modulador balanceado (no en el amplificador final como en
AM), y de ahí pasa por un filtro y un mezclador antes de la etapa de potencia. En FM, la
modulación puede llevar dobladores de frecuencia en cascada hasta alcanzar la frecuencia
de emisión final.

Un buen transmisor debe cumplir varias condiciones: estabilidad de frecuencia, ocupar solo
el ancho de banda estrictamente necesario, mantener sus radiaciones fuera de banda por
debajo del 0,5% de la potencia media, y mantener sus radiaciones espurias en HF por debajo
de 40 dB (o 50 mW). La potencia declarada de un emisor es la potencia nominal, distinta de
la potencia de pico. El rendimiento de un transmisor es el cociente entre la potencia que
realmente entrega y la energía que consume de la fuente de alimentación.

Problemas típicos: los "clics" en CW (ruido al manipular), las "barbas" o sobremodulación
en SSB (se corrigen con la ganancia de micrófono o el ALC) y las interferencias que el
propio transmisor puede producirse a sí mismo cuando hay una ROE elevada. Una buena
interconexión de masas con cinta de cobre y una toma de tierra adecuada ayudan a
evitarlo.`,
  },
  {
    id: 'antenas-lineas',
    freq: '21.000 MHz',
    name: 'Antenas y líneas de transmisión',
    texto: `Una antena convierte energía eléctrica en energía electromagnética radiada (en
transmisión) y a la inversa en recepción. El tamaño de una antena está directamente
relacionado con la longitud de onda de trabajo: antenas cortas para frecuencias altas,
antenas largas para frecuencias bajas. Existen dos grandes familias: antenas lineales
(dipolos, verticales, yagis, cuadros) y antenas de apertura (parabólicas y de bocina).

El dipolo de media onda es la antena de referencia: cortado a media longitud de onda de la
frecuencia de trabajo, con alimentación en el centro, presenta una impedancia próxima a
50 ohmios y una ganancia de referencia de 0 dB (comparado con el dipolo isotrópico
teórico). Si se alimenta por un extremo en vez de por el centro, se convierte en
multibanda usando un acoplador. El dipolo con trampas usa bobinas intercaladas que, al
entrar en resonancia, actúan como aislantes y acortan eléctricamente la antena para poder
trabajar en varias bandas con una única antena física.

La antena vertical de cuarto de onda (ground plane) es un radiador de un cuarto de
longitud de onda que necesita un plano de tierra —real o simulado mediante radiales— que
actúa como espejo y duplica la longitud eléctrica efectiva de la antena. La antena yagi,
muy usada en VHF/UHF por su direccionalidad, se construye a partir de un dipolo con
elementos parásitos añadidos: el elemento trasero es el reflector, los delanteros son los
directores, y solo el dipolo central está realmente alimentado.

Las líneas de transmisión llevan la energía entre el transmisor y la antena. El cable
coaxial tiene dos conductores concéntricos —el vivo interior y la malla exterior— y es
asimétrico: la malla apantalla el vivo, evitando que radie hacia fuera o que capte señales
externas. El dipolo, en cambio, es simétrico. Como ambos elementos son de naturaleza
distinta, hace falta un balum (balance-unbalance) para adaptarlos correctamente.

Una antena bien adaptada consigue que toda la potencia que le entrega el transmisor se
irradie, con una relación de ondas estacionarias (R.O.E. o SWR) próxima a 1. Una ROE
elevada indica desadaptación: aumenta las pérdidas en la línea, reduce la energía
realmente radiada y puede provocar sobretensiones peligrosas para el equipo. El acoplador
de antena, formado por bobinas y condensadores variables, corrige esa desadaptación.`,
  },
  {
    id: 'propagacion',
    freq: '24.000 MHz',
    name: 'Propagación de ondas',
    texto: `Cómo viaja una onda de radio desde la antena emisora hasta la receptora depende, sobre
todo, de la atmósfera terrestre. La troposfera y la estratosfera apenas ionizan el aire y
no son útiles para reflejar ondas de radio a distancia. La ionosfera, en cambio, está
fuertemente ionizada por la radiación solar y es la responsable de que las señales de HF
puedan "rebotar" y alcanzar puntos muy lejanos: durante el día, entre 6 y 18 MHz suelen
darse las mejores condiciones para contactos de larga distancia. La frecuencia crítica es
el límite: por encima de ella, las ondas ya no se reflejan y se pierden en el espacio.

Se distinguen tres tipos de propagación según el camino que sigue la onda: la onda
directa (línea recta entre las dos antenas, típica en VHF/UHF), la onda de superficie (que
sigue la curvatura del terreno) y la onda espacial o ionosférica (que sube, atraviesa o es
reflejada por la ionosfera). La propagación cambia a lo largo del día por la rotación de
la Tierra, a lo largo del año por la inclinación estacional, y de forma menos predecible
por fenómenos como tormentas solares.

El fading o desvanecimiento es la variación —a veces brusca— de la intensidad de una señal
recibida con el paso del tiempo. Existen además modos de propagación especiales usados
sobre todo en VHF: la dispersión troposférica (alcanza distancias mayores de lo habitual
en esas bandas), la reflexión esporádica en la capa E (cuando se ioniza fuertemente por
meteoritos o tormentas de verano), el meteor scatter (aprovecha la breve ionización que
deja la entrada de meteoritos) y el rebote lunar o EME (usar la Luna como reflector pasivo
entre dos estaciones que la ven al mismo tiempo).`,
  },
  {
    id: 'medidas-interferencias',
    freq: '28.000 MHz',
    name: 'Medidas e interferencias',
    texto: `Cada magnitud eléctrica se mide con un instrumento específico, y la forma de conectarlo
importa tanto como el instrumento en sí. El amperímetro mide intensidad y se conecta en
serie con el circuito. El voltímetro mide tensión y se conecta en paralelo con el
componente o carga cuya diferencia de potencial queremos conocer. El óhmetro mide
resistencia y también se coloca en paralelo. Estos tres instrumentos suelen venir
integrados en un único aparato, el polímetro o tester. La potencia se mide con un
vatímetro; la forma de una señal, con un osciloscopio; la frecuencia, con un
frecuencímetro; y la relación de ondas estacionarias, con un medidor de ROE (o SWR), que
se coloca entre el transmisor y la antena, o entre el transmisor y el acoplador si lo hay.

En cuanto a interferencias, la mayoría de los problemas que sufre un radioaficionado con
sus vecinos no se deben a un exceso de potencia legal, sino a instalaciones mal protegidas
en el equipo interferido: un cable de alimentación o los propios altavoces de un equipo de
sonido pueden actuar como antena involuntaria. Para diagnosticarlo, se desconecta el cable
de alimentación durante la transmisión, o se prueban auriculares en vez de altavoces. La
solución habitual pasa por filtros de línea, cables blindados o una buena toma de tierra.

Cuando el problema viene del propio radioaficionado (armónicos o exceso de potencia real),
se le llama radiación espuria, y es responsabilidad del titular solucionarla; si el
problema está en el aparato interferido, es su propietario quien debe resolverlo.`,
  },
  {
    id: 'seguridad',
    freq: '50.000 MHz',
    name: 'Seguridad eléctrica',
    texto: `Las tormentas eléctricas son el principal riesgo asociado a una instalación de
radioaficionado con antena exterior. Si se acerca una tormenta, lo prudente es desconectar
los cables de antena (y, si es posible, sacarlos de la vivienda) y desconectar también la
alimentación de los equipos. Nunca se deben tocar cables de antena o de toma de tierra
durante la tormenta, ni mientras esté próxima o recién alejada, por el riesgo de descargas
estáticas residuales. Refugiarse junto a un edificio no protege frente a la caída de un
rayo.

En el día a día, algunas normas básicas se aplican también a una estación de
radioaficionado: cada equipo debe tener su propio fusible, algo mayor que su consumo
máximo previsto; nunca se deben usar "ladrones" para conectar varios aparatos, sino
regletas múltiples homologadas; nunca deben emplearse como toma de tierra las conducciones
de agua, gas, calefacción, ni las de ascensores o pararrayos — la toma de tierra de la
estación debe construirse de forma independiente, en lugar húmedo.

No se debe manipular el interior de un aparato conectado a la red (ni aunque esté
apagado, en el caso de televisores o monitores), ni llevar anillos o pulseras metálicas
mientras se manipula el interior de un equipo. Si por necesidad hay que tocar un aparato
que sigue conectado, conviene aislarse del suelo en vez de hacerlo con el suelo o las
manos mojadas.

Ante un accidente por descarga eléctrica, el primer paso es separar a la persona
accidentada del punto de la descarga usando medios aislantes si todavía hay tensión
presente; si es posible, cortar el suministro general; y llamar al 112 si la descarga ha
sido de importancia.`,
  },
]

export const cardsP1 = [
  { section: 'electricidad-magnetismo', p: '¿Qué partículas forman el núcleo de un átomo y qué carga tienen?', r: 'Protones (carga positiva) y neutrones (sin carga). Los electrones, en las órbitas, tienen carga negativa y son los responsables de la corriente eléctrica.' },
  { section: 'electricidad-magnetismo', p: '¿Qué le pasa a la resistencia de un conductor si aumenta la temperatura?', r: 'Aumenta. También aumenta si se alarga el conductor o se reduce su sección; disminuye si el conductor es más grueso.' },
  { section: 'electricidad-magnetismo', p: '¿Qué es un dieléctrico?', r: 'Un material aislante, incapaz de conducir la corriente eléctrica.' },
  { section: 'electricidad-magnetismo', p: '¿Qué dice la Ley de Coulomb?', r: 'La fuerza de atracción o repulsión entre dos cargas es directamente proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas.' },
  { section: 'electricidad-magnetismo', p: '¿En qué unidad se mide la intensidad de corriente y qué representa?', r: 'En amperios. Representa la cantidad de electrones que atraviesan una sección de conductor por unidad de tiempo.' },
  { section: 'electricidad-magnetismo', p: '¿Cuál es la Ley de Ohm?', r: 'V = I × R (tensión = intensidad × resistencia); también I = V/R y R = V/I.' },
  { section: 'electricidad-magnetismo', p: '¿Cómo se calcula la potencia eléctrica?', r: 'P = I × V. La unidad es el vatio (W); 1 kilovatio = 1.000 W, 1 megavatio = 1.000.000 W.' },
  { section: 'electricidad-magnetismo', p: '¿Cómo se comportan varias pilas iguales conectadas en serie?', r: 'La tensión resultante es la suma de todas ellas; la intensidad es la de una sola pila.' },
  { section: 'electricidad-magnetismo', p: '¿Cómo se comportan varias pilas iguales conectadas en paralelo?', r: 'La tensión conjunta es la misma que la de una sola pila; la intensidad es la suma de todas ellas.' },
  { section: 'electricidad-magnetismo', p: '¿Qué es el flujo magnético y en qué se mide?', r: 'El conjunto de líneas de campo que van de un polo a otro de un imán. Se mide en maxwell; la fuerza de atracción/repulsión se mide en dinas.' },
  { section: 'electricidad-magnetismo', p: '¿Qué es la histéresis magnética?', r: 'El fenómeno por el que un imán dentro de un campo deja de aumentar su fuerza de atracción o repulsión aunque el campo siga aumentando.' },
  { section: 'electricidad-magnetismo', p: '¿Qué ocurre al enrollar un conductor rectilíneo en una vuelta?', r: 'Pasa a llamarse solenoide y el campo magnético que genera aumenta.' },
  { section: 'electricidad-magnetismo', p: '¿Qué dice la Ley de Lenz sobre la corriente inducida?', r: 'La corriente inducida en un conductor tiene un sentido que se opone al cambio que la produjo.' },
  { section: 'electricidad-magnetismo', p: '¿Qué convierte una pila y mediante qué proceso?', r: 'Convierte energía química en energía eléctrica, mediante electrolisis.' },
  { section: 'electricidad-magnetismo', p: '¿En qué unidad se mide la carga eléctrica?', r: 'En culombios; un amperio equivale al paso de un culombio de carga por segundo.' },
  { section: 'electricidad-magnetismo', p: '¿Qué genera todo conductor por el que circula corriente?', r: 'Un campo magnético a su alrededor.' },
  { section: 'electricidad-magnetismo', p: '¿Existen imanes naturales?', r: 'Sí, la magnetita; además de los artificiales, que pueden ser permanentes o temporales.' },

  { section: 'ondas-modulacion', p: '¿De qué naturaleza son las ondas de radio y a qué velocidad se propagan en el vacío?', r: 'Son de naturaleza electromagnética (un campo eléctrico y otro magnético perpendiculares entre sí) y se propagan a 300.000 km/s.' },
  { section: 'ondas-modulacion', p: '¿Cómo se calcula la longitud de onda a partir de la frecuencia?', r: 'L (metros) = 300 / F (frecuencia en MHz).' },
  { section: 'ondas-modulacion', p: '¿Qué es la frecuencia y en qué unidad se mide?', r: 'El número de ciclos que se completan en un segundo. La unidad es el hercio (Hz), un ciclo por segundo.' },
  { section: 'ondas-modulacion', p: '¿Qué es la modulación?', r: 'El proceso de modificar una portadora para dotarla de información; una portadora sin modular no lleva información.' },
  { section: 'ondas-modulacion', p: '¿Qué varía en la modulación de amplitud (AM) y en la de frecuencia (FM)?', r: 'En AM varía la amplitud sin tocar la frecuencia; en FM varía la frecuencia sin tocar la amplitud; en PM (fase) solo varía la fase.' },
  { section: 'ondas-modulacion', p: '¿Qué es SSB y qué bandas laterales existen?', r: 'SSB es la modulación de banda lateral única. En AM aparecen banda lateral superior (USB) e inferior (LSB); en FM aparecen muchas bandas laterales.' },
  { section: 'ondas-modulacion', p: '¿Por qué se gana potencia usando banda lateral única?', r: 'Al prescindir de la portadora y de una banda lateral, toda la potencia se concentra en la información útil: se gana hasta 4 veces más potencia efectiva.' },
  { section: 'ondas-modulacion', p: '¿En qué bandas de HF se usa habitualmente LSB?', r: 'En 40, 80 y 160 metros (7, 3,5 y 1,8 MHz). En el resto de bandas de HF se usa USB.' },
  { section: 'ondas-modulacion', p: '¿Qué es la sobremodulación y cómo se corrige?', r: 'Un exceso de modulación que daña y deforma la portadora; se corrige bajando la ganancia del micrófono o reparando la avería.' },
  { section: 'ondas-modulacion', p: '¿Qué es el ancho de banda de una emisión?', r: 'El espectro ocupado por la banda lateral superior, la portadora (si existe) y la banda lateral inferior.' },
  { section: 'ondas-modulacion', p: '¿Entre qué frecuencias están las ondas sonoras audibles?', r: 'Entre 20 Hz y 20.000 Hz.' },
  { section: 'ondas-modulacion', p: '¿Qué se llama cresta, nodo y periodo en una onda?', r: 'Cresta es el valor máximo, nodo el punto donde la onda vale cero, y periodo el tiempo que tarda en completarse un ciclo.' },
  { section: 'ondas-modulacion', p: '¿Qué tipo de corriente se genera para uso doméstico?', r: 'Corriente alterna, en la que los polos cambian continuamente (a diferencia de la continua, donde permanecen siempre positivo o negativo).' },

  { section: 'componentes', p: '¿Cómo se comporta la resistencia total en un circuito de resistencias en serie?', r: 'Es la suma de todas ellas, y la intensidad es la misma en cualquier punto del circuito.' },
  { section: 'componentes', p: '¿Cómo se calcula la resistencia total de varias resistencias en paralelo?', r: 'Con 1/R = 1/r1 + 1/r2 + 1/r3... El resultado siempre es menor que la más pequeña de ellas.' },
  { section: 'componentes', p: '¿Para qué se usa una resistencia en shunt?', r: 'Para proteger aparatos de medida, colocándola en paralelo con ellos.' },
  { section: 'componentes', p: '¿Qué indican las bandas de color de una resistencia?', r: 'Las dos primeras el valor, la tercera el número de ceros y la cuarta la tolerancia.' },
  { section: 'componentes', p: '¿Cómo se comporta un termistor NTC frente a la temperatura?', r: 'Su resistencia disminuye al aumentar la temperatura (lo contrario que un PTC).' },
  { section: 'componentes', p: '¿Qué es un potenciómetro y qué es un reóstato?', r: 'El potenciómetro regula la tensión; el reóstato regula la corriente que pasa por la carga.' },
  { section: 'componentes', p: '¿De qué consta un condensador y qué propiedad tiene?', r: 'De dos placas separadas por un dieléctrico. Acumula carga eléctrica; su capacidad se mide en faradios (C = Q/V).' },
  { section: 'componentes', p: '¿Cómo varía la capacidad de un condensador con el tamaño de las placas y la distancia entre ellas?', r: 'Aumenta con placas más grandes y con menor distancia entre ellas.' },
  { section: 'componentes', p: '¿Qué es la reactancia y en qué unidad se mide?', r: 'La oposición al paso de corriente de condensadores (capacitiva) y bobinas (inductiva). Se mide en ohmios.' },
  { section: 'componentes', p: '¿Cómo se calcula la relación de transformación de un transformador?', r: 'Es el cociente entre el número de espiras del secundario y del primario.' },
  { section: 'componentes', p: '¿Qué diferencia hay entre polarización directa e inversa en un semiconductor?', r: 'Directa: positivo a P y negativo a N (favorece el paso de corriente). Inversa: al revés.' },
  { section: 'componentes', p: '¿Cómo se llaman los extremos de un diodo y para qué sirve un diodo zener?', r: 'El extremo P es el ánodo y el N el cátodo. El zener estabiliza la tensión al alcanzar la de ruptura.' },
  { section: 'componentes', p: '¿Qué conexiones tiene un transistor bipolar y uno FET?', r: 'El bipolar: base, emisor, colector (PNP o NPN). El FET: puerta, drenador, fuente.' },
  { section: 'componentes', p: '¿Qué clases de amplificadores existen?', r: 'Clase A, B, AB (combinación de A y B) y C.' },
  { section: 'componentes', p: '¿Cuándo se dice que un circuito es resonante?', r: 'Cuando la reactancia capacitiva y la inductiva son iguales.' },
  { section: 'componentes', p: '¿Qué es el factor Q de un circuito resonante?', r: 'Su facultad para discriminar una frecuencia: Q = frecuencia de resonancia / ancho de banda.' },
  { section: 'componentes', p: '¿Qué tipos de filtros existen según la frecuencia que dejan pasar?', r: 'Paso alto, paso bajo, pasa banda y de supresión de banda.' },
  { section: 'componentes', p: '¿Qué etapas tiene una fuente de alimentación lineal?', r: 'Transformador, rectificador, filtro, regulación y salida.' },
  { section: 'componentes', p: '¿Qué diferencia hay entre un rectificador de media onda y uno de onda completa?', r: 'El de media onda usa un solo diodo; el de onda completa usa dos, o un puente de cuatro.' },
  { section: 'componentes', p: '¿Con qué se filtra la salida de un rectificador?', r: 'Con condensadores electrolíticos, para reducir el rizado.' },
  { section: 'componentes', p: '¿Qué diferencia una fuente lineal de una conmutada?', r: 'La conmutada varía la frecuencia de entrada con un oscilador propio, permitiendo transformadores más pequeños.' },
  { section: 'componentes', p: '¿Cómo se llama un transistor montado en colector común?', r: 'Seguidor emisor; se entra por la base y se sale por el emisor.' },

  { section: 'receptores', p: '¿Qué dos grandes tipos de receptores existen?', r: 'De conversión directa y superheterodinos (usan una o más frecuencias intermedias, F.I.).' },
  { section: 'receptores', p: '¿Cómo se diferencia un receptor superheterodino de simple o doble conversión?', r: 'El de simple conversión tiene una sola F.I.; el de doble conversión tiene dos.' },
  { section: 'receptores', p: '¿Qué hace el amplificador de RF en la entrada de un receptor?', r: 'Es un circuito resonante que amplifica primero la señal de antena y puede incluir un atenuador.' },
  { section: 'receptores', p: '¿Qué función tiene el detector en un receptor?', r: 'Extrae de la portadora la información que lleva; en FM se usan circuitos PLL.' },
  { section: 'receptores', p: '¿Para qué sirve el control automático de ganancia (CAG)?', r: 'Mantiene constante el nivel de entrada al detector, evitando saturación por señales fuertes.' },
  { section: 'receptores', p: '¿Qué es el squelch o silenciador?', r: 'Un circuito que mantiene el receptor en silencio mientras la señal no supera un nivel ajustado.' },
  { section: 'receptores', p: '¿Qué es la selectividad de un receptor?', r: 'Su capacidad para separar frecuencias próximas entre sí.' },
  { section: 'receptores', p: '¿Qué es la sensibilidad de un receptor?', r: 'Su capacidad para diferenciar la señal deseada del ruido de fondo.' },
  { section: 'receptores', p: '¿Qué es la frecuencia imagen?', r: 'Una señal fantasma que puede generarse dentro del propio receptor.' },
  { section: 'receptores', p: '¿Qué diferencia hay entre un receptor de CW/SSB y uno de AM en su diagrama de bloques?', r: 'El de AM incluye una salida del detector que actúa sobre el amplificador de F.I., ausente en CW/SSB.' },
  { section: 'receptores', p: '¿Qué añade un receptor de FM que no tienen los de AM, CW o SSB?', r: 'Un demodulador de frecuencia, tras el limitador.' },
  { section: 'receptores', p: '¿Qué es el canal adyacente?', r: 'La capacidad del receptor de no verse afectado por señales fuertes en los canales anterior y posterior al sintonizado.' },

  { section: 'transmisores', p: '¿Qué función cumple el excitador en un transmisor?', r: 'Amplifica el nivel de la señal de RF para excitar el amplificador final de potencia.' },
  { section: 'transmisores', p: '¿Para qué sirve el filtro de salida en PI de un transmisor?', r: 'Elimina frecuencias indeseadas y adapta la salida a la impedancia del cable y la antena.' },
  { section: 'transmisores', p: '¿Cómo se consigue la modulación SSB en un transmisor?', r: 'Por rotación de fase o mediante sistema de filtro.' },
  { section: 'transmisores', p: '¿Qué impedancia de salida deben tener los transmisores de radioaficionado?', r: '50 ohmios, con salida asimétrica.' },
  { section: 'transmisores', p: '¿Qué son las "barbas" o sobremodulación en SSB y cómo se solucionan?', r: 'Excesos de modulación; se corrigen con la ganancia de micrófono o el ALC.' },
  { section: 'transmisores', p: '¿Qué límite tienen las radiaciones espurias en HF?', r: 'No deben superar los 40 dB por debajo de la potencia media, ni exceder los 50 mW.' },
  { section: 'transmisores', p: '¿Qué diferencia hay entre potencia nominal y potencia de pico?', r: 'La potencia declarada de un emisor es la nominal; la de pico es distinta y mayor.' },
  { section: 'transmisores', p: '¿Qué elemento sustituye al micrófono en un transmisor de CW?', r: 'El manipulador Morse o telegráfico.' },
  { section: 'transmisores', p: '¿Qué son los "clics" de manipulación en CW?', r: 'El ruido emitido durante cada impulso al transmitir en telegrafía.' },
  { section: 'transmisores', p: '¿Qué suele causar que un transmisor se interfiera a sí mismo?', r: 'Una ROE elevada; se evita con buena interconexión de masas y toma de tierra.' },

  { section: 'antenas-lineas', p: '¿Qué relación hay entre el tamaño de una antena y la frecuencia de trabajo?', r: 'Antenas cortas para frecuencias altas; antenas largas para frecuencias bajas.' },
  { section: 'antenas-lineas', p: '¿Qué tipos generales de antenas existen?', r: 'Lineales (dipolos, verticales, yagis, cuadros) y de apertura (parabólicas y de bocina).' },
  { section: 'antenas-lineas', p: '¿Cómo debe estar cortado un dipolo de media onda y qué impedancia debe tener?', r: 'A media longitud de onda de la frecuencia de uso, con impedancia próxima a 50 ohmios.' },
  { section: 'antenas-lineas', p: '¿Qué es una antena vertical de cuarto de onda o ground plane?', r: 'Un radiador de 1/4 de onda que necesita un plano de tierra (real o con radiales) como espejo.' },
  { section: 'antenas-lineas', p: '¿Cómo funciona una antena yagi?', r: 'Dipolo de media onda con elementos parásitos: reflector detrás, directores delante.' },
  { section: 'antenas-lineas', p: '¿Qué es el ancho de banda de una antena?', r: 'La gama de frecuencias para las que presenta buenas condiciones de resonancia.' },
  { section: 'antenas-lineas', p: '¿Cómo se mide la ganancia de una antena y cuál es la referencia?', r: 'En dB. El dipolo de media onda tiene ganancia 0 dB; la referencia teórica es el dipolo isotrópico.' },
  { section: 'antenas-lineas', p: '¿Qué es la relación frente-espalda?', r: 'La relación entre lo que emite/recibe el lóbulo frontal y lo que emite/recibe por detrás.' },
  { section: 'antenas-lineas', p: '¿Cómo está fabricado el cable coaxial y qué función cumple la malla?', r: 'Vivo interior y malla exterior; la malla apantalla evitando radiación o entrada de señales externas.' },
  { section: 'antenas-lineas', p: '¿Por qué es necesario un balun entre un cable coaxial y un dipolo?', r: 'Porque el coaxial es asimétrico y el dipolo es simétrico; el balun adapta ambas líneas.' },
  { section: 'antenas-lineas', p: '¿Qué es la R.O.E. y qué consecuencias tiene una ROE elevada?', r: 'Relación de ondas estacionarias; una ROE alta reduce la radiación, aumenta pérdidas y puede dañar el equipo.' },
  { section: 'antenas-lineas', p: '¿Qué función cumple un acoplador de antena?', r: 'Adapta la impedancia de la antena a la del equipo emisor mediante bobinas y condensadores variables.' },
  { section: 'antenas-lineas', p: '¿Qué es un dipolo con trampas?', r: 'Un dipolo de un hilo con bobinas intercaladas que acortan eléctricamente la antena para varias bandas.' },
  { section: 'antenas-lineas', p: '¿Qué polarización pueden tener las ondas de radio?', r: 'Lineal (vertical u horizontal) o circular.' },
  { section: 'antenas-lineas', p: '¿A qué distancia debería estar la antena de radioaficionado de una antena de TV?', r: 'Se recomienda dos o tres metros por encima de la antena de televisión.' },

  { section: 'propagacion', p: '¿Cuál es la capa de la atmósfera más importante para comunicaciones a larga distancia?', r: 'La ionosfera; durante el día, entre 6 y 18 MHz suelen ser posibles los contactos a larga distancia.' },
  { section: 'propagacion', p: '¿Qué es la frecuencia crítica?', r: 'La frecuencia por encima de la cual una onda ya no se refleja en la ionosfera.' },
  { section: 'propagacion', p: '¿Qué diferencia hay entre onda directa, de superficie y espacial?', r: 'Directa: línea de visión. Superficie: sigue la curvatura del suelo. Espacial: cruza o es reflejada por la ionosfera.' },
  { section: 'propagacion', p: '¿Qué es el fading o desvanecimiento?', r: 'La atenuación variable de una señal con el paso del tiempo por causas de propagación.' },
  { section: 'propagacion', p: '¿Qué es la propagación por dispersión troposférica?', r: 'Un modo usado en VHF para alcanzar distancias mayores de lo habitual.' },
  { section: 'propagacion', p: '¿En qué consiste el rebote lunar (EME)?', r: 'Usar la Luna como reflector entre dos estaciones que la ven simultáneamente.' },
  { section: 'propagacion', p: '¿Qué es el meteor scatter?', r: 'Propagación que aprovecha la breve ionización de la entrada de meteoritos en la atmósfera.' },
  { section: 'propagacion', p: '¿Qué es la reflexión esporádica?', r: 'Se usa en VHF cuando la capa E se ioniza fuertemente de forma ocasional.' },
  { section: 'propagacion', p: '¿Qué es la inversión térmica?', r: 'Cuando en capas altas la temperatura sube en vez de bajar, curvando las ondas hacia la Tierra.' },

  { section: 'medidas-interferencias', p: '¿Cómo se conecta un amperímetro y cómo un voltímetro?', r: 'El amperímetro en serie; el voltímetro en paralelo con la carga.' },
  { section: 'medidas-interferencias', p: '¿Qué instrumento agrupa amperímetro, óhmetro y voltímetro?', r: 'El polímetro o tester.' },
  { section: 'medidas-interferencias', p: '¿Con qué se mide la potencia y con qué la ROE?', r: 'La potencia con un vatímetro; la ROE con un medidor de estacionarias (ROE/SWR).' },
  { section: 'medidas-interferencias', p: '¿Con qué instrumento se mide la forma de una señal?', r: 'Con el osciloscopio.' },
  { section: 'medidas-interferencias', p: '¿Con qué se mide la frecuencia de resonancia de un circuito?', r: 'Con un dipmeter.' },
  { section: 'medidas-interferencias', p: '¿Qué suele causar que un equipo de sonido reproduzca la señal de un radioaficionado?', r: 'Que cables o altavoces actúen como antena involuntaria.' },
  { section: 'medidas-interferencias', p: '¿Con qué se solucionan la mayoría de interferencias?', r: 'Con filtros, cables blindados o una buena toma de tierra.' },
  { section: 'medidas-interferencias', p: '¿Cómo se llaman las frecuencias emitidas fuera de banda por armónicos o exceso de potencia?', r: 'Radiaciones espurias, no esenciales o indeseadas.' },

  { section: 'seguridad', p: '¿Qué hacer con los cables de antena si se acerca una tormenta?', r: 'Desconectarlos y, si es posible, sacarlos de la vivienda, además de desconectar alimentaciones.' },
  { section: 'seguridad', p: '¿Está permitido usar "ladrones" para conectar varios equipos?', r: 'No; deben usarse regletas múltiples.' },
  { section: 'seguridad', p: '¿Se pueden usar las tuberías de agua o gas como toma de tierra?', r: 'Nunca.' },
  { section: 'seguridad', p: '¿Qué hacer ante un accidente por descarga eléctrica?', r: 'Separar al accidentado con medios aislantes, cortar el suministro si es posible, y llamar al 112 si es grave.' },
  { section: 'seguridad', p: '¿Protege refugiarse junto a un edificio de la caída de un rayo?', r: 'No.' },
  { section: 'seguridad', p: '¿Se debe manipular el interior de un televisor desconectado?', r: 'No, por el riesgo de condensadores de alta tensión que retienen carga.' },

  // Ampliación con contenidos adicionales del temario de Utiel
  { section: 'electricidad-magnetismo', p: '¿Qué ocurre con el valor total al conectar varias resistencias en serie o en paralelo?', r: 'En serie, el total siempre es mayor que la mayor de ellas. En paralelo, el total siempre es menor que la menor de ellas.' },
  { section: 'electricidad-magnetismo', p: '¿A cuántos ohmios equivale un kiloohmio?', r: 'A 1.000 ohmios.' },
  { section: 'electricidad-magnetismo', p: '¿Qué indica la cuarta banda de color de una resistencia?', r: 'Su tolerancia (el margen de error respecto al valor nominal).' },
  { section: 'electricidad-magnetismo', p: '¿Cómo se define exactamente un voltio?', r: 'La diferencia de potencial que aparece entre los extremos de una resistencia de un ohmio cuando circula por ella una corriente de un amperio.' },
  { section: 'electricidad-magnetismo', p: '¿Cuál de estas fórmulas de la Ley de Ohm y la potencia es incorrecta: E=IR, P=E²R, P=I²R, P=EI?', r: 'P=E²R es incorrecta; la correcta sería P=E²/R.' },
  { section: 'electricidad-magnetismo', p: '¿Qué magnitud mide realmente el faradio?', r: 'La capacidad de un condensador, no la cantidad de carga (esa se mide en culombios).' },

  { section: 'componentes', p: '¿Cómo se comporta un termistor PTC frente a la temperatura?', r: 'Su resistencia aumenta al aumentar la temperatura (lo contrario que un NTC).' },
  { section: 'componentes', p: '¿Para qué se usa una resistencia en derivación o "shunt"?', r: 'Para proteger o ampliar el margen de un aparato de medida.' },
  { section: 'componentes', p: '¿Qué es un resonador de cuarzo?', r: 'Un dispositivo que presenta un efecto de resonancia muy estable basado en su propiedad piezoeléctrica, usado como referencia de frecuencia.' },
  { section: 'componentes', p: '¿Cómo se suma la capacidad de varios condensadores en paralelo?', r: 'Se suman directamente: la capacidad total es la suma de las capacidades individuales.' },
  { section: 'componentes', p: '¿Qué información dan las bandas de colores de un condensador?', r: 'Su capacidad, su tolerancia y su tensión máxima de trabajo.' },
  { section: 'componentes', p: '¿Qué energía almacena un condensador cargado a una tensión V?', r: 'E = ½ · C · V² (la mitad de su capacidad por el cuadrado de la tensión).' },
  { section: 'componentes', p: 'Si una batería de portátil indica "DC 7,4 V – 1.500 mAh", ¿qué está indicando?', r: 'Que puede entregar 7,4 voltios y una corriente de 1,5 amperios durante una hora (o proporcionalmente menos tiempo a mayor corriente).' },
  { section: 'componentes', p: '¿Cuánto vale la reactancia inductiva de una bobina si la frecuencia es cero (corriente continua)?', r: 'Cero: sin variación de corriente no hay oposición inductiva, la bobina se comporta como un simple conductor.' },

  { section: 'ondas-modulacion', p: '¿Qué símbolo identifica a la modulación de frecuencia en fonía?', r: 'F3E.' },
  { section: 'ondas-modulacion', p: 'Si un mezclador combina dos frecuencias f1 y f2, ¿qué frecuencias aparecen a su salida?', r: 'Entre otras, la suma (f1+f2) y la diferencia (f1−f2) de ambas.' },
  { section: 'ondas-modulacion', p: 'En un transmisor FM con desviación máxima de 25 kHz y frecuencia moduladora de 10 kHz, ¿cuál es el índice de modulación?', r: '2,5 (se calcula dividiendo la desviación máxima entre la frecuencia moduladora).' },
  { section: 'ondas-modulacion', p: '¿A qué modulación caracteriza el índice de modulación como parámetro?', r: 'A la modulación de frecuencia (FM).' },
  { section: 'ondas-modulacion', p: '¿A cuántos dBm equivale una potencia de 1.000 mW?', r: 'A 30 dBm.' },

  { section: 'receptores', p: '¿Qué característica tiene el llamado "ruido blanco" en un sistema de radiocomunicación?', r: 'Es independiente de la frecuencia: afecta por igual a todo el espectro.' },
  { section: 'receptores', p: '¿Qué indica el medidor conocido como "S-meter"?', r: 'La intensidad de la señal recibida a la entrada del receptor.' },
  { section: 'receptores', p: 'Si un receptor tiene una frecuencia intermedia de 9 MHz y queremos sintonizar 7 MHz, ¿a qué frecuencia debe estar el oscilador local?', r: 'A 16 MHz (la suma de la frecuencia a sintonizar más la FI).' },
  { section: 'receptores', p: 'Si a la entrada de un mezclador llegan 14 MHz y 4 MHz, ¿qué frecuencia aparece a la salida (la diferencia)?', r: '10 MHz.' },
  { section: 'receptores', p: '¿Cómo obtiene el audio un receptor de conversión directa?', r: 'Mezclando directamente la señal recibida con el oscilador local, sin pasar por una frecuencia intermedia.' },
  { section: 'receptores', p: '¿En qué orden van las etapas de un receptor superheterodino, desde la antena hasta el altavoz?', r: 'Amplificador de RF, mezclador, amplificador de FI, demodulador y amplificador de audio.' },
  { section: 'receptores', p: '¿En qué etapa queda determinado principalmente el margen dinámico de un receptor?', r: 'En el primer mezclador de entrada.' },
  { section: 'receptores', p: '¿Para qué se usa el detector de producto?', r: 'Es la etapa detectora empleada en los receptores de banda lateral única (SSB).' },

  { section: 'transmisores', p: '¿Qué ocurre con el riesgo de interferencias al aumentar la potencia de transmisión?', r: 'Aumenta.' },
  { section: 'transmisores', p: 'Un amplificador de 20 dB de ganancia recibe 0,2 vatios a su entrada. ¿Cuánto vale la potencia de salida?', r: '20 vatios (20 dB equivalen a multiplicar por 100).' },
  { section: 'transmisores', p: '¿Cómo se define el rendimiento de un transmisor?', r: 'La relación entre la potencia entregada al sistema radiante y la potencia consumida por el equipo.' },
  { section: 'transmisores', p: '¿Qué se debe hacer si una interferencia perjudicial afecta a la seguridad de la vida humana?', r: 'Dejar de emitir hasta resolver el problema.' },
  { section: 'transmisores', p: '¿Cómo es la potencia de pico de un transmisor con modulación de amplitud respecto a su potencia media?', r: 'Siempre superior a la potencia media.' },
  { section: 'transmisores', p: '¿Qué se debe hacer si se producen interferencias al Servicio Móvil Aeronáutico al emitir en 2 metros?', r: 'Dejar de emitir.' },

  { section: 'antenas-lineas', p: 'Si una antena resuena en 29.900 kHz y queremos que resuene en 28.500 kHz (más abajo), ¿qué hay que hacer?', r: 'Alargarla (bajar la frecuencia de resonancia implica alargar el elemento radiante).' },
  { section: 'antenas-lineas', p: '¿Qué impedancia presenta un dipolo doblado en resonancia frente a un dipolo simple?', r: 'Mayor.' },
  { section: 'antenas-lineas', p: '¿Con qué instrumento se mide la intensidad de campo radiado por una antena?', r: 'Con un medidor de campo.' },

  { section: 'propagacion', p: '¿Cómo se denominan las capas ionizadas de la atmósfera?', r: 'D, E, F1 y F2.' },
  { section: 'propagacion', p: '¿Cuál es la forma más común de propagación en VHF y UHF?', r: 'Por onda directa.' },
  { section: 'propagacion', p: '¿En qué banda de frecuencias predomina el modo de propagación por onda de superficie?', r: 'En MF (frecuencias medias).' },
  { section: 'propagacion', p: '¿Qué banda de frecuencia utiliza la radiodifusión sonora en FM?', r: 'La banda de VHF.' },
  { section: 'propagacion', p: 'Para un enlace radioeléctrico entre España y Nueva Zelanda, ¿qué tipo de frecuencia podría emplearse?', r: 'Una frecuencia de la banda de HF, por debajo de la frecuencia crítica.' },
  { section: 'propagacion', p: 'En la propagación ionosférica en 3,5 MHz, ¿los alcances son mayores de día o de noche?', r: 'De noche; de día, frente a la noche, se consiguen alcances menores.' },
  { section: 'propagacion', p: '¿Se atenúan siempre las ondas electromagnéticas por efecto de la propagación?', r: 'Sí, siempre.' },

  { section: 'medidas-interferencias', p: '¿Qué instrumento se usa si se desea medir la frecuencia emitida por un transmisor?', r: 'Un frecuencímetro de radiofrecuencia (nunca un voltímetro de RF).' },
  { section: 'medidas-interferencias', p: '¿Qué fenómeno, además de una ROE elevada, puede ser motivo de generación de interferencias?', r: 'La intermodulación.' },
  { section: 'medidas-interferencias', p: '¿Qué magnitud NO puede medir un polímetro (multímetro)?', r: 'La impedancia de la antena.' },
  { section: 'medidas-interferencias', p: '¿Para qué se emplea un filtro de línea de desacoplo en un transceptor?', r: 'Para evitar que el equipo introduzca señales de radiofrecuencia en la red eléctrica de suministro.' },
  { section: 'medidas-interferencias', p: '¿Para qué se colocan circuitos de filtrado a la salida de una fuente de alimentación?', r: 'Para reducir el rizado de la señal de salida y obtener una tensión más constante.' },
  { section: 'medidas-interferencias', p: '¿Qué consigue un filtro paso-banda a la hora de eliminar interferencias?', r: 'Atenuar las frecuencias que quedan por encima y por debajo del intervalo de la banda de paso.' },
  { section: 'medidas-interferencias', p: '¿Con qué instrumento se observan las componentes espectrales de una emisión?', r: 'Con un analizador de espectro.' },
  { section: 'medidas-interferencias', p: '¿En qué unidades se mide la intensidad de campo eléctrico?', r: 'En V/m (o en dBµV/m).' },
  { section: 'medidas-interferencias', p: '¿Qué significan las siglas "EMC" en un equipo?', r: 'Que el equipo cumple las directivas de la Unión Europea sobre compatibilidad electromagnética.' },
  { section: 'medidas-interferencias', p: '¿Para qué se usa un generador de señal de radiofrecuencia?', r: 'Para caracterizar y probar etapas de radiofrecuencia.' },
  { section: 'medidas-interferencias', p: '¿Qué tipo de conductor es el más inmune a las interferencias radiadas?', r: 'La fibra óptica.' },
  { section: 'medidas-interferencias', p: '¿Para qué deben ir los equipos radioeléctricos en cajas metálicas?', r: 'Para limitar las radiaciones indeseadas, tanto las que emiten como las que podrían captar.' },

  { section: 'seguridad', p: '¿Con qué debe contar toda estación radioeléctrica como medida de protección y seguridad?', r: 'Con un interruptor general de suministro eléctrico.' },
  { section: 'seguridad', p: '¿Se puede tocar una antena mientras está transmitiendo?', r: 'No, nunca se debe tocar una antena en transmisión.' },
  { section: 'seguridad', p: '¿Para qué debe estar conectado a tierra el transceptor?', r: 'Para proteger al operador frente a posibles descargas.' },
]
