import { useState } from "react";
import Icons from "../Icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQS: FaqItem[] = [
	{
		id: "offline",
		question: "Funcționează și fără internet în grajd sau pe pășune?",
		answer:
			"Da. Aplicația mobilă salvează tot local când nu ai semnal — scanări, tratamente, mutări. Când prinde din nou 4G sau Wi-Fi, sincronizează automat. Testată pe 3G la 1.400 m altitudine în Munții Apuseni.",
	},
	{
		id: "ansvsa",
		question: "Cum mă ajută cu inspecția ANSVSA?",
		answer:
			"Toate datele introduse în aplicație se transformă automat în formularele oficiale ANSVSA (Formular 1, 2, 3) și APIA. Exportul e PDF semnat electronic, acceptat de inspectori. Avem o rubrică dedicată „Mod inspecție care afișează totul în formatul cerut.",
	},
	{
		id: "crotali",
		question: "Ce fac cu crotalii pe care-i am deja?",
		answer:
			"Îi scanezi. Aplicația recunoaște formatul oficial RO și importă automat ce există în baza ANSVSA dacă ai autorizare. Pentru ferme cu zeci de ani de istoric, facem migrare gratuită din registre pe hârtie sau Excel.",
	},
	{
		id: "invatare",
		question: "Cât durează să mă învăț?",
		answer:
			"Media e 40 de minute pentru funcțiile de bază. Avem ghiduri video în română, filmate chiar la ferme partenere. Primele 30 de zile ai un consultant alocat care te sună dacă ai nevoie.",
	},
	{
		id: "senzori",
		question: "Senzorii pentru sănătate sunt obligatorii?",
		answer:
			"Nu. Aplicația funcționează perfect doar cu introducere manuală. Senzorii (coliere) adaugă monitorizare 24/7 a temperaturii și rumegatului, dar sunt opționali — €39 per animal, o singură dată.",
	},
	{
		id: "securitate",
		question: "Datele mele sunt în siguranță?",
		answer:
			"Da. Serverele sunt în București și Cluj (operate de un furnizor certificat ISO 27001). Totul e criptat în tranzit și în repaus. Tu rămâi proprietarul datelor — poți exporta sau șterge oricând.",
	},
];

// ─── FaqRow ───────────────────────────────────────────────────────────────────

interface FaqRowProps {
	item: FaqItem;
	isOpen: boolean;
	onToggle: () => void;
}

function FaqRow({ item, isOpen, onToggle }: FaqRowProps) {
	return (
		<div className={`faq-item glass ${isOpen ? "on" : ""}`}>
			<button
				type="button"
				className="faq-q"
				onClick={onToggle}
				aria-expanded={isOpen}
				aria-controls={`faq-answer-${item.id}`}
				style={{
					width: "100%",
					background: "none",
					border: "none",
					cursor: "pointer",
					textAlign: "left",
					color: "inherit",
				}}
			>
				<span>{item.question}</span>
				<div className="faq-icon" aria-hidden>
					<Icons.Plus width="14" height="14" />
				</div>
			</button>
			<section
				id={`faq-answer-${item.id}`}
				className="faq-a-wrap"
				aria-labelledby={`faq-question-${item.id}`}
			>
				<div className="faq-a">{item.answer}</div>
			</section>
		</div>
	);
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export function FAQ() {
	const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

	function handleToggle(id: string) {
		setOpenId((prev) => (prev === id ? null : id));
	}

	return (
		<section className="faq" id="faq">
			<div className="container faq-container">
				<div>
					<span className="t-label" style={{ color: "#8DBF91" }}>
						Întrebări frecvente
					</span>
					<h2 className="t-h1" style={{ marginTop: 12, marginBottom: 40 }}>
						Răspunsuri directe,{" "}
						<span style={{ color: "#F4B840", fontStyle: "italic" }}>
							fără mărunțiș.
						</span>
					</h2>
				</div>

				<div className="faq-list">
					{FAQS.map((faq) => (
						<FaqRow
							key={faq.id}
							item={faq}
							isOpen={openId === faq.id}
							onToggle={() => handleToggle(faq.id)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
