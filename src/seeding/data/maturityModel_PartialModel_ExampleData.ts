import { PartialModel } from "../../database/entities/partialModel";

export const maturityModel_partialModel_exampleData = [
    {
        name: "Strategie und Führung",
        weight: 0.17,
        subPartialModels: [
            {
                name: "Leitbild und strategische Ziele der Organisation",
                description:
                    "Das Unternehmens-Leitbild (Vision, Mission, Werte) und die strategische Ziele wurden unter Beteiligung der Mitarbeiter schriftlich formuliert und kommuniziert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Geplant",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                    {
                        name: "Realisiert",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                    {
                        name: "Evaluiert",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Digitale MedTech-Plattform-Ökosystem-Strategie",
                description:
                    "Unser Unternehmen besitzt eine kommunizierte, digitale Plattform-Ökosystem-Strategie für die Gesundheitswirt-schaft. Diese umfasst u.a. die Akteurs-Rolle in den Öko-systemen sowie die Positionierung der Organisation und des Leistungsangebots in der Gesundheitswirtschaft.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Geplant",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                    {
                        name: "Realisiert",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                    {
                        name: "Evaluiert",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Digitale Führungskultur",
                description:
                    "Im Führungsteam existiert ein gemeinsames Begriffs-verständnis für digitale Transformation, Plattform und Ökosystem. Das Management schafft Bewusstsein (Ökosystem-Mindset) und Begeisterung zur kooperativen Wertschöpfung (Co-Value-Creation) in digitalen Ökosystemstrukturen. Die Mitarbeiter werden in ihrer Plattform-Ökosystem-Kompetenz befähigt.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Geplant",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                    {
                        name: "Realisiert",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                    {
                        name: "Evaluiert",
                        weight: 0.3333,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ],
    } as PartialModel,
    {
        name: "Stakeholder und Schmerzen",
        weight: 0.17,
        subPartialModels: [
            {
                name: "Stakeholder-Gruppen und Ökosystem-Rollen",
                description:
                    "Die Marktsegment-Zielgruppe für unsere Produkte haben wir identifiziert (Nutzer, Zahlende, Entscheider). Ihre Ökosystem-Rolle (Konsument, Produzent, Innovationspartner, Betreiber) bzw. traditionelle Geschäftsbeziehung ist festgelegt.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: '"Schmerzen" und Zahlungsbereitschaft',
                description:
                    'Die lösungswerte Probleme bzw. "Schmerzen" der Zielgruppen haben wir verstanden, priorisiert und quantifiziert. Die Zahlungsbereitschaft für das Öko-system- bzw. Produkt-Wertversprechen ist verifiziert.',
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Berührungspunkte und Hürden",
                description:
                    "Abhängigkeit von der Stakeholder-Gruppe ist festgelegt in welchem Gesundheitssektor, in welcher Behand-lungs-, Leistungserstellungs- oder Wertschöpfungs-phase der Zugang zum Kunden erfolgt. Hierbei sind die Hürden des Stakeholders für den Zugang zum Plattform-Ökosystem identifiziert und minimiert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
    {
        name: "Gesundheitswirtschaft und Regulatorisches",
        weight: 0.11,
        subPartialModels: [
            {
                name: "Rolle der Organisation in Gesundheitswirtschaft",
                description:
                    "Die Rolle unseres Unternehmen in der Gesundheitswirt-schaft haben wir als Branchenstrategie definiert (z.B. MedTech-Hersteller, Leistungserbringer, Versicherer, Zulieferer, Händler, …).",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "MedTech-Produkt/Service-Strategie und Portfolio",
                description:
                    "Unser Produkt-/Service-Portfolio ist klassifiziert in Medizinprodukte, Gesundheitsprodukte, medizinische Leistungen und Nicht-Medizinprodukte bzw. Services. Eine Produkt-Roadmap für den Markteintritt existiert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "MedTech-Ökosystem-Radar (Umfeld, Trends)",
                description:
                    "Die Markt- bzw. Branchenentwicklung sowie technische Trends analysieren wir kontinuierlich und passen daraufhin regelmäßig unser Strategie an.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
    {
        name: "Marktangebot",
        weight: 0.06,
        subPartialModels: [
            {
                name: "Wertversprechen",
                description:
                    "Die Wertversprechen für die Konsumenten, Produzenten, Mehrwert- und Innovationspartner sind formuliert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Endnutzer-Services / Digitale Servitisierung",
                description:
                    "Die Endnutzer-Produkte bzw. Services sind definiert und implementiert. Die Eignung der Services für den Vertrieb bzw. Nutzung über ein Plattform-Ökosystem ist verifiziert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Innovations- und Infrastruktur-Services",
                description:
                    "Services für die Erstellung neuer Produkte bzw. die kooperative Wertschöpfung sowie Infrastrukturservices sind definiert und implementiert. Ferner sind je Nutzungsphase des Ökosystems die entsprechen Ökosystem-Services für die Teilnehmer festgelegt.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
    {
        name: "Plattform-Ökosystem-Kern",
        weight: 0.11,
        subPartialModels: [
            {
                name: "Zentrales Wertversprechen, digitaler Kern-Ökosystem-Service",
                description:
                    "Das zentrale Wertversprechen und der entsprechende digitale Kernservice des Plattform-Ökosystems sind formuliert und kommuniziert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Matching und Transaktionen ermöglichen",
                description:
                    "Mittels unseres Matching-Algorithmus ermöglichen wir eine unkomplizierte, sichere Abwicklung von Transaktionen bzw. Interaktionen. Vergleichbare Transaktionen außerhalb des Ökosystems (Off-Plattform-Transaktionen) werden verhindert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Netzwerkeffekte, Lösung des Henne-Ei-Problems",
                description:
                    'Direkte und indirekte Netzwerkeffekte für unser digitales Platform-Ökosystem haben wir identifiziert und fördern diese kontinuierlich. Eine Strategie zur Lösung des "Henne-Ei-Problems" wird umgesetzt.',
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
    {
        name: "Kooperative Wertschöpfung",
        weight: 0.11,
        subPartialModels: [
            {
                name: "Innovationsstrategie, Offenheit des Ökosystems",
                description:
                    "Eine Innovationsstrategie in Kooperation mit Ökosystempartnern ist definiert (Kooperations,- Netzwerkfähigkeit). Der Grad der Offenheit des Ökosystems für die Teilnahme Dritter ist festgelegt. Entsprechende Prozesse zur Aufnahme Dritter ins Ökosystem sind definiert.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Governance und Kuration",
                description:
                    "Regeln, Rechte und Konsequenzen (Governance) für den Beitritt ins Ökosystem, der gemeinsamen Wertschaffung, der Nutzungs- und Vermarktungs-Rechte sowie des Austritts aus dem Ökosystem sind formuliert. Entsprechende Prozesse und Werkzeuge zur Kuration, u.a. von Inhalten, existieren.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Ökosystem-Community",
                description:
                    'Der Aufbau und Betrieb einer Ökosystem-Community, z.B. zur Unterstützung der kooperativen Wertschöpfung oder als "Schwarmintelligenz", erfolgt.',
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
    {
        name: "Finanzen (Erlöse, Kosten, Rentabilität)",
        weight: 0.17,
        subPartialModels: [
            {
                name: "Erlösstrukturen und Art der Monetarisierung",
                description:
                    "Die Erlöse aus Mitgliedschaftsbeiträgen, Transaktions-provisionen und Produktverkäufen sind definiert. Die Art der zu erzielenden Erlöse (z.B. monetär, Kryptowäh-rung, Daten bzw. Erkenntnisse, Waren) ist festgelegt.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Reimbursement (Kostenerstattung)",
                description:
                    "Die Möglichkeiten der nationalen Kostenerstattung für unsere Produkte/Services z.B. durch Krankenversiche-rungen oder staatliche, nationale Programme, wurden auf Anwendbarkeit hin geprüft und fließen in die Erlöskalkulation ein.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Kostenstruktur",
                description:
                    "Die Kostenstruktur bzgl. Teilnehmer, Transaktionen und Entwicklung bzw. Betrieb sind festgelegt. Kosten für die Akquise von Neukunden, Kundenbindung und Durchführung der Transaktionen sowie die Fixkosten sind ermittelt.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
    {
        name: "Technische Plattform, Wertbereitstellung",
        weight: 0.11,
        subPartialModels: [
            {
                name: "Technische Infrastruktur, IT-Infrastruktur",
                description:
                    "Es existiert eine aktuelle IT-Infrastruktur als Basis digitaler Prozesse wie z.B. Auftragsabwicklung, Produkt-/Service-Entwicklung und zur Kundenbindung.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Grenzschichten-Ressourcen (API, Schnittstellen)",
                description:
                    "Für den Zugang Dritter zu unserem digitalen Plattform-Ökosystem bieten wir entsprechende Schnittstellen (Web-Applikationen, APIs, Web-Services) an.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "UX und Performance der technischen Plattform",
                description:
                    "Ein positives Plattform-Ökosystem-Nutzererlebnis über die gesamte Kundenreise hinweg besitzt höchste Priorität. Hierzu zählt u.a. eine hohe technische Performance und der Ausschluss von Fehlbedienungen im Gesundheitskontext.",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
    {
        name: "Lernfähigkeit und Umsetzung",
        weight: 0.6,
        subPartialModels: [
            {
                name: "Lernfähigkeit aus Daten / Metriken",
                description:
                    'Unsere Organisation verfügt über datenbasierte Fähigkeiten, Strukturen, und Prozesse einer lernfähigen Organisation. Ein entsprechender "Bauen-Messen-Lernen"-Zyklus, Metriken und Kontrollstrukturen sind implementiert. Hierzu zählen frühzeitiges Einholen von Stakeholder-Feedback, Retrospektiven und ein lernender Austausch im Ökosystem.',
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Digitale Plattform-Ökosystem-Roadmap / MVPEs",
                description:
                    "Abgeleitet aus unserer Unternehmensstrategie, unseren Ökosystem-Zielen und einer Gap-Analyse existiert ein Handlungspfad mit einem priorisierter Maßnahmen-katalog, Plattform-Ökosystem-Roadmap",
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
            {
                name: "Digital Business Evaluation",
                description:
                    'Für die Verifizierung der Annahmen und zur Risiko-minimierung des Business Modells, z.B. hinsichtlich der "Schmerzen" der Stakeholder", werden u.a. digitale "Business Experimente", z.B. Landing Pages, durch-geführt.',
                weight: 0.3333,
                evaluationMetrics: [
                    {
                        name: "Aussage wird erfüllt",
                        weight: 1,
                        maxValue: 5,
                        minValue: 1,
                    },
                ],
            } as PartialModel,
        ] as PartialModel[],
    } as PartialModel,
];
