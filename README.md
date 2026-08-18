# Kidss Talk Birthdays

An installable app for the HR team: the employee birthday master, weekly
celebration cards sized for WhatsApp (1080 × 1350), and the messages that go
with them.

Version 4.4. Replaces the earlier birthday page.

---

## Putting it on GitHub Pages

Upload **all seven files** to the root of the branch that Pages serves
(usually `main`, folder `/root`, or the `gh-pages` branch):

    index.html
    manifest.webmanifest
    sw.js
    icon-192.png
    icon-512.png
    icon-maskable-512.png
    apple-touch-icon.png

All paths are relative, so it works whether the site sits at
`https://you.github.io/` or `https://you.github.io/repo-name/`.

**The file must be named `index.html`.** If an older version is already there,
overwrite it — the app looks for `sw.js` and the manifest next to itself, and
the install prompt needs `index.html` as the start page.

---

## Where the install option is

Three places, so it is hard to miss:

1. A card at the top of the home screen, until you install or dismiss it
2. The download icon in the top bar
3. **More → Install Kidss Talk Birthdays**

If Android has offered the prompt, these install in one tap. If it has not, they
open the check screen with the exact Chrome steps and the reason no prompt
appeared.

## If the phone will not install it

Open the app → **More → Install Kidss Talk Birthdays**. That screen checks every
requirement Android has and tells you which one is failing, naming the file
involved. Work down the list; anything marked in red is the reason.

The four usual causes:

0. **The link was opened from inside WhatsApp.** Tapping a link in WhatsApp,
   Instagram or Gmail opens their own built-in browser, which cannot install
   anything and shows no Install menu item. Tap ⋮ → **Open in Chrome** first.
   The check screen names this if it is happening.

1. **It is already installed.** Chrome never offers to install an app twice.
   If the Chrome menu says *Open app* rather than *Install app*, look for
   **KT Birthdays** in your app drawer. The check screen says "Already
   installed" when you are inside the installed app.
2. **The page is not on https://.** Opening the HTML file from phone storage,
   or over plain http, blocks installation completely. It must be a GitHub
   Pages address.
3. **A file is missing from the upload.** If `manifest.webmanifest`, `sw.js` or
   an icon is not sitting next to `index.html`, Android silently refuses. The
   check screen fetches each one and reports the failure.

There is a **Copy this report** button at the bottom of the check screen. It
copies everything the app can see — address, browser, manifest, icons, service
worker — as plain text you can paste into a message.

Chrome also waits a few seconds after the first load before offering. Reload
once if the button has not appeared.

## Upgrading from the previous version

Employee data on your phone is kept. The app stores it under the same name as
before, so after you upload the new files, the same people, branches and
departments are still there.

Two things to do in order:

1. Take a backup from the old app first (**Settings → Backup data**). It costs
   nothing and it is the only safety net.
2. Upload the new files, including the new `sw.js`. Without it the phone may
   keep showing the old app for a day or more. From this version onward the app
   itself is always fetched fresh when you are online, so future uploads appear
   the next time you open it.

If a phone still shows the old version after uploading: close the app fully,
reopen it, and if needed uninstall and add it to the home screen again.

---

## Installing it on a phone

**Android (Chrome):** open the Pages link → menu (⋮) → *Install app*. An install
button also appears in the app's top bar once Android offers it.

**iPhone (Safari):** open the Pages link → **Share** → **Add to Home Screen**.
Safari shows no install button; this is the only route on iOS.

**Computer (Chrome or Edge):** the install icon sits at the right of the address bar.

Once installed it opens full screen with its own icon and keeps working without
internet.

---

## How the phone screens are laid out

The mobile layout is its own design, not the desktop one shrunk down.

**Home** shows only four things: a two-line greeting, today's birthday, this
week as a vertical timeline, and the next four coming up. Nothing else — no
statistics tiles, no full employee list.

**People** shows one card per person: name, department and branch, then the
birthday. The ⋮ button on each card opens profile, wish, edit and delete, so
those four actions never sit side by side on a narrow screen.

**Adding, editing, profiles and the celebration card** open as full screens with
a back arrow, not small floating boxes.

On a computer the same screens use the sidebar and split the home page into two
columns.

## Ages

