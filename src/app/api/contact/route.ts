import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { nom, email, telephone, sujet, message } = data;

    // Validation
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    const contactMessage = `
=== NOUVEAU MESSAGE DE CONTACT ===
Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}

Nom: ${nom}
Email: ${email}
Téléphone: ${telephone || 'Non fourni'}
Sujet: ${sujet}

Message:
${message}
==================================
`;

    console.log(contactMessage);

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
