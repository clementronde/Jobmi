import React from 'react';

export default function Politique() {
    return (
      <div className="container mx-auto p-4 mt-[90px]">
        <h1 className="font-bold text-2xl mb-4">POLITIQUE DE CONFIDENTIALITÉ</h1>
        <div className="space-y-4 text-sm">
          <h2 className="font-bold">Introduction</h2>
          <p>Nous attachons une grande importance à la confidentialité des informations personnelles de nos utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.</p>

          <h2 className="font-bold">Informations Collectées</h2>
          <p>Nous collectons les informations suivantes :</p>
          <ul className="list-disc list-inside">
            <li>Informations de compte : Lorsque vous créez un compte, nous collectons votre nom, adresse e-mail et mot de passe.</li>
            <li>Newsletter : Si vous vous inscrivez à notre newsletter, nous collectons votre adresse e-mail.</li>
            <li>Formulaire de contact : Lorsque vous nous envoyez un message via notre formulaire de contact, nous collectons votre nom, adresse e-mail et le contenu de votre message.</li>
          </ul>

          <h2 className="font-bold">Utilisation des Informations</h2>
          <p>Nous utilisons vos informations personnelles pour :</p>
          <ul className="list-disc list-inside">
            <li>Créer et gérer votre compte utilisateur.</li>
            <li>Envoyer des newsletters et des mises à jour par e-mail.</li>
            <li>Répondre à vos questions et commentaires via le formulaire de contact.</li>
          </ul>

          <h2 className="font-bold">Partage des Informations</h2>
          <p>Nous ne partageons pas vos informations personnelles avec des tiers, sauf si cela est nécessaire pour :</p>
          <ul className="list-disc list-inside">
            <li>Respecter une obligation légale.</li>
            <li>Protéger et défendre nos droits ou notre propriété.</li>
            <li>Prévenir une fraude ou une activité illégale.</li>
          </ul>

          <h2 className="font-bold">Sécurité des Informations</h2>
          <p>Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.</p>

          <h2 className="font-bold">Vos Droits</h2>
          <p>Conformément à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
          <ul className="list-disc list-inside">
            <li>Droit d'accès : Vous pouvez demander à accéder aux informations personnelles que nous détenons à votre sujet.</li>
            <li>Droit de rectification : Vous pouvez demander à ce que nous corrigions les informations inexactes ou incomplètes vous concernant.</li>
            <li>Droit de suppression : Vous pouvez demander à ce que nous supprimions vos informations personnelles.</li>
            <li>Droit d'opposition : Vous pouvez vous opposer au traitement de vos informations personnelles.</li>
          </ul>

          <h2 className="font-bold">Cookies</h2>
          <p>Nous utilisons des cookies pour améliorer l'expérience utilisateur sur notre site. Vous pouvez les désactiver dans les paramètres de votre navigateur.</p>

          <h2 className="font-bold">Modifications de la Politique de Confidentialité</h2>
          <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.</p>

          <h2 className="font-bold">Contact</h2>
          <p>Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante : maïa.agencypro@gmail.com.</p>

          <h2 className="font-bold">Projet Scolaire</h2>
          <p>Ce site a été réalisé dans le cadre d'un projet scolaire et ne doit pas être considéré comme un site officiel.</p>
        </div>
      </div>
    );
  }