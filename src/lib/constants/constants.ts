import Icons from "#/components/Icons";

export const STATS_STRIP_ITEMS = [
	{
		id: 1,
		val: 1847,
		suf: "+",
		label: "Fermieri activi",
		sub: "din 32 de județe",
	},
	{
		id: 2,
		val: 142000,
		suf: "",
		label: "Bovine în evidență",
		sub: "identificate prin crotal",
	},
	{
		id: 3,
		val: 98.7,
		suf: "%",
		label: "Raportări acceptate",
		sub: "la ANSVSA din prima",
	},
	{
		id: 4,
		val: 47,
		suf: "h",
		label: "Timp economisit",
		sub: "pe lună, în medie",
	},
];

export const FEATURE_ITEMS: FeatureItem[] = [
	{
		label: "01 · Identificare",
		title: "Scanează crotalul. Gata.",
		body: "Camera telefonului citește codul RO oficial în 800 ms. Animalul e recunoscut instant — rasă, vârstă, istoric, tratamente. Funcționează offline, în grajd, la stână sau pe pășune.",
		icon: Icons.Scan,
		color: "#8DBF91",
		demo: "scan",
	},
	{
		label: "02 · Sănătatea cirezii",
		title: "Fiecare vacă, sub observație.",
		body: "Senzori opționali pe colier monitorizează temperatura, pașii și timpul de rumegat al fiecărui animal. Algoritmul detectează mastita, febra sau călduri cu 36h înainte să fie vizibile cu ochiul — înainte să pierzi producție sau un vițel.",
		icon: Icons.Heart,
		color: "#E86B5A",
		demo: "vitals",
	},
	{
		label: "03 · Reproducție",
		title: "Calendarul care nu uită nimic.",
		body: "Monte, însămânțări, diagnostice de gestație, fătări — totul înregistrat și corelat. Primești notificare cu 21 de zile înainte de fiecare eveniment important.",
		icon: Icons.Calendar,
		color: "#F4B840",
		demo: "calendar",
	},
	{
		label: "04 · Lapte",
		title: "Producție per animal, zilnic.",
		body: "Integrare cu sistemele de muls sau introducere manuală în 4 secunde. Tendințe, grafice, alerte când producția scade cu peste 12%.",
		icon: Icons.Milk,
		color: "#5BB8D4",
		demo: "milk",
	},
	{
		label: "05 · Conformitate",
		title: "Rapoarte ANSVSA cu un clic.",
		body: "Mișcări, tratamente, nașteri, decese — formularele se completează singure din datele din aplicație. Export PDF sau trimitere directă către ANSVSA și APIA.",
		icon: Icons.Shield,
		color: "#8DBF91",
		demo: "report",
	},
	{
		label: "06 · Parcele",
		title: "Pășune, rotație, GPS.",
		body: "Desenezi parcelele pe hartă, setezi rotația, urmărești unde e turma în timp real. Integrare cu blocurile fizice APIA pentru subvenții.",
		icon: Icons.Location,
		color: "#FAD070",
		demo: "map",
	},
];
