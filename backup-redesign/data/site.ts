export const site = {
  club: 'Club Social y Deportivo 25 de Mayo',
  name: 'Natatorio Martínez',
  shortName: 'Natatorio 25',
  founded: 1905,
  address: 'Rodríguez Peña 941, Martínez (B1640HBS)',
  city: 'Martínez, San Isidro',
  province: 'Provincia de Buenos Aires',
  phoneDisplay: '(011) 4733-3719',
  phoneAltDisplay: '(011) 4792-7007',
  phoneHref: 'tel:+541147333719',
  whatsapp: '5491147333719',
  whatsappText:
    'Hola! Quisiera consultar por las clases y horarios del Natatorio del Club 25 de Mayo.',
  email: 'natatorio@club25demayo.com.ar',
  instagram: 'https://www.instagram.com/25demayooficial/',
  mapsUrl:
    'https://maps.google.com/?q=Club+Social+y+Deportivo+25+de+Mayo+Rodriguez+Pena+941+Martinez',
  officeHours: [
    { days: 'Lunes a viernes', hours: '08:00 a 21:30' },
    { days: 'Sábados', hours: '08:30 a 13:30' },
  ],
} as const

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappText,
)}`

export const navItems = [
  { id: 'pileta', label: 'La pileta', to: '/#pileta' },
  { id: 'programas', label: 'Programas', to: '/#programas' },
  { id: 'horarios', label: 'Horarios', to: '/#horarios' },
  { id: 'instalaciones', label: 'Instalaciones', to: '/#instalaciones' },
  { id: 'requisitos', label: 'Requisitos', to: '/#requisitos' },
  { id: 'contacto', label: 'Contacto', to: '/#contacto' },
] as const

export const stats = [
  { value: '30', suffix: '°C', label: 'Agua climatizada todo el año' },
  { value: '25', suffix: 'm', label: 'Pileta con andariveles' },
  { value: '120', suffix: '+', label: 'Años de historia en Martínez' },
  { value: '5', suffix: '', label: 'Programas acuáticos' },
] as const

export const poolQuality = [
  {
    label: 'Temperatura del agua',
    value: '29–31 °C',
    detail: 'Climatización constante los 365 días.',
  },
  {
    label: 'pH controlado',
    value: '7,2–7,6',
    detail: 'Medición y ajuste diario.',
  },
  {
    label: 'Cloro libre',
    value: '1,0–1,5 ppm',
    detail: 'Desinfección y recambio continuo.',
  },
  {
    label: 'Supervisión',
    value: 'Guardavidas',
    detail: 'Matriculados en cada turno.',
  },
] as const

export const faqs = [
  {
    question: '¿Desde qué edad pueden empezar las clases?',
    answer:
      'La escuela de natación infantil recibe chicos desde los 4 años. Para bebés y maternales consultá por la matronatación y los grupos disponibles según la edad y la madurez de cada chico.',
  },
  {
    question: '¿Necesito saber nadar para anotarme en adultos?',
    answer:
      'No. Hay grupos de iniciación pensados para adultos que nunca nadaron o que quieren perder el miedo al agua, además de niveles de perfeccionamiento y entrenamiento.',
  },
  {
    question: '¿Cómo es el apto médico?',
    answer:
      'Es obligatorio para todos los alumnos. El club ofrece revisación médica en sede en días determinados; también podés presentar un certificado de un profesional externo. La secretaría confirma la vigencia y el formato antes de la inscripción.',
  },
  {
    question: '¿Qué incluye la cuota y cómo se abona?',
    answer:
      'La cuota incluye el acceso a la pileta en el horario asignado y el acompañamiento docente. Los aranceles, descuentos por hermanos y promociones se consultan en secretaría o por WhatsApp, ya que se actualizan por temporada.',
  },
  {
    question: '¿Hay pileta libre sin clase?',
    answer:
      'Sí. La pileta libre funciona por turnos con andariveles separados por ritmo: suave, medio y rápido. Se puede abonar por mes, por clase o con cuponeras, según disponibilidad.',
  },
  {
    question: '¿Dónde queda y cómo llego?',
    answer:
      'Estamos en Rodríguez Peña 941, Martínez, a pocas cuadras de Av. Santa Fe y del centro comercial. Se puede llegar en tren (línea Mitre, estación Martínez), colectivo o auto; hay estacionamiento en la zona.',
  },
] as const