Age is worked out from the date of birth every time it is shown, and is never
stored. Nobody has to update it. Someone born on 19 August 1999 shows **26**
on 18 August 2026 and **27** from the 19th onward. A 29 February birthday ages
on whichever day you have chosen to celebrate it.

There is no age column in imports, and none is needed. Exports do include the
age as it stands on the day you export.

## Mobile numbers and WhatsApp

Every employee can carry a mobile number. Type an Indian number as
`9876543210` — the `+91` is added for you. Numbers are checked before saving.

From an employee's profile:

- **Call** opens the phone dialler
- **WhatsApp** opens a chat with that person
- **Birthday wish** opens the message composer

In the composer you can edit the wording before sending, switch between six
wordings, copy it, or open WhatsApp with the message already typed. **You press
send in WhatsApp.** The app never sends anything by itself and never claims a
message was delivered or read — the profile records only that WhatsApp was
opened.

Turn **Age inside the birthday wish** on in Appearance if you want
"a very Happy 27th Birthday" instead of "Happy Birthday".

### Numbers in the MD's weekly message

Open **This week → MD message**. There is a switch on that screen:
**Add mobile numbers**. Off by default; once you turn it on the app remembers.

With it on, each line reads:

    🎂 Priya Raj — 19 Aug • Age 27 • Anna Nagar • +91 98765 43210

Anyone without a number saved is still listed, just without one.

Worth knowing before you use it: a WhatsApp message can be forwarded by whoever
receives it, and once numbers leave your phone you no longer control where they
go. Send that version to the MD directly, not into a group.

### Privacy

The celebration card image never carries mobile numbers, whatever the switch
above is set to — images travel much further than messages. Numbers also appear
in the Excel export, which is an HR file; keep it where employee data belongs.

## The weekly routine

Open the app → **This week** → **Celebration card** → **Share image** (or
**PNG** to save it) → **MD message** → **Copy** → paste under the image in
WhatsApp.

For an individual birthday: tap the person → **Birthday message** → **Another
wording** until one reads well → **Copy** or **Share**.

The app never sends anything by itself. Share opens WhatsApp with the message
or image ready; you choose the chat and press send.

---

## Where the data lives

Employee data is stored **in the browser on each device**. It does not sync
between your phone and your computer, and it is not on GitHub — only the app
itself is.

**More → Backup and restore** downloads one file holding every employee and all
settings, and loads it back onto another device. Take a backup after any
significant change.

---

## Importing from Excel

**More → Import from Excel or CSV.** The first row must hold the column names.
These are understood:

| Column       | Also accepted                                  |
|--------------|------------------------------------------------|
| Employee Name| Name, Employee, Staff Name, Full Name           |
| Mobile Number| Mobile, Phone, Contact Number, WhatsApp         |
| Branch       | Store, Location, Showroom, Unit                 |
| Department   | Dept, Section, Category                         |
| Date of Birth| DOB, Birth Date, Birthday, D.O.B                |

Dates are read as **day first**: `04/11/2002` is 4 November, not 11 April.
Also understood: `2002-11-04`, `4-Nov-2002`, `Nov 4, 2002`, `04.11.2002`, dates
with a time attached, and raw Excel serial numbers. Two-digit years are assumed
to be 1931–2030.

The preview shows two columns — **In your file** and **Will be saved** — side by
side. If a date is being read the wrong way round, you will see it there before
anything is added. Nothing is added until
you press **Add** or **Replace all** — the preview shows every row first,
marking anything with no name, an unreadable date, or a name already on the
list.

Excel import and Excel export need internet the first time (the spreadsheet
library is fetched once). CSV works offline always.

---

## Settings worth knowing

- **29 February** — decides whether those birthdays are celebrated on 28
  February, 1 March, or only in leap years. Default: 28 February.
- **Celebration card** — *Midnight* for WhatsApp, *Daylight* if you print it.
- **Show ages** — off by default. Turning it on adds "turns 29" to profiles.
- **Message templates** — the MD message and six birthday wishes. Placeholders:
  `{name} {first} {branch} {dept} {date} {company}`, plus `{count}` and
  `{plural}` in the MD message. Separate the wishes with a line holding three
  dashes.

---

## Typefaces

Headings use **Instrument Serif**, everything else **Plus Jakarta Sans**, loaded
from Google Fonts and cached by the phone after the first visit. Opened offline
before they have ever loaded, the app falls back to the device font — everything
still works and stays aligned, it just looks plainer for that session.
