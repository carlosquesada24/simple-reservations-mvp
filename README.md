# Simple Reservations MVP

Docs: https://www.notion.so/MVP-Reserva-de-citas-12334e1f0c7080fda660d8b6e6e0ead9

## Installation

Node version: 18.18.2

git clone https://carlosquesada24:GITHUB_ACCESS_TOKEN@github.com/carlosquesada24/simple-reservations-mvp.git

npm install

npm run dev

# Features working

## Create simple reservations ✅

Client can create a simple reservation. He will select

- Date
- Hour
- Type his contact information (optional)

## Show all reservations (client) ✅

Client can see all the reservations that he has created

⚠️ The data is associated to a clientId stored in LocalStorage. If Browser data is deleted, all the user information can't be populated with the data that is stored in Supabase ⚠️

## Show all reservations (barber) ✅

Barber can see all the reservations
