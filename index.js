const units = {
    1: {
    title: "Sein & Haben",
    color: "indigo",
    desc: "Die Grundlagen: Sein und Haben.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-indigo-100 text-indigo-800">
                                <tr><th>Person</th><th>SEIN (To be)</th><th>HABEN (To have)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Ich</td><td>bin</td><td>habe</td></tr>
                                <tr><td class="font-bold text-gray-400">Du</td><td>bist</td><td>hast</td></tr>
                                <tr><td class="font-bold text-gray-400">Er/Sie/Es</td><td>ist</td><td>hat</td></tr>
                                <tr><td class="font-bold text-gray-400">Wir</td><td>sind</td><td>haben</td></tr>
                                <tr><td class="font-bold text-gray-400">Ihr</td><td>seid</td><td>habt</td></tr>
                                <tr><td class="font-bold text-gray-400">Sie/sie</td><td>sind</td><td>haben</td></tr>
                            </tbody>
                        </table>
                        <div class="visual-card bg-indigo-50 border-indigo-200">
                            <span class="visual-emoji">🇩🇪</span>
                            <span class="visual-title text-indigo-700">DIE BASIS</span>
                            <span class="visual-desc">Das Fundament der Sprache.</span>
                            <em class="block text-xs mt-2 text-indigo-600">Achtung: 'Ihr seid' vs 'Sie sind'.</em>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Ich (sein) müde.", a: "bin", h: "Sein", e: "Ich bin." },
{ t: 1, q: "Du (haben) Hunger.", a: "hast", h: "Haben", e: "Du hast." },
{ t: 1, q: "Er (sein) mein Bruder.", a: "ist", h: "Sein", e: "Er ist." },
{ t: 1, q: "Wir (sein) glücklich.", a: "sind", h: "Sein", e: "Wir sind." },
{ t: 1, q: "Ihr (sein) spät.", a: "seid", h: "Sein (Ihr)", e: "Ihr seid. Nicht verwechseln mit 'sind'." },
{ t: 1, q: "Sie (haben) ein Auto.", a: "haben", h: "Haben (Plural)", e: "Sie haben." },
{ t: 3, q: "___ bin Lehrer.", a: "ich", h: "Pronomen", e: "'Bin' passt nur zu Ich." },
{ t: 2, q: "Bist du zu Hause?", a: "Ja, ich bin zu Hause.", h: "Antworte mit 'Ich'", req: 'pos', e: "Frage 'Du bist?' -> Antwort 'Ich bin'." }
    ]},
    2: {
    title: "Präsens (Regelmäßig)",
    color: "emerald",
    desc: "Verben auf -EN.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-emerald-100 text-emerald-800">
                                <tr><th>Person</th><th>Endung</th><th>Beispiel (Mach-en)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Ich</td><td>-e</td><td>mach<strong>e</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Du</td><td>-st</td><td>mach<strong>st</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Er/Sie/Es</td><td>-t</td><td>mach<strong>t</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Wir</td><td>-en</td><td>mach<strong>en</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Ihr</td><td>-t</td><td>mach<strong>t</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Sie/sie</td><td>-en</td><td>mach<strong>en</strong></td></tr>
                            </tbody>
                        </table>
                        <p class="text-sm">Fast alle Verben folgen diesem Muster: Kommen, Wohnen, Gehen, Trinken...</p>
                    </div>
                `,
    drills: [
{ t: 1, q: "Ich (machen) Pizza.", a: "mache", h: "Endung -e", e: "Ich mache." },
{ t: 1, q: "Du (kommen) aus Spanien.", a: "kommst", h: "Endung -st", e: "Du kommst." },
{ t: 1, q: "Er (wohnen) in Berlin.", a: "wohnt", h: "Endung -t", e: "Er wohnt." },
{ t: 1, q: "Wir (gehen) ins Kino.", a: "gehen", h: "Infinitiv", e: "Wir gehen." },
{ t: 1, q: "Ihr (trinken) Wasser.", a: "trinkt", h: "Endung -t", e: "Ihr trinkt." },
{ t: 3, q: "Woher ___ du?", a: "kommst", h: "Verb Kommen", e: "Bei 'Du' ist die Endung -st." }
    ]},
    3: {
    title: "Artikel (Der/Die/Das)",
    color: "red",
    desc: "Genus der Substantive.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-red-100 text-red-800">
                                <tr><th>Genus</th><th>Bestimmt (Der)</th><th>Unbestimmt (Ein)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">Maskulin</td><td>Der Mann</td><td>Ein Mann</td></tr>
                                <tr><td class="font-bold">Feminin</td><td>Die Frau</td><td>Eine Frau</td></tr>
                                <tr><td class="font-bold">Neutrum</td><td>Das Kind</td><td>Ein Kind</td></tr>
                                <tr><td class="font-bold">Plural</td><td>Die Kinder</td><td>- Kinder</td></tr>
                            </tbody>
                        </table>
                        <div class="visual-card bg-red-50 border-red-200">
                            <span class="visual-emoji">🦁🌹🏠</span>
                            <span class="visual-title text-red-700">AUSWENDIG LERNEN</span>
                            <span class="visual-desc">Lerne den Artikel immer mit dem Wort zusammen.</span>
                            <em class="block text-xs mt-2">Der Tisch, Die Sonne, Das Auto.</em>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "___ (der) Vater.", a: "der", h: "Maskulin", e: "Vater ist Maskulin -> Der." },
{ t: 3, q: "___ (die) Mutter.", a: "die", h: "Feminin", e: "Mutter ist Feminin -> Die." },
{ t: 3, q: "___ (das) Auto.", a: "das", h: "Neutrum", e: "Auto ist Neutrum -> Das." },
{ t: 3, q: "___ (eine) Katze.", a: "eine", h: "Unbestimmt Feminin", e: "Die Katze -> Eine Katze." },
{ t: 3, q: "___ (ein) Hund.", a: "ein", h: "Unbestimmt Maskulin", e: "Der Hund -> Ein Hund." }
    ]},
    4: {
    title: "Akkusativ (Objekt)",
    color: "orange",
    desc: "Der wird zu DEN.",
    explanation: `
                    <div class="space-y-4">
                        <p class="text-sm bg-orange-50 p-2 rounded border border-orange-200">Der Akkusativ markiert das direkte Objekt (Wen oder was?). <br><strong>Nur Maskulin ändert sich!</strong></p>
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-orange-100 text-orange-800">
                                <tr><th></th><th>Nominativ (Subjekt)</th><th>Akkusativ (Objekt)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">Masc</td><td>Der / Ein</td><td><strong>Den / Einen</strong></td></tr>
                                <tr><td class="font-bold">Fem</td><td>Die / Eine</td><td>Die / Eine (=)</td></tr>
                                <tr><td class="font-bold">Neu</td><td>Das / Ein</td><td>Das / Ein (=)</td></tr>
                                <tr><td class="font-bold">Pl</td><td>Die</td><td>Die (=)</td></tr>
                            </tbody>
                        </table>
                         <div class="visual-card bg-orange-50 border-orange-200">
                            <span class="visual-title text-orange-700">DER ➡ DEN</span>
                            <span class="visual-desc">Ich habe <strong>einen</strong> Bruder.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Ich habe ___ (ein) Hund.", a: "einen", h: "Masc Akkusativ", e: "Hund ist Der. Als Objekt (Ich habe...) -> Einen." },
{ t: 3, q: "Ich esse ___ (die) Pizza.", a: "die", h: "Fem Akkusativ", e: "Feminin ändert sich nicht. Die Pizza." },
{ t: 3, q: "Er kauft ___ (der) Tisch.", a: "den", h: "Masc Akkusativ", e: "Tisch ist Der. Akkusativ -> Den." },
{ t: 3, q: "Wir sehen ___ (ein) Film.", a: "einen", h: "Masc Akkusativ", e: "Der Film -> Einen Film." },
{ t: 2, q: "Hast du einen Stift?", a: "Ja, ich habe einen Stift.", h: "Wiederhole Akkusativ", req: 'pos', e: "Behalte 'einen Stift' bei." }
    ]},
    5: {
    title: "Modalverben",
    color: "blue",
    desc: "Können, Wollen, Müssen.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-blue-100 text-blue-800">
                                <tr><th></th><th>KÖNNEN</th><th>WOLLEN</th><th>MÜSSEN</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Ich</td><td>k<strong>a</strong>nn</td><td>w<strong>i</strong>ll</td><td>m<strong>u</strong>ss</td></tr>
                                <tr><td class="font-bold text-gray-400">Du</td><td>k<strong>a</strong>nnst</td><td>w<strong>i</strong>llst</td><td>m<strong>u</strong>sst</td></tr>
                                <tr><td class="font-bold text-gray-400">Er</td><td>k<strong>a</strong>nn</td><td>w<strong>i</strong>ll</td><td>m<strong>u</strong>ss</td></tr>
                                <tr><td class="font-bold text-gray-400">Wir</td><td>können</td><td>wollen</td><td>müssen</td></tr>
                            </tbody>
                        </table>
                        <p class="text-sm"><strong>Goldene Regel:</strong> Das zweite Verb steht im Infinitiv am ENDE.</p>
                        <div class="visual-card bg-blue-50 border-blue-200 text-sm">
                            <em>Ich <strong>will</strong> Pizza <strong>essen</strong>.</em>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Ich (können) schwimmen.", a: "kann", h: "Vokalwechsel", e: "Ich kann (Vokal a)." },
{ t: 1, q: "Du (wollen) spielen.", a: "willst", h: "Vokalwechsel", e: "Du willst (Vokal i)." },
{ t: 1, q: "Er (müssen) arbeiten.", a: "muss", h: "Vokalwechsel", e: "Er muss (kein ü)." },
{ t: 3, q: "Wir ___ Deutsch lernen.", a: "wollen", h: "Wollen", e: "Wir wollen (regelmäßig)." },
{ t: 2, q: "Kannst du kommen?", a: "Ja, ich kann kommen.", h: "Modal + Infinitiv", req: 'pos', e: "Du kannst -> Ich kann." }
    ]},
    6: {
    title: "Verb Wissen",
    color: "purple",
    desc: "Fakten wissen.",
    explanation: `
                    <div class="space-y-4">
                        <p class="text-sm">Das Verb 'Wissen' ist unregelmäßig, ähnlich wie Modalverben.</p>
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-purple-100 text-purple-800">
                                <tr><th>Person</th><th>WISSEN</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Ich</td><td>w<strong>ei</strong>ß</td></tr>
                                <tr><td class="font-bold text-gray-400">Du</td><td>w<strong>ei</strong>ß</td></tr>
                                <tr><td class="font-bold text-gray-400">Er/Sie</td><td>w<strong>ei</strong>ß</td></tr>
                                <tr><td class="font-bold text-gray-400">Wir</td><td>wissen</td></tr>
                            </tbody>
                        </table>
                        <div class="visual-card bg-purple-50 border-purple-200">
                            <span class="visual-emoji">🧠</span>
                            <span class="visual-title text-purple-700">ICH WEISS ES NICHT</span>
                            <span class="visual-desc">Ein sehr nützlicher Satz!</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Ich (wissen) das nicht.", a: "weiß", h: "Unregelmäßig", e: "Ich weiß (mit Eszett ß)." },
{ t: 1, q: "Du (wissen) alles.", a: "weißt", h: "Unregelmäßig", e: "Du weißt." },
{ t: 3, q: "___ weiß es.", a: "er", h: "Pronomen", e: "Er/Sie weiß." },
{ t: 2, q: "Weißt du das?", a: "Nein, ich weiß das nicht.", h: "Verneinung", req: 'neg', e: "Du weißt -> Ich weiß." }
    ]},
    7: {
    title: "Trennbare Verben",
    color: "pink",
    desc: "Anrufen, Aufstehen...",
    explanation: `
                    <div class="space-y-4">
                        <p class="text-sm">Manche Verben haben ein Präfix, das sich trennt und ans <strong>ENDE</strong> wandert.</p>
                        <ul class="list-disc pl-4 text-sm space-y-2 mb-4">
                            <li><strong>An</strong>rufen -> Ich rufe ... <strong>an</strong>.</li>
                            <li><strong>Auf</strong>stehen -> Ich stehe ... <strong>auf</strong>.</li>
                            <li><strong>Ein</strong>kaufen -> Ich kaufe ... <strong>ein</strong>.</li>
                        </ul>
                        <div class="visual-card bg-pink-50 border-pink-200">
                            <span class="visual-title text-pink-700">DIE KLAMMER</span>
                            <span class="visual-desc">Ich <strong>rufe</strong> meine Mutter <strong>an</strong>.</span>
                            <em class="block text-xs mt-1">Das Präfix schließt den Satz ab.</em>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Ich rufe dich ___ (anrufen).", a: "an", h: "Präfix am Ende", e: "Anrufen -> An am Ende." },
{ t: 3, q: "Du stehst früh ___ (aufstehen).", a: "auf", h: "Präfix am Ende", e: "Aufstehen -> Auf am Ende." },
{ t: 3, q: "Wir kaufen im Supermarkt ___ (einkaufen).", a: "ein", h: "Präfix am Ende", e: "Einkaufen -> Ein am Ende." },
{ t: 1, q: "Ich (aufstehen) um 8.", a: "stehe auf", h: "Schreibe das Verb getrennt", e: "Ich stehe ... auf." }
    ]},
    8: {
    title: "Perfekt (Vergangenheit)",
    color: "yellow",
    desc: "Haben/Sein + Ge...t",
    explanation: `
                    <div class="space-y-4">
                        <p class="text-sm">Das gesprochene Vergangenheit (Perfekt) besteht aus Hilfsverb und Partizip am Ende.</p>
                         <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-yellow-100 text-yellow-800">
                                <tr><th>Hilfsverb</th><th>Partizip (Regelmäßig)</th><th>Partizip (Unregelmäßig)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td>Haben (Normal)</td><td>Ge-mach-t</td><td>Ge-gess-en</td></tr>
                                <tr><td>Sein (Bewegung)</td><td>Ge-reis-t</td><td>Ge-gang-en</td></tr>
                            </tbody>
                        </table>
                        <div class="visual-card bg-yellow-50 border-yellow-200">
                            <span class="visual-desc">Ich <strong>habe</strong> Pizza <strong>gegessen</strong>.</span>
                            <span class="visual-desc block mt-2">Ich <strong>bin</strong> nach Berlin <strong>gefahren</strong>.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Ich (machen - perfekt) das.", a: "habe gemacht", h: "Haben + ge-t", e: "Ich habe ... gemacht." },
{ t: 1, q: "Er (kaufen - perfekt) ein Auto.", a: "hat gekauft", h: "Haben + ge-t", e: "Er hat ... gekauft." },
{ t: 1, q: "Wir (fahren - perfekt) nach Bern.", a: "sind gefahren", h: "Sein (Bewegung) + ge-en", e: "Bewegung -> Sind gefahren." },
{ t: 3, q: "Ich habe Fußball ___ (spielen).", a: "gespielt", h: "Partizip", e: "Spielen -> Gespielt." },
{ t: 2, q: "Hast du gelernt?", a: "Ja, ich habe gelernt.", h: "Antwort", req: 'pos', e: "Du hast -> Ich habe." }
    ]},
    9: {
    title: "Dativ (Empfänger)",
    color: "teal",
    desc: "Dem, Der, Denen.",
    explanation: `
                    <div class="space-y-4">
                        <p class="text-sm">Der Dativ markiert das indirekte Objekt (Wem gebe ich es?). Auch nach bestimmten Präpositionen.</p>
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-teal-100 text-teal-800">
                                <tr><th></th><th>Nominativ</th><th>Dativ</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">Masc</td><td>Der</td><td><strong>Dem</strong></td></tr>
                                <tr><td class="font-bold">Fem</td><td>Die</td><td><strong>Der</strong> (Achtung!)</td></tr>
                                <tr><td class="font-bold">Neu</td><td>Das</td><td><strong>Dem</strong></td></tr>
                                <tr><td class="font-bold">Pl</td><td>Die</td><td><strong>Den</strong> ...n</td></tr>
                            </tbody>
                        </table>
                        <div class="visual-card bg-teal-50 border-teal-200">
                            <span class="visual-desc">Ich helfe <strong>dem</strong> Mann.</span>
                            <span class="visual-desc block mt-1">Ich danke <strong>der</strong> Frau.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Ich helfe ___ (der) Mann.", a: "dem", h: "Dativ Masc", e: "Helfen verlangt Dativ. Der -> Dem." },
{ t: 3, q: "Ich gebe ___ (die) Frau ein Buch.", a: "der", h: "Dativ Fem", e: "Geben (Wem?) -> Der Frau. Die -> Der." },
{ t: 3, q: "Das Auto gehört ___ (der) Vater.", a: "dem", h: "Dativ Masc", e: "Gehören verlangt Dativ." },
{ t: 3, q: "Ich schenke ___ (das) Kind einen Ball.", a: "dem", h: "Dativ Neutrum", e: "Das Kind -> Dem Kind." }
    ]},
    10: {
    title: "Präpositionen",
    color: "cyan",
    desc: "Ort und Zeit (In, Aus, Mit...).",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-cyan-100 text-cyan-800"><tr><th>Prep</th><th>Fall</th><th>Beispiel</th></tr></thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">Mit</td><td>+ Dativ</td><td>Mit mir, Mit dem Auto</td></tr>
                                <tr><td class="font-bold">Aus</td><td>+ Dativ</td><td>Aus Spanien (Herkunft)</td></tr>
                                <tr><td class="font-bold">Für</td><td>+ Akkusativ</td><td>Für dich</td></tr>
                                <tr><td class="font-bold">Ohne</td><td>+ Akkusativ</td><td>Ohne dich</td></tr>
                                <tr><td class="font-bold">In</td><td>+ Akk/Dat</td><td>In der Schule (Wo?)</td></tr>
                            </tbody>
                        </table>
                         <div class="visual-card bg-cyan-50 border-cyan-200">
                            <span class="visual-desc">Ich fahre <strong>mit dem</strong> Auto.</span>
                            <span class="visual-desc block mt-1">Das ist <strong>für dich</strong>.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Ich komme ___ Spanien.", a: "aus", h: "Herkunft", e: "Aus Spanien." },
{ t: 3, q: "Ich fahre ___ dem Auto.", a: "mit", h: "Mittel", e: "Mit dem Auto (Dativ)." },
{ t: 3, q: "Das ist ___ (für) dich.", a: "für", h: "Empfänger", e: "Für verlangt Akkusativ." },
{ t: 3, q: "Ich gehe ___ (ohne) dich.", a: "ohne", h: "Ausschluss", e: "Ohne verlangt Akkusativ." }
    ]},
    11: {
    title: "Possessivartikel",
    color: "fuchsia",
    desc: "Mein, Dein, Sein...",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-fuchsia-100 text-fuchsia-800">
                                <tr><th>Ich</th><th>Du</th><th>Er</th><th>Sie</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td>Mein</td><td>Dein</td><td>Sein</td><td>Ihr</td></tr>
                            </tbody>
                        </table>
                        <p class="text-sm">Sie funktionieren wie "Ein/Eine". Wenn das Wort feminin ist, füge ein <strong>-e</strong> hinzu.</p>
                        <div class="visual-card bg-fuchsia-50 border-fuchsia-200">
                            <span class="visual-desc">Das ist <strong>mein</strong> Vater.</span>
                            <span class="visual-desc block mt-1">Das ist <strong>meine</strong> Mutter.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Das ist ___ (ich) Bruder.", a: "mein", h: "Masc", e: "Bruder ist Maskulin -> Mein." },
{ t: 3, q: "Das ist ___ (ich) Schwester.", a: "meine", h: "Fem (-e)", e: "Schwester ist Feminin -> Meine." },
{ t: 3, q: "Das ist ___ (er) Haus.", a: "sein", h: "Neutrum", e: "Haus ist Neutrum. Sein Haus." },
{ t: 3, q: "Das ist ___ (sie) Katze.", a: "ihre", h: "Fem", e: "Ihre Katze (-e)." }
    ]},
    12: {
    title: "Adjektive (Basis)",
    color: "lime",
    desc: "Predikativ vs Attributiv.",
    explanation: `
                    <div class="space-y-4">
                        <h4 class="text-sm">1. Prädikativ (Nach 'Sein')</h4>
                        <p class="text-sm mb-2">Ändert sich nicht! <em>Das Auto ist <strong>rot</strong>.</em></p>
                        
                        <h4 class="text-sm">2. Attributiv (Vor dem Nomen)</h4>
                        <p class="text-sm">Passt sich an. <br>Ex: <em>Das <strong>rote</strong> Auto.</em></p>
                        
                        <div class="visual-card bg-lime-50 border-lime-200">
                            <span class="visual-desc">Der Mann ist <strong>alt</strong>.</span>
                            <span class="visual-desc block mt-1">Der <strong>alte</strong> Mann.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 2, q: "Ist der Tisch klein?", a: "Ja, der Tisch ist klein.", h: "Prädikativ (Bleibt gleich)", req: 'pos', e: "Adjektive nach 'ist' verändern sich nicht." },
{ t: 3, q: "Das ist ein ___ (gut) Buch.", a: "gutes", h: "Neutrum (Das)", e: "Ein gutes Buch (Markiert das Neutrum)." },
{ t: 3, q: "Das ist eine ___ (gut) Idee.", a: "gute", h: "Fem (Die)", e: "Eine gute Idee." },
{ t: 3, q: "Das ist ein ___ (gut) Tag.", a: "guter", h: "Masc (Der)", e: "Ein guter Tag (Markiert Maskulin)." }
    ]},
    13: {
    title: "Satzstellung",
    color: "gray",
    desc: "Verb auf Position 2.",
    explanation: `
                    <div class="space-y-4">
                        <p class="text-sm">In einem Hauptsatz steht das Verb <strong>IMMER</strong> an zweiter Stelle.</p>
                        <div class="bg-gray-100 p-3 rounded text-sm font-mono mb-2">
                            1. [Ich] <strong>wohne</strong> in Berlin.<br>
                            1. [In Berlin] <strong>wohne</strong> [ich].
                        </div>
                        <p class="text-sm">Wenn du mit Zeit oder Ort beginnst, tauschen Subjekt und Verb den Platz.</p>
                        <div class="visual-card bg-gray-50 border-gray-200">
                            <span class="visual-emoji">🥈</span>
                            <span class="visual-title text-gray-700">VERB = POS 2</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 2, q: "Ich gehe heute ins Kino. (Starte mit: Heute...)", a: "Heute gehe ich ins Kino.", h: "Inversion", req: 'pos', e: "Heute (1) Gehe (2) Ich (3)." },
{ t: 2, q: "Wir essen jetzt. (Starte mit: Jetzt...)", a: "Jetzt essen wir.", h: "Inversion", req: 'pos', e: "Jetzt (1) Essen (2) Wir (3)." },
{ t: 3, q: "Morgen ___ (machen) ich Sport.", a: "mache", h: "Position 2", e: "Morgen (1) Mache (2) Ich (3)." }
    ]},
    14: {
    title: "Personalpronomen",
    color: "amber",
    desc: "Mich, Dich, Mir, Dir.",
    explanation: `
                    <div class="space-y-4">
                         <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-amber-100 text-amber-800">
                                <tr><th>Nom</th><th>Akkusativ (Direkt)</th><th>Dativ (Indirekt)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td>Ich</td><td>Mich</td><td>Mir</td></tr>
                                <tr><td>Du</td><td>Dich</td><td>Dir</td></tr>
                                <tr><td>Er</td><td>Ihn</td><td>Ihm</td></tr>
                            </tbody>
                        </table>
                        <div class="visual-card bg-amber-50 border-amber-200">
                            <span class="visual-desc">Er liebt <strong>mich</strong>. (Akkusativ)</span>
                            <span class="visual-desc block mt-1">Er hilft <strong>mir</strong>. (Dativ)</span>
                            <em class="block text-xs mt-2 text-amber-600">Wie geht es <strong>dir</strong>?</em>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Ich liebe ___ (du).", a: "dich", h: "Akkusativ", e: "Lieben verlangt Akkusativ." },
{ t: 3, q: "Kannst du ___ (ich) helfen?", a: "mir", h: "Dativ", e: "Helfen verlangt Dativ (Mir)." },
{ t: 3, q: "Ich sehe ___ (er).", a: "ihn", h: "Akkusativ", e: "Sehen -> Ihn." },
{ t: 3, q: "Das Buch gefällt ___ (ich).", a: "mir", h: "Dativ", e: "Gefallen verlangt Dativ." }
    ]},
    15: {
    title: "Futur I (Werden)",
    color: "indigo",
    desc: "Werden + Infinitiv.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-indigo-100 text-indigo-800">
                                <tr><th>Person</th><th>Werden</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td>Ich</td><td>werde</td></tr>
                                <tr><td>Du</td><td>wirst</td></tr>
                                <tr><td>Er</td><td>wird</td></tr>
                                <tr><td>Wir</td><td>werden</td></tr>
                            </tbody>
                        </table>
                        <p class="text-sm">Wie bei Modalverben: Werden konjugiert + Infinitiv am ENDE.</p>
                        <div class="visual-card bg-indigo-50 border-indigo-200">
                            <span class="visual-desc">Ich <strong>werde</strong> morgen <strong>lernen</strong>.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Ich (werden) gehen.", a: "werde", h: "Futur", e: "Ich werde." },
{ t: 1, q: "Du (werden) sehen.", a: "wirst", h: "Unregelmäßig", e: "Du wirst." },
{ t: 1, q: "Es (werden) regnen.", a: "wird", h: "Unregelmäßig", e: "Es wird." },
{ t: 2, q: "Wirst du kommen?", a: "Ja, ich werde kommen.", h: "Antwort", req: 'pos', e: "Du wirst -> Ich werde." }
    ]},
    16: {
    title: "Konjunktionen",
    color: "green",
    desc: "Weil & Dass (Verb am Ende).",
    explanation: `
                    <div class="space-y-4">
                        <h4 class="text-sm">1. Position 0 (Und, Aber, Oder)</h4>
                        <p class="text-sm mb-2">Keine Änderung. <em>Ich esse <strong>und</strong> ich trinke.</em></p>
                        
                        <h4 class="text-sm">2. Nebensatz (Weil, Dass, Wenn)</h4>
                        <p class="text-sm">Kicken das Verb ganz ans <strong>ENDE</strong>.</p>
                        
                        <div class="visual-card bg-green-50 border-green-200">
                            <span class="visual-emoji">⚽🥅</span>
                            <span class="visual-title text-green-700">VERB KICKER</span>
                            <span class="visual-desc">...weil ich Pizza <strong>esse</strong>.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Ich esse, weil ich Hunger ___ (haben).", a: "habe", h: "Ende", e: "Weil schickt das Verb ans Ende." },
{ t: 3, q: "Er sagt, dass er krank ___ (sein).", a: "ist", h: "Ende", e: "Dass schickt das Verb ans Ende." },
{ t: 3, q: "Ich komme nicht, aber ich ___ (anrufen).", a: "rufe an", h: "Normal", e: "Aber ändert die Position nicht." },
{ t: 2, q: "Er kommt nicht. Er ist krank. (Verbinde mit Weil)", a: "Er kommt nicht, weil er krank ist.", h: "Verb ans Ende", req: 'pos', e: "Ist wandert ans Ende." }
    ]},
    17: {
    title: "Imperativ",
    color: "pink",
    desc: "Befehle (Mach! Komm!).",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-pink-100 text-pink-800">
                                <tr><th></th><th>Bildung</th><th>Beispiel</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td>Du</td><td>Kein -st, kein Du</td><td>Mach! (Machst)</td></tr>
                                <tr><td>Ihr</td><td>Gleich wie Präsens</td><td>Macht!</td></tr>
                                <tr><td>Sie</td><td>Wortstellung</td><td>Machen Sie!</td></tr>
                            </tbody>
                        </table>
                        <div class="visual-card bg-pink-50 border-pink-200">
                            <span class="visual-emoji">🗣️❗</span>
                            <span class="visual-desc"><strong>Geh</strong> nach Hause! (Du)</span>
                            <span class="visual-desc block mt-1"><strong>Kommen</strong> Sie bitte! (Sie)</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "___ (kommen - du) hierher!", a: "komm", h: "Imperativ Du", e: "Kommst -> Komm." },
{ t: 3, q: "___ (essen - du) das!", a: "iss", h: "Imperativ Du (Irreg)", e: "Isst -> Iss." },
{ t: 3, q: "___ (warten - ihr) hier!", a: "wartet", h: "Imperativ Ihr", e: "Wartet (Wie Präsens)." },
{ t: 3, q: "___ (sein - du) ruhig!", a: "sei", h: "Unregelmäßig", e: "Sein -> Sei." }
    ]},
    18: {
    title: "Gesamtwiederholung",
    color: "blue",
    desc: "Alles gemischt.",
    explanation: `
                    <div class="space-y-4">
                         <div class="visual-card bg-blue-50 border-blue-200">
                            <span class="visual-emoji">🏆</span>
                            <span class="visual-title text-blue-700">MEISTERPRÜFUNG</span>
                            <span class="visual-desc">Hier testen wir alles zusammen. Viel Glück!</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Ich (haben) einen Bruder.", a: "habe", h: "Verb", e: "Ich habe." },
{ t: 3, q: "Ich sehe ___ (der) Mann.", a: "den", h: "Akkusativ", e: "Der Mann -> Den." },
{ t: 3, q: "Ich helfe ___ (das) Kind.", a: "dem", h: "Dativ", e: "Das Kind -> Dem." },
{ t: 2, q: "Ich trinke Wasser. (Vergangenheit - Perfekt)", a: "Ich habe Wasser getrunken.", h: "Perfekt", req: 'pos', e: "Ge-trunken." },
{ t: 2, q: "Das Auto ist rot. (Mache es attributiv: Das...)", a: "Das rote Auto.", h: "Adjektiv", req: 'pos', e: "Das rote Auto." }
    ]}
};

    // Reference headers (German)
    const refHeaders = ["Person", "Sein", "Haben", "Werden (Futur)", "Machen (Reg)", "Fahren (Irreg)", "Wollen (Mod)", "Können (Mod)", "Perfekt (Reg)", "Perfekt (Sein)"];

    // State
    let activeQueue = [];
    let currentIndex = 0;
    let score = 0;
    let total = 0;
    let activeUnitColor = 'indigo';
    let currentUnitId = null;

    // DOM Elements
    const els = {
    modal: document.getElementById('onboarding-modal'),
    selector: document.getElementById('unit-selector'),
    drillView: document.getElementById('drill-view'),
    unitGrid: document.getElementById('units-grid-container'),
    header: document.getElementById('app-header'),
    title: document.getElementById('unit-title'),
    subtitle: document.getElementById('unit-subtitle'),
    progress: document.getElementById('progress-bar'),
    count: document.getElementById('drill-count'),
    total: document.getElementById('total-drills'),
    card: document.getElementById('drill-card'),
    prompt: document.getElementById('current-prompt'),
    hint: document.getElementById('drill-hint'),
    badge: document.getElementById('drill-type-badge'),
    input: document.getElementById('user-input'),
    feedback: document.getElementById('feedback'),
    btn: document.getElementById('action-button'),
    giveUpBtn: document.getElementById('give-up-button'),
    refArea: document.getElementById('reference-area'),
    refHead: document.getElementById('ref-table-head'),
    expView: document.getElementById('explanation-view'),
    expTitle: document.getElementById('exp-title'),
    expSubtitle: document.getElementById('exp-subtitle'),
    expBody: document.getElementById('exp-body'),
    expBtn: document.getElementById('exp-start-btn'),
    expIconBg: document.getElementById('exp-icon-bg')
};

    // --- Initialization ---
    function init() {
    renderUnits();
    renderRefHeader();

    // Enter key support
    els.input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !els.btn.disabled) handleActionButton();
});
}

    function renderUnits() {
    let html = '';
    for (const [id, u] of Object.entries(units)) {
    html += `
                <div onclick="showExplanation(${id})" class="bg-white rounded-2xl p-5 shadow-md border-l-8 hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1 border-${u.color}-500 group">
                    <div class="flex justify-between items-start">
                        <h3 class="text-xl font-bold text-gray-800 group-hover:text-${u.color}-600 transition-colors">${u.title}</h3>
                        <span class="bg-${u.color}-100 text-${u.color}-700 text-xs font-bold px-2 py-1 rounded-full">U${id}</span>
                    </div>
                    <p class="text-gray-500 text-sm mt-2 leading-relaxed">${u.desc}</p>
                </div>`;
}
    els.unitGrid.innerHTML = html;
}

    function renderRefHeader() {
    els.refHead.innerHTML = `<tr>${refHeaders.map(h => `<th scope="col" class="py-3 px-4 whitespace-nowrap">${h}</th>`).join('')}</tr>`;
}

    // --- Actions ---
    window.startLearning = () => {
    els.modal.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
    els.modal.style.display = 'none';
    els.selector.classList.remove('hidden');
}, 300);
};

    // STEP 1: Show Explanation
    window.showExplanation = (id) => {
    currentUnitId = id;

    if (id === 'all') {
    activeUnitColor = 'gray';
    initDrills();
    return;
}

    const u = units[id];
    activeUnitColor = u.color;

    // Populate Explanation View
    els.expTitle.textContent = u.title;
    els.expSubtitle.textContent = u.desc;
    els.expBody.innerHTML = u.explanation;

    // Style Explanation View
    els.expIconBg.className = `w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm bg-${u.color}-100 text-${u.color}-600`;
    els.expBtn.className = `w-full py-4 px-6 text-white font-bold text-lg rounded-xl shadow-lg transition duration-200 hover:-translate-y-1 transform active:scale-95 bg-${u.color}-600 hover:bg-${u.color}-700`;

    // Show View
    els.selector.classList.add('hidden');
    els.expView.classList.remove('hidden');

    window.scrollTo(0,0);
};

    // STEP 2: Start Drills
    window.initDrills = () => {
    activeQueue = [];
    const id = currentUnitId;

    // Reset Card HTML
    els.card.innerHTML = `
                <div id="drill-type-badge" class="mb-3 px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-gray-500 border border-gray-200">
                    Bereit?
                </div>
                <div id="current-prompt" class="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-2">
                    Lädt...
                </div>
                <div id="drill-hint" class="text-sm text-gray-500 font-medium italic mt-2"></div>
            `;

    els.prompt = document.getElementById('current-prompt');
    els.hint = document.getElementById('drill-hint');
    els.badge = document.getElementById('drill-type-badge');

    if (id === 'all') {
    Object.values(units).forEach(u => activeQueue.push(...u.drills));
    activeUnitColor = 'gray';
    els.title.textContent = "Gesamtwiederholung";
    els.subtitle.textContent = "Alle Einheiten gemischt";
} else {
    const u = units[id];
    activeQueue = [...u.drills];
    els.title.textContent = u.title;
    els.subtitle.textContent = u.desc;
}

    activeQueue.sort(() => Math.random() - 0.5);

    total = activeQueue.length;
    score = 0;
    currentIndex = 0;

    updateTheme(activeUnitColor);

    els.expView.classList.add('hidden');
    els.selector.classList.add('hidden');
    els.drillView.classList.remove('hidden');

    loadDrill();
};

    window.returnToSelector = () => {
    els.expView.classList.add('hidden');
    els.drillView.classList.add('hidden');
    els.selector.classList.remove('hidden');
    els.input.value = '';
    els.feedback.classList.add('hidden');
    els.refArea.classList.add('hidden');
};

    window.handleActionButton = () => {
    const state = els.btn.getAttribute('data-state');
    if (state === 'check') {
    checkAnswer();
} else if (state === 'next') {
    currentIndex++;
    loadDrill();
} else {
    window.returnToSelector();
}
};

    function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

    // Helper to get advice text
    function getAdvice(drill) {
    if (drill.t === 1) return "Achte auf das Subjekt (Ich, Du...). Das Verb muss zur Person passen.";
    if (drill.t === 2) return "Das ist eine Transformation. Wenn 'Du' gefragt ist, antworte mit 'Ich'. Achte auf den Fall.";
    return "Es fehlt ein Schlüsselwort. Das kann ein Artikel, eine Präposition oder ein Pronomen sein.";
}

    // NEW: Handle Give Up Logic
    window.handleGiveUp = () => {
    const drill = activeQueue[currentIndex];
    const advice = getAdvice(drill);

    let rawExplanation = drill.e ? drill.e : "Überprüfe die Referenztabelle.";
    const answerToHide = drill.a;
    const regex = new RegExp(escapeRegExp(answerToHide), 'gi');
    const safeExplanation = rawExplanation.replace(regex, "___");

    let thinkingPattern = "";

    if (drill.t === 1) {
    // TYPE 1: CONJUGATION
    let subj = "Er/Sie";
    let verbEx = "Macht";
    const q = drill.q.toLowerCase();

    if (q.includes("ich")) { subj = "Ich"; verbEx = "Mache (-e)"; }
    else if (q.includes("du")) { subj = "Du"; verbEx = "Machst (-st)"; }
    else if (q.includes("wir")) { subj = "Wir"; verbEx = "Machen (-en)"; }
    else if (q.includes("ihr")) { subj = "Ihr"; verbEx = "Macht (-t)"; }
    else if (q.includes("sie")) { subj = "Sie"; verbEx = "Machen (-en)"; }

    thinkingPattern = `
                    <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 text-left">
                        <strong class="text-yellow-600 block mb-1">🧠 Denk-Beispiel:</strong>
                        <span class="block mb-2">Stell dir vor, das Verb wäre <em>"Machen"</em> (Regelmäßig).</span>
                        <ul class="space-y-1 ml-2 border-l-2 border-yellow-200 pl-2">
                            <li>1. Subjekt: <strong>${subj}</strong></li>
                            <li>2. Muster: <strong>${subj} ${verbEx}</strong></li>
                            <li>3. Wende das jetzt auf das gesuchte Verb an.</li>
                        </ul>
                    </div>`;

} else if (drill.t === 2) {
    // TYPE 2: TRANSFORMATION
    thinkingPattern = `
                    <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 text-left">
                        <strong class="text-yellow-600 block mb-1">🧠 Denk-Beispiel:</strong>
                        <span class="block mb-1">Frage: <em>"Bist du da?"</em></span>
                        <ul class="space-y-1 ml-2 border-l-2 border-yellow-200 pl-2">
                            <li>1. Person wechseln: <strong>Ich</strong>.</li>
                            <li>2. Verb anpassen: <em>"Ja, ich bin da"</em>.</li>
                        </ul>
                    </div>`;

} else {
    // TYPE 3: FILL IN THE BLANK
    thinkingPattern = `
                    <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 text-left">
                        <strong class="text-yellow-600 block mb-1">🧠 Grammatik-Detektiv:</strong>
                        <span class="block mb-1">Suche nach Genus und Fall.</span>
                        <ul class="space-y-1 ml-2 border-l-2 border-yellow-200 pl-2">
                            <li>Subjekt (Wer?) → Nominativ (Der)</li>
                            <li>Objekt (Wen/Was?) → Akkusativ (Den)</li>
                        </ul>
                    </div>`;
}

    els.feedback.innerHTML = `
                <div class="text-left bg-blue-50 p-5 rounded-2xl border-2 border-blue-100 relative mt-4 shadow-sm">
                    <div class="absolute -top-3 left-6 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm flex items-center gap-1">
                        <span>👋</span> Ein Freund sagt:
                    </div>
                    
                    <p class="text-gray-700 mb-2 mt-2 text-sm leading-relaxed font-medium">
                        "${advice}"
                    </p>

                    ${thinkingPattern}
                    
                    <div class="bg-white p-4 rounded-xl border-l-4 border-yellow-400 shadow-sm flex items-start gap-3 mt-4">
                        <span class="text-2xl shrink-0">💡</span>
                        <div>
                            <strong class="block text-gray-900 text-xs uppercase mb-1 tracking-wider">Der Hinweis</strong>
                            <span class="text-gray-800 text-sm">${safeExplanation}</span>
                        </div>
                    </div>

                    <div class="mt-4 text-center">
                        <span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-white px-2 py-1 rounded-full border border-blue-100">Versuch es nochmal! 👇</span>
                    </div>
                </div>
            `;

    els.feedback.classList.remove('hidden', 'bg-green-100', 'bg-red-50', 'border-green-200', 'border-red-100');
    els.feedback.classList.add('animate-fade-in');

    els.input.focus();

    els.input.classList.remove('border-gray-200');
    els.input.classList.add('ring-4', 'ring-yellow-100', 'border-yellow-400', 'transition-all', 'duration-500');

    setTimeout(() => {
    els.input.classList.remove('ring-4', 'ring-yellow-100', 'border-yellow-400');
    els.input.classList.add('border-gray-200');
}, 1500);

    els.giveUpBtn.disabled = true;
    els.giveUpBtn.classList.add('opacity-50', 'cursor-not-allowed');
}

    window.toggleReference = () => {
    els.refArea.classList.toggle('hidden');
    const isHidden = els.refArea.classList.contains('hidden');
    document.getElementById('ref-toggle-icon').textContent = isHidden ? 'Anzeigen' : 'Verbergen';
};

    // --- Logic ---
    function updateTheme(color) {
    els.header.className = els.header.className.replace(/bg-\w+-600/g, '');
    els.progress.className = els.progress.className.replace(/bg-\w+-500/g, '');
    els.header.classList.add(`bg-${color}-600`);
    els.progress.classList.add(`bg-${color}-500`);
}

    function loadDrill() {
    if (currentIndex >= total) {
    finishDrill();
    return;
}

    const drill = activeQueue[currentIndex];

    els.input.value = '';
    els.input.disabled = false;
    els.input.classList.remove('hidden');
    els.input.classList.remove('text-indigo-600', 'bg-indigo-50', 'border-indigo-300', 'bg-green-50', 'text-green-800', 'border-green-500', 'bg-red-50', 'text-red-800', 'border-red-500', 'ring-4', 'ring-yellow-100', 'border-yellow-400');
    els.input.focus();
    els.input.className = "w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-500 transition-all duration-200 text-center font-medium";

    els.feedback.classList.add('hidden');
    els.card.classList.remove('bg-green-50', 'bg-red-50');
    els.card.classList.add('bg-gray-50');

    els.prompt.innerHTML = drill.q.replace(/\((.*?)\)/g, `<span class="text-${activeUnitColor}-600 font-semibold">($1)</span>`);
    els.hint.textContent = drill.h;

    let typeText = "Grammatik";
    if (drill.t === 1) typeText = "Konjugation";
    if (drill.t === 2) typeText = drill.req === 'neg' ? "Transformation (Negativ)" : "Transformation (Positiv)";
    if (drill.t === 3) typeText = "Ergänzen";
    els.badge.textContent = typeText;
    els.badge.className = `mb-3 px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border text-${activeUnitColor}-600 border-${activeUnitColor}-200`;

    els.btn.classList.remove('hidden');
    els.btn.textContent = "Prüfen";
    els.btn.setAttribute('data-state', 'check');
    els.btn.disabled = false;
    els.btn.className = `w-2/3 py-4 px-6 font-bold text-lg rounded-xl shadow-lg transition-all duration-200 bg-${activeUnitColor}-600 text-white hover:bg-${activeUnitColor}-700 hover:-translate-y-0.5`;

    els.giveUpBtn.disabled = false;
    els.giveUpBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'hidden');
    els.giveUpBtn.innerHTML = '<span>🤷</span> <span class="hidden md:inline">Keine Ahnung</span><span class="md:hidden">Hilfe</span>';

    updateProgress();
}

    function checkAnswer() {
    const drill = activeQueue[currentIndex];
    const userRaw = els.input.value.trim();
    const userClean = cleanString(userRaw);
    const answerClean = cleanString(drill.a);

    if (!userClean) {
    els.input.parentElement.classList.add('shake-animation');
    setTimeout(() => els.input.parentElement.classList.remove('shake-animation'), 300);
    return;
}

    els.input.disabled = true;
    els.feedback.classList.remove('hidden');
    els.giveUpBtn.disabled = true;

    const isCorrect = userClean === answerClean;

    if (isCorrect) {
    score++;
    const niceWork = "Sehr gut! Perfekt.";
    els.feedback.innerHTML = `
                    <div class="text-green-800">
                        <div class="font-bold text-lg mb-1">✅ Richtig!</div>
                        <div class="text-sm opacity-80">${niceWork}</div>
                    </div>
                `;
    els.feedback.className = "p-4 rounded-xl text-center font-bold bg-green-100 text-green-700 border border-green-200 mb-4 animate-fade-in";
    els.input.classList.replace('border-gray-200', 'border-green-500');
    els.input.classList.add('bg-green-50', 'text-green-800');
    els.card.classList.replace('bg-gray-50', 'bg-green-50');
} else {
    const advice = getAdvice(drill);
    const explanation = drill.e ? drill.e : "Prüfe die Struktur.";

    els.feedback.innerHTML = `
                    <div class="text-left bg-red-50 p-5 rounded-2xl border-2 border-red-100 relative mt-4 shadow-sm">
                        <div class="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm flex items-center gap-1">
                            <span>😅</span> Falsch...
                        </div>
                        
                        <p class="text-gray-700 mb-4 mt-2 text-sm leading-relaxed font-medium">
                            "Nicht ganz. ${advice}"
                        </p>
                        
                        <div class="bg-white p-3 rounded-xl border-l-4 border-red-400 shadow-sm mb-3">
                            <strong class="block text-gray-900 text-xs uppercase mb-1 tracking-wider">Richtige Lösung</strong>
                            <span class="text-xl text-red-700 font-bold select-all">${drill.a}</span>
                        </div>

                        <div class="text-sm text-gray-600 pl-2 border-l-2 border-red-200">
                            <strong>Hinweis:</strong> ${explanation}
                        </div>
                    </div>
                `;
    els.feedback.className = "mb-4 animate-fade-in";
    els.input.classList.replace('border-gray-200', 'border-red-500');
    els.input.classList.add('bg-red-50', 'text-red-800');
    els.card.classList.replace('bg-gray-50', 'bg-red-50');
}

    els.btn.textContent = "Weiter →";
    els.btn.setAttribute('data-state', 'next');
    els.btn.className = "w-2/3 py-4 px-6 font-bold text-lg rounded-xl shadow-lg transition-all duration-200 bg-gray-800 text-white hover:bg-gray-900 hover:-translate-y-0.5";

    updateProgress();
}

    function finishDrill() {
    let nextUnitId = null;
    if (currentUnitId !== 'all') {
    const possibleNext = parseInt(currentUnitId) + 1;
    if (units[possibleNext]) nextUnitId = possibleNext;
}

    const restartArg = currentUnitId === 'all' ? "'all'" : currentUnitId;
    const cardColor = activeUnitColor;

    els.card.innerHTML = `
                <div class="text-6xl mb-4">🇩🇪</div>
                <h3 class="text-2xl font-bold text-gray-800">Einheit abgeschlossen!</h3>
                <p class="text-lg mt-2 text-gray-600 mb-6">Endergebnis: <span class="font-bold text-${cardColor}-600">${score} / ${total}</span></p>
                
                <div class="flex flex-col gap-3 w-full max-w-xs mx-auto">
                    <button onclick="showExplanation(${restartArg})" class="w-full py-3 px-4 bg-${cardColor}-100 text-${cardColor}-700 font-bold rounded-xl hover:bg-${cardColor}-200 transition-colors">
                        🔄 Wiederholen
                    </button>
                    ${nextUnitId ? `
                    <button onclick="showExplanation(${nextUnitId})" class="w-full py-3 px-4 bg-${cardColor}-600 text-white font-bold rounded-xl hover:bg-${cardColor}-700 transition-colors shadow-lg hover:-translate-y-0.5 transform">
                        Nächste Einheit ➡
                    </button>` : ''}
                    <button onclick="returnToSelector()" class="w-full py-3 px-4 text-gray-400 font-bold rounded-xl hover:text-gray-600 hover:bg-gray-50 transition-colors">
                        Zurück zum Menü
                    </button>
                </div>
            `;

    els.btn.classList.add('hidden');
    els.input.classList.add('hidden');
    els.feedback.classList.add('hidden');
    els.giveUpBtn.classList.add('hidden');
}

    function cleanString(str) {
    return str.toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?¡¿']/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

    function updateProgress() {
    els.count.textContent = score;
    els.total.textContent = total;
    const pct = total > 0 ? (currentIndex / total) * 100 : 0;
    els.progress.style.width = `${pct}%`;
}

    // Run
    init();
