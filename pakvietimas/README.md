# Kvietimas dalyvauti renginyje

Šis projektas yra (kvietimo į gimtadienį, renginį) aplikacija, sukurta naudojant React. Naudotojai gali patvirtinti, nurodyti, keliese bus renginyje. Projektas apima dinaminę formų validaciją ir specialias dizaino finkcijas, kad būtų lengva naudotis tiek mobiliajame, tiek stacionariame įrenginyje.

------------------------------------

# Technologijos

Šis projektas yra sukurtas naudojant šias technologijas ir įrankius:

- React - UI komponentų kūrimui.
- Formik & Yup - formų valdymui ir validacijai.
- Sass - stiliams organizuoti.
- React Icons - piktogramoms integruoti.
- React Router - navigacijai tarp puslapių.
- Vite - greitam plėtros procesui.

------------------------------------

# Diegimo instrukcijos

Norėdami paleisti projektą lokaliai atlikite šiuos veiksmus:

1. Projekto klonavimas
git clone https://github.com/tavo-projekto-repozitorija.git
cd tavo-projektas

2. Priklausomybių instaliavimas
Naudokite npm:
npm install

3. Projekto paleidimas
npm run dev

Aplikacija bus pasiekiama per naršyklę adresu: http://localhost:3000.

------------------------------------

# Projekto struktūra

Trumpai apie pagrindinius projekto aplankalus:

src/
│
├── assets/            # Medijos failai (paveikslėliai, logotipai)
├── components/        # React komponentai (GuestForm, DressCode ir kt.)
├── styles/            # Sass failai stiliams
│   ├── index.scss     # Bendrieji stiliai
│   └── [kiti failai]  # Komponentų specifiniai stiliai
├── App.jsx            # Pagrindinis aplikacijos failas
└── [kiti failai]      # Kiti projekto failai

------------------------------------

# Pagrindinai komponentai

* GuestForm
Šis komponentas leidžia naudotojams pateikti kiek žmonių (iš jų kiek vaikų) dalyvaus renginyje, validuoti duomenis.

* DressCode
Šis komponentas aprašo kvietimo renginio kodą su vizualinėmis piktogramomis.

------------------------------------

# Naudojimas

1. Kvietimo puslapis (InvitePage)
Aplikacijoje pateikiamas kvietimo puslapis su renginio detalėmis ir nuorodomis. Galima patvirtinti savo dalyvavimą.

2. Formų validacija
Naudojant Formik ir Yup kiekviena forma validuojama, užtikrinant teisingus įvesties duomenis.

------------------------------------

# Stilių ir dizaino sprendimai

Projektas naudoja SASS, kad stiliai būtų strukturuojami ir lengvai pernaudojami. Pagrindiniai stiliai (pvz. spalvų kintamieji) yra centralizuoti index.scss faile.

------------------------------------

# Accessibility (prienamumas)

Dėmesys skirtas šiems prienamumo aspektams:
- Teksto kontrastas: Aukšto kontrasto spalvų schema, kad būtų lengva skaityti.
- Formų prieinamumas: Kiekviena forma turi aiškius "label" elementus ir klaidų žinutes.
- Klaviatūros navigacija: Visos inteavtyvios dalys prienamos naudojant klaviatūrą.

------------------------------------

# Licenzija

Šis projektas platinamas pagal MIT licenciją.