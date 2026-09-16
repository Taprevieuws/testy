# Tapreviews — je webshop online zetten

Dit is de volledige code voor je webshop. Je hoeft zelf niets te
programmeren — volg gewoon deze stappen op volgorde. Het kost ongeveer
20-30 minuten de eerste keer.

## Wat je gaat doen (kort overzicht)

1. Een gratis Stripe-account maken (voor het écht innen van betalingen)
2. Een gratis GitHub-account maken en deze code daar plaatsen
3. De code via Vercel (gratis hosting) live zetten
4. Je Vimexx-domein aan de site koppelen

---

## Stap 1 — Stripe account aanmaken

1. Ga naar https://dashboard.stripe.com/register en maak een gratis account.
2. Vul je bedrijfsgegevens in (dit mag later verder aangevuld worden, je
   kan meteen beginnen met testen).
3. Ga linksboven naar **Developers > API keys**.
4. Kopieer de **Secret key** (begint met `sk_live_...` als je account
   volledig geactiveerd is, of `sk_test_...` tijdens het testen).
   Bewaar deze goed — je hebt hem zo nodig in Stap 3.

iDEAL en creditcard staan al aan in de code. In je Stripe-dashboard kun je
onder **Settings > Payment methods** eventueel extra betaalmethodes
inschakelen.

## Stap 2 — Code op GitHub zetten

1. Maak een gratis account op https://github.com als je die nog niet hebt.
2. Klik rechtsboven op **+** > **New repository**.
3. Geef hem een naam, bijvoorbeeld `tapreviews`. Laat "Public" of
   "Private" staan, maakt niet uit. Klik **Create repository**.
4. Klik op de pagina die verschijnt op **uploading an existing file**.
5. Sleep **alle bestanden en mappen** uit de map die ik je gegeven heb
   (dus alles binnen `tapreviews/`, niet de map zelf) in dat upload-vak.
6. Klik onderaan op **Commit changes**.

## Stap 3 — Live zetten via Vercel

1. Ga naar https://vercel.com en maak een gratis account aan — kies
   **Continue with GitHub** zodat het meteen gekoppeld is.
2. Klik op **Add New... > Project**.
3. Kies de `tapreviews` repository die je net geüpload hebt en klik
   **Import**.
4. Voordat je op "Deploy" klikt: klap **Environment Variables** open en
   voeg deze twee toe:
   - `STRIPE_SECRET_KEY` → plak hier je Secret key uit Stap 1
   - `NEXT_PUBLIC_SITE_URL` → voorlopig mag dit leeg blijven, dat vul je
     in Stap 4 aan
5. Klik op **Deploy**. Na ongeveer een minuut krijg je een link zoals
   `tapreviews-xxxx.vercel.app` — je webshop is nu live en je kan al
   een testbetaling proberen.

## Stap 4 — Je Vimexx-domein koppelen

1. Ga in Vercel naar je project > **Settings > Domains**.
2. Typ je domeinnaam (bv. `tapreviews.nl`) en klik **Add**. Vercel
   toont nu 1 of 2 DNS-records die je moet instellen (meestal een
   "A record" en een "CNAME record").
3. Log in bij Vimexx, ga naar **DNS-beheer** van je domein, en voeg
   precies de records toe die Vercel liet zien.
4. Dit kan tot enkele uren duren voordat het domein overal werkt. Zodra
   Vercel een groen vinkje toont, is de koppeling klaar.
5. Ga terug naar **Settings > Environment Variables** in Vercel en zet
   `NEXT_PUBLIC_SITE_URL` op `https://www.tapreviews.nl` (je eigen
   domein). Klik daarna bij je project op **Redeploy** zodat de
   wijziging actief wordt.

---

## Een testbetaling doen

Zolang je nog de `sk_test_...` sleutel gebruikt, kun je gratis testen met
kaartnummer `4242 4242 4242 4242`, een willekeurige toekomstige
vervaldatum en een willekeurige CVC. Zodra alles goed werkt, vervang je
de sleutel in Vercel door je echte `sk_live_...` sleutel (Stap 1) en
doe je een **Redeploy**.

## Later een product toevoegen

De site is nu gebouwd rond dit ene product, maar zo gebouwd dat het
uitbreidbaar is. Kom gewoon terug met de vraag "voeg product X toe" en
dan pas ik de code aan.

## Hulp nodig?

Als een stap vastloopt: maak een screenshot van waar je vastzit en stuur
die door, dan help ik je verder.
