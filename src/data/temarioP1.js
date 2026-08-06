// Prueba 1 · Electricidad y Radioelectricidad
// Contenido fusionado y reescrito a partir de las dos fuentes de estudio del usuario.
export const sectionsP1 = [
  { id: 'electricidad-magnetismo', freq: '1.800 MHz', name: 'Electricidad y magnetismo' },
  { id: 'ondas-modulacion', freq: '3.500 MHz', name: 'Ondas y modulación' },
  { id: 'componentes', freq: '7.000 MHz', name: 'Componentes y circuitos' },
  { id: 'receptores', freq: '14.000 MHz', name: 'Receptores' },
  { id: 'transmisores', freq: '18.000 MHz', name: 'Transmisores' },
  { id: 'antenas-lineas', freq: '21.000 MHz', name: 'Antenas y líneas de transmisión' },
  { id: 'propagacion', freq: '24.000 MHz', name: 'Propagación de ondas' },
  { id: 'medidas-interferencias', freq: '28.000 MHz', name: 'Medidas e interferencias' },
  { id: 'seguridad', freq: '50.000 MHz', name: 'Seguridad eléctrica' },
]

export const cardsP1 = [
  // --- Electricidad y magnetismo ---
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

  // --- Ondas y modulación ---
  { section: 'ondas-modulacion', p: '¿De qué naturaleza son las ondas de radio y a qué velocidad se propagan en el vacío?', r: 'Son de naturaleza electromagnética (un campo eléctrico y otro magnético perpendiculares entre sí) y se propagan a 300.000 km/s.' },
  { section: 'ondas-modulacion', p: '¿Cómo se calcula la longitud de onda a partir de la frecuencia?', r: 'L (metros) = 300 / F (frecuencia en MHz).' },
  { section: 'ondas-modulacion', p: '¿Qué es la frecuencia y en qué unidad se mide?', r: 'El número de ciclos que se completan en un segundo. La unidad es el hercio (Hz), un ciclo por segundo.' },
  { section: 'ondas-modulacion', p: '¿Qué es la modulación?', r: 'El proceso de modificar una portadora para dotarla de información; una portadora sin modular no lleva información.' },
  { section: 'ondas-modulacion', p: '¿Qué varía en la modulación de amplitud (AM) y en la de frecuencia (FM)?', r: 'En AM varía la amplitud sin tocar la frecuencia; en FM varía la frecuencia sin tocar la amplitud; en PM (fase) solo varía la fase.' },
  { section: 'ondas-modulacion', p: '¿Qué es SSB y qué bandas laterales existen?', r: 'SSB es la modulación de banda lateral única. En toda señal modulada en AM aparecen banda lateral superior (USB) e inferior (LSB); en FM aparecen muchas bandas laterales.' },
  { section: 'ondas-modulacion', p: '¿Por qué se gana potencia usando banda lateral única?', r: 'Al prescindir de la portadora y de una banda lateral, toda la potencia se concentra en la información útil: se gana hasta 4 veces más potencia efectiva.' },
  { section: 'ondas-modulacion', p: '¿En qué bandas de HF se usa habitualmente LSB?', r: 'En 40, 80 y 160 metros (7, 3,5 y 1,8 MHz). En el resto de bandas de HF se usa USB.' },
  { section: 'ondas-modulacion', p: '¿Qué es la sobremodulación y cómo se corrige?', r: 'Un exceso de modulación que daña y deforma la portadora; se corrige bajando la ganancia del micrófono o reparando la avería.' },
  { section: 'ondas-modulacion', p: '¿Qué es el ancho de banda de una emisión?', r: 'El espectro ocupado por la banda lateral superior, la portadora (si existe) y la banda lateral inferior.' },
  { section: 'ondas-modulacion', p: '¿Entre qué frecuencias están las ondas sonoras audibles?', r: 'Entre 20 Hz y 20.000 Hz.' },

  // --- Componentes y circuitos ---
  { section: 'componentes', p: '¿Cómo se comporta la resistencia total en un circuito de resistencias en serie?', r: 'Es la suma de todas ellas, y la intensidad es la misma en cualquier punto del circuito.' },
  { section: 'componentes', p: '¿Cómo se calcula la resistencia total de varias resistencias en paralelo?', r: 'Con 1/R = 1/r1 + 1/r2 + 1/r3... La intensidad total es la suma de las intensidades de cada rama, y el resultado siempre es menor que la más pequeña de ellas.' },
  { section: 'componentes', p: '¿Para qué se usa una resistencia en shunt?', r: 'Para proteger aparatos de medida, colocándola en paralelo con ellos.' },
  { section: 'componentes', p: '¿Qué indican las bandas de color de una resistencia?', r: 'Las dos primeras el valor (dos primeras cifras), la tercera el número de ceros y la cuarta la tolerancia.' },
  { section: 'componentes', p: '¿Cómo se comporta un termistor NTC frente a la temperatura?', r: 'Su resistencia disminuye al aumentar la temperatura (todo lo contrario que un PTC, cuya resistencia aumenta con la temperatura).' },
  { section: 'componentes', p: '¿Qué es un potenciómetro y qué es un reóstato?', r: 'El potenciómetro regula la tensión (voltaje); el reóstato tiene como misión variar la corriente que pasa por la carga.' },
  { section: 'componentes', p: '¿De qué consta un condensador y qué propiedad tiene?', r: 'De dos placas separadas por un dieléctrico. Tiene la facultad de acumular carga eléctrica; su capacidad se mide en faradios (C = Q/V).' },
  { section: 'componentes', p: '¿Cómo varía la capacidad de un condensador con el tamaño de las placas y la distancia entre ellas?', r: 'Aumenta con placas más grandes y con menor distancia entre ellas; disminuye en el caso contrario.' },
  { section: 'componentes', p: '¿Qué es la reactancia y en qué unidad se mide?', r: 'La oposición al paso de corriente que ofrecen condensadores (reactancia capacitiva) y bobinas (reactancia inductiva). Se mide en ohmios.' },
  { section: 'componentes', p: '¿Cómo se calcula la relación de transformación de un transformador?', r: 'Es el cociente entre el número de espiras del secundario y del primario. La potencia del primario es igual a la del secundario.' },
  { section: 'componentes', p: '¿Qué diferencia hay entre polarización directa e inversa en un semiconductor?', r: 'Directa: el positivo va a la zona P y el negativo a la zona N (favorece el paso de corriente). Inversa: al revés (lo impide).' },
  { section: 'componentes', p: '¿Cómo se llaman los extremos de un diodo y para qué sirve un diodo zener?', r: 'El extremo P es el ánodo y el N el cátodo. El diodo zener estabiliza la tensión al alcanzar la tensión de avalancha o ruptura.' },
  { section: 'componentes', p: '¿Qué conexiones tiene un transistor bipolar y uno FET?', r: 'El bipolar tiene base, emisor y colector (puede ser PNP o NPN). El FET tiene puerta, drenador y fuente.' },
  { section: 'componentes', p: '¿Qué clases de amplificadores existen?', r: 'Clase A, B, AB (combinación de A y B) y C.' },
  { section: 'componentes', p: '¿Cuándo se dice que un circuito es resonante?', r: 'Cuando la reactancia capacitiva y la inductiva son iguales.' },
  { section: 'componentes', p: '¿Qué es el factor Q de un circuito resonante?', r: 'Su facultad para seleccionar o discriminar una frecuencia eliminando las demás: Q = frecuencia de resonancia / ancho de banda.' },
  { section: 'componentes', p: '¿Qué tipos de filtros existen según la frecuencia que dejan pasar?', r: 'Paso alto (deja pasar por encima de la de corte), paso bajo (por debajo), pasa banda (entre dos frecuencias) y de supresión de banda (elimina una franja intermedia).' },
  { section: 'componentes', p: '¿Qué etapas tiene una fuente de alimentación lineal?', r: 'Transformador, rectificador, filtro, regulación y salida. Convierte la corriente alterna de red en continua.' },
  { section: 'componentes', p: '¿Qué diferencia hay entre un rectificador de media onda y uno de onda completa?', r: 'El de media onda usa un solo diodo; el de onda completa usa dos diodos, o un puente rectificador de cuatro diodos.' },

  // --- Receptores ---
  { section: 'receptores', p: '¿Qué dos grandes tipos de receptores existen?', r: 'De conversión directa (oscilador + mezclador que genera directamente frecuencias audibles) y superheterodinos (usan una o más frecuencias intermedias, F.I.).' },
  { section: 'receptores', p: '¿Cómo se diferencia un receptor superheterodino de simple o doble conversión?', r: 'El de simple conversión tiene una sola frecuencia intermedia (F.I.); el de doble conversión tiene dos.' },
  { section: 'receptores', p: '¿Qué hace el amplificador de RF en la entrada de un receptor?', r: 'Es lo primero que encuentra la señal desde la antena; es un circuito resonante para las frecuencias que se quieren escuchar y puede incluir un atenuador.' },
  { section: 'receptores', p: '¿Qué función tiene el detector en un receptor?', r: 'Extrae de la portadora modulada la información que lleva. En AM se hace con diodos o detectores de producto; en FM se usan circuitos PLL.' },
  { section: 'receptores', p: '¿Para qué sirve el control automático de ganancia (CAG)?', r: 'Mantiene un nivel constante de entrada al detector, evitando saturación por señales fuertes y produciendo un audio agradable y constante.' },
  { section: 'receptores', p: '¿Qué es el squelch o silenciador?', r: 'Un circuito con mando exterior que mantiene el receptor en silencio mientras la señal no supera el nivel ajustado.' },
  { section: 'receptores', p: '¿Qué es la selectividad de un receptor?', r: 'Su capacidad para separar frecuencias próximas entre sí.' },
  { section: 'receptores', p: '¿Qué es la sensibilidad de un receptor?', r: 'Su capacidad para diferenciar la señal deseada del ruido de fondo (relación señal-ruido).' },
  { section: 'receptores', p: '¿Qué es la frecuencia imagen?', r: 'Una señal fantasma que puede generarse dentro del propio receptor y que un buen diseño debe eliminar.' },

  // --- Transmisores ---
  { section: 'transmisores', p: '¿Qué función cumple el excitador en un transmisor?', r: 'Amplifica el nivel de la señal de radiofrecuencia para excitar el amplificador final de potencia.' },
  { section: 'transmisores', p: '¿Para qué sirve el filtro de salida en PI de un transmisor?', r: 'Elimina frecuencias indeseadas y adapta la salida del amplificador final a la impedancia del cable y la antena.' },
  { section: 'transmisores', p: '¿Cómo se consigue la modulación SSB en un transmisor?', r: 'De dos formas: por rotación de fase o mediante sistema de filtro.' },
  { section: 'transmisores', p: '¿Qué impedancia de salida deben tener los transmisores de radioaficionado?', r: '50 ohmios, con salida asimétrica.' },
  { section: 'transmisores', p: '¿Qué son las "barbas" o sobremodulación en SSB y cómo se solucionan?', r: 'Excesos de modulación que se corrigen reduciendo la ganancia del micrófono o ajustando el ALC dentro de márgenes que no generen interferencia.' },
  { section: 'transmisores', p: '¿Qué límite tienen las radiaciones espurias en HF?', r: 'No deben superar los 40 dB por debajo de la potencia media, ni exceder los 50 mW.' },
  { section: 'transmisores', p: '¿Qué diferencia hay entre potencia nominal y potencia de pico?', r: 'La potencia de un emisor es la potencia nominal; la potencia de pico es distinta y mayor, relacionada con los picos de la señal moduladora.' },

  // --- Antenas y líneas de transmisión ---
  { section: 'antenas-lineas', p: '¿Qué relación hay entre el tamaño de una antena y la frecuencia de trabajo?', r: 'Las antenas cortas corresponden a frecuencias altas; las antenas largas, a frecuencias más bajas.' },
  { section: 'antenas-lineas', p: '¿Qué tipos generales de antenas existen?', r: 'Lineales (dipolos, verticales, yagis, cuadros...) y de apertura (parabólicas y de bocina).' },
  { section: 'antenas-lineas', p: '¿Cómo debe estar cortado un dipolo de media onda y qué impedancia debe tener?', r: 'Cortado a media longitud de onda de la frecuencia de uso, con una impedancia en el punto de alimentación de aproximadamente 50 ohmios.' },
  { section: 'antenas-lineas', p: '¿Qué es una antena vertical de cuarto de onda o ground plane?', r: 'Un radiador de 1/4 de longitud de onda que necesita un plano de tierra (real o mediante radiales) que actúa como espejo duplicando la longitud efectiva.' },
  { section: 'antenas-lineas', p: '¿Cómo funciona una antena yagi?', r: 'Se diseña a partir de un dipolo de media onda con elementos parásitos añadidos: solo el dipolo está conectado y alimentado, el elemento posterior es el reflector y los delanteros son directores.' },
  { section: 'antenas-lineas', p: '¿Qué es el ancho de banda de una antena?', r: 'La gama de frecuencias para las que la antena presenta buenas condiciones de resonancia.' },
  { section: 'antenas-lineas', p: '¿Cómo se mide la ganancia de una antena y cuál es la referencia?', r: 'En dB. El dipolo de media onda tiene ganancia 0 dB; el dipolo de referencia teórico se llama dipolo isotrópico.' },
  { section: 'antenas-lineas', p: '¿Qué es la relación frente-espalda?', r: 'En antenas directivas, la relación entre lo que emite/recibe el lóbulo frontal y lo que emite/recibe por detrás.' },
  { section: 'antenas-lineas', p: '¿Cómo está fabricado el cable coaxial y qué función cumple la malla?', r: 'Tiene dos conductores concéntricos: el vivo (interior) y la malla (exterior), que apantalla evitando que el vivo radie hacia fuera o que entren señales externas.' },
  { section: 'antenas-lineas', p: '¿Por qué es necesario un balun entre un cable coaxial y un dipolo?', r: 'Porque el coaxial es asimétrico y desbalanceado, y el dipolo es simétrico y balanceado; el balun adapta ambas líneas para una mejor transferencia de energía.' },
  { section: 'antenas-lineas', p: '¿Qué es la R.O.E. y qué consecuencias tiene una ROE elevada?', r: 'La relación de ondas estacionarias: energía entregada frente a energía devuelta por desadaptación. Una ROE alta reduce la radiación efectiva, aumenta pérdidas y puede dañar el equipo por sobretensión y calentamiento.' },
  { section: 'antenas-lineas', p: '¿Qué función cumple un acoplador de antena?', r: 'Formado por bobinas y condensadores variables, adapta la impedancia de la antena a la del equipo emisor.' },

  // --- Propagación ---
  { section: 'propagacion', p: '¿Cuál es la capa de la ionosfera más importante para las comunicaciones a larga distancia?', r: 'La ionosfera en general está muy ionizada; durante el día, entre 6 y 18 MHz suelen ser posibles los contactos a larga distancia.' },
  { section: 'propagacion', p: '¿Qué es la frecuencia crítica?', r: 'La frecuencia por encima de la cual una onda ya no se refleja en la ionosfera y se pierde en el espacio.' },
  { section: 'propagacion', p: '¿Qué diferencia hay entre onda directa, de superficie y espacial (ionosférica)?', r: 'La onda directa va de antena a antena en línea de visión; la de superficie sigue la curvatura del suelo; la espacial cruza la atmósfera y puede ser reflejada por la ionosfera.' },
  { section: 'propagacion', p: '¿Qué es el fading o desvanecimiento?', r: 'La atenuación variable que sufre una señal con el paso del tiempo por múltiples causas de propagación.' },
  { section: 'propagacion', p: '¿Qué es la propagación por dispersión troposférica?', r: 'Un modo de propagación usado en VHF para contactos a larga distancia, aprovechando dispersión en la troposfera.' },
  { section: 'propagacion', p: '¿En qué consiste la propagación por rebote lunar (EME)?', r: 'Utilizar la Luna como reflector entre dos estaciones que la ven simultáneamente.' },
  { section: 'propagacion', p: '¿Qué es el meteor scatter?', r: 'Un modo de propagación que aprovecha la breve ionización producida por la entrada de meteoritos en la atmósfera.' },

  // --- Medidas e interferencias ---
  { section: 'medidas-interferencias', p: '¿Cómo se conecta un amperímetro y cómo un voltímetro?', r: 'El amperímetro se coloca en serie con el circuito; el voltímetro se coloca en paralelo con la carga que se quiere medir.' },
  { section: 'medidas-interferencias', p: '¿Qué instrumento agrupa habitualmente amperímetro, óhmetro y voltímetro?', r: 'El polímetro o tester.' },
  { section: 'medidas-interferencias', p: '¿Con qué se mide la potencia de una señal y con qué la ROE?', r: 'La potencia se mide con un vatímetro; la ROE con un medidor de estacionarias (medidor de ROE o SWR), colocado entre el transmisor y la antena (o el acoplador).' },
  { section: 'medidas-interferencias', p: '¿Con qué instrumento se mide la forma de una señal?', r: 'Con el osciloscopio (analógico o digital).' },
  { section: 'medidas-interferencias', p: '¿Qué suele causar que un equipo de sonido reproduzca la señal de un radioaficionado?', r: 'Que los cables de alimentación o los propios altavoces actúen como antenas involuntarias.' },
  { section: 'medidas-interferencias', p: '¿Con qué se pueden solucionar la mayoría de interferencias?', r: 'Con filtros, cables blindados o una buena toma de tierra.' },

  // --- Seguridad eléctrica ---
  { section: 'seguridad', p: '¿Qué hacer con los cables de antena si se acerca una tormenta eléctrica?', r: 'Desconectarlos (y si es posible sacarlos de la vivienda), además de desconectar las alimentaciones de los equipos.' },
  { section: 'seguridad', p: '¿Está permitido usar "ladrones" para conectar varios equipos?', r: 'No; deben usarse regletas múltiples.' },
  { section: 'seguridad', p: '¿Se pueden usar las tuberías de agua o gas como toma de tierra?', r: 'Nunca deben usarse conducciones de agua, gas, calefacción ni tomas de tierra de ascensores o pararrayos.' },
  { section: 'seguridad', p: '¿Qué hacer ante un accidente por descarga eléctrica?', r: 'Separar primero al accidentado del punto de la descarga usando medios aislantes si sigue habiendo tensión, cortar el suministro si es posible, y llamar al 112 si la descarga es importante.' },
]
