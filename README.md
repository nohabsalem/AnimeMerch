# 🚀 Application Laravel – Lancer le projet

Bonjour ! Ce projet est un site de e-commerce fictif de vente de vêtements en ligne, appelé AnimeMerch.
Il se base majoritairement sur le style de Jojo's Bizarre Adventure.

Il se ressemble globalement à un vrai site, avec toutes les pages (ou presque) qu'on retrouve sur un site officiel de vente en ligne.

## 🛠 Prérequis

- PHP >= 8.2
- Composer
- Node.js & NPM
- MySQL ou SQLite
- Git

## 📦 Fonctionnalités principales

- 🔐 **Authentification** (Register, Login, Logout, sessions sécurisées)
- 👤 Espace utilisateur
- 🛍️ Catalogue produit (vêtements inspirés de l'univers JoJo)
- 🧺 Ajout au panier
- 📝 Pages : Accueil, Boutique, À propos, Contact, etc.
- ⚙️ Backend Laravel + migrations SQL
- 📄 README + environnement `.env` prêt pour déploiement

## Installation du projet

1. **Cloner le projet**

    ```cmd
    git clone https://github.com/nohabsalem/AnimeMerch
    cd mon-projet
    composer install
    npm install

    ```
 **Lancer le projet**
    ```cmd

    php artisan migrate
    php artisan db:seed

    composer run dev
    ```
