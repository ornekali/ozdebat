import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { nom, email, telephone, ville, service, surface, budget, dateDebut, description } = data;

    // Validation
    if (!nom || !email || !telephone || !ville || !service || !description) {
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

    // Format the message for logging/storage
    const devisMessage = `
=== NOUVELLE DEMANDE DE DEVIS ===
Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}

--- COORDONNÉES ---
Nom: ${nom}
Email: ${email}
Téléphone: ${telephone}
Ville: ${ville}

--- PROJET ---
Service: ${service}
Surface: ${surface || 'Non précisée'}
Budget: ${budget || 'Non précisé'}
Date de début souhaitée: ${dateDebut || 'Non précisée'}

--- DESCRIPTION ---
${description}
================================
`;

    // Log the request (in production, send email or save to database)
    console.log(devisMessage);

    // If SMTP is configured, send email
    // For now, we store in a simple way and return success
    // In production: integrate with SendGrid, Resend, or Nodemailer

    return NextResponse.json({
      success: true,
      message: 'Votre demande de devis a été envoyée avec succès. Nous vous contacterons sous 24 heures.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
